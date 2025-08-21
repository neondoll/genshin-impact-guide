import type { TWeaponKey } from "@/database/weapons/types";
import { type RootState, store } from "@/app/store";
import weaponsAdapter from "./weaponsAdapter";

const weaponsSelectors = weaponsAdapter.getSelectors<RootState>(state => state.weapons);

export function selectWeaponById(id: TWeaponKey) {
  return weaponsSelectors.selectById(store.getState(), id);
}

export function selectWeaponsAll() {
  return weaponsSelectors.selectAll(store.getState());
}

export function selectWeaponsByIds(ids: TWeaponKey[]) {
  return selectWeaponsAll().filter(value => ids.includes(value.key));
}

export default weaponsSelectors;
