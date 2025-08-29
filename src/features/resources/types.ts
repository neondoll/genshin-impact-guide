import type { FoodTypeId } from "../food-types/types";
import type { ResourceTypeId } from "../resource-types/types";
import {
  ResourceCookingIngredientIds,
  ResourceFoodIds,
  ResourceIds,
  ResourceLocalSpecialtyInazumaIds,
  ResourceLocalSpecialtyNatlanIds,
  ResourceMaterialIds,
  ResourceRecipeIds,
} from "./enums";
import { ResourceTypeIds } from "../resource-types/enums";

export interface ResourceAbstract {
  id: ResourceId;
  image_src: string;
  /* Имя */
  name: string;
  /* Тип */
  type_id: ResourceTypeId;
  /* Где найти */
  source: string | string[];
}

export interface ResourceCookingIngredient extends ResourceAbstract {
  id: ResourceCookingIngredientId;
  image_src: string;
  /* Имя */
  name: string;
  /* Тип */
  type_id: typeof ResourceTypeIds.CookingIngredient;
  /* Где найти */
  source: string | string[];
}

export interface ResourceFood extends ResourceAbstract {
  id: ResourceFoodId;
  image_src: string;
  /* Имя */
  name: string;
  /* Тип */
  type_id: typeof ResourceTypeIds.Food;
  /* Тип еды */
  food_type_id: FoodTypeId;
  /* Назначение */
  utility: string;
  /* Где найти */
  source: string | string[];
  /* Рецепт */
  recipe_id?: ResourceRecipeId;
}

export interface ResourceLocalSpecialtyInazuma extends ResourceAbstract {
  id: ResourceLocalSpecialtyInazumaId;
  image_src: string;
  /* Имя */
  name: string;
  /* Тип */
  type_id: typeof ResourceTypeIds.LocalSpecialtyInazuma;
  /* Где найти */
  source: string | string[];
}

export interface ResourceLocalSpecialtyNatlan extends ResourceAbstract {
  id: ResourceLocalSpecialtyNatlanId;
  image_src: string;
  /* Имя */
  name: string;
  /* Тип */
  type_id: typeof ResourceTypeIds.LocalSpecialtyNatlan;
  /* Где найти */
  source: string | string[];
}

export interface ResourceMaterial extends ResourceAbstract {
  id: ResourceMaterialId;
  image_src: string;
  /* Имя */
  name: string;
  /* Тип */
  type_id: typeof ResourceTypeIds.Material;
  /* Где найти */
  source: string | string[];
}

export interface ResourceRecipe extends ResourceAbstract {
  id: ResourceRecipeId;
  image_src: string;
  /* Имя */
  name: string;
  /* Тип */
  type_id: typeof ResourceTypeIds.Recipe;
  /* Где найти */
  source: string | string[];
  dish_effects: string;
  proficiency?: 15 | 20;
  /* Ингредиенты */
  ingredients: ResourceRecipeIngredient[];
}

export interface ResourceRecipeIngredient {
  id: ResourceCookingIngredientId | ResourceFoodId | ResourceLocalSpecialtyInazumaId | ResourceLocalSpecialtyNatlanId | ResourceMaterialId;
  count: number;
}

export type Resource = ResourceCookingIngredient | ResourceFood | ResourceLocalSpecialtyInazuma
  | ResourceLocalSpecialtyNatlan | ResourceMaterial | ResourceRecipe;
export type ResourceCookingIngredientId = typeof ResourceCookingIngredientIds[keyof typeof ResourceCookingIngredientIds];
export type ResourceFoodId = typeof ResourceFoodIds[keyof typeof ResourceFoodIds];
export type ResourceId = typeof ResourceIds[keyof typeof ResourceIds];
export type ResourceLocalSpecialtyInazumaId = typeof ResourceLocalSpecialtyInazumaIds[keyof typeof ResourceLocalSpecialtyInazumaIds];
export type ResourceLocalSpecialtyNatlanId = typeof ResourceLocalSpecialtyNatlanIds[keyof typeof ResourceLocalSpecialtyNatlanIds];
export type ResourceMaterialId = typeof ResourceMaterialIds[keyof typeof ResourceMaterialIds];
export type ResourceRecipeId = typeof ResourceRecipeIds[keyof typeof ResourceRecipeIds];
