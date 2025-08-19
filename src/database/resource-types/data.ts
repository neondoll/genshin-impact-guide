import type { IResourceType } from "./types";
import { CResourceType } from "./classes";
import { ResourceTypeKeys } from "./enums";

export default {
  [ResourceTypeKeys.CookingIngredient]: new CResourceType("CookingIngredient", "Кухонный ингредиент"),
  [ResourceTypeKeys.Food]: new CResourceType("Food", "Еда"),
  [ResourceTypeKeys.Recipe]: new CResourceType("Recipe", "Рецепт"),
} as Record<IResourceType["key"], IResourceType>;
