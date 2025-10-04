import type { ResourceTypeId } from "@/types/resource-type";
import type { RootState } from "@/app/store";
import { resourceTypesAdapter } from "./slice";
import { store } from "@/app/store";

const selectors = resourceTypesAdapter.getSelectors<RootState>(state => state.resourceTypes);

export function selectResourceTypeById(id: ResourceTypeId) {
  return selectors.selectById(store.getState(), id);
}

export default selectors;
