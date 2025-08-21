import { createSlice } from "@reduxjs/toolkit";

import statsAdapter from "./statsAdapter";

const statsSlice = createSlice({
  name: "stats",
  initialState: statsAdapter.getInitialState({ loading: "idle" }, (await import("@/database/stats/data")).default),
  reducers: {},
});

export default statsSlice;
