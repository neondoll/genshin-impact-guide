import type { Character } from "@/types/character";
import type { CharacterRecommendations } from "@/types/character-recommendations";
import type { Element } from "@/types/element";
import type { Weapon } from "@/types/weapon";
import type { WeaponType } from "@/types/weapon-type";
import { selectCharacterById } from "@/features/characters/selectors";
import { selectCharacterRecommendationsById } from "@/features/characters-recommendations/selectors";
import { selectElementById } from "@/features/elements/selectors";
import { selectWeaponById } from "@/features/weapons/selectors";
import { selectWeaponTypeById } from "@/features/weapon-types/selectors";

export interface CharacterLoaderArgs {
  params: Record<string, string | undefined>;
}

export interface CharacterLoaderReturn {
  character?: Character;
  characterElement?: Element;
  characterRecommendations?: CharacterRecommendations;
  characterSignatureWeapon?: Weapon;
  characterWeaponType?: WeaponType;
}

export default function characterLoader({ params }: CharacterLoaderArgs): CharacterLoaderReturn {
  const characterId = params.characterId as Character["id"];

  const character = selectCharacterById(characterId);
  const characterRecommendations = selectCharacterRecommendationsById(characterId);

  let characterElement = undefined;
  let characterSignatureWeapon = undefined;
  let characterWeaponType = undefined;

  if (character) {
    characterElement = selectElementById(character.element_id);
    characterSignatureWeapon = character.signature_weapon_id ? selectWeaponById(character.signature_weapon_id) : undefined;
    characterWeaponType = character.weapon_type_id ? selectWeaponTypeById(character.weapon_type_id) : undefined;

    if (character.rarity) {
      window.document.documentElement.classList.add(`rarity-${character.rarity}`);
    }
  }

  return { character, characterElement, characterRecommendations, characterSignatureWeapon, characterWeaponType };
}
