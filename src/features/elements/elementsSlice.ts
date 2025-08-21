import { createSlice } from "@reduxjs/toolkit";

import elementsAdapter from "./elementsAdapter";

const elementsSlice = createSlice({
  name: "elements",
  initialState: elementsAdapter.getInitialState({ loading: "idle" }, (await import("@/database/elements/data")).default),
  reducers: {},
});

export default elementsSlice;
