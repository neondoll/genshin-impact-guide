export const ResourceCookingIngredientKeys = {
  /* Ягода         */ Berry: "berry",
  /* Персик зайтун */ ZaytunPeach: "zaytun_peach",
} as const;
export const ResourceFoodKeys = {
  /* Яблоко                         */ Apple: "apple",
  /* «Беседы весёлых ночей»         */ ChatterOfJoyfulNights: "chatter_of_joyful_nights",
  /* Вкусная «Радость мясоеда»      */ DeliciousMeatLoversFeast: "delicious_meat_lovers_feast",
  /* Вкусный нектар девяти фруктов  */ DeliciousNineFruitNectar: "delicious_nine_fruit_nectar",
  /* «Радость мясоеда»              */ MeatLoversFeast: "meat_lovers_feast",
  /* Нектар девяти фруктов          */ NineFruitNectar: "nine_fruit_nectar",
  /* Закатник                       */ Sunsettia: "sunsettia",
  /* Странная «Радость мясоеда»     */ SuspiciousMeatLoversFeast: "suspicious_meat_lovers_feast",
  /* Странный нектар девяти фруктов */ SuspiciousNineFruitNectar: "suspicious_nine_fruit_nectar",
} as const;
export const ResourceRecipeKeys = {
  /* Рецепт: «Радость мясоеда»     */ RecipeMeatLoversFeast: "recipe_meat_lovers_feast",
  /* Рецепт: Нектар девяти фруктов */ RecipeNineFruitNectar: "recipe_nine_fruit_nectar",
} as const;
export const ResourceKeys = {
  ...ResourceCookingIngredientKeys,
  ...ResourceFoodKeys,
  ...ResourceRecipeKeys,
} as const;
