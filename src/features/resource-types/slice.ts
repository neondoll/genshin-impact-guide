import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import type { ResourceType } from "@/types/resource-type";

export const resourceTypesAdapter = createEntityAdapter({
  selectId: (model: ResourceType) => model.id,
});

const initialState = resourceTypesAdapter.getInitialState({}, (await import("@/data/resource-types")).default);

export const resourceTypesSlice = createSlice({
  name: "resourceTypes",
  initialState,
  reducers: {},
});

export default resourceTypesSlice.reducer;
