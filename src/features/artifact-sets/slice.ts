import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import type { ArtifactSet } from "./types";

export const artifactSetsAdapter = createEntityAdapter({
  selectId: (model: ArtifactSet) => model.id,
  sortComparer: (a: ArtifactSet, b: ArtifactSet) => {
    const aMaxRarity = Math.max(...a.rarities);
    const bMaxRarity = Math.max(...b.rarities);

    return aMaxRarity === bMaxRarity ? a.name.localeCompare(b.name) : bMaxRarity - aMaxRarity;
  },
});

const initialState = artifactSetsAdapter.getInitialState({}, (await import("./data")).default);

export const slice = createSlice({
  name: "artifactSets",
  initialState,
  reducers: {},
});

export default slice.reducer;
