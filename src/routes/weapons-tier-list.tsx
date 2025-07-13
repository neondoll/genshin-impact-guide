import { Link, useLoaderData } from "react-router-dom";

import Container from "@/components/container";
import Paths from "@/constants/paths";
import VK from "@/icons/VK";
import Youtube from "@/icons/Youtube";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { getTierListsWeapons, getWeapon, getWeaponType, sortWeapons } from "@/database";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

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
        <TabsList className="flex w-full">
          {tierListsWeaponsEntries.map(([weaponTypeUid]) => (
            <TabsTrigger children={getWeaponType(weaponTypeUid).name} key={weaponTypeUid} value={weaponTypeUid} />
          ))}
        </TabsList>
        {tierListsWeaponsEntries.map(([weaponTypeUid, tierListWeapons]) => (
          <TabsContent className="flex flex-col gap-2" key={weaponTypeUid} value={weaponTypeUid}>
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
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Badge children={item.tier} className="aspect-square size-12 text-4xl/none" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p children={item.description} />
                              </TooltipContent>
                            </Tooltip>
                          </TableHead>
                          <TableCell className="p-2">
                            <ul className="flex flex-wrap gap-2">
                              {weapons.map(weapon => (
                                <li
                                  className={cn(
                                    "shrink-0 size-12 rounded-md",
                                    weapon.quality === 3 && "bg-[linear-gradient(180deg,#567496,#5392b8)]",
                                    weapon.quality === 4 && "bg-[linear-gradient(180deg,#5e5789,#9c75b7)]",
                                    weapon.quality === 5 && "bg-[linear-gradient(180deg,#945c2c,#b27330)]",
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
                  <ul className="list-inside list-disc">
                    <li>
                      <div className="inline-flex gap-2 items-center">
                        <span children={tierListWeapons.video_source.title} />
                        {tierListWeapons.video_source.vk_url !== undefined && (
                          <Button asChild className="size-8" size="icon">
                            <a href={tierListWeapons.video_source.vk_url} target="_blank">
                              <VK className="size-7" />
                            </a>
                          </Button>
                        )}
                        {tierListWeapons.video_source.youtube_url !== undefined && (
                          <Button asChild className="size-8" size="icon">
                            <a href={tierListWeapons.video_source.youtube_url} target="_blank">
                              <Youtube className="size-7" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </Container>
  );
}
