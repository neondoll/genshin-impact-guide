import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import type { ElementalReaction } from "./types";

export const elementalReactionsAdapter = createEntityAdapter({
  selectId: (model: ElementalReaction) => model.id,
});

const initialState = elementalReactionsAdapter.getInitialState({}, (await import("./data")).default);

export const slice = createSlice({
  name: "elementalReactions",
  initialState,
  reducers: {},
});

export default slice.reducer;
