// import { FoodTypeKeys } from "./enums/food-type";
// import { publicImageSrc } from "@/lib/utils";
// import { ResourceCookingIngredientKeys, ResourceFoodKeys, ResourceRecipeKeys } from "./enums/resource";
// import { ResourceTypeKeys } from "./enums/resource-type";
// import type {
//  Resource,
//  ResourceBase,
//  ResourceCookingIngredient,
//  ResourceFood,
//  ResourceRecipe,
//  ResourceRecipeIngredient,
// } from "./types/resource";

// abstract class _ResourceBase implements ResourceBase {
//   readonly key: ResourceBase["key"];
//   readonly image_src: ResourceBase["image_src"];
//   readonly name: ResourceBase["name"];
//   readonly type_key: ResourceBase["type_key"];
//   readonly source: ResourceBase["source"];
//
//   static PATH = "resources";
//
//   constructor(
//     key: ResourceBase["key"],
//     imageName: string,
//     name: ResourceBase["name"],
//     typeKey: ResourceBase["type_key"],
//     source: ResourceBase["source"],
//   ) {
//     this.key = key;
//     this.image_src = publicImageSrc(`${_ResourceBase.PATH}/${imageName}`);
//     this.name = name;
//     this.type_key = typeKey;
//     this.source = source;
//   }
// }

// class _ResourceCookingIngredient extends _ResourceBase implements ResourceCookingIngredient {
//   declare readonly key: ResourceCookingIngredient["key"];
//   declare readonly image_src: ResourceCookingIngredient["image_src"];
//   declare readonly name: ResourceCookingIngredient["name"];
//   declare readonly type_key: ResourceCookingIngredient["type_key"];
//   declare readonly source: ResourceCookingIngredient["source"];
//
//   static PATH = "cooking-ingredients";
//
//   constructor(
//     key: keyof typeof ResourceCookingIngredientKeys,
//     name: ResourceCookingIngredient["name"],
//     source: ResourceCookingIngredient["source"],
//   ) {
//     const thisKey = ResourceCookingIngredientKeys[key];
//
//     super(
//       thisKey,
//       `${_ResourceCookingIngredient.PATH}/${thisKey}.webp`,
//       name,
//       ResourceTypeKeys.CookingIngredient,
//       source,
//     );
//   }
// }

// class _ResourceFood extends _ResourceBase implements ResourceFood {
//   private _ingredients: ResourceFood["ingredients"];
//   private _recipe_key: ResourceFood["recipe_key"];
//   private _related_dish_keys: ResourceFood["related_dish_keys"];
//   declare readonly key: ResourceFood["key"];
//   declare readonly image_src: ResourceFood["image_src"];
//   declare readonly name: ResourceFood["name"];
//   declare readonly type_key: ResourceFood["type_key"];
//   readonly food_type_key: ResourceFood["food_type_key"];
//   readonly utility: ResourceFood["utility"];
//   declare readonly source: ResourceFood["source"];
//
//   static PATH = "foods";
//
//   constructor(
//     key: ResourceFood["key"],
//     name: ResourceFood["name"],
//     typeKey: keyof typeof FoodTypeKeys,
//     utility: ResourceFood["utility"],
//     source: ResourceFood["source"],
//   ) {
//     super(key, `${_ResourceFood.PATH}/${key}.webp`, name, ResourceTypeKeys.Food, source);
//
//     this.food_type_key = FoodTypeKeys[typeKey];
//     this.utility = utility;
//   }
//
//   get ingredients() {
//     return this._ingredients;
//   }
//
//   get recipe_key() {
//     return this._recipe_key;
//   }
//
//   get related_dish_keys() {
//     return this._related_dish_keys;
//   }
//
//   setRecipe(key: NonNullable<ResourceFood["recipe_key"]>, ingredients: NonNullable<ResourceFood["ingredients"]>) {
//     this._recipe_key = key;
//     this._ingredients = ingredients;
//
//     return this;
//   }
//
//   setRelatedDishKeys(keys: NonNullable<ResourceFood["related_dish_keys"]>) {
//     this._related_dish_keys = keys;
//
//     return this;
//   }
// }

