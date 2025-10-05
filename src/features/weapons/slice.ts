import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import type { Weapon } from "@/types/weapon";

export const weaponsAdapter = createEntityAdapter({
  selectId: (model: Weapon) => model.id,
  sortComparer: (a: Weapon, b: Weapon) => {
    return a.rarity === b.rarity ? a.title.localeCompare(b.title) : b.rarity - a.rarity;
  },
});

const initialState = weaponsAdapter.getInitialState({}, (await import("@/data/weapons")).default);

export const weaponsSlice = createSlice({
  name: "weapons",
  initialState,
  reducers: {},
});

export default weaponsSlice.reducer;
