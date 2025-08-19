import type { TRarity } from "./types";

export function sortRarities(a: TRarity, b: TRarity) {
  return b - a;
}
