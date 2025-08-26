import type { CharacterRoleId } from "./types";
import { type RootState, store } from "@/app/store";
import { characterRolesAdapter } from "./slice";

const selectors = characterRolesAdapter.getSelectors<RootState>(state => state.characterRoles);

export function selectCharacterRoleById(id: CharacterRoleId) {
  return selectors.selectById(store.getState(), id);
}

export function selectCharacterRolesAll() {
  return selectors.selectAll(store.getState());
}

export function selectCharacterRolesByIds(ids: CharacterRoleId[]) {
  return selectCharacterRolesAll().filter(value => ids.includes(value.id));
}

export default selectors;
