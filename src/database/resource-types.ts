import { ResourceTypeKeys } from "./enums/resource-type";
import type { ResourceType } from "./types/resource-type";

class _ResourceType implements ResourceType {
  readonly key: ResourceType["key"];
  readonly name: ResourceType["name"];

  constructor(key: keyof typeof ResourceTypeKeys, name: ResourceType["name"]) {
    this.key = ResourceTypeKeys[key];
    this.name = name;
  }
}

export default {
  [ResourceTypeKeys.CookingIngredient]: new _ResourceType("CookingIngredient", "Кухонный ингредиент"),
  [ResourceTypeKeys.Food]: new _ResourceType("Food", "Еда"),
  [ResourceTypeKeys.Recipe]: new _ResourceType("Recipe", "Рецепт"),
} as Record<ResourceType["key"], ResourceType>;
