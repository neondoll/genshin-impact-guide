import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import type { FoodType } from "@/types/food-type";

export const foodTypesAdapter = createEntityAdapter({
  selectId: (model: FoodType) => model.id,
});

const initialState = foodTypesAdapter.getInitialState({}, (await import("@/data/food-types")).default);

export const foodTypesSlice = createSlice({
  name: "foodTypes",
  initialState,
  reducers: {},
});

export default foodTypesSlice.reducer;
