import type { TFoodTypeKey } from "../food-types/types";
import type { TResourceTypeKey } from "../resource-types/types";
import { ResourceCookingIngredientKeys, ResourceFoodKeys, ResourceKeys, ResourceRecipeKeys } from "./enums";
import { ResourceTypeKeys } from "../resource-types/enums";

export interface IResource {
  key: TResourceKey;
  image_src: string;
  /* Имя */
  name: string;
  /* Тип */
  type_key: TResourceTypeKey;
  /* Где найти */
  source: string | string[];
}

export interface IResourceCookingIngredient extends IResource {
  key: TResourceCookingIngredientKey;
  image_src: string;
  /* Имя */
  name: string;
  /* Тип */
  type_key: typeof ResourceTypeKeys.CookingIngredient;
  /* Где найти */
  source: string | string[];
}

export interface IResourceFood extends IResource {
  key: TResourceFoodKey;
  image_src: string;
  /* Имя */
  name: string;
  /* Тип */
  type_key: typeof ResourceTypeKeys.Food;
  /* Тип еды */
  food_type_key: TFoodTypeKey;
  /* Назначение */
  utility: string;
  /* Где найти */
  source: string | string[];
  /* Рецепт */
  recipe_key?: TResourceRecipeKey;
  /* Ингредиенты */
  ingredients?: IResourceIngredient[];
  /* Связанные блюда */
  related_dish_keys?: TResourceFoodKey[];
}

export interface IResourceIngredient {
  key: TResourceCookingIngredientKey | TResourceFoodKey;
  count: number;
}

export interface IResourceRecipe extends IResource {
  key: TResourceRecipeKey;
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
  dish_keys: TResourceFoodKey[];
  /* Ингредиенты */
  ingredients: IResourceIngredient[];
}

export type TResource = IResourceCookingIngredient | IResourceFood | IResourceRecipe;
export type TResourceCookingIngredientKey = typeof ResourceCookingIngredientKeys[keyof typeof ResourceCookingIngredientKeys];
export type TResourceFoodKey = typeof ResourceFoodKeys[keyof typeof ResourceFoodKeys];
export type TResourceKey = typeof ResourceKeys[keyof typeof ResourceKeys];
export type TResourceRecipeKey = typeof ResourceRecipeKeys[keyof typeof ResourceRecipeKeys];
