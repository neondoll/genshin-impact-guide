import type { FoodTypeId } from "./types";
import { type RootState, store } from "@/app/store";
import { foodTypesAdapter } from "./slice";

const selectors = foodTypesAdapter.getSelectors<RootState>(state => state.foodTypes);

export function selectFoodTypeById(id: FoodTypeId) {
  return selectors.selectById(store.getState(), id);
}

export default selectors;
