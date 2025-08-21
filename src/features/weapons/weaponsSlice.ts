import { createSlice } from "@reduxjs/toolkit";

import weaponsAdapter from "./weaponsAdapter";

const weaponsSlice = createSlice({
  name: "weapons",
  initialState: weaponsAdapter.getInitialState({ loading: "idle" }, (await import("@/database/weapons/data")).default),
  reducers: {},
});

export default weaponsSlice;
