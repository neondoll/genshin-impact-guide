import { Link, useLoaderData } from "react-router-dom";

import type { CharacterId } from "../features/characters/types";
import { backgroundClassByRarity } from "../lib/rarity";
import { Badge } from "../components/ui/badge";
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
} from "../components/ui/breadcrumb";
import { Card } from "../components/ui/card";
import { cn } from "../lib/utils";
import { Container } from "../components/container";
import { selectCharacterById } from "../features/characters/selectors";
import { selectCharacterRecommendationsById } from "../features/characters-recommendations/selectors";
import { selectElementById } from "../features/elements/selectors";
import { selectWeaponTypeById } from "../features/weapon-types/selectors";
import { Table, TableBody, TableCell, TableHead, TableRow } from "../components/ui/table";
import CharacterRecommendations from "../organisms/character-recommendations";
import CharacterRoleBadge from "../organisms/badges/character-role-badge";
import Paths from "../constants/paths";
import RarityStarsImg from "../organisms/imgs/rarity-stars-img";

/* eslint-disable-next-line react-refresh/only-export-components */
export function loader({ params }: { params: Record<string, string | undefined> }) {
  const character = selectCharacterById(params.characterId as CharacterId);
  const characterElement = selectElementById(character.element_id);
  const characterRecommendations = selectCharacterRecommendationsById(character.id);
  const characterWeaponType = character.weapon_type_id ? selectWeaponTypeById(character.weapon_type_id) : undefined;

  return { character, characterElement, characterRecommendations, characterWeaponType };
}

export default function Character() {
  const {
    character,
    characterElement,
    characterRecommendations,
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
      <div className="flex gap-x-6">
        <img
          alt={character.id}
          className={cn(
            "shrink-0 size-27 rounded-2xl rounded-br-4xl",
            character.rarity ? backgroundClassByRarity(character.rarity) : "bg-linear-to-b from-[#323947] to-[#4a5366]",
          )}
          src={character.image_src}
        />
        <div>
          <div className="flex gap-x-1 items-center mb-1 text-[2rem]/10.5">
            <h1 children={Paths.Character.title(character)} />
            <img alt="element" className="shrink-0 size-7" src={characterElement.icon_src} />
          </div>
          {character.rarity !== undefined && <RarityStarsImg rarity={character.rarity} />}
          <div className="flex flex-wrap gap-x-1 gap-y-2 mt-5">
            {character.rarity !== undefined && (
              <Badge children={`${character.rarity}★`} className="text-xs/5" variant="secondary" />
            )}
            {characterWeaponType !== undefined && (
              <Badge children={characterWeaponType.abbr} className="text-xs/5" variant="secondary" />
            )}
            <Badge children={characterElement.name} className="text-xs/5" variant="secondary" />
          </div>
        </div>
      </div>
      <Card>
        <Table>
          <TableBody>
            <TableRow className="hover:bg-inherit">
              <TableHead children="Имя:" className="p-2 text-right" />
              <TableCell children={character.name} className="p-2" />
            </TableRow>
            {characterWeaponType !== undefined && (
              <TableRow className="hover:bg-inherit">
                <TableHead children="Оружие:" className="p-2 text-right" />
                <TableCell children={characterWeaponType.abbr} className="p-2" />
              </TableRow>
            )}
            <TableRow className="hover:bg-inherit">
              <TableHead children="Элемент:" className="p-2 text-right" />
              <TableCell children={characterElement.name} className="p-2" />
            </TableRow>
            {character.role_ids !== undefined && (
              <TableRow className="hover:bg-inherit">
                <TableHead children="Роли:" className="p-2 text-right" />
                <TableCell className="p-2">
                  <div className="flex flex-wrap gap-2">
                    {character.role_ids.map(characterRoleId => (
                      <CharacterRoleBadge characterRoleId={characterRoleId} key={characterRoleId} />
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
