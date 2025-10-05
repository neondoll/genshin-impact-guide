import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import type { TierListWeapons } from "@/types/tier-list-weapons";
import videoSources from "@/data/video-sources";

export const tierListsWeaponsAdapter = createEntityAdapter({
  selectId: (model: TierListWeapons) => model.title,
  sortComparer: (a: TierListWeapons, b: TierListWeapons) => {
    const aVideoSourceDateTime = videoSources[a.video_source_id].date.getTime();
    const bVideoSourceDateTime = videoSources[b.video_source_id].date.getTime();

    return aVideoSourceDateTime === bVideoSourceDateTime ? a.title.localeCompare(b.title) : bVideoSourceDateTime - aVideoSourceDateTime;
  },
});

const initialState = tierListsWeaponsAdapter.getInitialState({}, (await import("@/data/tier-lists-weapons")).default);

export const tierListsWeaponsSlice = createSlice({
  name: "tierListsWeapons",
  initialState,
  reducers: {},
});

export default tierListsWeaponsSlice.reducer;
