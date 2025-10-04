import type { WeaponTypeId } from "@/types/weapon-type";
import type { RootState } from "@/app/store";
import { store } from "@/app/store";
import { weaponTypesAdapter } from "./slice";

const selectors = weaponTypesAdapter.getSelectors<RootState>(state => state.weaponTypes);

export function selectWeaponTypeById(id: WeaponTypeId) {
  return selectors.selectById(store.getState(), id);
}

export function selectWeaponTypesAll() {
  return selectors.selectAll(store.getState());
}

export default selectors;
