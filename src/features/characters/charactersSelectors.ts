import type { TCharacterKey } from "@/database/characters/types";
import { type RootState, store } from "@/app/store";
import charactersAdapter from "./charactersAdapter";

const charactersSelectors = charactersAdapter.getSelectors<RootState>(state => state.characters);

export function selectCharacterById(id: TCharacterKey) {
  return charactersSelectors.selectById(store.getState(), id);
}

export function selectCharactersAll() {
  return charactersSelectors.selectAll(store.getState());
}

export function selectCharactersByIds(ids: TCharacterKey[]) {
  return selectCharactersAll().filter(value => ids.includes(value.key));
}

export default charactersSelectors;
