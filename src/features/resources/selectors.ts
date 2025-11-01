import type { ResourceFood, ResourceId, ResourceRecipe } from "@/types/resource";
import type { RootState } from "@/app/store";
import { resourcesAdapter } from "./slice";
import { ResourceTypeIds } from "@/enums/resource-type";
import { store } from "@/app/store";

const selectors = resourcesAdapter.getSelectors<RootState>((state) => state.resources);

export function selectResourceById(id: ResourceId) {
  return selectors.selectById(store.getState(), id);
}

export function selectResourceFoodsAll() {
  return selectResourcesAll().filter((value) => value.type_id === ResourceTypeIds.Food) as ResourceFood[];
}

export function selectResourceFoodsByIds(ids: ResourceFood["id"][]) {
  return selectResourceFoodsAll().filter((value) => ids.includes(value.id));
}

export function selectResourceFoodsByRecipeId(id: ResourceRecipe["id"]) {
  return selectResourceFoodsAll().filter((value) => value.recipe_id === id);
}

export function selectResourceRecipeById(id: ResourceRecipe["id"]) {
  return selectors.selectById(store.getState(), id) as ResourceRecipe;
}

export function selectResourcesAll() {
  return selectors.selectAll(store.getState());
}

export default selectors;
