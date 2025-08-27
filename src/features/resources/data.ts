import type {
  Resource,
  ResourceAbstract,
  ResourceCookingIngredient,
  ResourceFood,
  ResourceIngredient,
  ResourceRecipe,
} from "./types";
import { FoodTypeIds } from "../food-types/enums";
import { publicImageSrc } from "@/lib/utils";
import { ResourceCookingIngredientIds, ResourceFoodIds, ResourceRecipeIds } from "./enums";
import { ResourceTypeIds } from "../resource-types/enums";

abstract class ResourceAbstractClass implements ResourceAbstract {
  readonly id: ResourceAbstract["id"];
  readonly image_src: ResourceAbstract["image_src"];
  readonly name: ResourceAbstract["name"];
  readonly type_id: ResourceAbstract["type_id"];
  readonly source: ResourceAbstract["source"];

  static PATH = "resources";

  constructor(
    id: ResourceAbstract["id"],
    imageName: string,
    name: ResourceAbstract["name"],
    typeId: ResourceAbstract["type_id"],
    source: ResourceAbstract["source"],
  ) {
    this.id = id;
    this.image_src = publicImageSrc(`${ResourceAbstractClass.PATH}/${imageName}`);
    this.name = name;
    this.type_id = typeId;
    this.source = source;
  }
}

class ResourceCookingIngredientClass extends ResourceAbstractClass implements ResourceCookingIngredient {
  declare readonly id: ResourceCookingIngredient["id"];
  declare readonly image_src: ResourceCookingIngredient["image_src"];
  declare readonly name: ResourceCookingIngredient["name"];
  declare readonly type_id: ResourceCookingIngredient["type_id"];
  declare readonly source: ResourceCookingIngredient["source"];

  static PATH = "cooking-ingredients";

  constructor(
    id: ResourceCookingIngredient["id"],
    name: ResourceCookingIngredient["name"],
    source: ResourceCookingIngredient["source"],
  ) {
    super(id, `${ResourceCookingIngredientClass.PATH}/${id}.webp`, name, ResourceTypeIds.CookingIngredient, source);
  }

  static init(params: ConstructorParameters<typeof ResourceCookingIngredientClass>) {
    return new ResourceCookingIngredientClass(...params);
  }
}

class ResourceFoodClass extends ResourceAbstractClass implements ResourceFood {
  declare readonly id: ResourceFood["id"];
  declare readonly image_src: ResourceFood["image_src"];
  declare readonly name: ResourceFood["name"];
  declare readonly type_id: ResourceFood["type_id"];
  readonly food_type_id: ResourceFood["food_type_id"];
  readonly utility: ResourceFood["utility"];
  declare readonly source: ResourceFood["source"];
  private _recipe_id: ResourceFood["recipe_id"];

  static PATH = "foods";

  constructor(
    id: ResourceFood["id"],
    name: ResourceFood["name"],
    typeId: ResourceFood["food_type_id"],
    utility: ResourceFood["utility"],
    source: ResourceFood["source"],
  ) {
    super(id, `${ResourceFoodClass.PATH}/${id}.webp`, name, ResourceTypeIds.Food, source);

    this.food_type_id = typeId;
    this.utility = utility;
  }

  get recipe_id() {
    return this._recipe_id;
  }

  setRecipeId(val: NonNullable<ResourceFood["recipe_id"]>) {
    this._recipe_id = val;

    return this;
  }

  static init(params: ConstructorParameters<typeof ResourceFoodClass>) {
    return new ResourceFoodClass(...params);
  }
}

class ResourceIngredientClass<Type extends (ResourceCookingIngredient | ResourceFood)> implements ResourceIngredient {
  readonly id: ResourceIngredient["id"];
  readonly count: ResourceIngredient["count"];

  constructor(item: Type, count: ResourceIngredient["count"]) {
    this.id = item.id;
    this.count = count;
  }
}

