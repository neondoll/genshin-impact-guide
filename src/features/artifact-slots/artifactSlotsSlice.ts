import { createSlice } from "@reduxjs/toolkit";

import artifactSlotsAdapter from "./artifactSlotsAdapter";

const artifactSlotsSlice = createSlice({
  name: "artifactSlots",
  initialState: artifactSlotsAdapter.getInitialState({ loading: "idle" }, (await import("@/database/artifact-slots/data")).default),
  reducers: {},
});

export default artifactSlotsSlice;
