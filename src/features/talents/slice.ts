import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import type { Talent } from "./types";

export const talentsAdapter = createEntityAdapter({
  selectId: (model: Talent) => model.id,
});

const initialState = talentsAdapter.getInitialState({}, (await import("./data")).default);

export const slice = createSlice({
  name: "talents",
  initialState,
  reducers: {},
});

export default slice.reducer;
