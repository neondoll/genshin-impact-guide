import { createSlice } from "@reduxjs/toolkit";

import charactersAdapter from "./charactersAdapter";

const charactersSlice = createSlice({
  name: "characters",
  initialState: charactersAdapter.getInitialState({ loading: "idle" }, (await import("@/database/characters/data")).default),
  reducers: {},
});

export default charactersSlice;
