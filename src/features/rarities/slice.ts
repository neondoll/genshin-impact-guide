import { createSlice } from "@reduxjs/toolkit";

import type { Rarity } from "./types";
import { compareRarities } from "./lib";
import { raritiesData } from "./data";

interface RaritiesState {
  list: Rarity[];
}

const initialState: RaritiesState = { list: raritiesData.sort(compareRarities) };

export const raritiesSlice = createSlice({ name: "rarities", initialState, reducers: {} });

export const raritiesActions = raritiesSlice.actions;
export default raritiesSlice.reducer;
