import type { TArtifactSetKey } from "@/database/artifact-sets/types";
import { type RootState, store } from "@/app/store";
import artifactSetsRecommendationsAdapter from "./artifactSetsRecommendationsAdapter";

const artifactSetsRecommendationsSelectors = artifactSetsRecommendationsAdapter.getSelectors<RootState>(state => state.artifactSetsRecommendations);

export function selectArtifactSetRecommendationsById(id: TArtifactSetKey) {
  return artifactSetsRecommendationsSelectors.selectById(store.getState(), id);
}

export default artifactSetsRecommendationsSelectors;
