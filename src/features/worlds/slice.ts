import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import type { World } from "@/types/world";

export const worldsAdapter = createEntityAdapter({
  selectId: (model: World) => model.id,
});

const initialState = worldsAdapter.getInitialState({}, (await import("@/data/worlds")).default);

export const worldsSlice = createSlice({
  name: "worlds",
  initialState,
  reducers: {},
});

export default worldsSlice.reducer;
