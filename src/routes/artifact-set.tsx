import { Link, useLoaderData } from "react-router-dom";

import Container from "@/components/container";
import Paths from "@/constants/paths";
import { ArtifactPieceUidEnum } from "@/database/enums/artifact-piece.ts";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { getArtifactPieces, getArtifactSet, getCharacter } from "@/database";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";

function ArtifactSetBreadcrumbs({ item }: { item: ArtifactSetLoaderData["artifactSet"] }) {
  return (
    <Breadcrumb>
      <BreadcrumbList className="gap-1 text-xs sm:gap-2">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link children="Главная" to={Paths.Root} />
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link children="Артефакты" to={Paths.ArtifactSets} />
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage children={item.name} />
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

function ArtifactSetHeading({ item }: { item: ArtifactSetLoaderData["artifactSet"] }) {
  return (
    <div className="flex gap-x-3">
      <img
        alt={item.name}
        className={cn(
          "shrink-0 size-16 rounded-md rounded-br-2xl",
          Math.max(...item.qualities) === 3 && "bg-[linear-gradient(180deg,#567496,#5392b8)]",
          Math.max(...item.qualities) === 4 && "bg-[linear-gradient(180deg,#5e5789,#9c75b7)]",
          Math.max(...item.qualities) === 5 && "bg-[linear-gradient(180deg,#945c2c,#b27330)]",
        )}
        src={item[ArtifactPieceUidEnum.FlowerOfLife].image_src}
      />
      <div className="space-y-1">
        <div className="flex gap-x-1 items-center">
          <h1 children={item.name} className="text-3xl" />
        </div>
      </div>
    </div>
  );
}

export type ArtifactSetLoaderData = {
  artifactPieces: ReturnType<typeof getArtifactPieces>;
  artifactSet: ReturnType<typeof getArtifactSet>;
};

export default function ArtifactSet() {
  const { artifactPieces, artifactSet } = useLoaderData<ArtifactSetLoaderData>();

  return (
    <Container className="flex flex-col gap-2 md:gap-4">
      <ArtifactSetBreadcrumbs item={artifactSet} />
      <ArtifactSetHeading item={artifactSet} />
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
                  {Array.isArray(artifactSet.where_to_find)
                    ? (
                        <ul className="ml-4 list-outside list-disc">
                          {artifactSet.where_to_find.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      )
                    : artifactSet.where_to_find}
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
              {artifactPieces.map(artifactPiece => (
                <TableRow className="hover:bg-inherit" key={artifactPiece.uid}>
                  <TableHead className="p-2 text-pretty whitespace-normal">{artifactPiece.name}</TableHead>
                  <TableCell className="p-2 text-pretty whitespace-normal">
                    <div className="flex gap-2.5 items-center">
                      <img
                        alt={artifactSet[artifactPiece.uid].name}
                        className="shrink-0 size-12 bg-[linear-gradient(180deg,#323947,#4a5366)] rounded-md rounded-br-2xl"
                        src={artifactSet[artifactPiece.uid].image_src}
                      />
                      <span>{artifactSet[artifactPiece.uid].name}</span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      {artifactSet.character_recommendations !== undefined && (
        <Card>
          <CardHeader>
            <CardTitle>Рекомендации по персонажам</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableBody>
                {artifactSet.character_recommendations.map((characterRecommendation) => {
                  const character = getCharacter(characterRecommendation.uid);

                  return (
                    <TableRow className="hover:bg-inherit" key={character.uid}>
                      <TableCell className="text-pretty whitespace-normal sm:w-[166px]">
                        <Badge
                          asChild
                          className="flex flex-col gap-2.5 justify-start p-2 w-full sm:flex-row sm:text-sm"
                          variant="secondary"
                        >
                          <Link to={Paths.Character(character.uid)}>
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
