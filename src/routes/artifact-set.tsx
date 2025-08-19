import { Link, useLoaderData } from "react-router-dom";

import type { IArtifactSet } from "@/database/artifact-sets/types";
import { backgroundClassByRarity } from "@/lib/rarity";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { getArtifactSet } from "@/database/artifact-sets";
import { getCharacter } from "@/database/characters";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import ArtifactSetRecommendations from "@/organisms/artifact-set-recommendations";
import Container from "@/components/container";
import Paths from "@/constants/paths";

export interface ArtifactSetLoaderData {
  artifactSet: IArtifactSet;
  artifactSetRecommendations: Awaited<ReturnType<IArtifactSet["getRecommendations"]>>;
}

/* eslint-disable-next-line react-refresh/only-export-components */
export async function loader({ params }: { params: Record<string, string | undefined> }) {
  const artifactSet = await getArtifactSet(params.artifactSetKey as IArtifactSet["key"]);
  const artifactSetRecommendations = await artifactSet.getRecommendations();

  return { artifactSet, artifactSetRecommendations };
}

export default function ArtifactSet() {
  const { artifactSet, artifactSetRecommendations } = useLoaderData<Awaited<ReturnType<typeof loader>>>();

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
              <Link children={Paths.ArtifactSets.title} to={Paths.ArtifactSets.to} />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage children={Paths.ArtifactSet.title(artifactSet)} />
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex gap-x-3">
        <img
          alt={artifactSet.name}
          className={cn("shrink-0 size-16 rounded-md rounded-br-2xl", backgroundClassByRarity(...artifactSet.rarities))}
          src={artifactSet.image_src}
        />
        <div className="space-y-1">
          <div className="flex gap-x-1 items-center">
            <h1 children={Paths.ArtifactSet.title(artifactSet)} className="text-3xl" />
          </div>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Характеристики</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableBody>
              <TableRow className="hover:bg-inherit">
                <TableHead className="p-2">Имя</TableHead>
                <TableCell className="p-2 text-pretty whitespace-normal">{artifactSet.name}</TableCell>
              </TableRow>
              <TableRow className="hover:bg-inherit">
                <TableHead className="p-2">Где найти</TableHead>
                <TableCell className="p-2 text-pretty whitespace-normal">
                  {Array.isArray(artifactSet.source)
                    ? (
                        <ul className="ml-4 list-outside list-disc">
                          {artifactSet.source.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      )
                    : artifactSet.source}
                </TableCell>
              </TableRow>
              {Object.entries(artifactSet.item_bonuses).map(([itemCount, itemBonus]) => (
                <TableRow className="hover:bg-inherit" key={itemCount}>
                  <TableHead className="p-2">{`${itemCount} предмет(а)`}</TableHead>
                  <TableCell className="p-2 text-pretty whitespace-normal">{itemBonus}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Комплект</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableBody>
              {Object.values(artifactSet.slots).map(async (artifactSetSlot) => {
                if (artifactSetSlot !== undefined) {
                  const artifactSlot = await artifactSetSlot.getSlot();

                  return (
                    <TableRow className="hover:bg-inherit" key={artifactSlot.key}>
                      <TableHead children={artifactSlot.name} className="p-2 text-pretty whitespace-normal" />
                      <TableCell className="p-2 text-pretty whitespace-normal">
                        <div className="flex gap-2.5 items-center">
                          <img
                            alt={artifactSetSlot.name}
                            className={cn(
                              "shrink-0 size-12 bg-linear-to-b from-[#323947] to-[#4a5366] rounded-md rounded-br-2xl",
                            )}
                            src={artifactSetSlot.image_src}
                          />
                          <span children={artifactSetSlot.name} />
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                }

                return undefined;
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      {artifactSetRecommendations !== undefined && (
        <ArtifactSetRecommendations recommendations={artifactSetRecommendations} />
      )}
      {artifactSet.character_recommendations !== undefined && (
        <Card>
          <CardHeader>
            <CardTitle>Рекомендации по персонажам</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableBody>
                {artifactSet.character_recommendations.map(async (characterRecommendation) => {
                  const character = await getCharacter(characterRecommendation.key);

                  return (
                    <TableRow className="hover:bg-inherit" key={character.key}>
                      <TableCell className="text-pretty whitespace-normal sm:w-[166px]">
                        <Badge
                          asChild
                          className="flex flex-col gap-2.5 justify-start p-2 w-full sm:flex-row sm:text-sm"
                          variant="secondary"
                        >
                          <Link to={Paths.Character.to(character.key)}>
                            <img
                              alt={character.name}
                              className="shrink-0 size-12 bg-[linear-gradient(180deg,#323947,#4a5366)] rounded-md rounded-br-2xl"
                              src={character.image_src}
                            />
                            <span>{character.name}</span>
                          </Link>
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center text-pretty whitespace-normal">
                        {characterRecommendation.notes}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </Container>
  );
}
