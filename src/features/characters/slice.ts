import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import type { Character } from "./types";

export const charactersAdapter = createEntityAdapter({
  selectId: (model: Character) => model.id,
  sortComparer: (a: Character, b: Character) => {
    return a.rarity === b.rarity ? a.title.localeCompare(b.title) : b.rarity - a.rarity;
  },
});

const initialState = charactersAdapter.getInitialState({}, (await import("./data")).default);

export const charactersSlice = createSlice({ name: "characters", initialState, reducers: {} });

export default charactersSlice.reducer;
