import { Link } from "react-router-dom";

import type { Character } from "@/features/characters/types";
import { backgroundClassByRarity } from "@/lib/rarity";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Paths from "@/constants/paths";

export default function CharacterBadge({ characterId, characterImgSrc, characterName, characterRarity }: {
  characterId: Character["id"];
  characterImgSrc: Character["image_src"];
  characterName: Character["name"];
  characterRarity?: Character["rarity"];
}) {
  return (
    <Badge asChild className="flex-col p-0 w-16.5" variant="secondary">
      <Link to={Paths.Character.to(characterId)}>
        <span className="relative shrink-0 size-16">
          <img
            alt={characterId}
            className={cn(
              "size-full rounded-md rounded-br-2xl rounded-bl-none",
              characterRarity ? backgroundClassByRarity(characterRarity) : "bg-linear-to-b from-[#323947] to-[#4a5366]",
            )}
            src={characterImgSrc}
          />
        </span>
        <span children={characterName} className="p-0.5 w-full text-center truncate" />
      </Link>
    </Badge>
  );
}
