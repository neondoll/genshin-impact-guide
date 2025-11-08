import { Link, useLoaderData } from "react-router-dom";

import type { WeaponLoaderReturn } from "./loader";
import { backgroundClassByRarity } from "@/lib/rarity";
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
import Paths from "@/constants/paths";
import RarityStarsImg from "@/organisms/imgs/rarity-stars-img";
import StatBadge from "@/organisms/badges/stat-badge";

export default function WeaponPage() {
  const { weapon, weaponSecondaryStats, weaponType } = useLoaderData<WeaponLoaderReturn>();

  return weapon && (
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
          <RarityStarsImg rarity={weapon.rarity} />
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
            {weaponType && (
              <TableRow className="hover:bg-inherit">
                <TableHead children="Тип:" className="p-2 text-right whitespace-normal" />
                <TableCell children={weaponType.abbr} className="p-2 whitespace-normal" />
              </TableRow>
            )}
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
                children={weaponSecondaryStats && <StatBadge statName={weaponSecondaryStats.name} />}
                className="p-2 whitespace-normal"
              />
            </TableRow>
            <TableRow className="hover:bg-inherit">
              <TableCell
                children={`${weapon.secondary_stats.min_value} - ${weapon.secondary_stats.max_value}`}
                className="p-2 whitespace-normal"
              />
            </TableRow>
            {weapon.passive_ability && (
              <TableRow className="hover:bg-inherit">
                <TableHead children={`${weapon.passive_ability.name}:`} className="p-2 text-right whitespace-normal" />
                <TableCell
                  className="p-2 whitespace-normal"
                  dangerouslySetInnerHTML={{ __html: weapon.passive_ability.description }}
                />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Card>
    </Container>
  );
}
