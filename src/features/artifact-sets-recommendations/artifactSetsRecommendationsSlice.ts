import { createSlice } from "@reduxjs/toolkit";

import artifactSetsRecommendationsAdapter from "./artifactSetsRecommendationsAdapter";

export default createSlice({
  name: "artifactSetsRecommendations",
  initialState: artifactSetsRecommendationsAdapter.getInitialState({ loading: "idle" }, (await import("@/database/artifact-sets-recommendations/data")).default),
  reducers: {},
});
