import type { Rarity } from "@/types/rarity";
import type { RootState } from "@/app/store";
import { raritiesAdapter } from "./slice";
import { store } from "@/app/store";

const selectors = raritiesAdapter.getSelectors<RootState>(state => state.rarities);

export function selectRaritiesAll() {
  return selectors.selectAll(store.getState());
}

export function selectRaritiesByIds(ids: Rarity[]) {
  return selectRaritiesAll().filter(value => ids.includes(value));
}

export default selectors;