// class _ResourceRecipe extends _ResourceBase implements ResourceRecipe {
//   declare readonly key: ResourceRecipe["key"];
//   declare readonly image_src: ResourceRecipe["image_src"];
//   declare readonly name: ResourceRecipe["name"];
//   declare readonly type_key: ResourceRecipe["type_key"];
//   declare readonly source: ResourceRecipe["source"];
//   readonly dish_effects: ResourceRecipe["dish_effects"];
//   readonly proficiency: ResourceRecipe["proficiency"];
//   readonly dish_keys: ResourceRecipe["dish_keys"];
//   readonly ingredients: ResourceRecipe["ingredients"];
//
//   constructor(
//     key: ResourceRecipe["key"],
//     name: ResourceRecipe["name"],
//     source: ResourceRecipe["source"],
//     dishEffects: ResourceRecipe["dish_effects"],
//     proficiency: ResourceRecipe["proficiency"],
//     dishKeys: ResourceRecipe["dish_keys"],
//     ingredients: ResourceRecipe["ingredients"],
//   ) {
//     const thisTypeKey = ResourceTypeKeys.Recipe;
//
//     super(key, `${thisTypeKey}.webp`, name, thisTypeKey, source);
//
//     this.dish_effects = dishEffects;
//     this.proficiency = proficiency;
//     this.dish_keys = dishKeys;
//     this.ingredients = ingredients;
//   }
// }

// class _ResourceRecipeIngredient<Type extends (ResourceCookingIngredient | ResourceFood)> implements ResourceRecipeIngredient {
//   readonly key: ResourceRecipeIngredient["key"];
//   readonly count: ResourceRecipeIngredient["count"];
//
//   constructor(item: Type, count: ResourceRecipeIngredient["count"]) {
//     this.key = item.key;
//     this.count = count;
//   }
// }

// const ResourceFoodUtility = {
//   IncreasesAllPartyMembersAtkAndCritRate: (atk: number | string, critRate: number | string) => `Увеличивает силу атаки всех членов отряда на ${atk} ед. и шанс крит. попадания на ${critRate}% на 300 сек. В совместном режиме этот эффект применяется только к вашим персонажам.`,
//   IncreasesAllPartyMembersCritRate: (critRate: number | string) => `Увеличивает шанс крит. попадания всех членов отряда на ${critRate}% на 300 сек. В совместном режиме этот эффект применяется только к вашим персонажам.`,
//   RestoresHpForTheSelectedCharacter: (hp: number | string) => `Восстанавливает ${hp} HP выбранному персонажу.`,
//   RestoresPercentOfMaxHpToTheSelectedCharacterAndRegeneratesHp: (hp_: number | string, hp: number | string) => `Восстанавливает ${hp_}% от макс. HP выбранному персонажу, затем в течение 30 сек. каждые 5 сек. восстанавливает ${hp} HP.`,
// };
// const ResourceSource = {
//   BuyingFromMerchants: "Покупка у торговцев",
//   FoundInTheWild: "Дикая природа",
//   ObtainedByCooking: "Готовка",
//   ObtainedFromNewRecipeRewardsMail: "Внутриигровая почта",
// };

// const cookingIngredients = {
//   [ResourceCookingIngredientKeys.Berry]: new _ResourceCookingIngredient(
//     "Berry",
//     "Ягода",
//     ResourceSource.FoundInTheWild,
//   ),
//   [ResourceCookingIngredientKeys.ZaytunPeach]: new _ResourceCookingIngredient(
//     "ZaytunPeach",
//     "Персик зайтун",
//     [ResourceSource.FoundInTheWild, ResourceSource.BuyingFromMerchants, "Садоводство"],
//   ),
// } as Record<ResourceCookingIngredient["key"], ResourceCookingIngredient>;
// const foods = {
//   [ResourceFoodKeys.Apple]: new _ResourceFood(
//     ResourceFoodKeys.Apple,
//     "Яблоко",
//     "RecoveryDish",
//     ResourceFoodUtility.RestoresHpForTheSelectedCharacter(300),
//     [ResourceSource.FoundInTheWild, ResourceSource.BuyingFromMerchants],
//   ),
//   [ResourceFoodKeys.Sunsettia]: new _ResourceFood(
//     ResourceFoodKeys.Sunsettia,
//     "Закатник",
//     "RecoveryDish",
//     ResourceFoodUtility.RestoresHpForTheSelectedCharacter(300),
//     [ResourceSource.FoundInTheWild, ResourceSource.BuyingFromMerchants],
//   ),
// } as Record<typeof ResourceFoodKeys["Apple" | "Sunsettia"], ResourceFood>;

// const LowerCaseFirstLetter = (val: string) => val.charAt(0).toLowerCase() + val.slice(1);
// const UpperCaseFirstLetter = (val: string) => val.charAt(0).toUpperCase() + val.slice(1);

