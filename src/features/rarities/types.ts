export type Rarity = 1 | 2 | 3 | 4 | 5;

export const RARITIES: Rarity[] = [1, 2, 3, 4, 5];
export const MAX_RARITY: Rarity = 5;
export const MIN_RARITY: Rarity = 1;

export const RARITY_COLORS: Record<Rarity, { from: string; to: string }> = {
  1: { from: "#6a6d74", to: "#868586" },
  2: { from: "#4b6c67", to: "#519072" },
  3: { from: "#567496", to: "#5392b8" },
  4: { from: "#5e5789", to: "#9c75b7" },
  5: { from: "#945c2c", to: "#b27330" },
} as const;
export const RARITY_GRADIENTS: Record<Rarity, string> = {
  1: "bg-gradient-to-b from-[#6a6d74] to-[#868586]",
  2: "bg-gradient-to-b from-[#4b6c67] to-[#519072]",
  3: "bg-gradient-to-b from-[#567496] to-[#5392b8]",
  4: "bg-gradient-to-b from-[#5e5789] to-[#9c75b7]",
  5: "bg-gradient-to-b from-[#945c2c] to-[#b27330]",
} as const;
export const RARITY_LABELS: Record<Rarity, string> = {
  1: "Обычный",
  2: "Необычный",
  3: "Редкий",
  4: "Эпический",
  5: "Легендарный",
} as const;
