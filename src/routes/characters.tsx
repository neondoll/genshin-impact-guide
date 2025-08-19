import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

import type { ICharacter } from "@/database/characters/types";
import type { IElement } from "@/database/elements/types";
import type { TRarity } from "@/database/rarities/types";
import type { TWeaponTypeKey } from "@/database/weapon-types/types";
import { backgroundClassByRarity } from "@/lib/rarity";
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn, publicImageSrc } from "@/lib/utils";
import { Filter, FilterCheckbox, FilterGroup } from "@/organisms/filter";
import { getCharacters } from "@/database/characters";
import { getElements } from "@/database/elements";
import { getWeaponTypes } from "@/database/weapon-types";
import { sortRarities } from "@/database/rarities";
import Container from "@/components/container";
import Paths from "@/constants/paths";

function CharactersListItem({ item }: { item: ICharacter }) {
  const [element, setElement] = useState<IElement>();

  useEffect(() => {
    item.getElement().then(setElement);
  }, [item]);

  return (
    <li
      className={cn(
        "flex relative flex-col gap-4 px-5.5 py-4 w-36 h-45 text-card-foreground bg-card rounded-xl border",
        "shadow-sm transition-all has-hover:scale-104 has-focus-visible:ring-3 has-focus-visible:ring-ring/50",
      )}
    >
      <span className="relative shrink-0 size-24.5">
        {element !== undefined && (
          <img
            alt={element.name}
            className="absolute top-0 left-0 p-1 size-8.5 bg-card rounded-full border -translate-1/4"
            src={element.image_src}
          />
        )}
        <img
          alt={item.name}
          className={cn("object-cover size-full rounded-lg rounded-br-3xl", backgroundClassByRarity(item.rarity))}
          draggable={false}
          src={item.image_src}
        />
      </span>
      <Link
        children={Paths.Character.title(item)}
        className={cn(
          "inline-flex flex-1 justify-center items-center text-sm text-center outline-none before:absolute",
          "before:inset-0",
        )}
        to={Paths.Character.to(item.key)}
      />
    </li>
  );
}

/* eslint-disable-next-line react-refresh/only-export-components */
export async function loader() {
  const characters = await getCharacters();
  const elements = await getElements();
  const weaponTypes = await getWeaponTypes();

  return { characters, elements, weaponTypes };
}

export default function Characters() {
  const { characters, elements, weaponTypes } = useLoaderData<Awaited<ReturnType<typeof loader>>>();
  const [filterElementKeys, setFilterElementKeys] = useState<IElement["key"][]>([]);
  const [filterRarities, setFilterRarities] = useState<TRarity[]>([]);
  const [filterWeaponTypeKeys, setFilterWeaponTypeKeys] = useState<TWeaponTypeKey[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<typeof characters>([]);
  const [rarities, setRarities] = useState<TRarity[]>([]);

  useEffect(() => {
    setRarities(Array.from(new Set(characters.map(character => character.rarity))).sort(sortRarities));
  }, [characters]);
  useEffect(() => {
    let filteredCharacters = characters;

    if (filterElementKeys.length) {
      filteredCharacters = filteredCharacters.filter(character => filterElementKeys.includes(character.element_key));
    }

    if (filterRarities.length) {
      filteredCharacters = filteredCharacters.filter(character => filterRarities.includes(character.rarity));
    }

    if (filterWeaponTypeKeys.length) {
      filteredCharacters = filteredCharacters.filter(character => filterWeaponTypeKeys.includes(character.weapon_type_key));
    }

    setFilteredCharacters(filteredCharacters);
  }, [characters, filterElementKeys, filterRarities, filterWeaponTypeKeys]);

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
                checked={filterElementKeys.includes(element.key)}
                className="p-1 size-8.5 rounded-full"
                key={element.key}
                name="elements"
                onChange={(event) => {
                  if (event.target.checked) {
                    if (!filterElementKeys.includes(element.key)) {
                      setFilterElementKeys(prev => prev.concat([element.key]));
                    }
                  }
                  else {
                    const index = filterElementKeys.indexOf(element.key);

                    if (index !== -1) {
                      setFilterElementKeys(prev => prev.slice(0, index).concat(prev.slice(index + 1)));
                    }
                  }
                }}
                value={element.key}
              >
                <img alt={element.name} src={element.image_src} />
              </FilterCheckbox>
            ))}
          </div>
        </FilterGroup>
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
        {filteredCharacters.map(character => (
          <CharactersListItem item={character} key={character.key} />
        ))}
      </ul>
    </Container>
  );
}
