import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

import type { TRarity } from "@/database/rarities/types";
import type { TWeaponTypeKey } from "@/database/weapon-types/types";
import { backgroundClassByRarity } from "@/lib/rarity";
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Container } from "@/components/container";
import { Filter, FilterCheckbox, FilterGroup } from "@/organisms/filter";
import { selectRaritiesByIds } from "@/features/rarities/raritiesSelectors";
import { selectWeaponTypesAll } from "@/features/weapon-types/weaponTypesSelectors";
import { selectWeaponsAll } from "@/features/weapons/weaponsSelectors";
import Paths from "@/constants/paths";
import Rarity from "@/features/rarities/rarity";

/* eslint-disable-next-line react-refresh/only-export-components */
export function loader() {
  const weapons = selectWeaponsAll();
  const rarities = selectRaritiesByIds(weapons.map(weapon => weapon.rarity));
  const weaponTypes = selectWeaponTypesAll();

  return { rarities, weapons, weaponTypes };
}

export default function Weapons() {
  const { rarities, weapons, weaponTypes } = useLoaderData<ReturnType<typeof loader>>();
  const [filterRarities, setFilterRarities] = useState<TRarity[]>([]);
  const [filterWeaponTypeKeys, setFilterWeaponTypeKeys] = useState<TWeaponTypeKey[]>([]);
  const [filteredWeapons, setFilteredWeapons] = useState<typeof weapons>([]);

  useEffect(() => {
    let filteredWeapons = weapons;

    if (filterRarities.length) {
      filteredWeapons = filteredWeapons.filter(weapon => filterRarities.includes(weapon.rarity));
    }

    if (filterWeaponTypeKeys.length) {
      filteredWeapons = filteredWeapons.filter(weapon => filterWeaponTypeKeys.includes(weapon.type_key));
    }

    setFilteredWeapons(filteredWeapons);
  }, [filterRarities, filterWeaponTypeKeys, weapons]);

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
            <BreadcrumbPage children={Paths.Weapons.title} />
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex justify-between items-center">
        <h1 children={Paths.Weapons.title} className="text-2xl" />
        <Button asChild>
          <Link children={Paths.WeaponsTierList.title} to={Paths.WeaponsTierList.to} />
        </Button>
      </div>
      <Filter>
        <FilterGroup label="Тип">
          <div className="flex flex-wrap gap-3">
            {weaponTypes.map(weaponType => (
              <FilterCheckbox
                asChild
                checked={filterWeaponTypeKeys.includes(weaponType.key)}
                className="p-1 size-8.5 rounded-full"
                key={weaponType.key}
                name="weapon-types"
                onChange={(event) => {
                  if (event.target.checked) {
                    if (!filterWeaponTypeKeys.includes(weaponType.key)) {
                      setFilterWeaponTypeKeys(prev => prev.concat([weaponType.key]));
                    }
                  }
                  else {
                    const index = filterWeaponTypeKeys.indexOf(weaponType.key);

                    if (index !== -1) {
                      setFilterWeaponTypeKeys(prev => prev.slice(0, index).concat(prev.slice(index + 1)));
                    }
                  }
                }}
                value={weaponType.key}
              >
                <img alt={weaponType.name} src={weaponType.image_src} />
              </FilterCheckbox>
            ))}
          </div>
        </FilterGroup>
        <FilterGroup label="Качество">
          <div className="flex flex-wrap gap-3">
            {rarities.map(rarity => (
              <FilterCheckbox
                asChild
                checked={filterRarities.includes(rarity)}
                className="gap-x-0.5 align-center"
                key={rarity}
                name="rarities"
                onChange={(event) => {
                  if (event.target.checked) {
                    if (!filterRarities.includes(rarity)) {
                      setFilterRarities(prev => prev.concat([rarity]));
                    }
                  }
                  else {
                    const index = filterRarities.indexOf(rarity);

                    if (index !== -1) {
                      setFilterRarities(prev => prev.slice(0, index).concat(prev.slice(index + 1)));
                    }
                  }
                }}
                value={rarity}
              >
                <Rarity length={rarity} />
              </FilterCheckbox>
            ))}
          </div>
        </FilterGroup>
      </Filter>
      <ul className="flex flex-wrap gap-2 justify-center items-stretch md:gap-4">
        {filteredWeapons.map(weapon => (
          <li
            className={cn(
              "flex relative flex-col gap-4 px-5.5 py-4 w-36 min-h-45 text-card-foreground bg-card rounded-xl",
              "border shadow-sm transition-all has-hover:scale-104 has-focus-visible:ring-3",
              "has-focus-visible:ring-ring/50",
            )}
            key={weapon.key}
          >
            <span className="shrink-0 size-24.5">
              <img
                alt={weapon.name}
                className={cn(
                  "object-cover size-full rounded-lg rounded-br-3xl",
                  backgroundClassByRarity(weapon.rarity),
                )}
                draggable={false}
                src={weapon.image_src}
              />
            </span>
            <Link
              children={Paths.Weapon.title(weapon)}
              className={cn(
                "inline-flex flex-1 justify-center items-center text-sm text-center outline-none before:absolute",
                "before:inset-0",
              )}
              to={Paths.Weapon.to(weapon.key)}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
}
