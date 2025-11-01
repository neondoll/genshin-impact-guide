import type { RootState } from "@/app/store";
import type { StatId } from "@/types/stat";
import { statsAdapter } from "./slice";
import { store } from "@/app/store";

const selectors = statsAdapter.getSelectors<RootState>((state) => state.stats);

export function selectStatById(id: StatId) {
  return selectors.selectById(store.getState(), id);
}

export default selectors;
