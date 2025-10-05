import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import type { ElementalReaction } from "@/types/elemental-reaction";

export const elementalReactionsAdapter = createEntityAdapter({
  selectId: (model: ElementalReaction) => model.id,
});

const initialState = elementalReactionsAdapter.getInitialState({}, (await import("@/data/elemental-reactions")).default);

export const elementalReactionsSlice = createSlice({
  name: "elementalReactions",
  initialState,
  reducers: {},
});

export default elementalReactionsSlice.reducer;
