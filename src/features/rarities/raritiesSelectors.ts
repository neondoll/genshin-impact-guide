import type { TRarity } from "@/database/rarities/types";
import { type RootState, store } from "@/app/store";
import raritiesAdapter from "./raritiesAdapter";

const raritiesSelectors = raritiesAdapter.getSelectors<RootState>(state => state.rarities);

export function selectRaritiesAll() {
  return raritiesSelectors.selectAll(store.getState());
}

export function selectRaritiesByIds(ids: TRarity[]) {
  return selectRaritiesAll().filter(value => ids.includes(value));
}

export default raritiesSelectors;
