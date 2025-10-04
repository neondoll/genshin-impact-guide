import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import type { Region } from "@/types/region";

export const regionsAdapter = createEntityAdapter({
  selectId: (model: Region) => model.id,
});

const initialState = regionsAdapter.getInitialState({}, (await import("@/data/regions")).default);

export const regionsSlice = createSlice({
  name: "regions",
  initialState,
  reducers: {},
});

export default regionsSlice.reducer;
