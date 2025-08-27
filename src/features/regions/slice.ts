import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import type { Region } from "./types";

export const regionsAdapter = createEntityAdapter({
  selectId: (model: Region) => model.id,
});

const initialState = regionsAdapter.getInitialState({}, (await import("./data")).default);

export const slice = createSlice({
  name: "regions",
  initialState,
  reducers: {},
});

export default slice.reducer;
