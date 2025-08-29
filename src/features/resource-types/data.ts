import type { ResourceType } from "./types";
import { ResourceTypeIds } from "./enums";

class ResourceTypeClass implements ResourceType {
  readonly id: ResourceType["id"];
  readonly name: ResourceType["name"];

  constructor(id: ResourceType["id"], name: ResourceType["name"]) {
    this.id = id;
    this.name = name;
  }

  static init(params: ConstructorParameters<typeof ResourceTypeClass>) {
    return new ResourceTypeClass(...params);
  }
}

export default {
  [ResourceTypeIds.CookingIngredient]: ResourceTypeClass.init([ResourceTypeIds.CookingIngredient, "Кухонный ингредиент"]),
  [ResourceTypeIds.Food]: ResourceTypeClass.init([ResourceTypeIds.Food, "Еда"]),
  [ResourceTypeIds.LocalSpecialtyNatlan]: ResourceTypeClass.init([ResourceTypeIds.LocalSpecialtyNatlan, "Диковина Натлана"]),
  [ResourceTypeIds.Recipe]: ResourceTypeClass.init([ResourceTypeIds.Recipe, "Рецепт"]),
} as Record<ResourceType["id"], ResourceType>;
