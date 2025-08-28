import type { StatId } from "./types";
import { type RootState, store } from "@/app/store";
import { statsAdapter } from "./slice";

const selectors = statsAdapter.getSelectors<RootState>(state => state.stats);

export function selectStatById(id: StatId) {
  return selectors.selectById(store.getState(), id);
}

export default selectors;
