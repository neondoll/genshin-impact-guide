import type { Character } from "@/types/character";
import AbstractBadge from "./abstract-badge";
import Paths from "@/constants/paths";

export default function CharacterBadge({ characterId, characterImageSrc, characterRarity, characterTitle }: {
  characterId: Character["id"];
  characterImageSrc: Character["image_src"];
  characterRarity: Character["rarity"];
  characterTitle: Character["title"];
}) {
  return (
    <AbstractBadge
      imgAlt={characterId}
      imgSrc={characterImageSrc}
      linkTo={Paths.Character.to(characterId)}
      rarities={characterRarity ? [characterRarity] : undefined}
      title={characterTitle}
    />
  );
}
