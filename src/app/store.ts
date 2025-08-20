import { configureStore } from "@reduxjs/toolkit";

import artifactSetsRecommendationsSlice
  from "../features/artifact-sets-recommendations/artifactSetsRecommendationsSlice";
import artifactSetsSlice from "../features/artifact-sets/artifactSetsSlice";
import artifactSlotsSlice from "../features/artifact-slots/artifactSlotsSlice";
import characterRolesSlice from "../features/character-roles/characterRolesSlice";
import statsSlice from "../features/stats/statsSlice";

export const store = configureStore({
  reducer: {
    artifactSets: artifactSetsSlice.reducer,
    artifactSetsRecommendations: artifactSetsRecommendationsSlice.reducer,
    artifactSlots: artifactSlotsSlice.reducer,
    characterRoles: characterRolesSlice.reducer,
    stats: statsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
