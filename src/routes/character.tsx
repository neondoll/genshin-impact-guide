import { Link, useLoaderData } from "react-router-dom";

import type { CharacterId } from "@/features/characters/types";
import { backgroundClassByRarity } from "@/lib/rarity";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Container } from "@/components/container";
import { selectCharacterById } from "@/features/characters/selectors";
import {
  selectCharacterRecommendationsById,
} from "@/features/characters-recommendations/selectors.ts";
import { selectCharacterRolesByIds } from "@/features/character-roles/selectors";
import { selectElementById } from "@/features/elements/selectors.ts";
import { selectWeaponTypeById } from "@/features/weapon-types/weaponTypesSelectors";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import CharacterRecommendations from "@/organisms/character-recommendations";
import Paths from "@/constants/paths";
import RarityStars from "@/features/rarities/rarity-stars.tsx";

/* eslint-disable-next-line react-refresh/only-export-components */
export function loader({ params }: { params: Record<string, string | undefined> }) {
  const character = selectCharacterById(params.characterKey as CharacterId);
  const characterElement = selectElementById(character.element_id);
  const characterRecommendations = selectCharacterRecommendationsById(character.id);
  const characterRoles = character.role_ids ? selectCharacterRolesByIds(character.role_ids) : undefined;
  const characterWeaponType = selectWeaponTypeById(character.weapon_type_id);

  return { character, characterElement, characterRecommendations, characterRoles, characterWeaponType };
}

export default function Character() {
  const {
    character,
    characterElement,
    characterRecommendations,
    characterRoles,
    characterWeaponType,
  } = useLoaderData<ReturnType<typeof loader>>();

  return (
    <Container className="flex flex-col gap-2 md:gap-4">
      <Breadcrumb>
        <BreadcrumbList className="gap-1 text-xs sm:gap-2">
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link children={Paths.Root.title} to={Paths.Root.to} />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link children={Paths.Characters.title} to={Paths.Characters.to} />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage children={Paths.Character.title(character)} />
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex gap-x-3">
        <img
          alt={character.name}
          className={cn("shrink-0 size-16 rounded-md rounded-br-2xl", backgroundClassByRarity(character.rarity))}
          src={character.image_src}
        />
        <div className="space-y-1">
          <div className="flex gap-x-1 items-center">
            <h1 children={Paths.Character.title(character)} className="text-3xl" />
            <img alt={characterElement.name} className="size-6" src={characterElement.image_src} />
          </div>
          <RarityStars length={character.rarity} />
        </div>
      </div>
      <Card>
        <Table>
          <TableBody>
            <TableRow className="hover:bg-inherit">
              <TableHead children="Имя:" className="p-2 text-right" />
              <TableCell children={character.name} className="p-2" />
            </TableRow>
            <TableRow className="hover:bg-inherit">
              <TableHead children="Оружие:" className="p-2 text-right" />
              <TableCell className="p-2">
                <div className="flex gap-1 items-center">
                  <img alt={characterWeaponType.name} className="shrink-0 size-5" src={characterWeaponType.icon_src} />
                  <span children={characterWeaponType.abbr} />
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-inherit">
              <TableHead children="Элемент:" className="p-2 text-right" />
              <TableCell className="p-2">
                <div className="flex gap-1 items-center">
                  <img alt={characterElement.name} className="shrink-0 size-5" src={characterElement.image_src} />
                  <span children={characterElement.name} />
                </div>
              </TableCell>
            </TableRow>
            {characterRoles !== undefined && (
              <TableRow className="hover:bg-inherit">
                <TableHead children="Роли:" className="p-2 text-right" />
                <TableCell className="p-2">
                  <div className="flex flex-wrap gap-2">
                    {characterRoles.map(characterRole => (
                      <Tooltip key={characterRole.id}>
                        <TooltipTrigger asChild>
                          <Badge className="rounded-full">
                            <img alt={characterRole.name} className="shrink-0 size-5" src={characterRole.icon_src} />
                            <span children={characterRole.name} />
                          </Badge>
                        </TooltipTrigger>
                        <TooltipContent
                          className={cn(
                            "max-w-[calc(var(--container-width)-(var(--container-padding-x)*2))] text-pretty",
                            "[--container-width:var(--radix-popper-available-width)]",
                            "[--container-padding-x:calc(var(--spacing)*4)]",
                            "sm:[--container-width:var(--breakpoint-sm)] md:[--container-width:var(--breakpoint-md)]",
                            "lg:[--container-width:var(--breakpoint-lg)]",
                            "lg:[--container-padding-x:calc(var(--spacing)*6)]",
                            "xl:[--container-width:var(--breakpoint-xl)] 2xl:[--container-width:var(--breakpoint-2xl)]",
                          )}
                        >
                          <p dangerouslySetInnerHTML={{ __html: characterRole.description }} />
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Card>
      {characterRecommendations !== undefined && (
        <CharacterRecommendations character={character} recommendations={characterRecommendations} />
      )}
    </Container>
  );
}
