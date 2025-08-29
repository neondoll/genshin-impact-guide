import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import type { ArtifactSlot } from "./types";

export const artifactSlotsAdapter = createEntityAdapter({
  selectId: (model: ArtifactSlot) => model.id,
  sortComparer: (a: ArtifactSlot, b: ArtifactSlot) => a.sort_by - b.sort_by,
});

const initialState = artifactSlotsAdapter.getInitialState({}, (await import("./data")).default);

export const slice = createSlice({
  name: "artifactSlots",
  initialState,
  reducers: {},
});

export default slice.reducer;
