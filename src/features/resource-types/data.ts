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
  [ResourceTypeIds.LocalSpecialtyInazuma]: ResourceTypeClass.init([ResourceTypeIds.LocalSpecialtyInazuma, "Диковинка Инадзумы"]),
  [ResourceTypeIds.LocalSpecialtyNatlan]: ResourceTypeClass.init([ResourceTypeIds.LocalSpecialtyNatlan, "Диковинка Натлана"]),
  [ResourceTypeIds.Material]: ResourceTypeClass.init([ResourceTypeIds.Material, "Материал"]),
  [ResourceTypeIds.Recipe]: ResourceTypeClass.init([ResourceTypeIds.Recipe, "Рецепт"]),
} as Record<ResourceType["id"], ResourceType>;
