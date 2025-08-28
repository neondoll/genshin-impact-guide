import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

import type { ElementId } from "@/features/elements/types";
import type { Rarity } from "@/features/rarities/types";
import type { WeaponTypeId } from "@/features/weapon-types/types";
import { backgroundClassByRarity } from "@/lib/rarity";
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";
import { Container } from "@/components/container";
import { Filter, FilterCheckbox, FilterGroup } from "@/organisms/filter";
import { selectCharactersAll } from "@/features/characters/selectors";
import { selectElementById, selectElementsAll } from "@/features/elements/selectors";
import { selectRaritiesByIds } from "@/features/rarities/selectors";
import { selectWeaponTypesAll } from "@/features/weapon-types/selectors";
import Paths from "@/constants/paths";
import RarityStars from "@/features/rarities/rarity-stars";

/* eslint-disable-next-line react-refresh/only-export-components */
export function loader() {
  const characters = selectCharactersAll();
  const elements = selectElementsAll();
  const rarities = selectRaritiesByIds(characters.map(character => character.rarity));
  const weaponTypes = selectWeaponTypesAll();

  return { characters, elements, rarities, weaponTypes };
}

export default function Characters() {
  const { characters, elements, rarities, weaponTypes } = useLoaderData<ReturnType<typeof loader>>();
  const [filterElementIds, setFilterElementIds] = useState<ElementId[]>([]);
  const [filterRarities, setFilterRarities] = useState<Rarity[]>([]);
  const [filterWeaponTypeIds, setFilterWeaponTypeIds] = useState<WeaponTypeId[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<typeof characters>([]);

  useEffect(() => {
    let filteredCharacters = characters;

    if (filterElementIds.length) {
      filteredCharacters = filteredCharacters.filter(character => filterElementIds.includes(character.element_id));
    }

    if (filterRarities.length) {
      filteredCharacters = filteredCharacters.filter(character => filterRarities.includes(character.rarity));
    }

    if (filterWeaponTypeIds.length) {
      filteredCharacters = filteredCharacters.filter(character => filterWeaponTypeIds.includes(character.weapon_type_id));
    }

    setFilteredCharacters(filteredCharacters);
  }, [characters, filterElementIds, filterRarities, filterWeaponTypeIds]);

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
            <BreadcrumbPage children={Paths.Characters.title} />
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 children={Paths.Characters.title} className="text-2xl" />
      <Filter>
        <FilterGroup label="Элемент">
          <div className="flex flex-wrap gap-3">
            {elements.map(element => (
              <FilterCheckbox
                asChild
                checked={filterElementIds.includes(element.id)}
                className="p-1 size-8.5 rounded-full"
                key={element.id}
                name="elements"
                onChange={(event) => {
                  if (event.target.checked) {
                    if (!filterElementIds.includes(element.id)) {
                      setFilterElementIds(prev => prev.concat([element.id]));
                    }
                  }
                  else {
                    const index = filterElementIds.indexOf(element.id);

                    if (index !== -1) {
                      setFilterElementIds(prev => prev.slice(0, index).concat(prev.slice(index + 1)));
                    }
                  }
                }}
                value={element.id}
              >
                <img alt={element.name} src={element.image_src} />
              </FilterCheckbox>
            ))}
          </div>
        </FilterGroup>
        <FilterGroup label="Тип">
          <div className="flex flex-wrap gap-3">
            {weaponTypes.map(weaponType => (
              <FilterCheckbox
                asChild
                checked={filterWeaponTypeIds.includes(weaponType.id)}
                className="p-1 size-8.5 rounded-full"
                key={weaponType.id}
                name="weapon-types"
                onChange={(event) => {
                  if (event.target.checked) {
                    if (!filterWeaponTypeIds.includes(weaponType.id)) {
                      setFilterWeaponTypeIds(prev => prev.concat([weaponType.id]));
                    }
                  }
                  else {
                    const index = filterWeaponTypeIds.indexOf(weaponType.id);

                    if (index !== -1) {
                      setFilterWeaponTypeIds(prev => prev.slice(0, index).concat(prev.slice(index + 1)));
                    }
                  }
                }}
                value={weaponType.id}
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
                <RarityStars length={rarity} />
              </FilterCheckbox>
            ))}
          </div>
        </FilterGroup>
      </Filter>
      <ul className="flex flex-wrap gap-2 justify-center items-stretch md:gap-4">
        {filteredCharacters.map((character) => {
          const characterElement = selectElementById(character.element_id);

          return (
            <li
              className={cn(
                "flex relative flex-col gap-4 px-5.5 py-4 w-36 h-45 text-card-foreground bg-card rounded-xl",
                "border shadow-sm transition-all has-hover:scale-104 has-focus-visible:ring-3",
                "has-focus-visible:ring-ring/50",
              )}
              key={character.id}
            >
              <span className="relative shrink-0 size-24.5">
                <img
                  alt={characterElement.name}
                  className="absolute top-0 left-0 p-1 size-8.5 bg-card rounded-full border -translate-1/4"
                  src={characterElement.image_src}
                />
                <img
                  alt={character.name}
                  className={cn("object-cover size-full rounded-lg rounded-br-3xl", backgroundClassByRarity(character.rarity))}
                  draggable={false}
                  src={character.image_src}
                />
              </span>
              <Link
                children={Paths.Character.title(character)}
                className={cn(
                  "inline-flex flex-1 justify-center items-center text-sm text-center outline-none",
                  "before:absolute before:inset-0",
                )}
                to={Paths.Character.to(character.id)}
              />
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
