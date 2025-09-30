import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import type { Character } from "./types";

export const charactersAdapter = createEntityAdapter({
  selectId: (model: Character) => model.id,
  sortComparer: (a: Character, b: Character) => {
    const aRarity = a.rarity ? a.rarity : 0;
    const bRarity = b.rarity ? b.rarity : 0;

    return aRarity === bRarity ? a.title.localeCompare(b.title) : bRarity - aRarity;
  },
});

const initialState = charactersAdapter.getInitialState({}, (await import("./data")).default);

export const charactersSlice = createSlice({ name: "characters", initialState, reducers: {} });

export default charactersSlice.reducer;
