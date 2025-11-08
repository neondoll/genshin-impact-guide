import { Link, useLoaderData } from "react-router-dom";
import { useMemo } from "react";

import type { ArtifactSetLoaderReturn } from "./loader";
import { backgroundClassByRarity } from "@/lib/rarity";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Container } from "@/components/container";
import { selectArtifactSlotById } from "@/features/artifact-slots/selectors";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import ArtifactSetRecommendations from "@/organisms/artifact-set-recommendations";
import Paths from "@/constants/paths";

export default function ArtifactSetPage() {
  const { artifactSet, artifactSetRecommendations } = useLoaderData<ArtifactSetLoaderReturn>();

  const backgroundClass = useMemo(() => {
    if (!artifactSet) {
      return undefined;
    }

    return backgroundClassByRarity(...artifactSet.rarities);
  }, [artifactSet]);

  return artifactSet && (
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
          className={cn("shrink-0 size-16 rounded-md rounded-br-2xl", backgroundClass)}
          src={artifactSet.imageSrc}
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
              {Object.entries(artifactSet.itemBonuses).map(([itemCount, itemBonus]) => (
                <TableRow className="hover:bg-inherit" key={itemCount}>
                  <TableHead children={`${itemCount} предмет(а)`} className="p-2" />
                  <TableCell
                    className="p-2 text-pretty whitespace-normal"
                    dangerouslySetInnerHTML={{ __html: itemBonus }}
                  />
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
                    <TableRow className="hover:bg-inherit" key={artifactSetSlot.id}>
                      <TableCell className="p-2 w-16 text-pretty whitespace-normal">
                        <img
                          alt={artifactSetSlot.name}
                          className={cn("size-12 bg-linear-to-b from-[#323947] to-[#4a5366] rounded-md rounded-br-2xl", backgroundClass)}
                          src={artifactSetSlot.imageSrc}
                        />
                      </TableCell>
                      <TableCell className="p-2 text-pretty whitespace-normal">
                        <p children={artifactSetSlot.name} className="text-sm" />
                        <p children={artifactSlot?.name || "NONE"} className="text-xs opacity-50" />
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
      {artifactSetRecommendations && <ArtifactSetRecommendations recommendations={artifactSetRecommendations} />}
    </Container>
  );
}
