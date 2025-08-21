import type { TTalentKey } from "@/database/talents/types";
import { type RootState, store } from "@/app/store";
import talentsAdapter from "./talentsAdapter";

const talentsSelectors = talentsAdapter.getSelectors<RootState>(state => state.talents);

export function selectTalentById(id: TTalentKey) {
  return talentsSelectors.selectById(store.getState(), id);
}

export default talentsSelectors;
