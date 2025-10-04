import type { WeaponId } from "@/types/weapon";
import type { RootState } from "@/app/store";
import { store } from "@/app/store";
import { weaponsAdapter } from "./slice";

const selectors = weaponsAdapter.getSelectors<RootState>(state => state.weapons);

export function selectWeaponById(id: WeaponId) {
  return selectors.selectById(store.getState(), id);
}

export function selectWeaponsAll() {
  return selectors.selectAll(store.getState());
}

export function selectWeaponsByIds(ids: WeaponId[]) {
  return selectWeaponsAll().filter(value => ids.includes(value.id));
}

export default selectors;
