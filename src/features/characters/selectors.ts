import type { CharacterId } from "./types";
import { type RootState, store } from "@/app/store";
import { charactersAdapter } from "./slice";

const selectors = charactersAdapter.getSelectors<RootState>(state => state.characters);

export function selectCharacterById(id: CharacterId) {
  return selectors.selectById(store.getState(), id);
}

export function selectCharactersAll() {
  return selectors.selectAll(store.getState());
}

export function selectCharactersByIds(ids: CharacterId[]) {
  return selectCharactersAll().filter(value => ids.includes(value.id));
}

export default selectors;
