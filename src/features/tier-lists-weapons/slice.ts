import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import type { TierListWeapons } from "./types";

export const tierListsWeaponsAdapter = createEntityAdapter({
  selectId: (model: TierListWeapons) => model.title,
});

const initialState = tierListsWeaponsAdapter.getInitialState({}, (await import("./data")).default);

export const slice = createSlice({
  name: "tierListsWeapons",
  initialState,
  reducers: {},
});

export default slice.reducer;
