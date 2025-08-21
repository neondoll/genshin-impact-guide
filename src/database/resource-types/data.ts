import type { IResourceType } from "./types";
import { CResourceType } from "./classes";
import { ResourceTypeKeys } from "./enums";

export default {
  [ResourceTypeKeys.CookingIngredient]: CResourceType.init([ResourceTypeKeys.CookingIngredient, "Кухонный ингредиент"]),
  [ResourceTypeKeys.Food]: CResourceType.init([ResourceTypeKeys.Food, "Еда"]),
  [ResourceTypeKeys.Recipe]: CResourceType.init([ResourceTypeKeys.Recipe, "Рецепт"]),
} as Record<IResourceType["key"], IResourceType>;
