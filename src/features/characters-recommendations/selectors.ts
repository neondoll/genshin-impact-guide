import type { CharacterId } from "../characters/types";
import { type RootState, store } from "@/app/store";
import { charactersRecommendationsAdapter } from "./slice";

const selectors = charactersRecommendationsAdapter.getSelectors<RootState>(state => state.charactersRecommendations);

export function selectCharacterRecommendationsById(id: CharacterId) {
  return selectors.selectById(store.getState(), id);
}

export default selectors;
