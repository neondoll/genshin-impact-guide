import { createSlice } from "@reduxjs/toolkit";

import charactersRecommendationsAdapter from "./charactersRecommendationsAdapter";

const charactersRecommendationsSlice = createSlice({
  name: "charactersRecommendations",
  initialState: charactersRecommendationsAdapter.getInitialState({ loading: "idle" }, (await import("@/database/characters-recommendations/data")).default),
  reducers: {},
});

export default charactersRecommendationsSlice;
