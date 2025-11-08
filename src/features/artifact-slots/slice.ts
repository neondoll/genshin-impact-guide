import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import type { ArtifactSlot } from "@/types/artifact";

export const artifactSlotsAdapter = createEntityAdapter({
  selectId: (model: ArtifactSlot) => model.id,
  sortComparer: (a: ArtifactSlot, b: ArtifactSlot) => a.sortOrder - b.sortOrder,
});

const initialState = artifactSlotsAdapter.getInitialState({}, (await import("@/data/artifact-slots")).default);

export const artifactSlotsSlice = createSlice({
  name: "artifactSlots",
  initialState,
  reducers: {},
});

export default artifactSlotsSlice.reducer;
