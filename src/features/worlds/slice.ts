import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import type { World } from "./types";

export const worldsAdapter = createEntityAdapter({
  selectId: (model: World) => model.id,
});

const initialState = worldsAdapter.getInitialState({}, (await import("./data")).default);

export const slice = createSlice({
  name: "worlds",
  initialState,
  reducers: {},
});

export default slice.reducer;
