import { createSlice } from "@reduxjs/toolkit";

import type { ArtifactSlot } from "./types";
import { artifactSlotsData } from "./data";

interface ArtifactSlotsState {
  entities: Record<ArtifactSlot["id"], ArtifactSlot>;
  ids: ArtifactSlot["id"][];
}

const initialState: ArtifactSlotsState = {
  entities: artifactSlotsData,
  ids: Object.keys(artifactSlotsData) as ArtifactSlot["id"][],
};

export const artifactSlotsSlice = createSlice({ name: "artifactSlots", initialState, reducers: {} });

export const artifactSlotsActions = artifactSlotsSlice.actions;
export default artifactSlotsSlice.reducer;
