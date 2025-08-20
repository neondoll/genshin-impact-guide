import type { TArtifactSlotKey } from "@/database/artifact-slots/types";
import { type RootState, store } from "@/app/store";
import artifactSlotsAdapter from "./artifactSlotsAdapter";

const artifactSlotsSelectors = artifactSlotsAdapter.getSelectors<RootState>(state => state.artifactSlots);

export function selectArtifactSlotById(id: TArtifactSlotKey) {
  return artifactSlotsSelectors.selectById(store.getState(), id);
}

export default artifactSlotsSelectors;
