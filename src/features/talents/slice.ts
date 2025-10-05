import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import type { Talent } from "@/types/talent";

export const talentsAdapter = createEntityAdapter({
  selectId: (model: Talent) => model.id,
});

const initialState = talentsAdapter.getInitialState({}, (await import("@/data/talents")).default);

export const talentsSlice = createSlice({
  name: "talents",
  initialState,
  reducers: {},
});

export default talentsSlice.reducer;
