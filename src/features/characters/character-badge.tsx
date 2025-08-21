import { Link } from "react-router-dom";

import type { TCharacterKey } from "@/database/characters/types";
import { backgroundClassByRarity } from "@/lib/rarity";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { selectCharacterById } from "./charactersSelectors";
import Paths from "@/constants/paths";

export default function CharacterBadge({ characterKey }: { characterKey: TCharacterKey }) {
  const character = selectCharacterById(characterKey);

  return (
    <Badge
      asChild
      className="flex flex-col gap-2.5 justify-start p-2 w-full text-center text-pretty whitespace-normal sm:flex-row sm:text-left"
      variant="secondary"
    >
      <Link to={Paths.Character.to(character.key)}>
        <img
          alt={character.name}
          className={cn("shrink-0 size-12 rounded-md rounded-br-2xl", backgroundClassByRarity(character.rarity))}
          src={character.image_src}
        />
        <span children={character.name} />
      </Link>
    </Badge>
  );
}
