import { createSelector } from "@reduxjs/toolkit";

import type { Rarity } from "./types";
import type { RootState } from "@/app/store";

const selectRaritiesState = (state: RootState) => state.rarities;

export const selectAllRarities = createSelector(selectRaritiesState, (state) => state.list);

export const selectMaxRarity = createSelector(selectAllRarities, (rarities) => Math.max(...rarities) as Rarity);
export const selectMinRarity = createSelector(selectAllRarities, (rarities) => Math.min(...rarities) as Rarity);
export const selectRaritiesByIds = createSelector([selectAllRarities, (_, rarities: Rarity[]) => rarities], (allRarities, targetRarities) => targetRarities.filter((rarity) => allRarities.includes(rarity)));
export const selectRarityById = createSelector([selectAllRarities, (_, rarity: Rarity) => rarity], (rarities, rarity) => rarities.includes(rarity) ? rarity : null);
