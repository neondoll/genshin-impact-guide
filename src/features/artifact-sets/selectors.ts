import type { ArtifactSetId } from "@/types/artifact-set";
import type { RootState } from "@/app/store";
import { store } from "@/app/store";
import { artifactSetsAdapter } from "./slice";

const selectors = artifactSetsAdapter.getSelectors<RootState>((state) => state.artifactSets);

export function selectArtifactSetById(id: ArtifactSetId) {
  return selectors.selectById(store.getState(), id);
}

export function selectArtifactSetsAll() {
  return selectors.selectAll(store.getState());
}

export function selectArtifactSetsByIds(ids: ArtifactSetId[]) {
  return selectArtifactSetsAll().filter((value) => ids.includes(value.id));
}

export default selectors;
