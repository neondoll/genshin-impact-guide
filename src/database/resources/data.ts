// import type {
//   IResource,
//   IResourceCookingIngredient,
//   IResourceFood,
//   IResourceIngredient,
//   IResourceRecipe,
//   TResource,
// } from "./types";
// import { CResourceCookingIngredient, CResourceFood, CResourceIngredient, CResourceRecipe } from "./classes";
// import { FoodTypeKeys } from "../food-types/enums";
// import { ResourceCookingIngredientKeys, ResourceFoodKeys, ResourceRecipeKeys } from "./enums";

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
//   [ResourceCookingIngredientKeys.Berry]: new CResourceCookingIngredient(
//     "Berry",
//     "Ягода",
//     ResourceSource.FoundInTheWild,
//   ),
//   [ResourceCookingIngredientKeys.ZaytunPeach]: new CResourceCookingIngredient(
//     "ZaytunPeach",
//     "Персик зайтун",
//     [ResourceSource.FoundInTheWild, ResourceSource.BuyingFromMerchants, "Садоводство"],
//   ),
// } as Record<IResourceCookingIngredient["key"], IResourceCookingIngredient>;
// const foods = {
//   [ResourceFoodKeys.Apple]: new CResourceFood(
//     ResourceFoodKeys.Apple,
//     "Яблоко",
//     "RecoveryDish",
//     ResourceFoodUtility.RestoresHpForTheSelectedCharacter(300),
//     [ResourceSource.FoundInTheWild, ResourceSource.BuyingFromMerchants],
//   ),
//   [ResourceFoodKeys.Sunsettia]: new CResourceFood(
//     ResourceFoodKeys.Sunsettia,
//     "Закатник",
//     "RecoveryDish",
//     ResourceFoodUtility.RestoresHpForTheSelectedCharacter(300),
//     [ResourceSource.FoundInTheWild, ResourceSource.BuyingFromMerchants],
//   ),
// } as Record<typeof ResourceFoodKeys["Apple" | "Sunsettia"], IResourceFood>;

// const LowerCaseFirstLetter = (val: string) => val.charAt(0).toLowerCase() + val.slice(1);
// const UpperCaseFirstLetter = (val: string) => val.charAt(0).toUpperCase() + val.slice(1);

// function initDishesAndRecipe<K extends "MeatLoversFeast" | "NineFruitNectar", F extends (...args: (string | number)[]) => string>(
//   key: K,
//   name: IResource["name"],
//   foodTypeKey: keyof typeof FoodTypeKeys,
//   dishEffectsFunc: F,
//   dishEffectsArgs: Record<"delicious" | "normal" | "suspicious" | "recipe", Parameters<F>>,
//   sources: Record<"food" | "recipe", IResource["source"]>,
//   proficiency: IResourceRecipe["proficiency"],
//   ingredients: IResourceIngredient[],
// ): Record<typeof ResourceFoodKeys[`Delicious${K}` | K | `Suspicious${K}`], IResourceFood> & Record<typeof ResourceRecipeKeys[`Recipe${K}`], IResourceRecipe> {
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
//     [keys.delicious as typeof ResourceFoodKeys[`Delicious${K}`]]: new CResourceFood(keys.delicious, names.delicious, foodTypeKey, dishEffectsFunc(...dishEffectsArgs.delicious), sources.food).setRecipe(keys.recipe, ingredients).setRelatedDishKeys([keys.suspicious, keys.normal]),
//     [keys.normal as typeof ResourceFoodKeys[K]]: new CResourceFood(keys.normal, names.normal, foodTypeKey, dishEffectsFunc(...dishEffectsArgs.normal), sources.food).setRecipe(keys.recipe, ingredients).setRelatedDishKeys([keys.suspicious, keys.delicious]),
//     [keys.suspicious as typeof ResourceFoodKeys[`Suspicious${K}`]]: new CResourceFood(keys.suspicious, names.suspicious, foodTypeKey, dishEffectsFunc(...dishEffectsArgs.suspicious), sources.food).setRecipe(keys.recipe, ingredients).setRelatedDishKeys([keys.normal, keys.delicious]),
//     [keys.recipe as typeof ResourceRecipeKeys[`Recipe${K}`]]: new CResourceRecipe(keys.recipe, names.recipe, sources.recipe, dishEffectsFunc(...dishEffectsArgs.recipe), proficiency, [keys.suspicious, keys.normal, keys.delicious], ingredients),
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
//       new CResourceIngredient(foods[ResourceFoodKeys.Apple], 2),
//       new CResourceIngredient(foods[ResourceFoodKeys.Sunsettia], 2),
//       new CResourceIngredient(cookingIngredients[ResourceCookingIngredientKeys.Berry], 2),
//       new CResourceIngredient(cookingIngredients[ResourceCookingIngredientKeys.ZaytunPeach], 2),
//     ],
//   ),
//   [ResourceFoodKeys.ChatterOfJoyfulNights]: new CResourceFood(ResourceFoodKeys.ChatterOfJoyfulNights, "«Беседы весёлых ночей»", "RecoveryDish", ResourceFoodUtility.RestoresPercentOfMaxHpToTheSelectedCharacterAndRegeneratesHp(34, 980), ResourceSource.ObtainedByCooking).setRelatedDishKeys([ResourceFoodKeys.SuspiciousMeatLoversFeast, ResourceFoodKeys.MeatLoversFeast]),
// } as Record<TResource["key"], TResource>;
