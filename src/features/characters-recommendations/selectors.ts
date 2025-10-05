import type { CharacterId } from "@/types/character";
import type { RootState } from "@/app/store";
import { charactersRecommendationsAdapter } from "./slice";
import { store } from "@/app/store";

const selectors = charactersRecommendationsAdapter.getSelectors<RootState>(state => state.charactersRecommendations);

export function selectCharacterRecommendationsById(id: CharacterId) {
  return selectors.selectById(store.getState(), id);
}

export default selectors;
