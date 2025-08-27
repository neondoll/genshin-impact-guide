import { configureStore } from "@reduxjs/toolkit";

import artifactSetsRecommendationsReducer from "@/features/artifact-sets-recommendations/slice";
import artifactSetsReducer from "@/features/artifact-sets/slice";
import artifactSlotsReducer from "@/features/artifact-slots/slice";
import characterRolesReducer from "@/features/character-roles/slice";
import charactersRecommendationsReducer from "@/features/characters-recommendations/slice";
import charactersReducer from "@/features/characters/slice";
import dungeonsReducer from "@/features/dungeons/slice";
import elementsReducer from "@/features/elements/slice";
import foodTypesReducer from "@/features/food-types/slice";
import raritiesReducer from "@/features/rarities/slice";
import regionsReducer from "@/features/regions/slice";
import resourceTypesReducer from "@/features/resource-types/slice";
import resourcesReducer from "@/features/resources/slice";
import statsReducer from "@/features/stats/slice";
import talentsSlice from "@/features/talents/talentsSlice";
import tierListsWeaponsSlice from "@/features/tier-lists-weapons/tierListsWeaponsSlice";
import weaponsSlice from "@/features/weapons/weaponsSlice";
import weaponTypesSlice from "@/features/weapon-types/weaponTypesSlice";

export const store = configureStore({
  reducer: {
    artifactSets: artifactSetsReducer,
    artifactSetsRecommendations: artifactSetsRecommendationsReducer,
    artifactSlots: artifactSlotsReducer,
    characterRoles: characterRolesReducer,
    characters: charactersReducer,
    charactersRecommendations: charactersRecommendationsReducer,
    dungeons: dungeonsReducer,
    elements: elementsReducer,
    foodTypes: foodTypesReducer,
    rarities: raritiesReducer,
    regions: regionsReducer,
    resourceTypes: resourceTypesReducer,
    resources: resourcesReducer,
    stats: statsReducer,
    talents: talentsSlice.reducer,
    tierListsWeapons: tierListsWeaponsSlice.reducer,
    weapons: weaponsSlice.reducer,
    weaponTypes: weaponTypesSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
