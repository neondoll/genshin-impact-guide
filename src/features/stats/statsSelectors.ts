import type { TStatKey } from "@/database/stats/types";
import { type RootState, store } from "@/app/store";
import statsAdapter from "./statsAdapter";

const statsSelectors = statsAdapter.getSelectors<RootState>(state => state.stats);

export function selectStatById(id: TStatKey) {
  return statsSelectors.selectById(store.getState(), id);
}

export default statsSelectors;
