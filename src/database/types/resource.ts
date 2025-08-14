import { ResourceCookingIngredientKeys, ResourceFoodKeys, ResourceKeys, ResourceRecipeKeys } from "../enums/resource";
import { ResourceTypeKeys } from "../enums/resource-type";
import type { FoodType } from "./food-type";
import type { ResourceTypeKey } from "./resource-type";

export interface ResourceBase {
  key: ResourceKey;
  image_src: string;
  /* Имя */
  name: string;
  /* Тип */
  type_key: ResourceTypeKey;
  /* Где найти */
  source: string | string[];
}

export interface ResourceCookingIngredient extends ResourceBase {
  key: ResourceCookingIngredientKey;
  image_src: string;
  /* Имя */
  name: string;
  /* Тип */
  type_key: typeof ResourceTypeKeys.CookingIngredient;
  /* Где найти */
  source: string | string[];
}

export interface ResourceFood extends ResourceBase {
  key: ResourceFoodKey;
  image_src: string;
  /* Имя */
  name: string;
  /* Тип */
  type_key: typeof ResourceTypeKeys.Food;
  /* Тип еды */
  food_type_key: FoodType["key"];
  /* Назначение */
  utility: string;
  /* Где найти */
  source: string | string[];
  /* Рецепт */
  recipe_key?: ResourceRecipeKey;
  /* Ингредиенты */
  ingredients?: ResourceRecipeIngredient[];
  /* Связанные блюда */
  related_dish_keys?: ResourceFoodKey[];
}

export interface ResourceRecipe extends ResourceBase {
  key: ResourceRecipeKey;
  image_src: string;
  /* Имя */
  name: string;
  /* Тип */
  type_key: typeof ResourceTypeKeys.Recipe;
  /* Где найти */
  source: string | string[];
  dish_effects: string;
  proficiency: 15 | 20;
  /* Блюдо */
  dish_keys: ResourceFoodKey[];
  /* Ингредиенты */
  ingredients: ResourceRecipeIngredient[];
}

export interface ResourceRecipeIngredient {
  key: ResourceCookingIngredientKey | ResourceFoodKey;
  count: number;
}

export type Resource = ResourceCookingIngredient | ResourceFood | ResourceRecipe;
export type ResourceCookingIngredientKey = typeof ResourceCookingIngredientKeys[keyof typeof ResourceCookingIngredientKeys];
export type ResourceFoodKey = typeof ResourceFoodKeys[keyof typeof ResourceFoodKeys];
export type ResourceKey = typeof ResourceKeys[keyof typeof ResourceKeys];
export type ResourceRecipeKey = typeof ResourceRecipeKeys[keyof typeof ResourceRecipeKeys];
