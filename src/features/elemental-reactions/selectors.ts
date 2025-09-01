import type { ElementalReactionId } from "./types";
import { type RootState, store } from "@/app/store";
import { elementalReactionsAdapter } from "./slice";

const selectors = elementalReactionsAdapter.getSelectors<RootState>(state => state.elementalReactions);

export function selectElementalReactionById(id: ElementalReactionId) {
  return selectors.selectById(store.getState(), id);
}

export function selectElementalReactionsAll() {
  return selectors.selectAll(store.getState());
}

export default selectors;
