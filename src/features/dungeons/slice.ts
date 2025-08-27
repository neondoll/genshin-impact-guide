import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import type { Dungeon } from "./types";

export const dungeonsAdapter = createEntityAdapter({
  selectId: (model: Dungeon) => model.id,
});

const initialState = dungeonsAdapter.getInitialState({}, (await import("./data")).default);

export const slice = createSlice({
  name: "dungeons",
  initialState,
  reducers: {},
});

export default slice.reducer;
