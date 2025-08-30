import type { ResourceFood, ResourceId, ResourceRecipe } from "./types";
import { type RootState, store } from "@/app/store";
import { resourcesAdapter } from "./slice";
import { ResourceTypeIds } from "@/features/resource-types/enums.ts";

const selectors = resourcesAdapter.getSelectors<RootState>(state => state.resources);

export function selectResourceById(id: ResourceId) {
  return selectors.selectById(store.getState(), id);
}

export function selectResourceFoodsAll() {
  return selectResourcesAll().filter(value => value.type_id === ResourceTypeIds.Food) as ResourceFood[];
}

export function selectResourceFoodsByIds(ids: ResourceFood["id"][]) {
  return selectResourceFoodsAll().filter(value => ids.includes(value.id));
}

export function selectResourceFoodsByRecipeId(id: ResourceRecipe["id"]) {
  return selectResourceFoodsAll().filter(value => value.recipe_id === id);
}

export function selectResourceRecipeById(id: ResourceRecipe["id"]) {
  return selectors.selectById(store.getState(), id) as ResourceRecipe;
}

export function selectResourcesAll() {
  return selectors.selectAll(store.getState());
}

export function selectResourcesByIds(ids: ResourceId[]) {
  return selectResourcesAll().filter(value => ids.includes(value.id));
}

export default selectors;
