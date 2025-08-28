import type { ResourceTypeId } from "./types";
import { type RootState, store } from "@/app/store";
import { resourceTypesAdapter } from "./slice";

const selectors = resourceTypesAdapter.getSelectors<RootState>(state => state.resourceTypes);

export function selectResourceTypeById(id: ResourceTypeId) {
  return selectors.selectById(store.getState(), id);
}

export default selectors;
