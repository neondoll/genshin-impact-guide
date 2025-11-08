import type { Character } from "@/types/character";
import type { Element } from "@/types/element";
import type { WeaponType } from "@/types/weapon-type";
import { type Rarity, useRaritiesByIds } from "@/features/rarities";
import { selectCharactersAll } from "@/features/characters/selectors";
import { selectElementsAll } from "@/features/elements/selectors";
import { selectWeaponTypesAll } from "@/features/weapon-types/selectors";

export interface CharactersLoaderReturn {
  characters: Character[];
  elements: Element[];
  rarities: Rarity[];
  weaponTypes: WeaponType[];
}

export default function charactersLoader(): CharactersLoaderReturn {
  const characters = selectCharactersAll();
  const elements = selectElementsAll();
  const rarities = useRaritiesByIds(characters.map((character) => character.rarity).filter((rarity) => rarity !== undefined));
  const weaponTypes = selectWeaponTypesAll();

  return { characters, elements, rarities, weaponTypes };
}
