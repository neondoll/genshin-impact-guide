import { RegionIds } from "../regions/enums";

export const ResourceTypeIds = {
  /* Кухонный ингредиент  */ CookingIngredient: "cooking_ingredient",
  /* Еда                  */ Food: "food",
  /* Диковинка Фонтейна   */ LocalSpecialtyFontaine: `local_specialty_${RegionIds.Fontaine}`,
  /* Диковинка Инадзумы   */ LocalSpecialtyInazuma: `local_specialty_${RegionIds.Inazuma}`,
  /* Диковинка Ли Юэ      */ LocalSpecialtyLiyue: `local_specialty_${RegionIds.Liyue}`,
  /* Диковинка Мондштадта */ LocalSpecialtyMondstadt: `local_specialty_${RegionIds.Mondstadt}`,
  /* Диковинка Натлана    */ LocalSpecialtyNatlan: `local_specialty_${RegionIds.Natlan}`,
  /* Материал             */ Material: "material",
  /* Рецепт               */ Recipe: "recipe",
} as const;
