import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import type { CharacterRole } from "@/types/character-role";

export const characterRolesAdapter = createEntityAdapter({
  selectId: (model: CharacterRole) => model.id,
  sortComparer: (a: CharacterRole, b: CharacterRole) => a.sortOrder - b.sortOrder,
});

const initialState = characterRolesAdapter.getInitialState({}, (await import("@/data/character-roles")).default);

export const characterRolesSlice = createSlice({
  name: "characterRoles",
  initialState,
  reducers: {},
});

export default characterRolesSlice.reducer;
