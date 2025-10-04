import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import type { Dungeon } from "@/types/dungeon";

export const dungeonsAdapter = createEntityAdapter({
  selectId: (model: Dungeon) => model.id,
});

const initialState = dungeonsAdapter.getInitialState({}, (await import("@/data/dungeons")).default);

export const dungeonsSlice = createSlice({
  name: "dungeons",
  initialState,
  reducers: {},
});

export default dungeonsSlice.reducer;
