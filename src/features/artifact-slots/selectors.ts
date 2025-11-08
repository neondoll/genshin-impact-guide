import type { ArtifactSlotId } from "@/types/artifact";
import type { RootState } from "@/app/store";
import { store } from "@/app/store";
import { artifactSlotsAdapter } from "./slice";

const selectors = artifactSlotsAdapter.getSelectors<RootState>((state) => state.artifactSlots);

export function selectArtifactSlotById(id: ArtifactSlotId) {
  return selectors.selectById(store.getState(), id);
}

export default selectors;
