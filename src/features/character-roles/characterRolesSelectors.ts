import type { TCharacterRoleKey } from "@/database/character-roles/types";
import { type RootState, store } from "@/app/store";
import characterRolesAdapter from "./characterRolesAdapter";

const characterRolesSelectors = characterRolesAdapter.getSelectors<RootState>(state => state.characterRoles);

export function selectCharacterRoleById(id: TCharacterRoleKey) {
  return characterRolesSelectors.selectById(store.getState(), id);
}

export function selectCharacterRolesAll() {
  return characterRolesSelectors.selectAll(store.getState());
}

export function selectCharacterRolesByIds(ids: TCharacterRoleKey[]) {
  return selectCharacterRolesAll().filter(value => ids.includes(value.key));
}

export default characterRolesSelectors;
