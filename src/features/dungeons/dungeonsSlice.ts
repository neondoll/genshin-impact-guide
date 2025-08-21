import { createSlice } from "@reduxjs/toolkit";

import dungeonsAdapter from "./dungeonsAdapter";

const dungeonsSlice = createSlice({
  name: "dungeons",
  initialState: dungeonsAdapter.getInitialState({ loading: "idle" }, (await import("@/database/dungeons/data")).default),
  reducers: {},
});

export default dungeonsSlice;
