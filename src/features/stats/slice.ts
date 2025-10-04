import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import type { Stat } from "@/types/stat";

export const statsAdapter = createEntityAdapter({
  selectId: (model: Stat) => model.id,
  sortComparer: (a: Stat, b: Stat) => {
    const aName = a.abbr || a.name;
    const bName = b.abbr || b.name;

    return aName.localeCompare(bName);
  },
});

const initialState = statsAdapter.getInitialState({}, (await import("@/data/stats")).default);

export const statsSlice = createSlice({
  name: "stats",
  initialState,
  reducers: {},
});

export default statsSlice.reducer;