// function initDishesAndRecipe<K extends "MeatLoversFeast" | "NineFruitNectar", F extends (...args: (string | number)[]) => string>(
//   key: K,
//   name: ResourceBase["name"],
//   foodTypeKey: keyof typeof FoodTypeKeys,
//   dishEffectsFunc: F,
//   dishEffectsArgs: Record<"delicious" | "normal" | "suspicious" | "recipe", Parameters<F>>,
//   sources: Record<"food" | "recipe", ResourceBase["source"]>,
//   proficiency: ResourceRecipe["proficiency"],
//   ingredients: ResourceRecipeIngredient[],
// ): Record<typeof ResourceFoodKeys[`Delicious${K}` | K | `Suspicious${K}`], ResourceFood> & Record<typeof ResourceRecipeKeys[`Recipe${K}`], ResourceRecipe> {
//   const keys = {
//     delicious: ResourceFoodKeys[`Delicious${key}`],
//     normal: ResourceFoodKeys[key],
//     suspicious: ResourceFoodKeys[`Suspicious${key}`],
//     recipe: ResourceRecipeKeys[`Recipe${key}`],
//   };
//   const names = {
//     delicious: `Вкусный ${LowerCaseFirstLetter(name)}`,
//     normal: name,
//     suspicious: `Странный ${LowerCaseFirstLetter(name)}`,
//     recipe: `Рецепт: ${name}`,
//   };
//
//   return {
//     [keys.delicious as typeof ResourceFoodKeys[`Delicious${K}`]]: new _ResourceFood(keys.delicious, names.delicious, foodTypeKey, dishEffectsFunc(...dishEffectsArgs.delicious), sources.food).setRecipe(keys.recipe, ingredients).setRelatedDishKeys([keys.suspicious, keys.normal]),
//     [keys.normal as typeof ResourceFoodKeys[K]]: new _ResourceFood(keys.normal, names.normal, foodTypeKey, dishEffectsFunc(...dishEffectsArgs.normal), sources.food).setRecipe(keys.recipe, ingredients).setRelatedDishKeys([keys.suspicious, keys.delicious]),
//     [keys.suspicious as typeof ResourceFoodKeys[`Suspicious${K}`]]: new _ResourceFood(keys.suspicious, names.suspicious, foodTypeKey, dishEffectsFunc(...dishEffectsArgs.suspicious), sources.food).setRecipe(keys.recipe, ingredients).setRelatedDishKeys([keys.normal, keys.delicious]),
//     [keys.recipe as typeof ResourceRecipeKeys[`Recipe${K}`]]: new _ResourceRecipe(keys.recipe, names.recipe, sources.recipe, dishEffectsFunc(...dishEffectsArgs.recipe), proficiency, [keys.suspicious, keys.normal, keys.delicious], ingredients),
//   };
// }

// export default {
//   ...cookingIngredients,
//   ...foods,
//   ...initDishesAndRecipe(
//     "MeatLoversFeast",
//     "«Радость мясоеда»",
//     "ATKBoostingDish",
//     ResourceFoodUtility.IncreasesAllPartyMembersAtkAndCritRate,
//     { delicious: [320, 10], normal: [272, 8], suspicious: [224, 6], recipe: ["224–320", "6–10"] },
//     { food: ResourceSource.ObtainedByCooking, recipe: ResourceSource.ObtainedFromNewRecipeRewardsMail },
//     20,
//     [],
//   ),
//   ...initDishesAndRecipe(
//     "NineFruitNectar",
//     "Нектар девяти фруктов",
//     "ATKBoostingDish",
//     ResourceFoodUtility.IncreasesAllPartyMembersCritRate,
//     { delicious: [20], normal: [15], suspicious: [10], recipe: ["10–20"] },
//     { food: ResourceSource.ObtainedByCooking, recipe: ResourceSource.ObtainedFromNewRecipeRewardsMail },
//     15,
//     [
//       new _ResourceRecipeIngredient(foods[ResourceFoodKeys.Apple], 2),
//       new _ResourceRecipeIngredient(foods[ResourceFoodKeys.Sunsettia], 2),
//       new _ResourceRecipeIngredient(cookingIngredients[ResourceCookingIngredientKeys.Berry], 2),
//       new _ResourceRecipeIngredient(cookingIngredients[ResourceCookingIngredientKeys.ZaytunPeach], 2),
//     ],
//   ),
//   [ResourceFoodKeys.ChatterOfJoyfulNights]: new _ResourceFood(ResourceFoodKeys.ChatterOfJoyfulNights, "«Беседы весёлых ночей»", "RecoveryDish", ResourceFoodUtility.RestoresPercentOfMaxHpToTheSelectedCharacterAndRegeneratesHp(34, 980), ResourceSource.ObtainedByCooking).setRelatedDishKeys([ResourceFoodKeys.SuspiciousMeatLoversFeast, ResourceFoodKeys.MeatLoversFeast]),
// } as Record<Resource["key"], Resource>;
