import type { CharacterId } from "@/types/character";
import { selectCharacterById } from "@/features/characters/selectors";
import AbstractBadge from "./abstract-badge";
import Paths from "@/constants/paths";

export default function CharacterBadge({ characterId }: { characterId: CharacterId }) {
  const character = selectCharacterById(characterId);

  return (
    <AbstractBadge
      imgAlt={characterId}
      imgSrc={character.image_src}
      linkTo={Paths.Character.to(characterId)}
      rarities={character.rarity ? [character.rarity] : undefined}
      title={character.title}
    />
  );
}
