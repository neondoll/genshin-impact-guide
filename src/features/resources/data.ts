import type {
  Resource,
  ResourceAbstract,
  ResourceCookingIngredient,
  ResourceFood,
  ResourceLocalSpecialtyNatlan, ResourceMaterial,
  ResourceRecipe,
  ResourceRecipeIngredient,
} from "./types";
import { FoodTypeIds } from "../food-types/enums";
import { publicImageSrc } from "@/lib/utils";
import { RegionIds } from "../regions/enums";
import {
  ResourceCookingIngredientIds,
  ResourceFoodIds,
  ResourceLocalSpecialtyNatlanIds, ResourceMaterialIds,
  ResourceRecipeIds,
} from "./enums";
import { ResourceTypeIds } from "../resource-types/enums";
import regions from "../regions/data";

abstract class ResourceAbstractClass implements ResourceAbstract {
  readonly id: ResourceAbstract["id"];
  readonly image_src: ResourceAbstract["image_src"];
  readonly name: ResourceAbstract["name"];
  readonly type_id: ResourceAbstract["type_id"];
  readonly source: ResourceAbstract["source"];

  static PATH = "resources";

  protected constructor(
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
  protected _recipe_id: ResourceFood["recipe_id"];

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

class ResourceLocalSpecialtyNatlanClass extends ResourceAbstractClass implements ResourceLocalSpecialtyNatlan {
  declare readonly id: ResourceLocalSpecialtyNatlan["id"];
  declare readonly image_src: ResourceLocalSpecialtyNatlan["image_src"];
  declare readonly name: ResourceLocalSpecialtyNatlan["name"];
  declare readonly type_id: ResourceLocalSpecialtyNatlan["type_id"];
  declare readonly source: ResourceLocalSpecialtyNatlan["source"];

  static PATH = "local-specialties-natlan";

  constructor(
    id: ResourceLocalSpecialtyNatlan["id"],
    name: ResourceLocalSpecialtyNatlan["name"],
    source: ResourceLocalSpecialtyNatlan["source"],
  ) {
    super(id, `${ResourceLocalSpecialtyNatlanClass.PATH}/${id}.webp`, name, ResourceTypeIds.LocalSpecialtyNatlan, source);
  }

  static init(params: ConstructorParameters<typeof ResourceLocalSpecialtyNatlanClass>) {
    return new ResourceLocalSpecialtyNatlanClass(...params);
  }
}

class ResourceMaterialClass extends ResourceAbstractClass implements ResourceMaterial {
  declare readonly id: ResourceMaterial["id"];
  declare readonly image_src: ResourceMaterial["image_src"];
  declare readonly name: ResourceMaterial["name"];
  declare readonly type_id: ResourceMaterial["type_id"];
  declare readonly source: ResourceMaterial["source"];

  static PATH = "materials";

  constructor(id: ResourceMaterial["id"], name: ResourceMaterial["name"], source: ResourceMaterial["source"]) {
    super(id, `${ResourceMaterialClass.PATH}/${id}.webp`, name, ResourceTypeIds.Material, source);
  }

  static init(params: ConstructorParameters<typeof ResourceMaterialClass>) {
    return new ResourceMaterialClass(...params);
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

class ResourceRecipeIngredientClass<Type extends (ResourceCookingIngredient | ResourceFood | ResourceLocalSpecialtyNatlan | ResourceMaterial)> implements ResourceRecipeIngredient {
  readonly id: ResourceRecipeIngredient["id"];
  readonly count: ResourceRecipeIngredient["count"];

  constructor(item: Type, count: ResourceRecipeIngredient["count"]) {
    this.id = item.id;
    this.count = count;
  }
}

const ResourceFoodUtility = {
  ALittleSurpriseFromTheEasybreezeHolidayResort: (s: number | string) => `<span class="italic">Небольшой сюрприз от курорта «Оазис отдыха».</span><br>Восстанавливает 1 здоровье выбранного персонажа каждые 8 секунд в течение <span class="text-cyan-500">${s} секунд</span>. В кооперативном режиме этот эффект применяется только к вашим персонажам.`,
  DecreasesAllPartyMembersClimbingAndSprintingStaminaConsumption: (stamina: number | string) => `Уменьшает потребление выносливости всеми членами отряда во время спринта и карабканья на <span class="text-cyan-500">${stamina}%</span> на 900 сек. В совместном режиме этот эффект применяется только к вашим персонажам.`,
  IncreasesAllPartyMembersAtk: (atk: number | string) => `Увеличивает силу атаки всех членов отряда на <span class="text-cyan-500">${atk}</span> ед. на 300 сек. В совместном режиме этот эффект применяется только к вашим персонажам.`,
  IncreasesAllPartyMembersAtkAndCritRate: (atk: number | string, critRate: number | string) => `Увеличивает силу атаки всех членов отряда на ${atk} ед. и шанс крит. попадания на ${critRate}% на 300 сек. В совместном режиме этот эффект применяется только к вашим персонажам.`,
  IncreasesAllPartyMembersCritRate: (critRate: number | string) => `Увеличивает шанс крит. попадания всех членов отряда на ${critRate}% на 300 сек. В совместном режиме этот эффект применяется только к вашим персонажам.`,
  IncreasesAllPartyMembersHealingBonus: (heal_: number | string) => `Увеличивает бонус лечения всех членов отряда на <span class="text-cyan-500">${heal_}%</span> на 300 сек. В совместном режиме этот эффект применяется только к вашим персонажам.`,
  RestoresHpForTheSelectedCharacter: (hp: number | string) => `Восстанавливает ${hp} HP выбранному персонажу.`,
  RestoresPercentOfMaxHpToTheSelectedCharacterAndRegeneratesHp: (hp_: number | string, hp: number | string) => `Восстанавливает ${hp_}% от макс. HP выбранному персонажу, затем в течение 30 сек. каждые 5 сек. восстанавливает ${hp} HP.`,
} as const;
const ResourceSource = {
  BuyingFromMerchants: "Покупка у торговцев",
  FoundInTheWild: "Дикая природа",
  Gardening: "Садоводство",
  Natlan: regions[RegionIds.Natlan].name,
  ObtainedByCooking: "Готовка",
  ObtainedFromNewRecipeRewardsMail: "Внутриигровая почта",
  Processed: "Заготовка ингредиентов",
  TeyvatResearch: "Исследование Тейвата",
} as const;

const cookingIngredients = {
  [ResourceCookingIngredientIds.Berry]: ResourceCookingIngredientClass.init([
    ResourceCookingIngredientIds.Berry,
    "Ягода",
    ResourceSource.FoundInTheWild,
  ]),
  [ResourceCookingIngredientIds.BirdEgg]: ResourceCookingIngredientClass.init([
    ResourceCookingIngredientIds.BirdEgg,
    "Яйцо",
    ["Дикая природа", "Купить у торговцев"],
  ]),
  [ResourceCookingIngredientIds.Cheese]: ResourceCookingIngredientClass.init([
    ResourceCookingIngredientIds.Cheese,
    "Сыр",
    ["Заготовка ингредиентов", "Покупка у торговцев"],
  ]),
  [ResourceCookingIngredientIds.Flour]: ResourceCookingIngredientClass.init([
    ResourceCookingIngredientIds.Flour,
    "Мука",
    ["Заготовка ингредиентов", "Купить у торговцев"],
  ]),
  [ResourceCookingIngredientIds.Fowl]: ResourceCookingIngredientClass.init([
    ResourceCookingIngredientIds.Fowl,
    "Мясо птицы",
    ["Животные", "Купить у торговцев", "Загадочный мясной продукт"],
  ]),
  [ResourceCookingIngredientIds.Grainfruit]: ResourceCookingIngredientClass.init([
    ResourceCookingIngredientIds.Grainfruit,
    "Злакофрукт",
    [ResourceSource.FoundInTheWild, ResourceSource.BuyingFromMerchants, ResourceSource.Gardening],
  ]),
  [ResourceCookingIngredientIds.Mint]: ResourceCookingIngredientClass.init([
    ResourceCookingIngredientIds.Mint,
    "Мята",
    [ResourceSource.FoundInTheWild, ResourceSource.BuyingFromMerchants, ResourceSource.Gardening],
  ]),
  [ResourceCookingIngredientIds.Onion]: ResourceCookingIngredientClass.init([
    ResourceCookingIngredientIds.Onion,
    "Лук",
    "Купить у торговцев",
  ]),
  [ResourceCookingIngredientIds.Potato]: ResourceCookingIngredientClass.init([
    ResourceCookingIngredientIds.Potato,
    "Картофель",
    [ResourceSource.TeyvatResearch, ResourceSource.BuyingFromMerchants],
  ]),
  [ResourceCookingIngredientIds.ShrimpMeat]: ResourceCookingIngredientClass.init([
    ResourceCookingIngredientIds.ShrimpMeat,
    "Мясо креветки",
    ResourceSource.BuyingFromMerchants,
  ]),
  [ResourceCookingIngredientIds.Sugar]: ResourceCookingIngredientClass.init([
    ResourceCookingIngredientIds.Sugar,
    "Сахар",
    ["Заготовка ингредиентов", "Купить у торговцев"],
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
const localSpecialtiesNatlan = {
  [ResourceLocalSpecialtyNatlanIds.QuenepaBerry]: ResourceLocalSpecialtyNatlanClass.init([
    ResourceLocalSpecialtyNatlanIds.QuenepaBerry,
    "Ягода квенепа",
    [ResourceSource.Natlan, ResourceSource.BuyingFromMerchants],
  ]),
};
const materials = {
  [ResourceMaterialIds.Cacahuatl]: ResourceMaterialClass.init([
    ResourceMaterialIds.Cacahuatl,
    "Какауатль",
    [ResourceSource.Natlan, "Купить у торговцев", "Садоводство"],
  ]),
};

const GentleSeaBreeze = {
  [ResourceFoodIds.DeliciousGentleSeaBreeze]: ResourceFoodClass.init([
    ResourceFoodIds.DeliciousGentleSeaBreeze,
    "Вкусный «Лёгкий морской бриз»",
    FoodTypeIds.AdventurersDish,
    ResourceFoodUtility.DecreasesAllPartyMembersClimbingAndSprintingStaminaConsumption(25),
    ResourceSource.ObtainedByCooking,
  ]).setRecipeId(ResourceRecipeIds.RecipeGentleSeaBreeze),
  [ResourceFoodIds.GentleSeaBreeze]: ResourceFoodClass.init([
    ResourceFoodIds.GentleSeaBreeze,
    "«Лёгкий морской бриз»",
    FoodTypeIds.AdventurersDish,
    ResourceFoodUtility.DecreasesAllPartyMembersClimbingAndSprintingStaminaConsumption(20),
    ResourceSource.ObtainedByCooking,
  ]).setRecipeId(ResourceRecipeIds.RecipeGentleSeaBreeze),
  [ResourceFoodIds.SuspiciousGentleSeaBreeze]: ResourceFoodClass.init([
    ResourceFoodIds.SuspiciousGentleSeaBreeze,
    "Странный «Лёгкий морской бриз»",
    FoodTypeIds.AdventurersDish,
    ResourceFoodUtility.DecreasesAllPartyMembersClimbingAndSprintingStaminaConsumption(15),
    ResourceSource.ObtainedByCooking,
  ]).setRecipeId(ResourceRecipeIds.RecipeGentleSeaBreeze),
  [ResourceRecipeIds.RecipeGentleSeaBreeze]: ResourceRecipeClass.init([
    ResourceRecipeIds.RecipeGentleSeaBreeze,
    "Рецепт: «Лёгкий морской бриз»",
    "Награда за диалог с Хайяк после выполнения поручения",
    ResourceFoodUtility.DecreasesAllPartyMembersClimbingAndSprintingStaminaConsumption("15–25"),
    15,
    [
      new ResourceRecipeIngredientClass(cookingIngredients[ResourceCookingIngredientIds.Mint], 2),
      new ResourceRecipeIngredientClass(cookingIngredients[ResourceCookingIngredientIds.Sugar], 1),
      new ResourceRecipeIngredientClass(localSpecialtiesNatlan[ResourceLocalSpecialtyNatlanIds.QuenepaBerry], 2),
    ],
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
const MiniAshaPockets = {
  [ResourceFoodIds.DeliciousMiniAshaPockets]: ResourceFoodClass.init([
    ResourceFoodIds.DeliciousMiniAshaPockets,
    "Вкусные мини-мешочки аши",
    FoodTypeIds.RecoveryDish,
    ResourceFoodUtility.ALittleSurpriseFromTheEasybreezeHolidayResort(48),
    "Готовка",
  ]).setRecipeId(ResourceRecipeIds.RecipeMiniAshaPockets),
  [ResourceFoodIds.MiniAshaPockets]: ResourceFoodClass.init([
    ResourceFoodIds.MiniAshaPockets,
    "Мини-мешочки аши",
    FoodTypeIds.RecoveryDish,
    ResourceFoodUtility.ALittleSurpriseFromTheEasybreezeHolidayResort(40),
    "Готовка",
  ]).setRecipeId(ResourceRecipeIds.RecipeMiniAshaPockets),
  [ResourceFoodIds.SuspiciousMiniAshaPockets]: ResourceFoodClass.init([
    ResourceFoodIds.SuspiciousMiniAshaPockets,
    "Странные мини-мешочки аши",
    FoodTypeIds.RecoveryDish,
    ResourceFoodUtility.ALittleSurpriseFromTheEasybreezeHolidayResort(32),
    "Готовка",
  ]).setRecipeId(ResourceRecipeIds.RecipeMiniAshaPockets),
  [ResourceRecipeIds.RecipeMiniAshaPockets]: ResourceRecipeClass.init([
    ResourceRecipeIds.RecipeMiniAshaPockets,
    "Рецепт: Мини-мешочки аши",
    "Награда Семицветной статуи на курорте «Оазис отдыха»",
    ResourceFoodUtility.ALittleSurpriseFromTheEasybreezeHolidayResort("32–48"),
    20,
    [
      new ResourceRecipeIngredientClass(cookingIngredients[ResourceCookingIngredientIds.Cheese], 1),
      new ResourceRecipeIngredientClass(cookingIngredients[ResourceCookingIngredientIds.Flour], 1),
      new ResourceRecipeIngredientClass(cookingIngredients[ResourceCookingIngredientIds.Fowl], 1),
      new ResourceRecipeIngredientClass(cookingIngredients[ResourceCookingIngredientIds.Onion], 1),
    ],
  ]),
};
const NanasCake = {
  [ResourceFoodIds.DeliciousNanasCake]: ResourceFoodClass.init([
    ResourceFoodIds.DeliciousNanasCake,
    "Вкусный нанасовый пирог",
    FoodTypeIds.ATKBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersAtk(228),
    "Готовка",
  ]).setRecipeId(ResourceRecipeIds.RecipeNanasCake),
  [ResourceFoodIds.NanasCake]: ResourceFoodClass.init([
    ResourceFoodIds.NanasCake,
    "Нанасовый пирог",
    FoodTypeIds.ATKBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersAtk(194),
    "Готовка",
  ]).setRecipeId(ResourceRecipeIds.RecipeNanasCake),
  [ResourceFoodIds.SuspiciousNanasCake]: ResourceFoodClass.init([
    ResourceFoodIds.SuspiciousNanasCake,
    "Странный нанасовый пирог",
    FoodTypeIds.ATKBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersAtk(160),
    "Готовка",
  ]).setRecipeId(ResourceRecipeIds.RecipeNanasCake),
  [ResourceRecipeIds.RecipeNanasCake]: ResourceRecipeClass.init([
    ResourceRecipeIds.RecipeNanasCake,
    "Рецепт: Нанасовый пирог",
    "Задание легенд «Лето! Жара? Курорт!»",
    ResourceFoodUtility.IncreasesAllPartyMembersAtk("160–228"),
    15,
    [
      new ResourceRecipeIngredientClass(cookingIngredients[ResourceCookingIngredientIds.BirdEgg], 4),
      new ResourceRecipeIngredientClass(cookingIngredients[ResourceCookingIngredientIds.Flour], 2),
      new ResourceRecipeIngredientClass(cookingIngredients[ResourceCookingIngredientIds.Sugar], 1),
      new ResourceRecipeIngredientClass(materials[ResourceMaterialIds.Cacahuatl], 2),
    ],
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
      new ResourceRecipeIngredientClass(foods[ResourceFoodIds.Apple], 2),
      new ResourceRecipeIngredientClass(foods[ResourceFoodIds.Sunsettia], 2),
      new ResourceRecipeIngredientClass(cookingIngredients[ResourceCookingIngredientIds.Berry], 2),
      new ResourceRecipeIngredientClass(cookingIngredients[ResourceCookingIngredientIds.ZaytunPeach], 2),
    ],
  ]),
};
const ShrimpBisque = {
  [ResourceFoodIds.DeliciousShrimpBisque]: ResourceFoodClass.init([
    ResourceFoodIds.DeliciousShrimpBisque,
    "Вкусный биск с креветками",
    FoodTypeIds.DEFBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersHealingBonus(20),
    ResourceSource.ObtainedByCooking,
  ]).setRecipeId(ResourceRecipeIds.RecipeShrimpBisque),
  [ResourceFoodIds.ShrimpBisque]: ResourceFoodClass.init([
    ResourceFoodIds.ShrimpBisque,
    "Биск с креветками",
    FoodTypeIds.DEFBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersHealingBonus(17),
    [ResourceSource.ObtainedByCooking, "Покупка у Теучцицтли"],
  ]).setRecipeId(ResourceRecipeIds.RecipeShrimpBisque),
  [ResourceFoodIds.SuspiciousShrimpBisque]: ResourceFoodClass.init([
    ResourceFoodIds.SuspiciousShrimpBisque,
    "Странный биск с креветками",
    FoodTypeIds.DEFBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersHealingBonus(15),
    ResourceSource.ObtainedByCooking,
  ]).setRecipeId(ResourceRecipeIds.RecipeShrimpBisque),
  [ResourceRecipeIds.RecipeShrimpBisque]: ResourceRecipeClass.init([
    ResourceRecipeIds.RecipeShrimpBisque,
    "Рецепт: Биск с креветками",
    "Награда за диалог с Теучцицтли после диалога с Лавайей",
    ResourceFoodUtility.IncreasesAllPartyMembersHealingBonus("15–20"),
    15,
    [
      new ResourceRecipeIngredientClass(cookingIngredients[ResourceCookingIngredientIds.Grainfruit], 2),
      new ResourceRecipeIngredientClass(cookingIngredients[ResourceCookingIngredientIds.Onion], 3),
      new ResourceRecipeIngredientClass(cookingIngredients[ResourceCookingIngredientIds.Potato], 3),
      new ResourceRecipeIngredientClass(cookingIngredients[ResourceCookingIngredientIds.ShrimpMeat], 4),
    ],
  ]),
};

export default {
  ...cookingIngredients,
  ...foods,
  ...localSpecialtiesNatlan,
  ...materials,
  ...GentleSeaBreeze,
  ...MeatLoversFeast,
  ...MiniAshaPockets,
  ...NanasCake,
  ...NineFruitNectar,
  ...ShrimpBisque,
  [ResourceFoodIds.ChatterOfJoyfulNights]: ResourceFoodClass.init([
    ResourceFoodIds.ChatterOfJoyfulNights,
    "«Беседы весёлых ночей»",
    FoodTypeIds.RecoveryDish,
    ResourceFoodUtility.RestoresPercentOfMaxHpToTheSelectedCharacterAndRegeneratesHp(34, 980),
    ResourceSource.ObtainedByCooking,
  ]),
} as Record<Resource["id"], Resource>;
