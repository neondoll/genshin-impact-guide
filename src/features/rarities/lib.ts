import type { Rarity } from "./types";
import { MAX_RARITY, MIN_RARITY, RARITIES, RARITY_GRADIENTS, RARITY_LABELS } from "./types";

export const compareRarities = (a: Rarity, b: Rarity): number => {
  return b - a; // Сортировка по убыванию (5, 4, 3, 2, 1)
};
export const getRarityBackground = (...rarities: Rarity[]): string => {
  const maxRarity = Math.max(...rarities) as Rarity;

  return getRarityGradient(maxRarity);
};
export const getRarityGradient = (rarity: Rarity): string => {
  return RARITY_GRADIENTS[rarity];
};
export const getRarityHigher = (rarity: Rarity): Rarity | null => {
  return rarity < MAX_RARITY ? ((rarity + 1) as Rarity) : null;
};
export const getRarityLabel = (rarity: Rarity): string => {
  return RARITY_LABELS[rarity];
};
export const getRarityLower = (rarity: Rarity): Rarity | null => {
  return rarity > MIN_RARITY ? ((rarity - 1) as Rarity) : null;
};
export const getValidateRarity = (value: number): Rarity => {
  if (!isValidRarity(value)) {
    throw new Error(`Invalid rarity: ${value}. Must be one of: ${RARITIES.join(", ")}`);
  }

  return value;
};
export const isMaxRarity = (rarity: Rarity): boolean => {
  return rarity === MAX_RARITY;
};
export const isMinRarity = (rarity: Rarity): boolean => {
  return rarity === MIN_RARITY;
};
export const isValidRarity = (value: number): value is Rarity => {
  return RARITIES.includes(value as Rarity);
};
