import { RegionIds } from "../regions/enums";

export const ResourceTypeIds = {
  /* Кухонный ингредиент */ CookingIngredient: "cooking_ingredient",
  /* Еда                 */ Food: "food",
  /* Диковинка Инадзумы  */ LocalSpecialtyInazuma: `local_specialty_${RegionIds.Inazuma}`,
  /* Диковина Натлана    */ LocalSpecialtyNatlan: `local_specialty_${RegionIds.Natlan}`,
  /* Материал            */ Material: "material",
  /* Рецепт              */ Recipe: "recipe",
};
