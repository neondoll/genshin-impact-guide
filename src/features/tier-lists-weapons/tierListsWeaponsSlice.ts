import { createSlice } from "@reduxjs/toolkit";

import tierListsWeaponsAdapter from "./tierListsWeaponsAdapter";

const tierListsWeaponsSlice = createSlice({
  name: "tierListsWeapons",
  initialState: tierListsWeaponsAdapter.getInitialState({ loading: "idle" }, (await import("@/database/tier-lists-weapons/data")).default),
  reducers: {},
});

export default tierListsWeaponsSlice;
