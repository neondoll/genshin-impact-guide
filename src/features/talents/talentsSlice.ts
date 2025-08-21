import { createSlice } from "@reduxjs/toolkit";

import talentsAdapter from "./talentsAdapter";

const talentsSlice = createSlice({
  name: "talents",
  initialState: talentsAdapter.getInitialState({ loading: "idle" }, (await import("@/database/talents/data")).default),
  reducers: {},
});

export default talentsSlice;
