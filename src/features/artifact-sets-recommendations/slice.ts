import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import type { ArtifactSetRecommendations } from "./types";

export const artifactSetsRecommendationsAdapter = createEntityAdapter({
  selectId: (model: ArtifactSetRecommendations) => model.artifact_set_id,
});

const initialState = artifactSetsRecommendationsAdapter.getInitialState({ loading: "idle" }, (await import("./data")).default);

export const slice = createSlice({
  name: "artifactSetsRecommendations",
  initialState,
  reducers: {},
});

export default slice.reducer;
