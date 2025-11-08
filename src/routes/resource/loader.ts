import type { Character } from "@/types/character";
import type { FoodType } from "@/types/food-type";
import type { Resource, ResourceFood, ResourceRecipe, ResourceRecipeIngredient } from "@/types/resource";
import type { ResourceType } from "@/types/resource-type";
import { resourcesAdapter } from "@/features/resources/slice";
import { ResourceTypeIds } from "@/enums/resource-type";
import { selectCharacterById } from "@/features/characters/selectors";
import { selectFoodTypeById } from "@/features/food-types/selectors";
import {
  selectResourceById,
  selectResourceFoodsByIds,
  selectResourceFoodsByRecipeId,
  selectResourceRecipeById,
} from "@/features/resources/selectors";
import { selectResourceTypeById } from "@/features/resource-types/selectors";

export interface ResourceLoaderArgs {
  params: Record<string, string | undefined>;
}

export interface ResourceLoaderReturn {
  foodType?: FoodType;
  propertyBaseDishes?: ResourceFood[];
  propertyCharacter?: Character;
  propertyDishes?: ResourceFood[];
  propertyIngredients?: Array<ResourceRecipeIngredient & { item?: Resource }>;
  propertyRecipe?: ResourceRecipe;
  propertyRelatedDishes?: ResourceFood[];
  propertyRelatedItems?: ResourceFood[];
  propertySpecialDish?: ResourceFood;
  resource?: Resource;
  resourceType?: ResourceType;
}

export default function resourceLoader({ params }: ResourceLoaderArgs): ResourceLoaderReturn {
  const resourceId = params.resourceId as Resource["id"];

  const resource = selectResourceById(resourceId);

  let foodType = undefined;
  let propertyBaseDishes = undefined;
  let propertyCharacter = undefined;
  let propertyDishes = undefined;
  let propertyIngredients = undefined;
  let propertyRecipe = undefined;
  let propertyRelatedDishes = undefined;
  let propertyRelatedItems = undefined;
  let propertySpecialDish = undefined;
  let resourceType = undefined;

  if (resource) {
    resourceType = selectResourceTypeById(resource.type_id);

    switch (resource.type_id) {
      case ResourceTypeIds.Food: {
        const food = resource as ResourceFood;

        foodType = selectFoodTypeById(food.food_type_id);

        if (food.character_id) {
          propertyCharacter = selectCharacterById(food.character_id);
        }

        if (food.recipe_id) {
          const foodRelatedDishes = selectResourceFoodsByRecipeId(food.recipe_id).filter((dish) => dish.id !== food.id);

          propertyRecipe = selectResourceRecipeById(food.recipe_id);
          propertyIngredients = propertyRecipe.ingredients
            .map((ingredient) => {
              return { ...ingredient, item: selectResourceById(ingredient.id) };
            })
            .sort((a, b) => {
              if (!resourcesAdapter.sortComparer || !a.item || !b.item) return 0;

              return resourcesAdapter.sortComparer(a.item, b.item);
            });

          if (food.character_id) {
            propertyBaseDishes = foodRelatedDishes;
          }
          else {
            propertyRelatedDishes = foodRelatedDishes;

            const propertySpecialDishIndex = propertyRelatedDishes.findIndex((dish) => Boolean(dish.character_id));

            if (propertySpecialDishIndex >= 0) {
              propertySpecialDish = propertyRelatedDishes.splice(propertySpecialDishIndex, 1)[0];
            }
          }
        }

        if (food.related_item_ids) {
          propertyRelatedItems = selectResourceFoodsByIds(food.related_item_ids);
        }

        break;
      }
      case ResourceTypeIds.Recipe: {
        const recipe = resource as ResourceRecipe;

        propertyDishes = selectResourceFoodsByRecipeId(recipe.id);
        propertyIngredients = recipe.ingredients
          .map((ingredient) => {
            return { ...ingredient, item: selectResourceById(ingredient.id) };
          })
          .sort((a, b) => {
            if (!resourcesAdapter.sortComparer || !a.item || !b.item) return 0;

            return resourcesAdapter.sortComparer(a.item, b.item);
          });

        const propertySpecialDishIndex = propertyDishes.findIndex((dish) => Boolean(dish.character_id));

        if (propertySpecialDishIndex >= 0) {
          propertySpecialDish = propertyDishes.splice(propertySpecialDishIndex, 1)[0];
        }

        break;
      }
    }

    if (resource.rarity) {
      window.document.documentElement.classList.add(`rarity-${resource.rarity}`);
    }
  }

  return {
    foodType,
    propertyBaseDishes,
    propertyCharacter,
    propertyDishes,
    propertyIngredients,
    propertyRecipe,
    propertyRelatedDishes,
    propertyRelatedItems,
    propertySpecialDish,
    resource,
    resourceType,
  };
}
