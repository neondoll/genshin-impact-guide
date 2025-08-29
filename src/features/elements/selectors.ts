import type { ElementId } from "./types";
import { type RootState, store } from "@/app/store";
import { elementsAdapter } from "./slice";

const selectors = elementsAdapter.getSelectors<RootState>(state => state.elements);

export function selectElementById(id: ElementId) {
  return selectors.selectById(store.getState(), id);
}

export function selectElementsAll() {
  return selectors.selectAll(store.getState());
}

export default selectors;
