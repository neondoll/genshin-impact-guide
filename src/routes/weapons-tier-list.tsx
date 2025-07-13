import { Link, useLoaderData } from "react-router-dom";

import Container from "@/components/container";
import Paths from "@/constants/paths";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { getTierListWeaponTypes, getWeapon, getWeaponType } from "@/database";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export type WeaponsTierListLoaderData = {
  tierListWeaponTypes: Awaited<ReturnType<typeof getTierListWeaponTypes>>;
};

export default function WeaponsTierList() {
  const { tierListWeaponTypes } = useLoaderData<WeaponsTierListLoaderData>();

  const tierListWeaponTypesEntries = Object.entries(tierListWeaponTypes) as [keyof typeof tierListWeaponTypes, typeof tierListWeaponTypes[keyof typeof tierListWeaponTypes]][];

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
      <Tabs defaultValue={tierListWeaponTypesEntries[0][0]}>
        <TabsList className="flex w-full">
          {tierListWeaponTypesEntries.map(([weaponTypeUid]) => (
            <TabsTrigger children={getWeaponType(weaponTypeUid).name} key={weaponTypeUid} value={weaponTypeUid} />
          ))}
        </TabsList>
        {tierListWeaponTypesEntries.map(([weaponTypeUid, tierListWeaponType]) => (
          <TabsContent key={weaponTypeUid} value={weaponTypeUid}>
            <Card>
              <Table>
                <TableBody>
                  {tierListWeaponType.list.map(item => (
                    <TableRow key={item.tier}>
                      <TableHead>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Badge children={item.tier} className="aspect-square" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p children={item.description} />
                          </TooltipContent>
                        </Tooltip>
                      </TableHead>
                      <TableCell>
                        <ul className="flex flex-wrap gap-2">
                          {item.weaponUids.map((weaponUid) => {
                            const weapon = getWeapon(weaponUid);

                            return (
                              <li
                                className={cn(
                                  "shrink-0 size-12 rounded-md",
                                  weapon.quality === 3 && "bg-[linear-gradient(180deg,#567496,#5392b8)]",
                                  weapon.quality === 4 && "bg-[linear-gradient(180deg,#5e5789,#9c75b7)]",
                                  weapon.quality === 5 && "bg-[linear-gradient(180deg,#945c2c,#b27330)]",
                                )}
                                key={weaponUid}
                              >
                                <img alt={weapon.name} className="size-12" src={weapon.image_src} />
                              </li>
                            );
                          })}
                          <li></li>
                        </ul>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </Container>
  );
}
