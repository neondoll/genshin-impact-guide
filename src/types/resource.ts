import type { CharacterId } from "./character";
import type { FoodTypeId } from "./food-type";
import type { Rarity } from "./rarity";
import type { ResourceTypeId } from "./resource-type";
import {
  type ResourceCookingIngredientIds,
  type ResourceFoodIds,
  type ResourceIds,
  type ResourceLocalSpecialtyFontaineIds,
  type ResourceLocalSpecialtyInazumaIds,
  type ResourceLocalSpecialtyLiyueIds,
  type ResourceLocalSpecialtyMondstadtIds,
  type ResourceLocalSpecialtyNatlanIds,
  type ResourceMaterialIds,
  type ResourceRecipeIds,
} from "@/enums/resource";
import { type ResourceTypeIds } from "@/enums/resource-type";

export interface ResourceAbstract {
  id: ResourceId;
  image_src: string;
  /* Имя */
  name: string;
  /* Тип */
  type_id: ResourceTypeId;
  /* Редкость */
  rarity?: Rarity;
  /* Где найти */
  source?: string | string[];
}

export interface ResourceCookingIngredient extends ResourceAbstract {
  id: ResourceCookingIngredientId;
  image_src: string;
  /* Имя */
  name: string;
  /* Тип */
  type_id: typeof ResourceTypeIds.CookingIngredient;
  /* Редкость */
  rarity?: Rarity;
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
  /* Редкость */
  rarity?: Rarity;
  /* Назначение */
  utility: string;
  /* Где найти */
  source: string | string[];
  /* Связанные предметы */
  related_item_ids?: ResourceFoodId[];
  /* Рецепт */
  recipe_id?: ResourceRecipeId;
  /* Основное блюдо */
  base_dish_id?: ResourceFoodId;
  /* Персонаж */
  character_id?: CharacterId;
  /* Связанные блюда */
  related_dish_ids?: ResourceFoodId[];
  /* Особое блюдо */
  special_dish_id?: ResourceFoodId;
}

export interface ResourceLocalSpecialtyFontaine extends ResourceAbstract {
  id: ResourceLocalSpecialtyFontaineId;
  image_src: string;
  /* Имя */
  name: string;
  /* Тип */
  type_id: typeof ResourceTypeIds.LocalSpecialtyFontaine;
  /* Редкость */
  rarity?: Rarity;
  /* Где найти */
  source: string | string[];
}

export interface ResourceLocalSpecialtyInazuma extends ResourceAbstract {
  id: ResourceLocalSpecialtyInazumaId;
  image_src: string;
  /* Имя */
  name: string;
  /* Тип */
  type_id: typeof ResourceTypeIds.LocalSpecialtyInazuma;
  /* Редкость */
  rarity?: Rarity;
  /* Где найти */
  source: string | string[];
}

export interface ResourceLocalSpecialtyLiyue extends ResourceAbstract {
  id: ResourceLocalSpecialtyLiyueId;
  image_src: string;
  /* Имя */
  name: string;
  /* Тип */
  type_id: typeof ResourceTypeIds.LocalSpecialtyLiyue;
  /* Редкость */
  rarity?: Rarity;
  /* Где найти */
  source: string | string[];
}

export interface ResourceLocalSpecialtyMondstadt extends ResourceAbstract {
  id: ResourceLocalSpecialtyMondstadtId;
  image_src: string;
  /* Имя */
  name: string;
  /* Тип */
  type_id: typeof ResourceTypeIds.LocalSpecialtyMondstadt;
  /* Редкость */
  rarity?: Rarity;
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
  /* Редкость */
  rarity?: Rarity;
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
  /* Редкость */
  rarity?: Rarity;
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
  /* Редкость */
  rarity?: Rarity;
  /* Где найти */
  source?: string | string[];
  /* Эффекты приготовления блюд */
  dish_effects: string;
  /* Умение */
  proficiency?: number;
  /* Ингредиенты */
  ingredients: ResourceRecipeIngredient[];
}

export interface ResourceRecipeIngredient {
  id:
    | ResourceCookingIngredientId
    | ResourceFoodId
    | ResourceLocalSpecialtyFontaineId
    | ResourceLocalSpecialtyInazumaId
    | ResourceLocalSpecialtyLiyueId
    | ResourceLocalSpecialtyMondstadtId
    | ResourceLocalSpecialtyNatlanId
    | ResourceMaterialId;
  count: number;
}

export type Resource
  = | ResourceCookingIngredient
    | ResourceFood
    | ResourceLocalSpecialtyFontaine
    | ResourceLocalSpecialtyInazuma
    | ResourceLocalSpecialtyLiyue
    | ResourceLocalSpecialtyMondstadt
    | ResourceLocalSpecialtyNatlan
    | ResourceMaterial
    | ResourceRecipe;
export type ResourceCookingIngredientId
  = typeof ResourceCookingIngredientIds[keyof typeof ResourceCookingIngredientIds];
export type ResourceFoodId
  = typeof ResourceFoodIds[keyof typeof ResourceFoodIds];
export type ResourceId
  = typeof ResourceIds[keyof typeof ResourceIds];
export type ResourceLocalSpecialtyFontaineId
  = typeof ResourceLocalSpecialtyFontaineIds[keyof typeof ResourceLocalSpecialtyFontaineIds];
export type ResourceLocalSpecialtyInazumaId
  = typeof ResourceLocalSpecialtyInazumaIds[keyof typeof ResourceLocalSpecialtyInazumaIds];
export type ResourceLocalSpecialtyLiyueId
  = typeof ResourceLocalSpecialtyLiyueIds[keyof typeof ResourceLocalSpecialtyLiyueIds];
export type ResourceLocalSpecialtyMondstadtId
  = typeof ResourceLocalSpecialtyMondstadtIds[keyof typeof ResourceLocalSpecialtyMondstadtIds];
export type ResourceLocalSpecialtyNatlanId
  = typeof ResourceLocalSpecialtyNatlanIds[keyof typeof ResourceLocalSpecialtyNatlanIds];
export type ResourceMaterialId
  = typeof ResourceMaterialIds[keyof typeof ResourceMaterialIds];
export type ResourceRecipeId
  = typeof ResourceRecipeIds[keyof typeof ResourceRecipeIds];