class ResourceRecipeClass extends ResourceAbstractClass implements ResourceRecipe {
  declare readonly id: ResourceRecipe["id"];
  declare readonly image_src: ResourceRecipe["image_src"];
  declare readonly name: ResourceRecipe["name"];
  declare readonly type_id: ResourceRecipe["type_id"];
  declare readonly source: ResourceRecipe["source"];
  readonly dish_effects: ResourceRecipe["dish_effects"];
  readonly proficiency: ResourceRecipe["proficiency"];
  readonly ingredients: ResourceRecipe["ingredients"];

  constructor(
    id: ResourceRecipe["id"],
    name: ResourceRecipe["name"],
    source: ResourceRecipe["source"],
    dishEffects: ResourceRecipe["dish_effects"],
    proficiency: ResourceRecipe["proficiency"],
    ingredients: ResourceRecipe["ingredients"],
  ) {
    const typeId = ResourceTypeIds.Recipe;

    super(id, `${typeId}.webp`, name, typeId, source);

    this.dish_effects = dishEffects;
    this.proficiency = proficiency;
    this.ingredients = ingredients;
  }

  static init(params: ConstructorParameters<typeof ResourceRecipeClass>) {
    return new ResourceRecipeClass(...params);
  }
}

const ResourceFoodUtility = {
  IncreasesAllPartyMembersAtkAndCritRate: (atk: number | string, critRate: number | string) => `Увеличивает силу атаки всех членов отряда на ${atk} ед. и шанс крит. попадания на ${critRate}% на 300 сек. В совместном режиме этот эффект применяется только к вашим персонажам.`,
  IncreasesAllPartyMembersCritRate: (critRate: number | string) => `Увеличивает шанс крит. попадания всех членов отряда на ${critRate}% на 300 сек. В совместном режиме этот эффект применяется только к вашим персонажам.`,
  RestoresHpForTheSelectedCharacter: (hp: number | string) => `Восстанавливает ${hp} HP выбранному персонажу.`,
  RestoresPercentOfMaxHpToTheSelectedCharacterAndRegeneratesHp: (hp_: number | string, hp: number | string) => `Восстанавливает ${hp_}% от макс. HP выбранному персонажу, затем в течение 30 сек. каждые 5 сек. восстанавливает ${hp} HP.`,
};
const ResourceSource = {
  BuyingFromMerchants: "Покупка у торговцев",
  FoundInTheWild: "Дикая природа",
  ObtainedByCooking: "Готовка",
  ObtainedFromNewRecipeRewardsMail: "Внутриигровая почта",
};

