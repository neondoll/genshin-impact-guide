import { Link, useLoaderData } from "react-router-dom";

import type { ArtifactSetId } from "@/features/artifact-sets/types";
import { backgroundClassByRarity } from "@/lib/rarity";
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Container } from "@/components/container";
import { selectArtifactSetById } from "@/features/artifact-sets/selectors";
import { selectArtifactSetRecommendationsById } from "@/features/artifact-sets-recommendations/selectors";
import { selectArtifactSlotById } from "@/features/artifact-slots/selectors";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import ArtifactSetRecommendations from "@/organisms/artifact-set-recommendations";
import Paths from "@/constants/paths";

/* eslint-disable-next-line react-refresh/only-export-components */
export function loader({ params }: { params: Record<string, string | undefined> }) {
  const artifactSet = selectArtifactSetById(params.artifactSetId as ArtifactSetId);
  const artifactSetRecommendations = selectArtifactSetRecommendationsById(artifactSet.id);

  return { artifactSet, artifactSetRecommendations };
}

export default function ArtifactSet() {
  const { artifactSet, artifactSetRecommendations } = useLoaderData<ReturnType<typeof loader>>();

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
                <TableCell children={artifactSet.name} className="p-2 text-pretty whitespace-normal" />
              </TableRow>
              <TableRow className="hover:bg-inherit">
                <TableHead className="p-2">Где найти</TableHead>
                <TableCell className="p-2 text-pretty whitespace-normal">
                  <ul className="ml-4 list-outside list-disc">
                    {artifactSet.sources.map((source, index) => (
                      <li children={source} key={index} />
                    ))}
                  </ul>
                </TableCell>
              </TableRow>
              {Object.entries(artifactSet.item_bonuses).map(([itemCount, itemBonus]) => (
                <TableRow className="hover:bg-inherit" key={itemCount}>
                  <TableHead children={`${itemCount} предмет(а)`} className="p-2" />
                  <TableCell children={itemBonus} className="p-2 text-pretty whitespace-normal" />
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
              {Object.values(artifactSet.slots).map((artifactSetSlot) => {
                if (artifactSetSlot !== undefined) {
                  const artifactSlot = selectArtifactSlotById(artifactSetSlot.id);

                  return (
                    <TableRow className="hover:bg-inherit" key={artifactSlot.id}>
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
    </Container>
  );
}
