import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import type { Character } from "./types";

export const charactersAdapter = createEntityAdapter({
  selectId: (model: Character) => model.id,
  sortComparer: (a: Character, b: Character) => {
    return a.rarity === b.rarity ? a.name.localeCompare(b.name) : b.rarity - a.rarity;
  },
});

const initialState = charactersAdapter.getInitialState({}, (await import("./data")).default);

export const slice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
});

export default slice.reducer;
