import { Link, useLoaderData } from "react-router-dom";

import type { CharacterId } from "@/features/characters/types";
import { backgroundClassByRarity } from "@/lib/rarity";
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Container } from "@/components/container";
import { selectCharacterById } from "@/features/characters/selectors";
import { selectCharacterRecommendationsById } from "@/features/characters-recommendations/selectors";
import { selectCharacterRolesByIds } from "@/features/character-roles/selectors";
import { selectElementById } from "@/features/elements/selectors";
import { selectWeaponTypeById } from "@/features/weapon-types/selectors";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import CharacterRecommendations from "@/organisms/character-recommendations";
import CharacterRoleBadge from "@/features/character-roles/character-role-badge";
import ElementBadge from "@/features/elements/element-badge";
import ElementImg from "@/features/elements/element-img";
import Paths from "@/constants/paths";
import RarityStars from "@/features/rarities/rarity-stars";
import WeaponTypeBadge from "@/features/weapon-types/weapon-type-badge";

/* eslint-disable-next-line react-refresh/only-export-components */
export function loader({ params }: { params: Record<string, string | undefined> }) {
  const character = selectCharacterById(params.characterId as CharacterId);
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
            <ElementImg className="size-6" item={characterElement} />
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
              <TableCell children={<WeaponTypeBadge item={characterWeaponType} />} className="p-2" />
            </TableRow>
            <TableRow className="hover:bg-inherit">
              <TableHead children="Элемент:" className="p-2 text-right" />
              <TableCell children={<ElementBadge item={characterElement} />} className="p-2" />
            </TableRow>
            {characterRoles !== undefined && (
              <TableRow className="hover:bg-inherit">
                <TableHead children="Роли:" className="p-2 text-right" />
                <TableCell className="p-2">
                  <div className="flex flex-wrap gap-2">
                    {characterRoles.map(characterRole => (
                      <CharacterRoleBadge item={characterRole} key={characterRole.id} />
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
