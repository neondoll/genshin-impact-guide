import type { ArtifactSlotId } from "./types";
import { type RootState, store } from "@/app/store";
import { artifactSlotsAdapter } from "./slice";

const selectors = artifactSlotsAdapter.getSelectors<RootState>(state => state.artifactSlots);

export function selectArtifactSlotById(id: ArtifactSlotId) {
  return selectors.selectById(store.getState(), id);
}

export default selectors;
