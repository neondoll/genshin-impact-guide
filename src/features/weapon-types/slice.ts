import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import type { WeaponType } from "@/types/weapon-type";

export const weaponTypesAdapter = createEntityAdapter({
  selectId: (model: WeaponType) => model.id,
});

const initialState = weaponTypesAdapter.getInitialState({}, (await import("@/data/weapon-types")).default);

export const weaponTypesSlice = createSlice({
  name: "weaponTypes",
  initialState,
  reducers: {},
});

export default weaponTypesSlice.reducer;
