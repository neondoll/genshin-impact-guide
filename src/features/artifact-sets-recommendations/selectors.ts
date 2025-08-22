import type { ArtifactSetId } from "../artifact-sets/types";
import { type RootState, store } from "@/app/store";
import { artifactSetsRecommendationsAdapter } from "./slice";

const selectors = artifactSetsRecommendationsAdapter.getSelectors<RootState>(state => state.artifactSetsRecommendations);

export function selectArtifactSetRecommendationsById(id: ArtifactSetId) {
  return selectors.selectById(store.getState(), id);
}

export default selectors;
