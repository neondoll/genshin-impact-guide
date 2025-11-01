import type { CharacterRoleId } from "@/types/character-role";
import type { RootState } from "@/app/store";
import { characterRolesAdapter } from "./slice";
import { store } from "@/app/store";

const selectors = characterRolesAdapter.getSelectors<RootState>((state) => state.characterRoles);

export function selectCharacterRoleById(id: CharacterRoleId) {
  return selectors.selectById(store.getState(), id);
}

export default selectors;
