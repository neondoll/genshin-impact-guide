import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import type { FoodType } from "./types";

export const foodTypesAdapter = createEntityAdapter({
  selectId: (model: FoodType) => model.id,
});

const initialState = foodTypesAdapter.getInitialState({}, (await import("./data")).default);

export const slice = createSlice({
  name: "foodTypes",
  initialState,
  reducers: {},
});

export default slice.reducer;
