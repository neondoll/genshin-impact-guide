import type { RootState } from "@/app/store";
import { store } from "@/app/store";
import { tierListsWeaponsAdapter } from "./slice";

const selectors = tierListsWeaponsAdapter.getSelectors<RootState>(state => state.tierListsWeapons);

export function selectTierListsWeaponsAll() {
  return selectors.selectAll(store.getState());
}

export default selectors;
