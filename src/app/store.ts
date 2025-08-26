import { configureStore } from "@reduxjs/toolkit";

import artifactSetsRecommendationsReducer from "../features/artifact-sets-recommendations/slice";
import artifactSetsReducer from "../features/artifact-sets/slice";
import artifactSlotsReducer from "../features/artifact-slots/slice";
import characterRolesReducer from "../features/character-roles/slice";
import charactersRecommendationsReducer from "../features/characters-recommendations/slice";
import charactersReducer from "../features/characters/slice";
import dungeonsSlice from "../features/dungeons/dungeonsSlice";
import elementsSlice from "../features/elements/elementsSlice";
import raritiesSlice from "../features/rarities/raritiesSlice";
import regionsSlice from "../features/regions/regionsSlice";
import statsSlice from "../features/stats/statsSlice";
import talentsSlice from "../features/talents/talentsSlice";
import tierListsWeaponsSlice from "../features/tier-lists-weapons/tierListsWeaponsSlice";
import weaponsSlice from "../features/weapons/weaponsSlice";
import weaponTypesSlice from "../features/weapon-types/weaponTypesSlice";

export const store = configureStore({
  reducer: {
    artifactSets: artifactSetsReducer,
    artifactSetsRecommendations: artifactSetsRecommendationsReducer,
    artifactSlots: artifactSlotsReducer,
    characterRoles: characterRolesReducer,
    characters: charactersReducer,
    charactersRecommendations: charactersRecommendationsReducer,
    dungeons: dungeonsSlice.reducer,
    elements: elementsSlice.reducer,
    rarities: raritiesSlice.reducer,
    regions: regionsSlice.reducer,
    stats: statsSlice.reducer,
    talents: talentsSlice.reducer,
    tierListsWeapons: tierListsWeaponsSlice.reducer,
    weapons: weaponsSlice.reducer,
    weaponTypes: weaponTypesSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
