import type { Character } from "@/features/characters/types";
import AbstractBadge from "./abstract-badge";
import Paths from "@/constants/paths";

export default function CharacterBadge({ characterId, characterImgSrc, characterRarity, characterTitle }: {
  characterId: Character["id"];
  characterImgSrc: Character["image_src"];
  characterRarity?: Character["rarity"];
  characterTitle: Character["title"];
}) {
  return (
    <AbstractBadge
      imgAlt={characterId}
      imgSrc={characterImgSrc}
      linkTo={Paths.Character.to(characterId)}
      rarity={characterRarity}
      title={characterTitle}
    />
  );
}
