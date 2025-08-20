import { createSlice } from "@reduxjs/toolkit";

import artifactSlotsAdapter from "./artifactSlotsAdapter";

export default createSlice({
  name: "artifactSlots",
  initialState: artifactSlotsAdapter.getInitialState({ loading: "idle" }, (await import("@/database/artifact-slots/data.ts")).default),
  reducers: {},
});
