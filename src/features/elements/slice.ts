import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import type { Element } from "@/types/element";

export const elementsAdapter = createEntityAdapter({
  selectId: (model: Element) => model.id,
});

const initialState = elementsAdapter.getInitialState({}, (await import("@/data/elements")).default);

export const elementsSlice = createSlice({
  name: "elements",
  initialState,
  reducers: {},
});

export default elementsSlice.reducer;
