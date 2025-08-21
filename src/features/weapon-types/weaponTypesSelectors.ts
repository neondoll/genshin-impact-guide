import type { TWeaponTypeKey } from "@/database/weapon-types/types";
import { type RootState, store } from "@/app/store";
import weaponTypesAdapter from "./weaponTypesAdapter";

const weaponTypesSelectors = weaponTypesAdapter.getSelectors<RootState>(state => state.weaponTypes);

export function selectWeaponTypeById(id: TWeaponTypeKey) {
  return weaponTypesSelectors.selectById(store.getState(), id);
}

export function selectWeaponTypesAll() {
  return weaponTypesSelectors.selectAll(store.getState());
}

export default weaponTypesSelectors;
