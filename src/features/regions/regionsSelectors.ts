import type { TRegionKey } from "@/database/regions/types";
import { type RootState, store } from "@/app/store";
import regionsAdapter from "./regionsAdapter";

const regionsSelectors = regionsAdapter.getSelectors<RootState>(state => state.regions);

export function selectRegionById(id: TRegionKey) {
  return regionsSelectors.selectById(store.getState(), id);
}

export default regionsSelectors;
