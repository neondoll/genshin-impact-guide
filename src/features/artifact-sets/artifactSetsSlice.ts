import { createSlice } from "@reduxjs/toolkit";

import artifactSetsAdapter from "./artifactSetsAdapter";

export default createSlice({
  name: "artifactSets",
  initialState: artifactSetsAdapter.getInitialState({ loading: "idle" }, (await import("@/database/artifact-sets/data")).default),
  reducers: {},
});
