import { configureStore } from "@reduxjs/toolkit";

import {
  artifactSetsRecommendationsSlice, artifactSetsSlice, artifactSlotsSlice, characterRolesSlice,
  charactersRecommendationsSlice, charactersSlice, dungeonsSlice, elementsSlice, raritiesSlice, regionsSlice,
  statsSlice, talentsSlice, tierListsWeaponsSlice, weaponsSlice, weaponTypesSlice,
} from "../features/slices";

export const store = configureStore({
  reducer: {
    artifactSets: artifactSetsSlice.reducer,
    artifactSetsRecommendations: artifactSetsRecommendationsSlice.reducer,
    artifactSlots: artifactSlotsSlice.reducer,
    characterRoles: characterRolesSlice.reducer,
    characters: charactersSlice.reducer,
    charactersRecommendations: charactersRecommendationsSlice.reducer,
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
