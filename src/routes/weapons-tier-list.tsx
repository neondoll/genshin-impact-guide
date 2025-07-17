import * as React from "react";
import { Link, useLoaderData } from "react-router-dom";

import Container from "@/components/container";
import Paths from "@/constants/paths";
import VideoSources from "@/organisms/video-sources";
import { backgroundClassByQuality } from "@/lib/quality";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { getTierListsWeapons, getWeapon, sortWeapons } from "@/database";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

function TierBadge(props: Pick<React.ComponentProps<typeof Badge>, "children">) {
  return (
    <Badge
      className={cn(
        "min-w-12 h-12 text-pretty whitespace-normal",
        typeof props.children === "string" && props.children.length === 1 ? "text-4xl/none" : "text-sm",
      )}
      {...props}
    />
  );
}

export type WeaponsTierListLoaderData = {
  tierListsWeapons: Awaited<ReturnType<typeof getTierListsWeapons>>;
};

export default function WeaponsTierList() {
  const { tierListsWeapons } = useLoaderData<WeaponsTierListLoaderData>();

  const tierListsWeaponsEntries = Object.entries(tierListsWeapons) as [keyof typeof tierListsWeapons, typeof tierListsWeapons[keyof typeof tierListsWeapons]][];

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
              <Link children={Paths.Weapons.title} to={Paths.Weapons.to} />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage children={Paths.WeaponsTierList.title} />
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 children={Paths.WeaponsTierList.title} className="text-2xl" />
      <Tabs defaultValue={tierListsWeaponsEntries[0][0]}>
        <TabsList className="flex flex-wrap w-full h-auto min-h-9">
          {tierListsWeaponsEntries.map(([tierListWeaponsTitle]) => (
            <TabsTrigger children={tierListWeaponsTitle} key={tierListWeaponsTitle} value={tierListWeaponsTitle} />
          ))}
        </TabsList>
        {tierListsWeaponsEntries.map(([tierListWeaponsTitle, tierListWeapons]) => (
          <TabsContent className="flex flex-col gap-2" key={tierListWeaponsTitle} value={tierListWeaponsTitle}>
            {tierListWeapons.list !== undefined && (
              <Card className="py-0">
                <Table>
                  <TableBody>
                    {tierListWeapons.list.map((item) => {
                      const weapons = item.weapon_uids.map(getWeapon).sort(sortWeapons);

                      return (
                        <TableRow
                          className={cn(
                            "hover:bg-inherit first:*:pt-6 first:*:first:rounded-tl-xl first:*:last:rounded-tr-xl",
                            "last:*:pb-6 last:*:first:rounded-bl-xl last:*:last:rounded-br-xl *:first:pl-6 *:last:pr-6",
                          )}
                          key={item.tier}
                        >
                          <TableHead className="p-2 text-center">
                            {item.description !== undefined
                              ? (
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <TierBadge children={item.tier} />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p children={item.description} />
                                    </TooltipContent>
                                  </Tooltip>
                                )
                              : (
                                  <TierBadge children={item.tier} />
                                )}
                          </TableHead>
                          <TableCell className="p-2">
                            <ul className="flex flex-wrap gap-2">
                              {weapons.map(weapon => (
                                <li
                                  className={cn(
                                    "shrink-0 size-12 rounded-md", backgroundClassByQuality(weapon.quality),
                                  )}
                                  key={weapon.uid}
                                >
                                  <img alt={weapon.name} className="size-12" src={weapon.image_src} />
                                </li>
                              ))}
                            </ul>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </Card>
            )}
            {tierListWeapons.video_source !== undefined && (
              <Card>
                <CardHeader>
                  <CardTitle children="Видео-источник" />
                </CardHeader>
                <CardContent>
                  <VideoSources items={[tierListWeapons.video_source]} />
                </CardContent>
              </Card>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </Container>
  );
}
