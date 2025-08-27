import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import type { Rarity } from "./types";

export const raritiesAdapter = createEntityAdapter({
  selectId: (model: Rarity) => model,
  sortComparer: (a: Rarity, b: Rarity) => b - a,
});

const initialState = raritiesAdapter.getInitialState({}, [1, 2, 3, 4, 5]);

export const slice = createSlice({
  name: "rarities",
  initialState,
  reducers: {},
});

export default slice.reducer;
