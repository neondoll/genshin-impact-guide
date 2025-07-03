import { Link, useLoaderData } from "react-router-dom";

import Container from "@/components/container";
import Paths from "@/constants/paths";
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";
import { getCharacters } from "@/database";

export type CharactersLoaderData = {
  characters: Awaited<ReturnType<typeof getCharacters>>;
};

export default function Characters() {
  const { characters } = useLoaderData<CharactersLoaderData>();

  return (
    <Container className="flex flex-col gap-2 md:gap-4">
      <Breadcrumb>
        <BreadcrumbList className="gap-1 text-xs sm:gap-2">
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to={Paths.Root}>Главная</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Персонажи</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-2xl">Персонажи</h1>
      <ul className="flex flex-wrap gap-2 justify-center items-stretch md:gap-4">
        {Object.values(characters).map(character => (
          <li
            className={cn(
              "flex relative flex-col gap-4 px-5.5 py-4 w-36 h-45 text-card-foreground bg-card rounded-xl border shadow-sm",
              "transition-all has-hover:scale-104 has-focus-visible:ring-3 has-focus-visible:ring-ring/50",
            )}
            key={character.uid}
          >
            <span
              className={cn(
                "inline-flex shrink-0 justify-center items-center w-24.5 rounded-lg rounded-br-3xl",
                character.quality === 4 && "bg-[linear-gradient(180deg,#5e5789,#9c75b7)]",
                character.quality === 5 && "bg-[linear-gradient(180deg,#945c2c,#b27330)]",
              )}
            >
              <img
                alt={character.name}
                className="object-cover size-full rounded-lg rounded-br-3xl"
                draggable={false}
                src={character.small_image_src}
              />
            </span>
            <Link
              className={cn(
                "inline-flex flex-1 justify-center items-center text-sm text-center outline-none before:absolute",
                "before:inset-0",
              )}
              to={Paths.Character(character.uid)}
            >
              {character.name}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
