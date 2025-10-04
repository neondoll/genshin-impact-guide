import type { CharacterId } from "@/types/character";
import type { RootState } from "@/app/store";
import { charactersAdapter } from "./slice";
import { store } from "@/app/store";

const selectors = charactersAdapter.getSelectors<RootState>(state => state.characters);

export function selectCharacterById(id: CharacterId) {
  return selectors.selectById(store.getState(), id);
}

export function selectCharactersAll() {
  return selectors.selectAll(store.getState());
}

export default selectors;
