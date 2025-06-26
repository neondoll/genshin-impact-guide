import { Link, useLoaderData } from "react-router-dom";

import Paths from "@/paths";
import { cn } from "@/lib/utils";
import { getCharacters } from "@/database/characters";
import { getRegions } from "@/database/regions";
import { getWeapons } from "@/database/weapons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type HomeLoaderData = {
  characters: Awaited<ReturnType<typeof getCharacters>>;
  regions: Awaited<ReturnType<typeof getRegions>>;
  weapons: Awaited<ReturnType<typeof getWeapons>>;
};

/* eslint-disable-next-line react-refresh/only-export-components */
export async function loader() {
  const characters = await getCharacters();
  const regions = await getRegions();
  const weapons = await getWeapons();

  return { characters, regions, weapons } as HomeLoaderData;
}

export default function Home() {
  const { characters, regions, weapons } = useLoaderData<HomeLoaderData>();

  return (
    <div className="container px-4 py-4 mx-auto md:py-6 lg:px-6">
      <Tabs className="md:gap-4" defaultValue="characters">
        <TabsList>
          <TabsTrigger value="characters">Персонажи</TabsTrigger>
          <TabsTrigger value="weapons">Оружие</TabsTrigger>
          <TabsTrigger value="regions">Регионы</TabsTrigger>
        </TabsList>
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
                  className="shrink-0 w-full h-auto bg-linear-to-br from-muted to-muted-foreground rounded-t-xl"
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
        <TabsContent value="weapons">
          <ul className="grid grid-cols-[repeat(auto-fill,calc(var(--spacing)*27))] gap-2 justify-center md:gap-4">
            {Object.entries(weapons).map(([weaponUid, weapon]) => (
              <li
                className={cn(
                  "relative flex flex-col min-h-37 rounded-xl border shadow-sm transition-shadow has-focus-visible:ring-3",
                  "has-focus-visible:ring-ring/50",
                )}
                key={weaponUid}
              >
                <img
                  alt={weapon.name}
                  className="shrink-0 w-full h-auto bg-linear-to-br from-muted to-muted-foreground rounded-t-xl"
                  draggable={false}
                  src={weapon.small_image_src}
                />
                <a
                  className={cn(
                    "inline-flex flex-1 justify-center items-center text-sm text-center text-card-foreground bg-card",
                    "rounded-b-xl outline-none before:absolute before:inset-0",
                  )}
                  href="#"
                >
                  {weapon.name}
                </a>
              </li>
            ))}
          </ul>
        </TabsContent>
        <TabsContent value="regions">
          <ul className="list-inside list-disc">
            {Object.entries(regions).map(([regionUid, region]) => (
              <li key={regionUid}>{region.name}</li>
            ))}
          </ul>
        </TabsContent>
      </Tabs>
    </div>
  );
}
