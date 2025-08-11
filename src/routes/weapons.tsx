import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

import Container from "@/components/container";
import Paths from "@/constants/paths";
import { backgroundClassByRarity } from "@/lib/rarity";
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { cn, publicImageSrc } from "@/lib/utils";
import { Filter, FilterCheckbox, FilterGroup } from "@/organisms/filter";
import { getWeapons, getWeaponTypes } from "@/database";
import type { Rarity } from "@/database/types/rarity";
import type { WeaponTypeKey } from "@/database/types/weapon-type";

export type WeaponsLoaderData = {
  weapons: Awaited<ReturnType<typeof getWeapons>>;
  weaponTypes: Awaited<ReturnType<typeof getWeaponTypes>>;
};

export default function Weapons() {
  const { weapons, weaponTypes } = useLoaderData<WeaponsLoaderData>();
  const [filterRarities, setFilterRarities] = useState<Rarity[]>([]);
  const [filterWeaponTypeKeys, setFilterWeaponTypeKeys] = useState<WeaponTypeKey[]>([]);
  const [filteredWeapons, setFilteredWeapons] = useState<typeof weapons>([]);
  const [rarities, setRarities] = useState<Rarity[]>([]);

  useEffect(() => {
    setRarities(Array.from(new Set(weapons.map(weapon => weapon.rarity))).sort((a, b) => b - a));
  }, [weapons]);
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
            {Object.values(weaponTypes).map(weaponType => (
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
                checked={filterRarities.includes(rarity)}
                className="flex gap-x-0.5 align-center"
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
                {Array.from({ length: rarity }, (_, i) => i).map(index => (
                  <img alt="star" className="size-3.5" key={index + 1} src={publicImageSrc("star-icon-28x28.png")} />
                ))}
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
