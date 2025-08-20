import { createSlice } from "@reduxjs/toolkit";

import statsAdapter from "./statsAdapter";

export default createSlice({
  name: "stats",
  initialState: statsAdapter.getInitialState({ loading: "idle" }, (await import("@/database/stats/data")).default),
  reducers: {},
});
