import type { ArtifactSetId } from "./types";
import { type RootState, store } from "@/app/store";
import { artifactSetsAdapter } from "./slice";

const selectors = artifactSetsAdapter.getSelectors<RootState>(state => state.artifactSets);

export function selectArtifactSetById(id: ArtifactSetId) {
  return selectors.selectById(store.getState(), id);
}

export function selectArtifactSetsAll() {
  return selectors.selectAll(store.getState());
}

export default selectors;
