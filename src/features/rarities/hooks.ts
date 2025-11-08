import { useMemo } from "react";
import { useSelector } from "react-redux";

import type { Rarity } from "./types";
import { getRarityBackground, getRarityGradient, getRarityLabel } from "./lib";
import {
  selectAllRarities,
  selectMaxRarity,
  selectMinRarity,
  selectRaritiesByIds,
  selectRarityById,
} from "./selectors";

export const useMaxRarity = () => {
  return useSelector(selectMaxRarity);
};
export const useMinRarity = () => {
  return useSelector(selectMinRarity);
};
export const useRarities = () => {
  return useSelector(selectAllRarities);
};
export const useRaritiesByIds = (rarities: Rarity[]) => {
  return useSelector((state) => selectRaritiesByIds(state, rarities));
};
export const useRarity = (rarity: Rarity) => {
  return useSelector((state) => selectRarityById(state, rarity));
};
export const useRarityBackground = (rarities: Rarity[]) => {
  return useMemo(() => getRarityBackground(...rarities), [rarities]);
};
export const useRarityGradient = (rarity: Rarity) => {
  return getRarityGradient(rarity);
};
export const useRarityLabel = (rarity: Rarity) => {
  return getRarityLabel(rarity);
};
export const useRarityOptions = () => {
  const rarities = useRarities();

  return useMemo(() => {
    return rarities.map((rarity) => {
      return {
        gradient: getRarityGradient(rarity),
        label: getRarityLabel(rarity),
        stars: Array(rarity).fill("⭐").join(""),
        value: rarity,
      };
    });
  }, [rarities]);
};
