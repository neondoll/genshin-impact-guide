import type { TArtifactSetKey } from "@/database/artifact-sets/types";
import { type RootState, store } from "@/app/store";
import artifactSetsAdapter from "./artifactSetsAdapter";

const artifactSetsSelectors = artifactSetsAdapter.getSelectors<RootState>(state => state.artifactSets);

export function selectArtifactSetById(id: TArtifactSetKey) {
  return artifactSetsSelectors.selectById(store.getState(), id);
}

export function selectArtifactSetsAll() {
  return artifactSetsSelectors.selectAll(store.getState());
}

export default artifactSetsSelectors;
