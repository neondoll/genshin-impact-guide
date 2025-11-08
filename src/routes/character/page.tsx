import { Link, useLoaderData } from "react-router-dom";

import type { CharacterLoaderReturn } from "./loader";
import { backgroundClassByRarity } from "@/lib/rarity";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Container } from "@/components/container";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import CharacterRecommendations from "@/organisms/character-recommendations";
import CharacterRoleBadge from "@/organisms/badges/character-role-badge";
import Paths from "@/constants/paths";
import RarityStarsImg from "@/organisms/imgs/rarity-stars-img";
import WeaponBadge from "@/organisms/badges/weapon-badge";
import { selectCharacterRoleById } from "@/features/character-roles/selectors.ts";

export default function CharacterPage() {
  const {
    character,
    characterElement,
    characterRecommendations,
    characterSignatureWeapon,
    characterWeaponType,
  } = useLoaderData<CharacterLoaderReturn>();

  return character && (
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
            {characterElement && <img alt="element" className="shrink-0 size-7" src={characterElement.iconSrc} />}
          </div>
          {character.rarity && <RarityStarsImg rarity={character.rarity} />}
          <div className="flex flex-wrap gap-x-1 gap-y-2 mt-5">
            {character.rarity && <Badge children={`${character.rarity}★`} className="text-xs/5" variant="secondary" />}
            {characterWeaponType && (
              <Badge children={characterWeaponType.abbr} className="text-xs/5" variant="secondary" />
            )}
            {characterElement && <Badge children={characterElement.name} className="text-xs/5" variant="secondary" />}
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
            {characterElement && (
              <TableRow className="hover:bg-inherit">
                <TableHead children="Элемент:" className="p-2 text-right" />
                <TableCell children={characterElement.name} className="p-2" />
              </TableRow>
            )}
            {characterWeaponType && (
              <TableRow className="hover:bg-inherit">
                <TableHead children="Оружие:" className="p-2 text-right" />
                <TableCell children={characterWeaponType.abbr} className="p-2" />
              </TableRow>
            )}
            {characterSignatureWeapon && (
              <TableRow className="hover:bg-inherit">
                <TableHead children="Сигнатурное оружие:" className="p-2 text-right" />
                <TableCell className="p-2">
                  <WeaponBadge
                    weaponId={characterSignatureWeapon.id}
                    weaponImgSrc={characterSignatureWeapon.image_src}
                    weaponRarity={characterSignatureWeapon.rarity}
                    weaponTitle={characterSignatureWeapon.title}
                  />
                </TableCell>
              </TableRow>
            )}
            {character.role_ids && (
              <TableRow className="hover:bg-inherit">
                <TableHead children="Роли:" className="p-2 text-right" />
                <TableCell className="p-2">
                  <div className="flex flex-wrap gap-2">
                    {character.role_ids.map((characterRoleId) => {
                      const characterRole = selectCharacterRoleById(characterRoleId);

                      return characterRole && (
                        <CharacterRoleBadge
                          characterRoleDescription={characterRole.description}
                          characterRoleId={characterRoleId}
                          characterRoleImgSrc={characterRole.imageSrc}
                          characterRoleName={characterRole.name}
                          key={characterRoleId}
                        />
                      );
                    })}
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Card>
      {characterRecommendations && <CharacterRecommendations recommendations={characterRecommendations} />}
    </Container>
  );
}
