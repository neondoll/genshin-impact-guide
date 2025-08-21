import { createSlice } from "@reduxjs/toolkit";

import characterRolesAdapter from "./characterRolesAdapter";

const characterRolesSlice = createSlice({
  name: "characterRoles",
  initialState: characterRolesAdapter.getInitialState({ loading: "idle" }, (await import("@/database/character-roles/data")).default),
  reducers: {},
});

export default characterRolesSlice;
