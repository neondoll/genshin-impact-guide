import { Link, useLoaderData } from "react-router-dom";

import CharacterRecommendations from "@/organisms/character-recommendations";
import Container from "@/components/container";
import Paths from "@/constants/paths";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card } from "@/components/ui/card";
import { cn, publicImageSrc } from "@/lib/utils";
import { getCharacter, getCharacterRecommendations, getCharacterRole, getElement, getWeaponType } from "@/database";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export type CharacterLoaderData = {
  character: Awaited<ReturnType<typeof getCharacter>>;
  characterElement: Awaited<ReturnType<typeof getElement>>;
  characterRecommendations: Awaited<ReturnType<typeof getCharacterRecommendations>>;
  characterRoles: Awaited<ReturnType<typeof getCharacterRole>>[];
  characterWeaponType: Awaited<ReturnType<typeof getWeaponType>>;
};

export default function Character() {
  const {
    character, characterElement, characterRecommendations, characterRoles, characterWeaponType,
  } = useLoaderData<CharacterLoaderData>();

  return (
    <Container className="flex flex-col gap-2 md:gap-4">
      <Breadcrumb>
        <BreadcrumbList className="gap-1 text-xs sm:gap-2">
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to={Paths.Root}>Главная</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to={Paths.Characters}>Персонажи</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{character.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex gap-x-3">
        <img
          alt={character.name}
          className={cn(
            "shrink-0 size-16 rounded-md rounded-br-2xl",
            character.quality === 4 && "bg-[linear-gradient(180deg,#5e5789,#9c75b7)]",
            character.quality === 5 && "bg-[linear-gradient(180deg,#945c2c,#b27330)]",
          )}
          src={character.image_src}
        />
        <div className="space-y-1">
          <div className="flex gap-x-1 items-center">
            <h1 className="text-3xl">{character.name}</h1>
            <img alt={characterElement.name} className="size-6" src={characterElement.image_src} />
          </div>
          <div className="flex gap-x-1">
            {Array.from({ length: character.quality }, (_, i) => i).map(index => (
              <img
                alt="star"
                className="size-3.5"
                key={index + 1}
                src={publicImageSrc("star-icon-28x28.png")}
              />
            ))}
          </div>
        </div>
      </div>
      <Card>
        <Table>
          <TableBody>
            <TableRow className="hover:bg-inherit">
              <TableHead className="p-2 text-right">Имя</TableHead>
              <TableCell className="p-2">{character.name}</TableCell>
            </TableRow>
            <TableRow className="hover:bg-inherit">
              <TableHead className="p-2 text-right">Оружие</TableHead>
              <TableCell className="p-2">
                <div className="flex gap-1 items-center">
                  <img
                    alt={`${characterWeaponType.name} Icon`}
                    className="shrink-0 size-5"
                    src={characterWeaponType.icon_src}
                  />
                  <span>{characterWeaponType.name}</span>
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-inherit">
              <TableHead className="p-2 text-right">Элемент</TableHead>
              <TableCell className="p-2">
                <div className="flex gap-1 items-center">
                  <img
                    alt={characterElement.name}
                    className="shrink-0 size-5"
                    src={characterElement.image_src}
                  />
                  <span>{characterElement.name}</span>
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-inherit">
              <TableHead className="p-2 text-right">Роли</TableHead>
              <TableCell className="p-2">
                <div className="flex flex-wrap gap-2">
                  {characterRoles.map((characterRole, index) => (
                    <Tooltip key={character.roles_uid[index]}>
                      <TooltipTrigger asChild>
                        <Badge className="rounded-full">
                          <img
                            alt={characterRole.name}
                            className="shrink-0 size-5"
                            src={characterRole.icon_src}
                          />
                          <span>{characterRole.name}</span>
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
          </TableBody>
        </Table>
      </Card>
      {characterRecommendations !== undefined && (
        <CharacterRecommendations character={character} recommendations={characterRecommendations} />
      )}
    </Container>
  );
}
