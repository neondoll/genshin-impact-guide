import type { Rarity } from "./types";
import { RARITIES } from "./types";
import { compareRarities, isValidRarity } from "./lib";

export const raritiesData: Rarity[] = RARITIES;

export const getRarities = (): Rarity[] => {
  return [...raritiesData].sort(compareRarities);
};
export const getRarity = (value: number): Rarity => {
  if (!isValidRarity(value)) {
    throw new Error(`Rarity ${value} is not valid`);
  }

  return value;
};
