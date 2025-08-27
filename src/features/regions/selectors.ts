import type { RegionId } from "./types";
import { type RootState, store } from "@/app/store";
import { regionsAdapter } from "./slice";

const selectors = regionsAdapter.getSelectors<RootState>(state => state.regions);

export function selectRegionById(id: RegionId) {
  return selectors.selectById(store.getState(), id);
}

export default selectors;
