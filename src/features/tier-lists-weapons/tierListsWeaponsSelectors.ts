import { type RootState, store } from "@/app/store";
import tierListsWeaponsAdapter from "./tierListsWeaponsAdapter";

const tierListsWeaponsSelectors = tierListsWeaponsAdapter.getSelectors<RootState>(state => state.tierListsWeapons);

export function selectTierListsWeaponsAll() {
  return tierListsWeaponsSelectors.selectAll(store.getState());
}

export default tierListsWeaponsSelectors;
