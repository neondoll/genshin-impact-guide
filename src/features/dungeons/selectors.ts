import type { DungeonId } from "./types";
import { type RootState, store } from "@/app/store";
import { dungeonsAdapter } from "./slice";

const selectors = dungeonsAdapter.getSelectors<RootState>(state => state.dungeons);

export function selectDungeonById(id: DungeonId) {
  return selectors.selectById(store.getState(), id);
}

export default selectors;
