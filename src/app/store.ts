import { configureStore } from "@reduxjs/toolkit";

import artifactSetsRecommendationsReducer from "../features/artifact-sets-recommendations/slice";
import artifactSetsReducer from "../features/artifact-sets/slice";
import artifactSlotsReducer from "../features/artifact-slots/slice";
import characterRolesReducer from "../features/character-roles/slice";
import charactersRecommendationsReducer from "../features/characters-recommendations/slice";
import charactersReducer from "../features/characters/slice";
import dungeonsReducer from "../features/dungeons/slice";
import elementalReactionsReducer from "../features/elemental-reactions/slice";
import elementsReducer from "../features/elements/slice";
import foodTypesReducer from "../features/food-types/slice";
import raritiesReducer from "../features/rarities/slice";
import regionsReducer from "../features/regions/slice";
import resourceTypesReducer from "../features/resource-types/slice";
import resourcesReducer from "../features/resources/slice";
import statsReducer from "../features/stats/slice";
import talentsReducer from "../features/talents/slice";
import tierListsWeaponsReducer from "../features/tier-lists-weapons/slice";
import weaponsReducer from "../features/weapons/slice";
import weaponTypesReducer from "../features/weapon-types/slice";
import worldsReducer from "../features/worlds/slice";

export const store = configureStore({
  reducer: {
    artifactSets: artifactSetsReducer,
    artifactSetsRecommendations: artifactSetsRecommendationsReducer,
    artifactSlots: artifactSlotsReducer,
    characterRoles: characterRolesReducer,
    characters: charactersReducer,
    charactersRecommendations: charactersRecommendationsReducer,
    dungeons: dungeonsReducer,
    elementalReactions: elementalReactionsReducer,
    elements: elementsReducer,
    foodTypes: foodTypesReducer,
    rarities: raritiesReducer,
    regions: regionsReducer,
    resourceTypes: resourceTypesReducer,
    resources: resourcesReducer,
    stats: statsReducer,
    talents: talentsReducer,
    tierListsWeapons: tierListsWeaponsReducer,
    weapons: weaponsReducer,
    weaponTypes: weaponTypesReducer,
    worlds: worldsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
