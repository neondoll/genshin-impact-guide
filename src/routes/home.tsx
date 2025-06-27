import * as React from "react";
import { Link, useLoaderData } from "react-router-dom";

import Paths from "@/paths";
import { ArtifactTypeUidEnum } from "@/database/artifact-types";
import { cn } from "@/lib/utils";
import { getArtifactSets } from "@/database/artifact-sets";
import { getCharacters } from "@/database/characters";
import { getElements } from "@/database/elements";
import { getRegions } from "@/database/regions";
import { getWeapons } from "@/database/weapons";
import { getWeaponTypes } from "@/database/weapon-types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type HomeListItemProps = {
  className?: React.ComponentProps<"li">["className"];
  imageSrc?: React.ComponentProps<"img">["src"];
  label: string;
  key?: React.ComponentProps<"li">["key"];
};
type HomeListProps = React.ComponentProps<"ul">;
type HomeLoaderData = {
  artifactSets: Awaited<ReturnType<typeof getArtifactSets>>;
  characters: Awaited<ReturnType<typeof getCharacters>>;
  elements: Awaited<ReturnType<typeof getElements>>;
  regions: Awaited<ReturnType<typeof getRegions>>;
  weapons: Awaited<ReturnType<typeof getWeapons>>;
  weaponTypes: Awaited<ReturnType<typeof getWeaponTypes>>;
};

function HomeList({ className, ...props }: HomeListProps) {
  return (
    <ul
      className={cn(
        "grid grid-cols-[repeat(auto-fill,calc(var(--spacing)*29))] gap-2 justify-center md:gap-4",
        className,
      )}
      {...props}
    />
  );
}

function HomeListItem({ className, imageSrc, label, ...props }: HomeListItemProps) {
  return (
    <li
      className={cn(
        "relative flex flex-col min-h-37 rounded-xl border shadow-sm transition-shadow has-focus-visible:ring-3",
        "has-focus-visible:ring-ring/50",
        className,
      )}
      {...props}
    >
      <span
        className={cn(
          "aspect-square inline-flex shrink-0 justify-center items-center w-full h-auto bg-linear-to-br from-muted",
          "to-muted-foreground rounded-t-xl",
        )}
      >
        {imageSrc !== undefined && (
          <img alt={label} className="rounded-t-xl" draggable={false} src={imageSrc} />
        )}
      </span>
      <a
        className={cn(
          "inline-flex flex-1 justify-center items-center text-xs text-center text-card-foreground bg-card",
          "rounded-b-xl outline-none before:absolute before:inset-0",
        )}
        href="#"
      >
        {label}
      </a>
    </li>
  );
}

/* eslint-disable-next-line react-refresh/only-export-components */
export async function loader() {
  const artifactSets = await getArtifactSets();
  const characters = await getCharacters();
  const elements = await getElements();
  const regions = await getRegions();
  const weapons = await getWeapons();
  const weaponTypes = await getWeaponTypes();

  return { artifactSets, characters, elements, regions, weapons, weaponTypes } as HomeLoaderData;
}

export default function Home() {
  const { artifactSets, characters, elements, regions, weapons, weaponTypes } = useLoaderData<HomeLoaderData>();

  return (
    <div className="container px-4 py-4 mx-auto md:py-6 lg:px-6">
      <Tabs className="md:gap-4" defaultValue="characters">
        <TabsList className="flex w-full">
          <TabsTrigger value="artifact-sets">Наборы артефактов</TabsTrigger>
          <TabsTrigger value="characters">Персонажи</TabsTrigger>
          <TabsTrigger value="elements">Стихии</TabsTrigger>
          <TabsTrigger value="regions">Регионы</TabsTrigger>
          <TabsTrigger value="weapons">Оружие</TabsTrigger>
          <TabsTrigger value="weapon-types">Типы оружия</TabsTrigger>
        </TabsList>
        <TabsContent value="artifact-sets">
          <HomeList>
            {Object.entries(artifactSets).map(([artifactSetUid, artifactSet]) => (
              <HomeListItem
                imageSrc={artifactSet[ArtifactTypeUidEnum.FlowerOfLife].image_src}
                key={artifactSetUid}
                label={artifactSet.name}
              />
            ))}
          </HomeList>
        </TabsContent>
        <TabsContent value="characters">
          <ul className="grid grid-cols-[repeat(auto-fill,calc(var(--spacing)*27))] gap-2 justify-center md:gap-4">
            {Object.entries(characters).map(([characterUid, character]) => (
              <li
                className={cn(
                  "relative flex flex-col min-h-37 rounded-xl border shadow-sm transition-shadow has-focus-visible:ring-3",
                  "has-focus-visible:ring-ring/50",
                )}
                key={characterUid}
              >
                <img
                  alt={character.name}
                  className="object-scale-down object-center shrink-0 w-full h-auto bg-linear-to-br from-muted to-muted-foreground rounded-t-xl"
                  draggable={false}
                  src={character.small_image_src}
                />
                <Link
                  className={cn(
                    "inline-flex flex-1 justify-center items-center text-sm text-center text-card-foreground bg-card",
                    "rounded-b-xl outline-none before:absolute before:inset-0",
                  )}
                  to={Paths.Character(characterUid)}
                >
                  {character.name}
                </Link>
              </li>
            ))}
          </ul>
        </TabsContent>
        <TabsContent value="elements">
          <HomeList>
            {Object.entries(elements).map(([elementUid, element]) => (
              <HomeListItem imageSrc={element.image_src} key={elementUid} label={element.name} />
            ))}
          </HomeList>
        </TabsContent>
        <TabsContent value="regions">
          <HomeList>
            {Object.entries(regions).map(([regionUid, region]) => (
              <HomeListItem imageSrc={region.emblem_image_src} key={regionUid} label={region.name} />
            ))}
          </HomeList>
        </TabsContent>
        <TabsContent value="weapons">
          <HomeList>
            {Object.entries(weapons).map(([weaponUid, weapon]) => (
              <HomeListItem imageSrc={weapon.small_image_src} key={weaponUid} label={weapon.name} />
            ))}
          </HomeList>
        </TabsContent>
        <TabsContent value="weapon-types">
          <HomeList>
            {Object.entries(weaponTypes).map(([weaponTypeUid, weaponType]) => (
              <HomeListItem imageSrc={weaponType.image_src} key={weaponTypeUid} label={weaponType.name} />
            ))}
          </HomeList>
        </TabsContent>
      </Tabs>
    </div>
  );
}