const cookingIngredients = {
  [ResourceCookingIngredientIds.Berry]: ResourceCookingIngredientClass.init([
    ResourceCookingIngredientIds.Berry,
    "Ягода",
    ResourceSource.FoundInTheWild,
  ]),
  [ResourceCookingIngredientIds.ZaytunPeach]: ResourceCookingIngredientClass.init([
    ResourceCookingIngredientIds.ZaytunPeach,
    "Персик зайтун",
    [ResourceSource.FoundInTheWild, ResourceSource.BuyingFromMerchants, "Садоводство"],
  ]),
};
const foods = {
  [ResourceFoodIds.Apple]: ResourceFoodClass.init([
    ResourceFoodIds.Apple,
    "Яблоко",
    FoodTypeIds.RecoveryDish,
    ResourceFoodUtility.RestoresHpForTheSelectedCharacter(300),
    [ResourceSource.FoundInTheWild, ResourceSource.BuyingFromMerchants],
  ]),
  [ResourceFoodIds.Sunsettia]: ResourceFoodClass.init([
    ResourceFoodIds.Sunsettia,
    "Закатник",
    FoodTypeIds.RecoveryDish,
    ResourceFoodUtility.RestoresHpForTheSelectedCharacter(300),
    [ResourceSource.FoundInTheWild, ResourceSource.BuyingFromMerchants],
  ]),
};
const MeatLoversFeast = {
  [ResourceFoodIds.DeliciousMeatLoversFeast]: ResourceFoodClass.init([
    ResourceFoodIds.DeliciousMeatLoversFeast,
    "Вкусная «Радость мясоеда»",
    FoodTypeIds.ATKBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersAtkAndCritRate(320, 10),
    ResourceSource.ObtainedByCooking,
  ]).setRecipeId(ResourceRecipeIds.RecipeMeatLoversFeast),
  [ResourceFoodIds.MeatLoversFeast]: ResourceFoodClass.init([
    ResourceFoodIds.MeatLoversFeast,
    "«Радость мясоеда»",
    FoodTypeIds.ATKBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersAtkAndCritRate(272, 8),
    ResourceSource.ObtainedByCooking,
  ]).setRecipeId(ResourceRecipeIds.RecipeMeatLoversFeast),
  [ResourceFoodIds.SuspiciousMeatLoversFeast]: ResourceFoodClass.init([
    ResourceFoodIds.SuspiciousMeatLoversFeast,
    "Странная «Радость мясоеда»",
    FoodTypeIds.ATKBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersAtkAndCritRate(224, 6),
    ResourceSource.ObtainedByCooking,
  ]).setRecipeId(ResourceRecipeIds.RecipeMeatLoversFeast),
  [ResourceRecipeIds.RecipeMeatLoversFeast]: ResourceRecipeClass.init([
    ResourceRecipeIds.RecipeMeatLoversFeast,
    "Рецепт: «Радость мясоеда»",
    ResourceSource.ObtainedFromNewRecipeRewardsMail,
    ResourceFoodUtility.IncreasesAllPartyMembersAtkAndCritRate("224–320", "6–10"),
    20,
    [],
  ]),
};
const NineFruitNectar = {
  [ResourceFoodIds.DeliciousNineFruitNectar]: ResourceFoodClass.init([
    ResourceFoodIds.DeliciousNineFruitNectar,
    "Вкусный нектар девяти фруктов",
    FoodTypeIds.ATKBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersCritRate(20),
    ResourceSource.ObtainedByCooking,
  ]).setRecipeId(ResourceRecipeIds.RecipeNineFruitNectar),
  [ResourceFoodIds.NineFruitNectar]: ResourceFoodClass.init([
    ResourceFoodIds.NineFruitNectar,
    "Нектар девяти фруктов",
    FoodTypeIds.ATKBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersCritRate(15),
    ResourceSource.ObtainedByCooking,
  ]).setRecipeId(ResourceRecipeIds.RecipeNineFruitNectar),
  [ResourceFoodIds.SuspiciousNineFruitNectar]: ResourceFoodClass.init([
    ResourceFoodIds.SuspiciousNineFruitNectar,
    "Странный нектар девяти фруктов",
    FoodTypeIds.ATKBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersCritRate(10),
    ResourceSource.ObtainedByCooking,
  ]).setRecipeId(ResourceRecipeIds.RecipeNineFruitNectar),
  [ResourceRecipeIds.RecipeNineFruitNectar]: ResourceRecipeClass.init([
    ResourceRecipeIds.RecipeNineFruitNectar,
    "Рецепт: Нектар девяти фруктов",
    ResourceSource.ObtainedFromNewRecipeRewardsMail,
    ResourceFoodUtility.IncreasesAllPartyMembersCritRate("10–20"),
    15,
    [
      new ResourceIngredientClass(foods[ResourceFoodIds.Apple], 2),
      new ResourceIngredientClass(foods[ResourceFoodIds.Sunsettia], 2),
      new ResourceIngredientClass(cookingIngredients[ResourceCookingIngredientIds.Berry], 2),
      new ResourceIngredientClass(cookingIngredients[ResourceCookingIngredientIds.ZaytunPeach], 2),
    ],
  ]),
};

export default {
  ...cookingIngredients,
  ...foods,
  ...MeatLoversFeast,
  ...NineFruitNectar,
  [ResourceFoodIds.ChatterOfJoyfulNights]: ResourceFoodClass.init([
    ResourceFoodIds.ChatterOfJoyfulNights,
    "«Беседы весёлых ночей»",
    FoodTypeIds.RecoveryDish,
    ResourceFoodUtility.RestoresPercentOfMaxHpToTheSelectedCharacterAndRegeneratesHp(34, 980),
    ResourceSource.ObtainedByCooking,
  ]),
} as Record<Resource["id"], Resource>;
