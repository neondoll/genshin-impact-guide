import { createSlice } from "@reduxjs/toolkit";

import weaponTypesAdapter from "./weaponTypesAdapter";

const weaponTypesSlice = createSlice({
  name: "weaponTypes",
  initialState: weaponTypesAdapter.getInitialState({ loading: "idle" }, (await import("@/database/weapon-types/data")).default),
  reducers: {},
});

export default weaponTypesSlice;
