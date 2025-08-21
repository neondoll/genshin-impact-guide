import type { TCharacterKey } from "@/database/characters/types";
import { type RootState, store } from "@/app/store";
import charactersRecommendationsAdapter from "./charactersRecommendationsAdapter";

const charactersRecommendationsSelectors = charactersRecommendationsAdapter.getSelectors<RootState>(state => state.charactersRecommendations);

export function selectCharacterRecommendationsById(id: TCharacterKey) {
  return charactersRecommendationsSelectors.selectById(store.getState(), id);
}

export default charactersRecommendationsSelectors;
