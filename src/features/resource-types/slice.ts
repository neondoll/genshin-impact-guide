import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import type { ResourceType } from "./types";

export const resourceTypesAdapter = createEntityAdapter({
  selectId: (model: ResourceType) => model.id,
});

const initialState = resourceTypesAdapter.getInitialState({}, (await import("./data")).default);

export const slice = createSlice({
  name: "resourceTypes",
  initialState,
  reducers: {},
});

export default slice.reducer;
