export const ResourceCookingIngredientIds = {
  /* Ягода          */ Berry: "berry",
  /* Яйцо           */ BirdEgg: "bird_egg",
  /* Сыр            */ Cheese: "cheese",
  /* Кофейные зёрна */ CoffeeBeans: "coffee_beans",
  /* Мука           */ Flour: "flour",
  /* Мясо птицы     */ Fowl: "fowl",
  /* Злакофрукт     */ Grainfruit: "grainfruit",
  /* Мята           */ Mint: "mint",
  /* Лук            */ Onion: "onion",
  /* Картофель      */ Potato: "potato",
  /* Мясо креветки  */ ShrimpMeat: "shrimp_meat",
  /* Сахар          */ Sugar: "sugar",
  /* Персик зайтун  */ ZaytunPeach: "zaytun_peach",
} as const;
export const ResourceFoodIds = {
  /* Яблоко                         */ Apple: "apple",
  /* «Беседы весёлых ночей»         */ ChatterOfJoyfulNights: "chatter_of_joyful_nights",
  /* Вкусный «Лёгкий морской бриз»  */ DeliciousGentleSeaBreeze: "delicious_gentle_sea_breeze",
  /* Вкусная «Радость мясоеда»      */ DeliciousMeatLoversFeast: "delicious_meat_lovers_feast",
  /* Вкусные мини-мешочки аши       */ DeliciousMiniAshaPockets: "delicious_mini_asha_pockets",
  /* Вкусный нанасовый пирог        */ DeliciousNanasCake: "delicious_nanas_cake",
  /* Вкусный нектар девяти фруктов  */ DeliciousNineFruitNectar: "delicious_nine_fruit_nectar",
  /* Вкусный биск с креветками      */ DeliciousShrimpBisque: "delicious_shrimp_bisque",
  /* «Лёгкий морской бриз»          */ GentleSeaBreeze: "gentle_sea_breeze",
  /* «Радость мясоеда»              */ MeatLoversFeast: "meat_lovers_feast",
  /* Мини-мешочки аши               */ MiniAshaPockets: "mini_asha_pockets",
  /* Нанасовый пирог                */ NanasCake: "nanas_cake",
  /* Нектар девяти фруктов          */ NineFruitNectar: "nine_fruit_nectar",
  /* Биск с креветками              */ ShrimpBisque: "shrimp_bisque",
  /* Закатник                       */ Sunsettia: "sunsettia",
  /* Странный «Лёгкий морской бриз» */ SuspiciousGentleSeaBreeze: "suspicious_gentle_sea_breeze",
  /* Странная «Радость мясоеда»     */ SuspiciousMeatLoversFeast: "suspicious_meat_lovers_feast",
  /* Странные мини-мешочки аши      */ SuspiciousMiniAshaPockets: "suspicious_mini_asha_pockets",
  /* Странный нанасовый пирог       */ SuspiciousNanasCake: "suspicious_nanas_cake",
  /* Странный нектар девяти фруктов */ SuspiciousNineFruitNectar: "suspicious_nine_fruit_nectar",
  /* Странный биск с креветками     */ SuspiciousShrimpBisque: "suspicious_shrimp_bisque",
} as const;
export const ResourceLocalSpecialtyNatlanIds = {
  /* Ягода квенепа */ QuenepaBerry: "quenepa_berry",
} as const;
export const ResourceMaterialIds = {
  /* Какауатль */ Cacahuatl: "cacahuatl",
} as const;
export const ResourceRecipeIds = {
  /* Рецепт: «Лёгкий морской бриз» */ RecipeGentleSeaBreeze: "recipe_gentle_sea_breeze",
  /* Рецепт: «Радость мясоеда»     */ RecipeMeatLoversFeast: "recipe_meat_lovers_feast",
  /* Рецепт: Мини-мешочки аши      */ RecipeMiniAshaPockets: "recipe_mini_asha_pockets",
  /* Рецепт: Нанасовый пирог       */ RecipeNanasCake: "recipe_nanas_cake",
  /* Рецепт: Нектар девяти фруктов */ RecipeNineFruitNectar: "recipe_nine_fruit_nectar",
  /* Рецепт: Биск с креветками     */ RecipeShrimpBisque: "recipe_shrimp_bisque",
} as const;
export const ResourceIds = {
  ...ResourceCookingIngredientIds,
  ...ResourceFoodIds,
  ...ResourceLocalSpecialtyNatlanIds,
  ...ResourceMaterialIds,
  ...ResourceRecipeIds,
} as const;
