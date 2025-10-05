import type { FoodTypeId } from "@/types/food-type";
import type { RootState } from "@/app/store";
import { foodTypesAdapter } from "./slice";
import { store } from "@/app/store";

const selectors = foodTypesAdapter.getSelectors<RootState>(state => state.foodTypes);

export function selectFoodTypeById(id: FoodTypeId) {
  return selectors.selectById(store.getState(), id);
}

export default selectors;
