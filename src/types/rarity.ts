export type Rarity = 1 | 2 | 3 | 4 | 5;

export const VALID_RARITIES: Rarity[] = [1, 2, 3, 4, 5];

export const RARITY_COLORS: Record<Rarity, string> = {
  1: "#8B8B8B", // серый
  2: "#5D8AA8", // синий
  3: "#228B22", // зеленый
  4: "#9370DB", // фиолетовый
  5: "#FFD700", // золотой
} as const;

export const RARITY_NAMES: Record<Rarity, string> = {
  1: "Обычный",
  2: "Необычный",
  3: "Редкий",
  4: "Эпический",
  5: "Легендарный",
} as const;

export const MAX_RARITY: Rarity = 5;
export const MIN_RARITY: Rarity = 1;

export const isValidRarity = (value: number): value is Rarity => {
  return VALID_RARITIES.includes(value as Rarity);
};

export const isMaxRarity = (rarity: Rarity): boolean => rarity === MAX_RARITY;
export const isMinRarity = (rarity: Rarity): boolean => rarity === MIN_RARITY;
