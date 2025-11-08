import type { CSSProperties } from "react";

import type { Rarity } from "./types";
import { RARITY_COLORS, RARITY_GRADIENTS } from "./types";

export const backgroundClassByRarity = (...rarities: Rarity[]): string => {
  const maxRarity = Math.max(...rarities) as Rarity;

  return RARITY_GRADIENTS[maxRarity];
};
export const backgroundStyleByRarity = (...rarities: Rarity[]): CSSProperties => {
  const maxRarity = Math.max(...rarities) as Rarity;
  const colors = RARITY_COLORS[maxRarity];

  return { background: `linear-gradient(180deg, ${colors.from} 0%, ${colors.to} 100%)` };
};
