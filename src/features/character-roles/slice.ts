import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import type { CharacterRole } from "./types";

export const characterRolesAdapter = createEntityAdapter({
  selectId: (model: CharacterRole) => model.id,
  sortComparer: (a: CharacterRole, b: CharacterRole) => a.sort_by - b.sort_by,
});

const initialState = characterRolesAdapter.getInitialState({}, (await import("./data")).default);

export const slice = createSlice({
  name: "characterRoles",
  initialState,
  reducers: {},
});

export default slice.reducer;
