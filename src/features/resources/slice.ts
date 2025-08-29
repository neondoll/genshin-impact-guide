import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import type { Resource } from "./types";

export const resourcesAdapter = createEntityAdapter({
  selectId: (model: Resource) => model.id,
  sortComparer: (a: Resource, b: Resource) => a.name.localeCompare(b.name),
});

const initialState = resourcesAdapter.getInitialState({}, (await import("./data")).default);

export const slice = createSlice({
  name: "resources",
  initialState,
  reducers: {},
});

export default slice.reducer;
