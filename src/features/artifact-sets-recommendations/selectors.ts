import type { ArtifactSetId } from "@/types/artifact-set";
import type { RootState } from "@/app/store";
import { artifactSetsRecommendationsAdapter } from "./slice";
import { store } from "@/app/store";

const selectors = artifactSetsRecommendationsAdapter.getSelectors<RootState>(state => state.artifactSetsRecommendations);

export function selectArtifactSetRecommendationsById(id: ArtifactSetId) {
  return selectors.selectById(store.getState(), id);
}

export default selectors;
