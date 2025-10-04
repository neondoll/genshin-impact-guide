import type { TalentId } from "@/types/talent";
import type { RootState } from "@/app/store";
import { store } from "@/app/store";
import { talentsAdapter } from "./slice";

const selectors = talentsAdapter.getSelectors<RootState>(state => state.talents);

export function selectTalentById(id: TalentId) {
  return selectors.selectById(store.getState(), id);
}

export default selectors;
