import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import type { VideoSource } from "@/types/video-source";

export const videoSourcesAdapter = createEntityAdapter({
  selectId: (model: VideoSource) => model.id,
  sortComparer: (a: VideoSource, b: VideoSource) => {
    const aDateTime = a.date.getTime();
    const bDateTime = b.date.getTime();

    return aDateTime === bDateTime ? a.title.localeCompare(b.title) : bDateTime - aDateTime;
  },
});

const initialState = videoSourcesAdapter.getInitialState({}, (await import("@/data/video-sources")).default);

export const videoSourcesSlice = createSlice({
  name: "videoSources",
  initialState,
  reducers: {},
});

export default videoSourcesSlice.reducer;
