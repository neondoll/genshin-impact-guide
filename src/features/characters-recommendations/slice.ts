import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import type { CharacterRecommendations } from "./types";

export const charactersRecommendationsAdapter = createEntityAdapter({
  selectId: (model: CharacterRecommendations) => model.character_id,
});

const initialState = charactersRecommendationsAdapter.getInitialState({}, (await import("./data")).default);

export const slice = createSlice({
  name: "charactersRecommendations",
  initialState,
  reducers: {},
});

export default slice.reducer;
