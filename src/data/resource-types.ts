import type { ResourceType as Type } from "@/types/resource-type";
import { ResourceType as Class } from "@/classes/resource-type";
import { ResourceTypeIds } from "@/enums/resource-type";

export default {
  [ResourceTypeIds.CookingIngredient]: Class.init([ResourceTypeIds.CookingIngredient, "Кухонный ингредиент"]),
  [ResourceTypeIds.Food]: Class.init([ResourceTypeIds.Food, "Еда"]),
  [ResourceTypeIds.LocalSpecialtyFontaine]: Class.init([ResourceTypeIds.LocalSpecialtyFontaine, "Диковинка Фонтейна"]),
  [ResourceTypeIds.LocalSpecialtyInazuma]: Class.init([ResourceTypeIds.LocalSpecialtyInazuma, "Диковинка Инадзумы"]),
  [ResourceTypeIds.LocalSpecialtyLiyue]: Class.init([ResourceTypeIds.LocalSpecialtyLiyue, "Диковинка Ли Юэ"]),
  [ResourceTypeIds.LocalSpecialtyMondstadt]: Class.init([ResourceTypeIds.LocalSpecialtyMondstadt, "Диковинка Мондштадта"]),
  [ResourceTypeIds.LocalSpecialtyNatlan]: Class.init([ResourceTypeIds.LocalSpecialtyNatlan, "Диковинка Натлана"]),
  [ResourceTypeIds.Material]: Class.init([ResourceTypeIds.Material, "Материал"]),
  [ResourceTypeIds.Recipe]: Class.init([ResourceTypeIds.Recipe, "Рецепт"]),
} as Record<Type["id"], Type>;
