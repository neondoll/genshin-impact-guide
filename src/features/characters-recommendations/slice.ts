import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import type { CharacterRecommendations } from "@/types/character-recommendations";

export const charactersRecommendationsAdapter = createEntityAdapter({
  selectId: (model: CharacterRecommendations) => model.character_id,
});

const initialState = charactersRecommendationsAdapter.getInitialState({}, (await import("@/data/characters-recommendations")).default);

export const charactersRecommendationsSlice = createSlice({
  name: "charactersRecommendations",
  initialState,
  reducers: {},
});

export default charactersRecommendationsSlice.reducer;
