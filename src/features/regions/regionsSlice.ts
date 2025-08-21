import { createSlice } from "@reduxjs/toolkit";

import regionsAdapter from "./regionsAdapter";

const regionsSlice = createSlice({
  name: "regions",
  initialState: regionsAdapter.getInitialState({ loading: "idle" }, (await import("@/database/regions/data")).default),
  reducers: {},
});

export default regionsSlice;
