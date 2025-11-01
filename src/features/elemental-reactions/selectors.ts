import type { ElementalReactionId } from "@/types/elemental-reaction";
import type { RootState } from "@/app/store";
import { elementalReactionsAdapter } from "./slice";
import { store } from "@/app/store";

const selectors = elementalReactionsAdapter.getSelectors<RootState>((state) => state.elementalReactions);

export function selectElementalReactionById(id: ElementalReactionId) {
  return selectors.selectById(store.getState(), id);
}

export default selectors;
