import * as React from "react";
import { Link, type LinkProps, useLoaderData, useNavigate, useParams } from "react-router-dom";

import Container from "@/components/container";
import Paths from "@/paths";
import { ArtifactTypeUidEnum } from "@/database/enums/artifact-types";
import { cn } from "@/lib/utils";
import { getArtifactSets, getCharacters, getElements, getRegions, getWeapons, getWeaponTypes } from "@/database";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type HomeListItemProps = {
  className?: React.ComponentProps<"li">["className"];
  imageSrc?: React.ComponentProps<"img">["src"];
  label: string;
  key?: React.ComponentProps<"li">["key"];
  to: LinkProps["to"];
};
type HomeListProps = React.ComponentProps<"ul">;

export type HomeLoaderData = {
  artifactSets: Awaited<ReturnType<typeof getArtifactSets>>;
  characters: Awaited<ReturnType<typeof getCharacters>>;
  elements: Awaited<ReturnType<typeof getElements>>;
  regions: Awaited<ReturnType<typeof getRegions>>;
  weapons: Awaited<ReturnType<typeof getWeapons>>;
  weaponTypes: Awaited<ReturnType<typeof getWeaponTypes>>;
};

function HomeList({ className, ...props }: HomeListProps) {
  return (
    <ul className={cn("flex flex-wrap gap-2 justify-center md:gap-4", className)} {...props} />
  );
}

function HomeListItem({ className, imageSrc, label, to, ...props }: HomeListItemProps) {
  return (
    <li
      className={cn(
        "relative flex flex-col w-27 min-h-37 rounded-xl border shadow-sm transition-shadow has-focus-visible:ring-3",
        "has-focus-visible:ring-ring/50",
        className,
      )}
      {...props}
    >
      <span
        className={cn(
          "inline-flex shrink-0 justify-center items-center w-full h-26.5 bg-linear-to-br from-muted",
          "to-muted-foreground rounded-t-xl",
        )}
      >
        {imageSrc !== undefined && (
          <img alt={label} className="rounded-t-xl" draggable={false} src={imageSrc} />
        )}
      </span>
      <Link
        className={cn(
          "inline-flex flex-1 justify-center items-center p-0.5 text-xs text-center text-card-foreground bg-card",
          "rounded-b-xl outline-none before:absolute before:inset-0",
        )}
        to={to}
      >
        {label}
      </Link>
    </li>
  );
}

export default function Home() {
  const { artifactSets, characters, elements, regions, weapons, weaponTypes } = useLoaderData<HomeLoaderData>();
  const navigate = useNavigate();
  const params = useParams();

  return (
    <Container>
      <Tabs
        className="md:gap-4"
        defaultValue="characters"
        onValueChange={value => navigate(`/${value}`)}
        value={params.tabValue}
      >
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
                to={Paths.ArtifactSet(artifactSetUid)}
              />
            ))}
          </HomeList>
        </TabsContent>
        <TabsContent value="characters">
          <HomeList>
            {Object.entries(characters).map(([characterUid, character]) => (
              <HomeListItem
                imageSrc={character.small_image_src}
                key={characterUid}
                label={character.name}
                to={Paths.Character(characterUid)}
              />
            ))}
          </HomeList>
        </TabsContent>
        <TabsContent value="elements">
          <HomeList>
            {Object.entries(elements).map(([elementUid, element]) => (
              <HomeListItem imageSrc={element.image_src} key={elementUid} label={element.name} to="#" />
            ))}
          </HomeList>
        </TabsContent>
        <TabsContent value="regions">
          <HomeList>
            {Object.entries(regions).map(([regionUid, region]) => (
              <HomeListItem imageSrc={region.emblem_image_src} key={regionUid} label={region.name} to="#" />
            ))}
          </HomeList>
        </TabsContent>
        <TabsContent value="weapons">
          <HomeList>
            {Object.entries(weapons).map(([weaponUid, weapon]) => (
              <HomeListItem className="w-29" imageSrc={weapon.image_src} key={weaponUid} label={weapon.name} to="#" />
            ))}
          </HomeList>
        </TabsContent>
        <TabsContent value="weapon-types">
          <HomeList>
            {Object.entries(weaponTypes).map(([weaponTypeUid, weaponType]) => (
              <HomeListItem imageSrc={weaponType.image_src} key={weaponTypeUid} label={weaponType.name} to="#" />
            ))}
          </HomeList>
        </TabsContent>
      </Tabs>
    </Container>
  );
}
