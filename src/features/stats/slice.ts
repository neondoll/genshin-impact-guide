import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import type { IStat } from "@/database/stats/types";

export const statsAdapter = createEntityAdapter({
  selectId: (model: IStat) => model.key,
  sortComparer: (a: IStat, b: IStat) => {
    const aName = a.abbr || a.name;
    const bName = b.abbr || b.name;

    return aName.localeCompare(bName);
  },
});

const initialState = statsAdapter.getInitialState({}, (await import("@/database/stats/data")).default);

export const slice = createSlice({
  name: "stats",
  initialState,
  reducers: {},
});

export default slice.reducer;
