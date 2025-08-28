import type { ResourceId } from "./types";
import { type RootState, store } from "@/app/store";
import { resourcesAdapter } from "./slice";

const selectors = resourcesAdapter.getSelectors<RootState>(state => state.resources);

export function selectResourceById(id: ResourceId) {
  return selectors.selectById(store.getState(), id);
}

export function selectResourcesAll() {
  return selectors.selectAll(store.getState());
}

export default selectors;
