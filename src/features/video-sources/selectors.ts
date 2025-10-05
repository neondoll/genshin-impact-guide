import type { RootState } from "@/app/store";
import type { VideoSourceId } from "@/types/video-source";
import { store } from "@/app/store";
import { videoSourcesAdapter } from "./slice";

const selectors = videoSourcesAdapter.getSelectors<RootState>(state => state.videoSources);

export function selectVideoSourceById(id: VideoSourceId) {
  return selectors.selectById(store.getState(), id);
}

export function selectVideoSourcesAll() {
  return selectors.selectAll(store.getState());
}

export function selectVideoSourcesByIds(ids: VideoSourceId[]) {
  return selectVideoSourcesAll().filter(value => ids.includes(value.id));
}

export default selectors;
