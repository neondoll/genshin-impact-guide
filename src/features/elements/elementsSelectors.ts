import type { TElementKey } from "@/database/elements/types";
import { type RootState, store } from "@/app/store";
import elementsAdapter from "./elementsAdapter";

const elementsSelectors = elementsAdapter.getSelectors<RootState>(state => state.elements);

export function selectElementById(id: TElementKey) {
  return elementsSelectors.selectById(store.getState(), id);
}

export function selectElementsAll() {
  return elementsSelectors.selectAll(store.getState());
}

export default elementsSelectors;
