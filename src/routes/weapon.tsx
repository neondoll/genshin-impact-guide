import { Link, useLoaderData } from "react-router-dom";

import type { WeaponId } from "@/features/weapons/types";
import { backgroundClassByRarity } from "@/lib/rarity";
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Container } from "@/components/container";
import { selectWeaponById } from "@/features/weapons/selectors";
import { selectWeaponTypeById } from "@/features/weapon-types/selectors";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import Paths from "@/constants/paths";
import RarityStars from "@/features/rarities/rarity-stars";
import StatBadge from "@/features/stats/stat-badge";

/* eslint-disable-next-line react-refresh/only-export-components */
export function loader({ params }: { params: Record<string, string | undefined> }) {
  const weapon = selectWeaponById(params.weaponId as WeaponId);
  const weaponType = selectWeaponTypeById(weapon.type_id);

  return { weapon, weaponType };
}

export default function Weapon() {
  const { weapon, weaponType } = useLoaderData<ReturnType<typeof loader>>();

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
            <BreadcrumbPage children={Paths.Weapon.title(weapon)} />
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex gap-x-3">
        <img
          alt=""
          className={cn("shrink-0 size-16 rounded-md rounded-br-2xl", backgroundClassByRarity(weapon.rarity))}
          src={weapon.image_src}
        />
        <div className="space-y-1">
          <h1 children={Paths.Weapon.title(weapon)} className="text-3xl" />
          <RarityStars length={weapon.rarity} />
        </div>
      </div>
      <Card>
        <Table>
          <TableBody>
            <TableRow className="hover:bg-inherit">
              <TableHead children="Имя:" className="p-2 text-right whitespace-normal" />
              <TableCell children={weapon.title} className="p-2 whitespace-normal" />
            </TableRow>
            <TableRow className="hover:bg-inherit">
              <TableHead children="Где найти:" className="p-2 text-right whitespace-normal" />
              <TableCell className="p-2 whitespace-normal">
                {Array.isArray(weapon.source)
                  ? (
                      <ul className="ml-4 list-outside list-disc">
                        {weapon.source.map((source, index) => (
                          <li children={source} key={index} />
                        ))}
                      </ul>
                    )
                  : weapon.source}
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-inherit">
              <TableHead children="Тип:" className="p-2 text-right whitespace-normal" />
              <TableCell children={weaponType.abbr} className="p-2 whitespace-normal" />
            </TableRow>
            <TableRow className="hover:bg-inherit">
              <TableHead children="Базовая атака:" className="p-2 text-right whitespace-normal" />
              <TableCell
                children={`${weapon.base_atk.min_value} - ${weapon.base_atk.max_value}`}
                className="p-2 whitespace-normal"
              />
            </TableRow>
            <TableRow className="hover:bg-inherit">
              <TableHead
                children="Дополнительные характеристики:"
                className="p-2 text-right whitespace-normal"
                rowSpan={2}
              />
              <TableCell
                children={<StatBadge statId={weapon.secondary_stats_id} />}
                className="p-2 whitespace-normal"
              />
            </TableRow>
            <TableRow className="hover:bg-inherit">
              <TableCell
                children={`${weapon.secondary_stats.min_value} - ${weapon.secondary_stats.max_value}`}
                className="p-2 whitespace-normal"
              />
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </Container>
  );
}
