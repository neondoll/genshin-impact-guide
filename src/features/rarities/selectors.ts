import type { Rarity } from "./types";
import { type RootState, store } from "@/app/store";
import { raritiesAdapter } from "./slice";

const selectors = raritiesAdapter.getSelectors<RootState>(state => state.rarities);

export function selectRaritiesAll() {
  return selectors.selectAll(store.getState());
}

export function selectRaritiesByIds(ids: Rarity[]) {
  return selectRaritiesAll().filter(value => ids.includes(value));
}

export default selectors;
