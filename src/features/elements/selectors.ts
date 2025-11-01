import type { ElementId } from "@/types/element";
import type { RootState } from "@/app/store";
import { elementsAdapter } from "./slice";
import { store } from "@/app/store";

const selectors = elementsAdapter.getSelectors<RootState>((state) => state.elements);

export function selectElementById(id: ElementId) {
  return selectors.selectById(store.getState(), id);
}

export function selectElementsAll() {
  return selectors.selectAll(store.getState());
}

export default selectors;
