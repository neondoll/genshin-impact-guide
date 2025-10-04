import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import type { TierListWeapons } from "@/types/tier-list-weapons";

export const tierListsWeaponsAdapter = createEntityAdapter({
  selectId: (model: TierListWeapons) => model.title,
});

const initialState = tierListsWeaponsAdapter.getInitialState({}, (await import("@/data/tier-lists-weapons")).default);

export const tierListsWeaponsSlice = createSlice({
  name: "tierListsWeapons",
  initialState,
  reducers: {},
});

export default tierListsWeaponsSlice.reducer;
