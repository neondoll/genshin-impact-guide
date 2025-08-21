import type { TDungeonKey } from "@/database/dungeons/types";
import { type RootState, store } from "@/app/store";
import dungeonsAdapter from "./dungeonsAdapter";

const dungeonsSelectors = dungeonsAdapter.getSelectors<RootState>(state => state.dungeons);

export function selectDungeonById(id: TDungeonKey) {
  return dungeonsSelectors.selectById(store.getState(), id);
}

export default dungeonsSelectors;
