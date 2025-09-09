import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import type { Resource } from "./types";

export const resourcesAdapter = createEntityAdapter({
  selectId: (model: Resource) => model.id,
  sortComparer: (a: Resource, b: Resource) => {
    const aRarity = a.rarity ? a.rarity : 0;
    const bRarity = b.rarity ? b.rarity : 0;

    return aRarity === bRarity ? a.name.localeCompare(b.name) : bRarity - aRarity;
  },
});

const initialState = resourcesAdapter.getInitialState({}, (await import("./data")).default);

export const slice = createSlice({
  name: "resources",
  initialState,
  reducers: {},
});

export default slice.reducer;
