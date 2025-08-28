import type { WeaponTypeId } from "./types";
import { type RootState, store } from "@/app/store";
import { weaponTypesAdapter } from "./slice";

const selectors = weaponTypesAdapter.getSelectors<RootState>(state => state.weaponTypes);

export function selectWeaponTypeById(id: WeaponTypeId) {
  return selectors.selectById(store.getState(), id);
}

export function selectWeaponTypesAll() {
  return selectors.selectAll(store.getState());
}

export default selectors;
