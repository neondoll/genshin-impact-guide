import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import type { WeaponType } from "./types";

export const weaponTypesAdapter = createEntityAdapter({
  selectId: (model: WeaponType) => model.id,
});

const initialState = weaponTypesAdapter.getInitialState({}, (await import("./data")).default);

export const slice = createSlice({
  name: "weaponTypes",
  initialState,
  reducers: {},
});

export default slice.reducer;
