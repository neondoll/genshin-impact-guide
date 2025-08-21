import { createSlice } from "@reduxjs/toolkit";

import artifactSetsRecommendationsAdapter from "./artifactSetsRecommendationsAdapter";

const artifactSetsRecommendationsSlice = createSlice({
  name: "artifactSetsRecommendations",
  initialState: artifactSetsRecommendationsAdapter.getInitialState({ loading: "idle" }, (await import("@/database/artifact-sets-recommendations/data")).default),
  reducers: {},
});

export default artifactSetsRecommendationsSlice;
