import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import type { ArtifactSetRecommendations } from "@/types/artifact-set-recommendations";

export const artifactSetsRecommendationsAdapter = createEntityAdapter({
  selectId: (model: ArtifactSetRecommendations) => model.artifact_set_id,
});

const initialState = artifactSetsRecommendationsAdapter.getInitialState({}, (await import("@/data/artifact-sets-recommendations")).default);

export const slice = createSlice({
  name: "artifactSetsRecommendations",
  initialState,
  reducers: {},
});

export default slice.reducer;
