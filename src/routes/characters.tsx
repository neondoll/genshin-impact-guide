import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

import Container from "@/components/container";
import Paths from "@/constants/paths";
import { backgroundClassByQuality } from "@/lib/quality";
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn, publicImageSrc } from "@/lib/utils";
import { Filter, FilterCheckbox, FilterGroup } from "@/organisms/filter";
import { getCharacters, getElements, getWeaponTypes } from "@/database";
import type { ElementUid } from "@/database/types/element";
import type { QualityUid } from "@/database/types/quality";
import type { WeaponTypeUid } from "@/database/types/weapon-type";

export type CharactersLoaderData = {
  characters: Awaited<ReturnType<typeof getCharacters>>;
  elements: Awaited<ReturnType<typeof getElements>>;
  weaponTypes: Awaited<ReturnType<typeof getWeaponTypes>>;
};

export default function Characters() {
  const { characters, elements, weaponTypes } = useLoaderData<CharactersLoaderData>();
  const [filteredCharacters, setFilteredCharacters] = useState<typeof characters>([]);
  const [filterElementUids, setFilterElementUids] = useState<ElementUid[]>([]);
  const [filterQualities, setFilterQualities] = useState<QualityUid[]>([]);
  const [filterWeaponTypeUids, setFilterWeaponTypeUids] = useState<WeaponTypeUid[]>([]);
  const [qualities, setQualities] = useState<QualityUid[]>([]);

  useEffect(() => {
    setQualities(Array.from(new Set(characters.map(character => character.quality))).sort((a, b) => b - a));
  }, [characters]);
  useEffect(() => {
    let filteredCharacters = characters;

    if (filterElementUids.length) {
      filteredCharacters = filteredCharacters.filter(character => filterElementUids.includes(character.element_uid));
    }

    if (filterWeaponTypeUids.length) {
      filteredCharacters = filteredCharacters.filter(character => filterWeaponTypeUids.includes(character.weapon_type_uid));
    }

    setFilteredCharacters(filteredCharacters);
  }, [characters, filterElementUids, filterWeaponTypeUids]);

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
          <div className="flex gap-x-3">
            {Object.values(elements).map(element => (
              <FilterCheckbox
                asChild
                checked={filterElementUids.includes(element.uid)}
                className="p-1 size-8.5 rounded-full"
                key={element.uid}
                name="elements"
                onChange={(event) => {
                  if (event.target.checked) {
                    if (!filterElementUids.includes(element.uid)) {
                      setFilterElementUids(prev => prev.concat([element.uid]));
                    }
                  }
                  else {
                    const index = filterElementUids.indexOf(element.uid);

                    if (index !== -1) {
                      setFilterElementUids(prev => prev.slice(0, index).concat(prev.slice(index + 1)));
                    }
                  }
                }}
                value={element.uid}
              >
                <img alt={element.name} src={element.image_src} />
              </FilterCheckbox>
            ))}
          </div>
        </FilterGroup>
        <FilterGroup label="Тип">
          <div className="flex gap-x-3">
            {Object.values(weaponTypes).map(weaponType => (
              <FilterCheckbox
                asChild
                checked={filterWeaponTypeUids.includes(weaponType.uid)}
                className="p-1 size-8.5 rounded-full"
                key={weaponType.uid}
                name="weapon-types"
                onChange={(event) => {
                  if (event.target.checked) {
                    if (!filterWeaponTypeUids.includes(weaponType.uid)) {
                      setFilterWeaponTypeUids(prev => prev.concat([weaponType.uid]));
                    }
                  }
                  else {
                    const index = filterWeaponTypeUids.indexOf(weaponType.uid);

                    if (index !== -1) {
                      setFilterWeaponTypeUids(prev => prev.slice(0, index).concat(prev.slice(index + 1)));
                    }
                  }
                }}
                value={weaponType.uid}
              >
                <img alt={weaponType.name} src={weaponType.image_src} />
              </FilterCheckbox>
            ))}
          </div>
        </FilterGroup>
        <FilterGroup label="Качество">
          <div className="flex gap-x-3">
            {qualities.map(quality => (
              <FilterCheckbox
                checked={filterQualities.includes(quality)}
                className="flex gap-x-0.5 align-center"
                key={quality}
                name="qualities"
                onChange={(event) => {
                  if (event.target.checked) {
                    if (!filterQualities.includes(quality)) {
                      setFilterQualities(prev => prev.concat([quality]));
                    }
                  }
                  else {
                    const index = filterQualities.indexOf(quality);

                    if (index !== -1) {
                      setFilterQualities(prev => prev.slice(0, index).concat(prev.slice(index + 1)));
                    }
                  }
                }}
                value={quality}
              >
                {Array.from({ length: quality }, (_, i) => i).map(index => (
                  <img alt="star" className="size-3.5" key={index + 1} src={publicImageSrc("star-icon-28x28.png")} />
                ))}
              </FilterCheckbox>
            ))}
          </div>
        </FilterGroup>
      </Filter>
      <ul className="flex flex-wrap gap-2 justify-center items-stretch md:gap-4">
        {filteredCharacters.map((character) => {
          const element = elements[character.element_uid];

          return (
            <li
              className={cn(
                "flex relative flex-col gap-4 px-5.5 py-4 w-36 h-45 text-card-foreground bg-card rounded-xl",
                "border shadow-sm transition-all has-hover:scale-104 has-focus-visible:ring-3",
                "has-focus-visible:ring-ring/50",
              )}
              key={character.uid}
            >
              <span className="relative shrink-0 size-24.5">
                <img
                  alt={element.name}
                  className="absolute top-0 left-0 p-1 size-8.5 bg-card rounded-full border -translate-1/4"
                  src={element.image_src}
                />
                <img
                  alt={character.name}
                  className={cn(
                    "object-cover size-full rounded-lg rounded-br-3xl",
                    backgroundClassByQuality(character.quality),
                  )}
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
                to={Paths.Character.to(character.uid)}
              />
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
