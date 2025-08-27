import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import type { Element } from "./types";

export const elementsAdapter = createEntityAdapter({
  selectId: (model: Element) => model.id,
});

const initialState = elementsAdapter.getInitialState({}, (await import("./data")).default);

export const slice = createSlice({
  name: "elements",
  initialState,
  reducers: {},
});

export default slice.reducer;
