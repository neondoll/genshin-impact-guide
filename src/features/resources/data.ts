import type {
  Resource,
  ResourceAbstract,
  ResourceCookingIngredient,
  ResourceFood,
  ResourceLocalSpecialtyFontaine,
  ResourceLocalSpecialtyInazuma,
  ResourceLocalSpecialtyMondstadt,
  ResourceLocalSpecialtyNatlan,
  ResourceMaterial,
  ResourceRecipe,
  ResourceRecipeIngredient,
} from "./types";
import { CharacterIds } from "../characters/enums";
import { FoodTypeIds } from "../food-types/enums";
import { publicImageSrc } from "@/lib/utils";
import { RegionIds } from "../regions/enums";
import {
  ResourceCookingIngredientIds,
  ResourceFoodIds,
  ResourceLocalSpecialtyFontaineIds,
  ResourceLocalSpecialtyInazumaIds,
  ResourceLocalSpecialtyMondstadtIds,
  ResourceLocalSpecialtyNatlanIds,
  ResourceMaterialIds,
  ResourceRecipeIds,
} from "./enums";
import { ResourceTypeIds } from "../resource-types/enums";
import regions from "../regions/data";

abstract class ResourceAbstractClass implements ResourceAbstract {
  readonly id: ResourceAbstract["id"];
  readonly image_src: ResourceAbstract["image_src"];
  readonly name: ResourceAbstract["name"];
  readonly type_id: ResourceAbstract["type_id"];
  protected _rarity: ResourceAbstract["rarity"];
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

  get rarity() {
    return this._rarity;
  }

  setRarity(val: NonNullable<ResourceAbstract["rarity"]>) {
    this._rarity = val;

    return this;
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
  declare protected _rarity: ResourceFood["rarity"];
  readonly utility: ResourceFood["utility"];
  declare readonly source: ResourceFood["source"];
  protected _related_item_ids: ResourceFood["related_item_ids"];
  protected _recipe_id: ResourceFood["recipe_id"];
  protected _character_id: ResourceFood["character_id"];

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

  get character_id() {
    return this._character_id;
  }

  get recipe_id() {
    return this._recipe_id;
  }

  get related_item_ids() {
    return this._related_item_ids;
  }

  setCharacterId(val: NonNullable<ResourceFood["character_id"]>) {
    this._character_id = val;

    return this;
  }

  setRecipeId(val: NonNullable<ResourceFood["recipe_id"]>) {
    this._recipe_id = val;

    return this;
  }

  setRelatedItemIds(val: NonNullable<ResourceFood["related_item_ids"]>) {
    this._related_item_ids = val;

    return this;
  }

  static init(params: ConstructorParameters<typeof ResourceFoodClass>) {
    return new ResourceFoodClass(...params);
  }
}

class ResourceLocalSpecialtyFontaineClass extends ResourceAbstractClass implements ResourceLocalSpecialtyFontaine {
  declare readonly id: ResourceLocalSpecialtyFontaine["id"];
  declare readonly image_src: ResourceLocalSpecialtyFontaine["image_src"];
  declare readonly name: ResourceLocalSpecialtyFontaine["name"];
  declare readonly type_id: ResourceLocalSpecialtyFontaine["type_id"];
  declare readonly source: ResourceLocalSpecialtyFontaine["source"];

  static PATH = "local-specialties-fontaine";

  constructor(
    id: ResourceLocalSpecialtyFontaine["id"],
    name: ResourceLocalSpecialtyFontaine["name"],
    source: ResourceLocalSpecialtyFontaine["source"],
  ) {
    super(id, `${ResourceLocalSpecialtyFontaineClass.PATH}/${id}.webp`, name, ResourceTypeIds.LocalSpecialtyFontaine, source);
  }

  static init(params: ConstructorParameters<typeof ResourceLocalSpecialtyFontaineClass>) {
    return new ResourceLocalSpecialtyFontaineClass(...params);
  }
}

class ResourceLocalSpecialtyInazumaClass extends ResourceAbstractClass implements ResourceLocalSpecialtyInazuma {
  declare readonly id: ResourceLocalSpecialtyInazuma["id"];
  declare readonly image_src: ResourceLocalSpecialtyInazuma["image_src"];
  declare readonly name: ResourceLocalSpecialtyInazuma["name"];
  declare readonly type_id: ResourceLocalSpecialtyInazuma["type_id"];
  declare readonly source: ResourceLocalSpecialtyInazuma["source"];

  static PATH = "local-specialties-inazuma";

  constructor(
    id: ResourceLocalSpecialtyInazuma["id"],
    name: ResourceLocalSpecialtyInazuma["name"],
    source: ResourceLocalSpecialtyInazuma["source"],
  ) {
    super(id, `${ResourceLocalSpecialtyInazumaClass.PATH}/${id}.webp`, name, ResourceTypeIds.LocalSpecialtyInazuma, source);
  }

  static init(params: ConstructorParameters<typeof ResourceLocalSpecialtyInazumaClass>) {
    return new ResourceLocalSpecialtyInazumaClass(...params);
  }
}

class ResourceLocalSpecialtyMondstadtClass extends ResourceAbstractClass implements ResourceLocalSpecialtyMondstadt {
  declare readonly id: ResourceLocalSpecialtyMondstadt["id"];
  declare readonly image_src: ResourceLocalSpecialtyMondstadt["image_src"];
  declare readonly name: ResourceLocalSpecialtyMondstadt["name"];
  declare readonly type_id: ResourceLocalSpecialtyMondstadt["type_id"];
  declare readonly source: ResourceLocalSpecialtyMondstadt["source"];

  static PATH = "local-specialties-mondstadt";

  constructor(
    id: ResourceLocalSpecialtyMondstadt["id"],
    name: ResourceLocalSpecialtyMondstadt["name"],
    source: ResourceLocalSpecialtyMondstadt["source"],
  ) {
    super(id, `${ResourceLocalSpecialtyMondstadtClass.PATH}/${id}.webp`, name, ResourceTypeIds.LocalSpecialtyMondstadt, source);
  }

  static init(params: ConstructorParameters<typeof ResourceLocalSpecialtyMondstadtClass>) {
    return new ResourceLocalSpecialtyMondstadtClass(...params);
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
  declare protected _rarity: ResourceRecipe["rarity"];
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

class ResourceRecipeIngredientClass implements ResourceRecipeIngredient {
  readonly id: ResourceRecipeIngredient["id"];
  readonly count: ResourceRecipeIngredient["count"];

  constructor(id: ResourceRecipeIngredient["id"], count: ResourceRecipeIngredient["count"]) {
    this.id = id;
    this.count = count;
  }
}

const ResourceFoodUtility = {
  ALittleSurpriseFromTheCollectiveOfPlenty: (s: number | string) => `<span class="italic">Небольшой сюрприз Удела Благодатных Земель.</span><br>Восстанавливает 1 здоровье выбранного персонажа каждые 8 секунд в течение <span class="text-cyan-500">${s} секунд</span> и отображает логотип "Коллектива Изобилия". В кооперативном режиме этот эффект применим только к вашим персонажам.`,
  ALittleSurpriseFromTheEasybreezeHolidayResort: (s: number | string) => `<span class="italic">Небольшой сюрприз от курорта «Оазис отдыха».</span><br>Восстанавливает 1 здоровье выбранного персонажа каждые 8 секунд в течение <span class="text-cyan-500">${s} секунд</span>. В кооперативном режиме этот эффект применяется только к вашим персонажам.`,
  DecreasesAllPartyMembersClimbingAndSprintingStaminaConsumption: (stamina: number | string) => `Уменьшает потребление выносливости всеми членами отряда во время спринта и карабканья на <span class="text-cyan-500">${stamina}%</span> на 900 сек. В совместном режиме этот эффект применяется только к вашим персонажам.`,
  DecreasesAllPartyMembersSprintingAndSwimmingStaminaConsumptionFor900Seconds: (stamina: number | string) => `Уменьшает потребление выносливости всеми членами отряда во время спринта и плаванья на <span class="text-cyan-500">${stamina}%</span> на 900 сек. В совместном режиме этот эффект применяется только к вашим персонажам.`,
  IncreasesAllPartyMembersATKFor300s: (atk: number | string) => `Увеличивает силу атаки всех членов отряда на <span class="text-cyan-500">${atk} ед.</span> на 300 сек. В совместном режиме этот эффект применяется только к вашим персонажам.`,
  IncreasesAllPartyMembersATKAndCRITDMGFor300s: (atk: number | string, critDmg: number | string) => `Увеличивает силу атаки всех членов отряда на <span class="text-cyan-500">${atk} ед.</span> и крит. урон на <span class="text-cyan-500">${critDmg}%</span> на 300 сек. В совместном режиме этот эффект применяется только к вашим персонажам.`,
  IncreasesAllPartyMembersATKAndCRITRate300s: (atk: number | string, critRate: number | string) => `Увеличивает силу атаки всех членов отряда на <span class="text-cyan-500">${atk} ед.</span> и шанс крит. попадания на <span class="text-cyan-500">${critRate}%</span> на 300 сек. В совместном режиме этот эффект применяется только к вашим персонажам.`,
  IncreasesAllPartyMembersCRITRateAndCRITDMGFor300s: (crit: number | string) => `Увеличивает шанс крит. попадания и крит. урон всех членов отряда на <span class="text-cyan-500">${crit}%</span> в течение 300 сек. В совместном режиме этот эффект применяется только к вашему персонажу.`,
  IncreasesAllPartyMembersCRITRateFor300s: (critRate: number | string) => `Увеличивает шанс крит. попадания всех членов отряда на <span class="text-cyan-500">${critRate}%</span> на 300 сек. В совместном режиме этот эффект применяется только к вашим персонажам.`,
  IncreasesAllPartyMembersDEFFor300s: (def: number | string) => `Увеличивает защиту всех членов отряда на <span class="text-cyan-500">${def} ед.</span> на 300 сек. В совместном режиме этот эффект применяется только к вашим персонажам.`,
  IncreasesAllPartyMembersHealingBonus: (heal_: number | string) => `Увеличивает бонус лечения всех членов отряда на <span class="text-cyan-500">${heal_}%</span> на 300 сек. В совместном режиме этот эффект применяется только к вашим персонажам.`,
  IncreasesAllPartyMembersShieldStrengthAndDEFFor300s: (shieldStrength: number | string, def: number | string) => `Увеличивает прочность щита всех членов отряда на <span class="text-cyan-500">${shieldStrength}%</span> и защиту на <span class="text-cyan-500">${def} ед.</span> на 300 сек. В совместном режиме этот эффект применяется только к вашим персонажам.`,
  IncreasesAllPartyMembersShieldStrengthFor300s: (shieldStrength: number | string) => `Увеличивает прочность щита всех членов отряда на <span class="text-cyan-500">${shieldStrength}%</span> в течение 300 сек. В совместном режиме этот эффект применяется только к вашему персонажу.`,
  RestoresHP: (hp: number | string) => `Восстанавливает <span class="text-cyan-500">${hp}</span> HP выбранному персонажу.`,
  RestoresPercentOfMaxHPAndAnAdditionalHPToTheSelectedCharacter: (hp_: number | string, hp: number | string) => `Восстанавливает выбранному персонажу <span class="text-cyan-500">${hp_}%</span> HP + <span class="text-cyan-500">${hp}</span> HP.`,
  RestoresPercentOfMaxHPToTheSelectedCharacterAndRegeneratesHPEvery5sFor30s: (hp_: number | string, hp: number | string) => `Восстанавливает <span class="text-cyan-500">${hp_}%</span> от макс. HP выбранному персонажу, затем в течение 30 сек. каждые 5 сек. восстанавливает <span class="text-cyan-500">${hp}</span> HP.`,
  RevivesACharacterAndRestoresHP: (hp: number | string) => `Воскрешает персонажа и восстанавливает ему <span class="text-cyan-500">${hp}</span> HP.`,
  RevivesACharacterAndRestoresPercentOfMaxHPThenRestoresAnAdditionalHP: (hp_: number | string, hp: number | string) => `Воскрешает персонажа и восстанавливает ему <span class="text-cyan-500">${hp_}%</span> от макс. HP + <span class="text-cyan-500">${hp}</span> HP.`,
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

const AlmondTofu = {
  [ResourceFoodIds.AlmondTofu]: ResourceFoodClass.init([
    ResourceFoodIds.AlmondTofu,
    "Миндальный тофу",
    FoodTypeIds.ATKBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersATKFor300s(81),
    ["Готовка", "Купить у торговцев"],
  ]).setRarity(2).setRecipeId(ResourceRecipeIds.RecipeAlmondTofu),
  [ResourceFoodIds.DeliciousAlmondTofu]: ResourceFoodClass.init([
    ResourceFoodIds.DeliciousAlmondTofu,
    "Вкусный миндальный тофу",
    FoodTypeIds.ATKBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersATKFor300s(95),
    "Готовка",
  ]).setRarity(2).setRecipeId(ResourceRecipeIds.RecipeAlmondTofu),
  [ResourceFoodIds.SuspiciousAlmondTofu]: ResourceFoodClass.init([
    ResourceFoodIds.SuspiciousAlmondTofu,
    "Странный миндальный тофу",
    FoodTypeIds.ATKBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersATKFor300s(66),
    "Готовка",
  ]).setRarity(2).setRecipeId(ResourceRecipeIds.RecipeAlmondTofu),
  [ResourceFoodIds.SweetDream]: ResourceFoodClass.init([
    ResourceFoodIds.SweetDream,
    "«Сладкий сон»",
    FoodTypeIds.ATKBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersATKFor300s(114),
    "Готовка",
  ]).setCharacterId(CharacterIds.Xiao).setRarity(2).setRecipeId(ResourceRecipeIds.RecipeAlmondTofu),
  [ResourceRecipeIds.RecipeAlmondTofu]: ResourceRecipeClass.init([
    ResourceRecipeIds.RecipeAlmondTofu,
    "Рецепт: Миндальный тофу",
    "Кухня на постоялом дворе «Ваншу»",
    ResourceFoodUtility.IncreasesAllPartyMembersATKFor300s("66–95"),
    10,
    [
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Almond, 1),
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Milk, 3),
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Sugar, 1),
    ],
  ]).setRarity(2),
};
const BirdEggSushi = {
  [ResourceFoodIds.AStunningStratagem]: ResourceFoodClass.init([
    ResourceFoodIds.AStunningStratagem,
    "Стратегия неожиданности",
    FoodTypeIds.RecoveryDish,
    ResourceFoodUtility.RestoresPercentOfMaxHPAndAnAdditionalHPToTheSelectedCharacter(16, 1350),
    "Готовка",
  ]).setCharacterId(CharacterIds.SangonomiyaKokomi).setRarity(1).setRecipeId(ResourceRecipeIds.RecipeBirdEggSushi),
  [ResourceFoodIds.BirdEggSushi]: ResourceFoodClass.init([
    ResourceFoodIds.BirdEggSushi,
    "Яичные суши",
    FoodTypeIds.RecoveryDish,
    ResourceFoodUtility.RestoresPercentOfMaxHPAndAnAdditionalHPToTheSelectedCharacter(9, 1000),
    "Готовка",
  ]).setRarity(1).setRecipeId(ResourceRecipeIds.RecipeBirdEggSushi),
  [ResourceFoodIds.DeliciousBirdEggSushi]: ResourceFoodClass.init([
    ResourceFoodIds.DeliciousBirdEggSushi,
    "Вкусные яичные суши",
    FoodTypeIds.RecoveryDish,
    ResourceFoodUtility.RestoresPercentOfMaxHPAndAnAdditionalHPToTheSelectedCharacter(10, 1200),
    "Готовка",
  ]).setRarity(1).setRecipeId(ResourceRecipeIds.RecipeBirdEggSushi),
  [ResourceFoodIds.SuspiciousBirdEggSushi]: ResourceFoodClass.init([
    ResourceFoodIds.SuspiciousBirdEggSushi,
    "Странные яичные суши",
    FoodTypeIds.RecoveryDish,
    ResourceFoodUtility.RestoresPercentOfMaxHPAndAnAdditionalHPToTheSelectedCharacter(8, 800),
    "Готовка",
  ]).setRarity(1).setRecipeId(ResourceRecipeIds.RecipeBirdEggSushi),
  [ResourceRecipeIds.RecipeBirdEggSushi]: ResourceRecipeClass.init([
    ResourceRecipeIds.RecipeBirdEggSushi,
    "Рецепт: Яичные суши",
    "Купить у Симуры Камбэя в ресторане «Симура»",
    ResourceFoodUtility.RestoresPercentOfMaxHPAndAnAdditionalHPToTheSelectedCharacter("8–10", "800–1200"),
    5,
    [
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.BirdEgg, 1),
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Rice, 1),
    ],
  ]).setRarity(1),
};
const BubblemilkPie = {
  [ResourceFoodIds.BubblemilkPie]: ResourceFoodClass.init([
    ResourceFoodIds.BubblemilkPie,
    "Молочный пирог с пузырьками",
    FoodTypeIds.DEFBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersDEFFor300s(200),
    "Готовка",
  ]).setRarity(3).setRecipeId(ResourceRecipeIds.RecipeBubblemilkPie),
  [ResourceFoodIds.DeliciousBubblemilkPie]: ResourceFoodClass.init([
    ResourceFoodIds.DeliciousBubblemilkPie,
    "Вкусный молочный пирог с пузырьками",
    FoodTypeIds.DEFBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersDEFFor300s(235),
    "Готовка",
  ]).setRarity(3).setRecipeId(ResourceRecipeIds.RecipeBubblemilkPie),
  [ResourceFoodIds.SuspiciousBubblemilkPie]: ResourceFoodClass.init([
    ResourceFoodIds.SuspiciousBubblemilkPie,
    "Странный молочный пирог с пузырьками",
    FoodTypeIds.DEFBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersDEFFor300s(165),
    "Готовка",
  ]).setRarity(3).setRecipeId(ResourceRecipeIds.RecipeBubblemilkPie),
  [ResourceRecipeIds.RecipeBubblemilkPie]: ResourceRecipeClass.init([
    ResourceRecipeIds.RecipeBubblemilkPie,
    "Рецепт: Молочный пирог с пузырьками",
    "Внутриигровая почта",
    ResourceFoodUtility.IncreasesAllPartyMembersDEFFor300s("165–235"),
    15,
    [
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Butter, 2),
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Flour, 2),
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Milk, 4),
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Sugar, 1),
    ],
  ]).setRarity(3),
};
const CandyShells = {
  [ResourceFoodIds.CandyShells]: ResourceFoodClass.init([
    ResourceFoodIds.CandyShells,
    "Конфеты «Ракушки»",
    FoodTypeIds.DEFBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersShieldStrengthAndDEFFor300s(30, 200),
    "Готовка",
  ]).setRarity(4).setRecipeId(ResourceRecipeIds.RecipeCandyShells),
  [ResourceFoodIds.DeliciousCandyShells]: ResourceFoodClass.init([
    ResourceFoodIds.DeliciousCandyShells,
    "Вкусные конфеты «Ракушки»",
    FoodTypeIds.DEFBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersShieldStrengthAndDEFFor300s(35, 235),
    "Готовка",
  ]).setRarity(4).setRecipeId(ResourceRecipeIds.RecipeCandyShells),
  [ResourceFoodIds.SuspiciousCandyShells]: ResourceFoodClass.init([
    ResourceFoodIds.SuspiciousCandyShells,
    "Странные конфеты «Ракушки»",
    FoodTypeIds.DEFBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersShieldStrengthAndDEFFor300s(25, 165),
    "Готовка",
  ]).setRarity(4).setRecipeId(ResourceRecipeIds.RecipeCandyShells),
  [ResourceRecipeIds.RecipeCandyShells]: ResourceRecipeClass.init([
    ResourceRecipeIds.RecipeCandyShells,
    "Рецепт: Конфеты «Ракушки»",
    "Событие версии 5.6 «Кружащийся вальс»",
    ResourceFoodUtility.IncreasesAllPartyMembersShieldStrengthAndDEFFor300s("25–35", "165–235"),
    20,
    [
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Mint, 3),
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Sugar, 2),
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Tidalga, 3),
      new ResourceRecipeIngredientClass(ResourceFoodIds.BulleFruit, 3),
    ],
  ]).setRarity(4),
};
const CheesyMushroomSkewer = {
  [ResourceFoodIds.CheesyMushroomSkewer]: ResourceFoodClass.init([
    ResourceFoodIds.CheesyMushroomSkewer,
    "Грибные шашлычки с сыром",
    FoodTypeIds.ATKBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersCRITRateFor300s(9),
    "Готовка",
  ]).setRarity(2).setRecipeId(ResourceRecipeIds.RecipeCheesyMushroomSkewer),
  [ResourceFoodIds.DeliciousCheesyMushroomSkewer]: ResourceFoodClass.init([
    ResourceFoodIds.DeliciousCheesyMushroomSkewer,
    "Вкусные грибные шашлычки с сыром",
    FoodTypeIds.ATKBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersCRITRateFor300s(12),
    "Готовка",
  ]).setRarity(2).setRecipeId(ResourceRecipeIds.RecipeCheesyMushroomSkewer),
  [ResourceFoodIds.MtMushroomForOne]: ResourceFoodClass.init([
    ResourceFoodIds.MtMushroomForOne,
    "«Грибная гора» (порция на одного)",
    FoodTypeIds.ATKBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersCRITRateFor300s(16),
    "Готовка",
  ]).setCharacterId(CharacterIds.Varesa).setRarity(2).setRecipeId(ResourceRecipeIds.RecipeCheesyMushroomSkewer),
  [ResourceFoodIds.SuspiciousCheesyMushroomSkewer]: ResourceFoodClass.init([
    ResourceFoodIds.SuspiciousCheesyMushroomSkewer,
    "Странные грибные шашлычки с сыром",
    FoodTypeIds.ATKBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersCRITRateFor300s(6),
    "Готовка",
  ]).setRarity(2).setRecipeId(ResourceRecipeIds.RecipeCheesyMushroomSkewer),
  [ResourceRecipeIds.RecipeCheesyMushroomSkewer]: ResourceRecipeClass.init([
    ResourceRecipeIds.RecipeCheesyMushroomSkewer,
    "Рецепт: Грибные шашлычки с сыром",
    "Задание хроник племени: Удел Благодатных Земель «Отдых в саду»",
    ResourceFoodUtility.IncreasesAllPartyMembersCRITRateFor300s("6–12"),
    10,
    [
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Cheese, 1),
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Grainfruit, 1),
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.RedBerryshroom, 2),
    ],
  ]).setRarity(2),
};
const CrispyPotatoShrimpPlatter = {
  [ResourceFoodIds.ChatterOfJoyfulNights]: ResourceFoodClass.init([
    ResourceFoodIds.ChatterOfJoyfulNights,
    "«Беседы весёлых ночей»",
    FoodTypeIds.RecoveryDish,
    ResourceFoodUtility.RestoresPercentOfMaxHPToTheSelectedCharacterAndRegeneratesHPEvery5sFor30s(34, 980),
    "Готовка",
  ]).setCharacterId(CharacterIds.Dahlia).setRarity(3).setRecipeId(ResourceRecipeIds.RecipeCrispyPotatoShrimpPlatter),
  [ResourceFoodIds.CrispyPotatoShrimpPlatter]: ResourceFoodClass.init([
    ResourceFoodIds.CrispyPotatoShrimpPlatter,
    "Хрустящие креветки с картофелем",
    FoodTypeIds.RecoveryDish,
    ResourceFoodUtility.RestoresPercentOfMaxHPToTheSelectedCharacterAndRegeneratesHPEvery5sFor30s(28, 620),
    "Готовка",
  ]).setRarity(3).setRecipeId(ResourceRecipeIds.RecipeCrispyPotatoShrimpPlatter),
  [ResourceFoodIds.DeliciousCrispyPotatoShrimpPlatter]: ResourceFoodClass.init([
    ResourceFoodIds.DeliciousCrispyPotatoShrimpPlatter,
    "Вкусные хрустящие креветки с картофелем",
    FoodTypeIds.RecoveryDish,
    ResourceFoodUtility.RestoresPercentOfMaxHPToTheSelectedCharacterAndRegeneratesHPEvery5sFor30s(30, 790),
    "Готовка",
  ]).setRarity(3).setRecipeId(ResourceRecipeIds.RecipeCrispyPotatoShrimpPlatter),
  [ResourceFoodIds.SuspiciousCrispyPotatoShrimpPlatter]: ResourceFoodClass.init([
    ResourceFoodIds.SuspiciousCrispyPotatoShrimpPlatter,
    "Странные хрустящие креветки с картофелем",
    FoodTypeIds.RecoveryDish,
    ResourceFoodUtility.RestoresPercentOfMaxHPToTheSelectedCharacterAndRegeneratesHPEvery5sFor30s(26, 450),
    "Готовка",
  ]).setRarity(3).setRecipeId(ResourceRecipeIds.RecipeCrispyPotatoShrimpPlatter),
  [ResourceRecipeIds.RecipeCrispyPotatoShrimpPlatter]: ResourceRecipeClass.init([
    ResourceRecipeIds.RecipeCrispyPotatoShrimpPlatter,
    "Рецепт: Хрустящие креветки с картофелем",
    "Купить у Сары в ресторане «Хороший охотник»",
    ResourceFoodUtility.RestoresPercentOfMaxHPToTheSelectedCharacterAndRegeneratesHPEvery5sFor30s("26–30", "450–790"),
    15,
    [
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Berry, 2),
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Mint, 4),
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Potato, 3),
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.ShrimpMeat, 4),
    ],
  ]).setRarity(3),
};
const Drink455 = {
  [ResourceFoodIds.DeliciousDrink455]: ResourceFoodClass.init([
    ResourceFoodIds.DeliciousDrink455,
    "Вкусный напиток 455",
    FoodTypeIds.RecoveryDish,
    ResourceFoodUtility.RevivesACharacterAndRestoresHP(1500),
    "Готовка",
  ]).setRecipeId(ResourceRecipeIds.RecipeDrink455),
  [ResourceFoodIds.Drink455]: ResourceFoodClass.init([
    ResourceFoodIds.Drink455,
    "Напиток 455",
    FoodTypeIds.RecoveryDish,
    ResourceFoodUtility.RevivesACharacterAndRestoresHP(1200),
    "Готовка",
  ]).setRecipeId(ResourceRecipeIds.RecipeDrink455),
  [ResourceFoodIds.SuspiciousDrink455]: ResourceFoodClass.init([
    ResourceFoodIds.SuspiciousDrink455,
    "Странный напиток 455",
    FoodTypeIds.RecoveryDish,
    ResourceFoodUtility.RevivesACharacterAndRestoresHP(900),
    "Готовка",
  ]).setRecipeId(ResourceRecipeIds.RecipeDrink455),
  [ResourceRecipeIds.RecipeDrink455]: ResourceRecipeClass.init([
    ResourceRecipeIds.RecipeDrink455,
    "Рецепт: Напиток 455",
    "Совместное событие Genshin Impact × Mizone",
    ResourceFoodUtility.RevivesACharacterAndRestoresHP("900–1500"),
    undefined,
    [
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Mint, 2),
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Salt, 1),
      new ResourceRecipeIngredientClass(ResourceLocalSpecialtyInazumaIds.SakuraBloom, 2),
    ],
  ]),
};
const ForestOfColor = {
  [ResourceFoodIds.DeliciousForestOfColor]: ResourceFoodClass.init([
    ResourceFoodIds.DeliciousForestOfColor,
    "Вкусный «Яркий лес»",
    FoodTypeIds.RecoveryDish,
    ResourceFoodUtility.RevivesACharacterAndRestoresHP(550),
    "Готовка",
  ]).setRarity(2).setRecipeId(ResourceRecipeIds.RecipeForestOfColor),
  [ResourceFoodIds.ForestOfColor]: ResourceFoodClass.init([
    ResourceFoodIds.ForestOfColor,
    "«Яркий лес»",
    FoodTypeIds.RecoveryDish,
    ResourceFoodUtility.RevivesACharacterAndRestoresHP(400),
    "Готовка",
  ]).setRarity(2).setRecipeId(ResourceRecipeIds.RecipeForestOfColor),
  [ResourceFoodIds.GoldStandardHealthyMeal]: ResourceFoodClass.init([
    ResourceFoodIds.GoldStandardHealthyMeal,
    "Эталонное здоровое блюдо",
    FoodTypeIds.RecoveryDish,
    ResourceFoodUtility.RevivesACharacterAndRestoresPercentOfMaxHPThenRestoresAnAdditionalHP(15, 550),
    "Готовка",
  ]).setCharacterId(CharacterIds.Iansan).setRarity(2).setRecipeId(ResourceRecipeIds.RecipeForestOfColor),
  [ResourceFoodIds.SuspiciousForestOfColor]: ResourceFoodClass.init([
    ResourceFoodIds.SuspiciousForestOfColor,
    "Странный «Яркий лес»",
    FoodTypeIds.RecoveryDish,
    ResourceFoodUtility.RevivesACharacterAndRestoresHP(250),
    "Готовка",
  ]).setRarity(2).setRecipeId(ResourceRecipeIds.RecipeForestOfColor),
  [ResourceRecipeIds.RecipeForestOfColor]: ResourceRecipeClass.init([
    ResourceRecipeIds.RecipeForestOfColor,
    "Рецепт: «Яркий лес»",
    "Задание мира «Возвращение ночи в ночь»",
    ResourceFoodUtility.RevivesACharacterAndRestoresHP("250–550"),
    10,
    [
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Grainfruit, 2),
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Mint, 1),
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Onion, 1),
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Tomato, 1),
    ],
  ]).setRarity(2),
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
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Mint, 2),
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Sugar, 1),
      new ResourceRecipeIngredientClass(ResourceLocalSpecialtyNatlanIds.QuenepaBerry, 2),
    ],
  ]),
};
const GrilledFishInMintSauce = {
  [ResourceFoodIds.AbyssalBounty]: ResourceFoodClass.init([
    ResourceFoodIds.AbyssalBounty,
    "«Сокровище бездны»",
    FoodTypeIds.RecoveryDish,
    ResourceFoodUtility.RestoresPercentOfMaxHPAndAnAdditionalHPToTheSelectedCharacter(16, 1350),
    "Готовка",
  ]).setCharacterId(CharacterIds.Skirk).setRarity(1).setRecipeId(ResourceRecipeIds.RecipeGrilledFishInMintSauce),
  [ResourceFoodIds.DeliciousGrilledFishInMintSauce]: ResourceFoodClass.init([
    ResourceFoodIds.DeliciousGrilledFishInMintSauce,
    "Вкусная жареная рыба в мятном соусе",
    FoodTypeIds.RecoveryDish,
    ResourceFoodUtility.RestoresPercentOfMaxHPAndAnAdditionalHPToTheSelectedCharacter(10, 1200),
    "Готовка",
  ]).setRarity(1).setRecipeId(ResourceRecipeIds.RecipeGrilledFishInMintSauce),
  [ResourceFoodIds.GrilledFishInMintSauce]: ResourceFoodClass.init([
    ResourceFoodIds.GrilledFishInMintSauce,
    "Жареная рыба в мятном соусе",
    FoodTypeIds.RecoveryDish,
    ResourceFoodUtility.RestoresPercentOfMaxHPAndAnAdditionalHPToTheSelectedCharacter(9, 1000),
    ["Готовка", "Покупка у торговцев"],
  ]).setRarity(1).setRecipeId(ResourceRecipeIds.RecipeGrilledFishInMintSauce),
  [ResourceFoodIds.SuspiciousGrilledFishInMintSauce]: ResourceFoodClass.init([
    ResourceFoodIds.SuspiciousGrilledFishInMintSauce,
    "Странная жареная рыба в мятном соусе",
    FoodTypeIds.RecoveryDish,
    ResourceFoodUtility.RestoresPercentOfMaxHPAndAnAdditionalHPToTheSelectedCharacter(8, 800),
    "Готовка",
  ]).setRarity(1).setRecipeId(ResourceRecipeIds.RecipeGrilledFishInMintSauce),
  [ResourceRecipeIds.RecipeGrilledFishInMintSauce]: ResourceRecipeClass.init([
    ResourceRecipeIds.RecipeGrilledFishInMintSauce,
    "Рецепт: Жареная рыба в мятном соусе",
    "Купить у Сипака",
    ResourceFoodUtility.RestoresPercentOfMaxHPAndAnAdditionalHPToTheSelectedCharacter("8–10", "800–1200"),
    5,
    [
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Fish, 1),
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Mint, 1),
    ],
  ]).setRarity(1),
};
const HarvestsBoon = {
  [ResourceFoodIds.DeliciousHarvestsBoon]: ResourceFoodClass.init([
    ResourceFoodIds.DeliciousHarvestsBoon,
    "Вкусный «Дар богатого урожая»",
    FoodTypeIds.Other,
    ResourceFoodUtility.ALittleSurpriseFromTheCollectiveOfPlenty(48),
    "Готовка",
  ]).setRarity(4).setRecipeId(ResourceRecipeIds.RecipeHarvestsBoon),
  [ResourceFoodIds.HarvestsBoon]: ResourceFoodClass.init([
    ResourceFoodIds.HarvestsBoon,
    "«Дар богатого урожая»",
    FoodTypeIds.Other,
    ResourceFoodUtility.ALittleSurpriseFromTheCollectiveOfPlenty(40),
    "Готовка",
  ]).setRarity(4).setRecipeId(ResourceRecipeIds.RecipeHarvestsBoon),
  [ResourceFoodIds.SuspiciousHarvestsBoon]: ResourceFoodClass.init([
    ResourceFoodIds.SuspiciousHarvestsBoon,
    "Странный «Дар богатого урожая»",
    FoodTypeIds.Other,
    ResourceFoodUtility.ALittleSurpriseFromTheCollectiveOfPlenty(32),
    "Готовка",
  ]).setRarity(4).setRecipeId(ResourceRecipeIds.RecipeHarvestsBoon),
  [ResourceRecipeIds.RecipeHarvestsBoon]: ResourceRecipeClass.init([
    ResourceRecipeIds.RecipeHarvestsBoon,
    "Рецепт: «Дар богатого урожая»",
    "Награда за 2 уровень репутации в Уделе Благодатных Земель",
    ResourceFoodUtility.ALittleSurpriseFromTheCollectiveOfPlenty("32–48"),
    20,
    [
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.BirdEgg, 1),
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Grainfruit, 1),
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Milk, 1),
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.RawMeat, 1),
    ],
  ]).setRarity(4),
};
const MagmaEggs = {
  [ResourceFoodIds.DeliciousMagmaEggs]: ResourceFoodClass.init([
    ResourceFoodIds.DeliciousMagmaEggs,
    "Вкусные магмовые яйца",
    FoodTypeIds.RecoveryDish,
    ResourceFoodUtility.RestoresPercentOfMaxHPAndAnAdditionalHPToTheSelectedCharacter(10, 1200),
    "Готовка",
  ]).setRarity(1).setRecipeId(ResourceRecipeIds.RecipeMagmaEggs),
  [ResourceFoodIds.MagmaEggs]: ResourceFoodClass.init([
    ResourceFoodIds.MagmaEggs,
    "Магмовые яйца",
    FoodTypeIds.RecoveryDish,
    ResourceFoodUtility.RestoresPercentOfMaxHPAndAnAdditionalHPToTheSelectedCharacter(9, 1000),
    "Готовка",
  ]).setRarity(1).setRecipeId(ResourceRecipeIds.RecipeMagmaEggs),
  [ResourceFoodIds.SuspiciousMagmaEggs]: ResourceFoodClass.init([
    ResourceFoodIds.SuspiciousMagmaEggs,
    "Странные магмовые яйца",
    FoodTypeIds.RecoveryDish,
    "Лучше не есть!",
    "Готовка",
  ]).setRarity(1).setRecipeId(ResourceRecipeIds.RecipeMagmaEggs),
  [ResourceRecipeIds.RecipeMagmaEggs]: ResourceRecipeClass.init([
    ResourceRecipeIds.RecipeMagmaEggs,
    "Рецепт: Магмовые яйца",
    "Награда за прохождение испытания Рунтума",
    ResourceFoodUtility.RestoresPercentOfMaxHPAndAnAdditionalHPToTheSelectedCharacter("9–10", "1000–1200"),
    5,
    [new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.BirdEgg, 2)],
  ]).setRarity(1),
};
const MeatLoversFeast = {
  [ResourceFoodIds.DeliciousMeatLoversFeast]: ResourceFoodClass.init([
    ResourceFoodIds.DeliciousMeatLoversFeast,
    "Вкусная «Радость мясоеда»",
    FoodTypeIds.ATKBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersATKAndCRITRate300s(320, 10),
    "Готовка",
  ]).setRarity(4).setRecipeId(ResourceRecipeIds.RecipeMeatLoversFeast),
  [ResourceFoodIds.MeatLoversFeast]: ResourceFoodClass.init([
    ResourceFoodIds.MeatLoversFeast,
    "«Радость мясоеда»",
    FoodTypeIds.ATKBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersATKAndCRITRate300s(272, 8),
    ResourceSource.ObtainedByCooking,
  ]).setRarity(4).setRecipeId(ResourceRecipeIds.RecipeMeatLoversFeast),
  [ResourceFoodIds.SuspiciousMeatLoversFeast]: ResourceFoodClass.init([
    ResourceFoodIds.SuspiciousMeatLoversFeast,
    "Странная «Радость мясоеда»",
    FoodTypeIds.ATKBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersATKAndCRITRate300s(224, 6),
    ResourceSource.ObtainedByCooking,
  ]).setRarity(4).setRecipeId(ResourceRecipeIds.RecipeMeatLoversFeast),
  [ResourceRecipeIds.RecipeMeatLoversFeast]: ResourceRecipeClass.init([
    ResourceRecipeIds.RecipeMeatLoversFeast,
    "Рецепт: «Радость мясоеда»",
    "Внутриигровая почта",
    ResourceFoodUtility.IncreasesAllPartyMembersATKAndCRITRate300s("224–320", "6–10"),
    20,
    [
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.CoffeeBeans, 3),
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Flour, 3),
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Fowl, 5),
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.ShrimpMeat, 4),

    ],
  ]).setRarity(4),
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
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Cheese, 1),
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Flour, 1),
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Fowl, 1),
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Onion, 1),
    ],
  ]),
};
const MisoSoup = {
  [ResourceFoodIds.DeliciousMisoSoup]: ResourceFoodClass.init([
    ResourceFoodIds.DeliciousMisoSoup,
    "Вкусный мисо-суп",
    FoodTypeIds.RecoveryDish,
    ResourceFoodUtility.RestoresPercentOfMaxHPToTheSelectedCharacterAndRegeneratesHPEvery5sFor30s(10, 300),
    "Готовка",
  ]).setRarity(1).setRecipeId(ResourceRecipeIds.RecipeMisoSoup),
  [ResourceFoodIds.MisoSoup]: ResourceFoodClass.init([
    ResourceFoodIds.MisoSoup,
    "Мисо-суп",
    FoodTypeIds.RecoveryDish,
    ResourceFoodUtility.RestoresPercentOfMaxHPToTheSelectedCharacterAndRegeneratesHPEvery5sFor30s(9, 260),
    "Готовка",
  ]).setRarity(1).setRecipeId(ResourceRecipeIds.RecipeMisoSoup),
  [ResourceFoodIds.SuspiciousMisoSoup]: ResourceFoodClass.init([
    ResourceFoodIds.SuspiciousMisoSoup,
    "Странный мисо-суп",
    FoodTypeIds.RecoveryDish,
    ResourceFoodUtility.RestoresPercentOfMaxHPToTheSelectedCharacterAndRegeneratesHPEvery5sFor30s(8, 210),
    "Готовка",
  ]).setRarity(1).setRecipeId(ResourceRecipeIds.RecipeMisoSoup),
  [ResourceFoodIds.Warmth]: ResourceFoodClass.init([
    ResourceFoodIds.Warmth,
    "«Теплота»",
    FoodTypeIds.RecoveryDish,
    ResourceFoodUtility.RestoresPercentOfMaxHPToTheSelectedCharacterAndRegeneratesHPEvery5sFor30s(14, 350),
    "Готовка",
  ]).setCharacterId(CharacterIds.Thoma).setRarity(1).setRecipeId(ResourceRecipeIds.RecipeMisoSoup),
  [ResourceRecipeIds.RecipeMisoSoup]: ResourceRecipeClass.init([
    ResourceRecipeIds.RecipeMisoSoup,
    "Рецепт: Мисо-суп",
    "Купить у Симуры Камбэя в ресторане «Симура»",
    ResourceFoodUtility.RestoresPercentOfMaxHPToTheSelectedCharacterAndRegeneratesHPEvery5sFor30s("8–10", "210–300"),
    5,
    [
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Seagrass, 1),
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Tofu, 1),
    ],
  ]).setRarity(1),
};
const NanasCake = {
  [ResourceFoodIds.DeliciousNanasCake]: ResourceFoodClass.init([
    ResourceFoodIds.DeliciousNanasCake,
    "Вкусный нанасовый пирог",
    FoodTypeIds.ATKBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersATKFor300s(228),
    "Готовка",
  ]).setRecipeId(ResourceRecipeIds.RecipeNanasCake),
  [ResourceFoodIds.NanasCake]: ResourceFoodClass.init([
    ResourceFoodIds.NanasCake,
    "Нанасовый пирог",
    FoodTypeIds.ATKBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersATKFor300s(194),
    "Готовка",
  ]).setRecipeId(ResourceRecipeIds.RecipeNanasCake),
  [ResourceFoodIds.SuspiciousNanasCake]: ResourceFoodClass.init([
    ResourceFoodIds.SuspiciousNanasCake,
    "Странный нанасовый пирог",
    FoodTypeIds.ATKBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersATKFor300s(160),
    "Готовка",
  ]).setRecipeId(ResourceRecipeIds.RecipeNanasCake),
  [ResourceRecipeIds.RecipeNanasCake]: ResourceRecipeClass.init([
    ResourceRecipeIds.RecipeNanasCake,
    "Рецепт: Нанасовый пирог",
    "Задание легенд «Лето! Жара? Курорт!»",
    ResourceFoodUtility.IncreasesAllPartyMembersATKFor300s("160–228"),
    15,
    [
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.BirdEgg, 4),
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Flour, 2),
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Sugar, 1),
      new ResourceRecipeIngredientClass(ResourceMaterialIds.Cacahuatl, 2),
    ],
  ]),
};
const NineFruitNectar = {
  [ResourceFoodIds.DeliciousNineFruitNectar]: ResourceFoodClass.init([
    ResourceFoodIds.DeliciousNineFruitNectar,
    "Вкусный нектар девяти фруктов",
    FoodTypeIds.ATKBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersCRITRateFor300s(20),
    "Готовка",
  ]).setRarity(3).setRecipeId(ResourceRecipeIds.RecipeNineFruitNectar),
  [ResourceFoodIds.NineFruitNectar]: ResourceFoodClass.init([
    ResourceFoodIds.NineFruitNectar,
    "Нектар девяти фруктов",
    FoodTypeIds.ATKBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersCRITRateFor300s(15),
    "Готовка",
  ]).setRarity(3).setRecipeId(ResourceRecipeIds.RecipeNineFruitNectar),
  [ResourceFoodIds.SuspiciousNineFruitNectar]: ResourceFoodClass.init([
    ResourceFoodIds.SuspiciousNineFruitNectar,
    "Странный нектар девяти фруктов",
    FoodTypeIds.ATKBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersCRITRateFor300s(10),
    "Готовка",
  ]).setRarity(3).setRecipeId(ResourceRecipeIds.RecipeNineFruitNectar),
  [ResourceRecipeIds.RecipeNineFruitNectar]: ResourceRecipeClass.init([
    ResourceRecipeIds.RecipeNineFruitNectar,
    "Рецепт: Нектар девяти фруктов",
    "Внутриигровая почта",
    ResourceFoodUtility.IncreasesAllPartyMembersCRITRateFor300s("10–20"),
    15,
    [
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Berry, 2),
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.ZaytunPeach, 2),
      new ResourceRecipeIngredientClass(ResourceFoodIds.Apple, 2),
      new ResourceRecipeIngredientClass(ResourceFoodIds.Sunsettia, 2),
    ],
  ]).setRarity(3),
};
const PetitGateauDebordRevisedVersion = {
  [ResourceFoodIds.DeliciousPetitGateauDebordRevisedVersion]: ResourceFoodClass.init([
    ResourceFoodIds.DeliciousPetitGateauDebordRevisedVersion,
    "Вкусный тортик «Дебор»: Особый",
    FoodTypeIds.ATKBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersATKAndCRITRate300s(320, 10),
    "Готовка",
  ]).setRarity(4).setRecipeId(ResourceRecipeIds.RecipePetitGateauDebordRevisedVersion),
  [ResourceFoodIds.GateauDebordMagnifique]: ResourceFoodClass.init([
    ResourceFoodIds.GateauDebordMagnifique,
    "Торт «Дебор»: Великолепие",
    FoodTypeIds.ATKBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersATKAndCRITRate300s(384, 14),
    "Готовка",
  ]).setCharacterId(CharacterIds.Escoffier).setRarity(4).setRecipeId(ResourceRecipeIds.RecipePetitGateauDebordRevisedVersion),
  [ResourceFoodIds.PetitGateauDebordRevisedVersion]: ResourceFoodClass.init([
    ResourceFoodIds.PetitGateauDebordRevisedVersion,
    "Тортик «Дебор»: Особый",
    FoodTypeIds.ATKBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersATKAndCRITRate300s(272, 8),
    "Готовка",
  ]).setRarity(4).setRecipeId(ResourceRecipeIds.RecipePetitGateauDebordRevisedVersion),
  [ResourceFoodIds.SuspiciousPetitGateauDebordRevisedVersion]: ResourceFoodClass.init([
    ResourceFoodIds.SuspiciousPetitGateauDebordRevisedVersion,
    "Странный тортик «Дебор»: Особый",
    FoodTypeIds.ATKBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersATKAndCRITRate300s(224, 6),
    "Готовка",
  ]).setRarity(4).setRecipeId(ResourceRecipeIds.RecipePetitGateauDebordRevisedVersion),
  [ResourceRecipeIds.RecipePetitGateauDebordRevisedVersion]: ResourceRecipeClass.init([
    ResourceRecipeIds.RecipePetitGateauDebordRevisedVersion,
    "Рецепт: Тортик «Дебор»: Особый",
    "Задание легенд Эскофье «Сладкое Творение. Глава I: Сокровище из сокровищ»",
    ResourceFoodUtility.IncreasesAllPartyMembersATKAndCRITRate300s("224–320", "6–10"),
    20,
    [
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.BirdEgg, 3),
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Cream, 2),
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Flour, 2),
      new ResourceRecipeIngredientClass(ResourceLocalSpecialtyFontaineIds.RomaritimeFlower, 3),
    ],
  ]).setRarity(4),
};
const PileEmUp = {
  [ResourceFoodIds.DeliciousPileEmUp]: ResourceFoodClass.init([
    ResourceFoodIds.DeliciousPileEmUp,
    "Вкусная «Расти гора»",
    FoodTypeIds.ATKBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersCRITRateFor300s(20),
    "Готовка",
  ]).setRarity(3).setRecipeId(ResourceRecipeIds.RecipePileEmUp),
  [ResourceFoodIds.OnceUponATimeInMondstadt]: ResourceFoodClass.init([
    ResourceFoodIds.OnceUponATimeInMondstadt,
    "«Однажды в Мондштадте»",
    FoodTypeIds.ATKBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersCRITRateAndCRITDMGFor300s(20),
    "Готовка",
  ]).setCharacterId(CharacterIds.Diluc).setRarity(3).setRecipeId(ResourceRecipeIds.RecipePileEmUp),
  [ResourceFoodIds.PileEmUp]: ResourceFoodClass.init([
    ResourceFoodIds.PileEmUp,
    "«Расти гора»",
    FoodTypeIds.ATKBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersCRITRateFor300s(15),
    "Готовка",
  ]).setRarity(3).setRecipeId(ResourceRecipeIds.RecipePileEmUp),
  [ResourceFoodIds.SuspiciousPileEmUp]: ResourceFoodClass.init([
    ResourceFoodIds.SuspiciousPileEmUp,
    "Странная «Расти гора»",
    FoodTypeIds.ATKBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersCRITRateFor300s(10),
    "Готовка",
  ]).setRarity(3).setRecipeId(ResourceRecipeIds.RecipePileEmUp),
  [ResourceRecipeIds.RecipePileEmUp]: ResourceRecipeClass.init([
    ResourceRecipeIds.RecipePileEmUp,
    "Рецепт: «Расти гора»",
    "Купить у Сары в ресторане «Хороший охотник»",
    ResourceFoodUtility.IncreasesAllPartyMembersCRITRateFor300s("10–20"),
    15,
    [
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Cheese, 1),
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.RawMeat, 3),
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Potato, 3),
      new ResourceRecipeIngredientClass(ResourceLocalSpecialtyMondstadtIds.SmallLampGrass, 1),
    ],
  ]).setRarity(3),
};
const PuffedGrainfruitBars = {
  [ResourceFoodIds.DeliciousPuffedGrainfruitBars]: ResourceFoodClass.init([
    ResourceFoodIds.DeliciousPuffedGrainfruitBars,
    "Вкусные батончики из злакофрукта",
    FoodTypeIds.RecoveryDish,
    ResourceFoodUtility.RestoresPercentOfMaxHPAndAnAdditionalHPToTheSelectedCharacter(24, 1500),
    "Готовка",
  ]).setRarity(2).setRecipeId(ResourceRecipeIds.RecipePuffedGrainfruitBars),
  [ResourceFoodIds.PuffedGrainfruitBars]: ResourceFoodClass.init([
    ResourceFoodIds.PuffedGrainfruitBars,
    "Батончики из злакофрукта",
    FoodTypeIds.RecoveryDish,
    ResourceFoodUtility.RestoresPercentOfMaxHPAndAnAdditionalHPToTheSelectedCharacter(22, 1200),
    "Готовка",
  ]).setRarity(2).setRecipeId(ResourceRecipeIds.RecipePuffedGrainfruitBars),
  [ResourceFoodIds.SuspiciousPuffedGrainfruitBars]: ResourceFoodClass.init([
    ResourceFoodIds.SuspiciousPuffedGrainfruitBars,
    "Странные батончики из злакофрукта",
    FoodTypeIds.RecoveryDish,
    ResourceFoodUtility.RestoresPercentOfMaxHPAndAnAdditionalHPToTheSelectedCharacter(20, 900),
    "Готовка",
  ]).setRarity(2).setRecipeId(ResourceRecipeIds.RecipePuffedGrainfruitBars),
  [ResourceRecipeIds.RecipePuffedGrainfruitBars]: ResourceRecipeClass.init([
    ResourceRecipeIds.RecipePuffedGrainfruitBars,
    "Рецепт: Батончики из злакофрукта",
    "Награда за диалог с Камотли",
    ResourceFoodUtility.RestoresPercentOfMaxHPAndAnAdditionalHPToTheSelectedCharacter("20-24", "900-1500"),
    10,
    [
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Grainfruit, 2),
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Sugar, 1),
    ],
  ]).setRarity(2),
};
const SakuraMochi = {
  [ResourceFoodIds.DeliciousSakuraMochi]: ResourceFoodClass.init([
    ResourceFoodIds.DeliciousSakuraMochi,
    "Вкусные моти с сакурой",
    FoodTypeIds.RecoveryDish,
    ResourceFoodUtility.RevivesACharacterAndRestoresHP(1500),
    "Готовка",
  ]).setRarity(3).setRecipeId(ResourceRecipeIds.RecipeSakuraMochi),
  [ResourceFoodIds.SakuraMochi]: ResourceFoodClass.init([
    ResourceFoodIds.SakuraMochi,
    "Моти с сакурой",
    FoodTypeIds.RecoveryDish,
    ResourceFoodUtility.RevivesACharacterAndRestoresHP(1200),
    "Готовка",
  ]).setRarity(3).setRecipeId(ResourceRecipeIds.RecipeSakuraMochi),
  [ResourceFoodIds.SnowOnTheHearth]: ResourceFoodClass.init([
    ResourceFoodIds.SnowOnTheHearth,
    "«Снег на горне»",
    FoodTypeIds.RecoveryDish,
    ResourceFoodUtility.RevivesACharacterAndRestoresPercentOfMaxHPThenRestoresAnAdditionalHP(20, 1500),
    "Готовка",
  ]).setCharacterId(CharacterIds.KamisatoAyaka).setRarity(3).setRecipeId(ResourceRecipeIds.RecipeSakuraMochi),
  [ResourceFoodIds.SuspiciousSakuraMochi]: ResourceFoodClass.init([
    ResourceFoodIds.SuspiciousSakuraMochi,
    "Странные моти с сакурой",
    FoodTypeIds.RecoveryDish,
    ResourceFoodUtility.RevivesACharacterAndRestoresHP(900),
    "Готовка",
  ]).setRarity(3).setRecipeId(ResourceRecipeIds.RecipeSakuraMochi),
  [ResourceRecipeIds.RecipeSakuraMochi]: ResourceRecipeClass.init([
    ResourceRecipeIds.RecipeSakuraMochi,
    "Рецепт: Моти с сакурой",
    "Задание легенд Аяки «Белый Журавль. Глава I: Перешёптывания журавля и белого кролика»",
    ResourceFoodUtility.RevivesACharacterAndRestoresHP("900–1500"),
    15,
    [
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Rice, 4),
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Sugar, 2),
      new ResourceRecipeIngredientClass(ResourceLocalSpecialtyInazumaIds.SakuraBloom, 1),
    ],
  ]).setRarity(3),
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
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Grainfruit, 2),
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Onion, 3),
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Potato, 3),
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.ShrimpMeat, 4),
    ],
  ]),
};
const Starshroom = {
  [ResourceFoodIds.ActivatedStarshroom]: ResourceFoodClass.init([
    ResourceFoodIds.ActivatedStarshroom,
    "Оживлённый гриб-звезда",
    FoodTypeIds.RecoveryDish,
    ResourceFoodUtility.RestoresHP(800),
    "Дикая природа",
  ]).setRelatedItemIds([ResourceFoodIds.ScorchedStarshroom, ResourceFoodIds.Starshroom]),
  [ResourceFoodIds.ScorchedStarshroom]: ResourceFoodClass.init([
    ResourceFoodIds.ScorchedStarshroom,
    "Обожжённый гриб-звезда",
    FoodTypeIds.RecoveryDish,
    ResourceFoodUtility.RestoresHP(1),
    "Дикая природа",
  ]).setRelatedItemIds([ResourceFoodIds.ActivatedStarshroom, ResourceFoodIds.Starshroom]),
  [ResourceFoodIds.Starshroom]: ResourceFoodClass.init([
    ResourceFoodIds.Starshroom,
    "Гриб-звезда",
    FoodTypeIds.RecoveryDish,
    ResourceFoodUtility.RestoresHP(300),
    ["Дикая природа", "Покупка у торговцев"],
  ]).setRelatedItemIds([ResourceFoodIds.ActivatedStarshroom, ResourceFoodIds.ScorchedStarshroom]),
};
const SunshineSprat = {
  [ResourceFoodIds.DeliciousSunshineSprat]: ResourceFoodClass.init([
    ResourceFoodIds.DeliciousSunshineSprat,
    "Вкусная солнечная рыба",
    FoodTypeIds.DEFBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersShieldStrengthFor300s(30),
    "Готовка",
  ]).setRarity(3).setRecipeId(ResourceRecipeIds.RecipeSunshineSprat),
  [ResourceFoodIds.SunshineSprat]: ResourceFoodClass.init([
    ResourceFoodIds.SunshineSprat,
    "Солнечная рыба",
    FoodTypeIds.DEFBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersShieldStrengthFor300s(25),
    "Готовка",
  ]).setRarity(3).setRecipeId(ResourceRecipeIds.RecipeSunshineSprat),
  [ResourceFoodIds.SuspiciousSunshineSprat]: ResourceFoodClass.init([
    ResourceFoodIds.SuspiciousSunshineSprat,
    "Странная солнечная рыба",
    FoodTypeIds.DEFBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersShieldStrengthFor300s(20),
    "Готовка",
  ]).setRarity(3).setRecipeId(ResourceRecipeIds.RecipeSunshineSprat),
  [ResourceFoodIds.WoodlandDream]: ResourceFoodClass.init([
    ResourceFoodIds.WoodlandDream,
    "«Лесной сон»",
    FoodTypeIds.DEFBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersShieldStrengthFor300s(35),
    "Готовка",
  ]).setCharacterId(CharacterIds.Albedo).setRarity(3).setRecipeId(ResourceRecipeIds.RecipeSunshineSprat),
  [ResourceRecipeIds.RecipeSunshineSprat]: ResourceRecipeClass.init([
    ResourceRecipeIds.RecipeSunshineSprat,
    "Рецепт: Солнечная рыба",
    "Задание легенд Альбедо «Меловой Принцепс. Глава I: Опыты над путешественником»",
    ResourceFoodUtility.IncreasesAllPartyMembersShieldStrengthFor300s("20–30"),
    15,
    [
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Butter, 3),
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Fish, 3),
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Salt, 1),
      new ResourceRecipeIngredientClass(ResourceLocalSpecialtyMondstadtIds.SmallLampGrass, 1),
    ],
  ]).setRarity(3),
};
const TeyvatFriedEgg = {
  [ResourceFoodIds.TeyvatFriedEgg]: ResourceFoodClass.init([
    ResourceFoodIds.TeyvatFriedEgg,
    "Яичница по-тейватски",
    FoodTypeIds.RecoveryDish,
    ResourceFoodUtility.RevivesACharacterAndRestoresHP(100),
    ["Готовка", "Купить у торговцев"],
  ]).setRarity(1).setRecipeId(ResourceRecipeIds.RecipeTeyvatFriedEgg),
  [ResourceRecipeIds.RecipeTeyvatFriedEgg]: ResourceRecipeClass.init([
    ResourceRecipeIds.RecipeTeyvatFriedEgg,
    "Рецепт: Яичница по-тейватски",
    undefined,
    ResourceFoodUtility.RevivesACharacterAndRestoresHP("15–20"),
    5,
    [new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.BirdEgg, 1)],
  ]).setRarity(1),
};
const Xocoatl = {
  [ResourceFoodIds.DeliciousXocoatl]: ResourceFoodClass.init([
    ResourceFoodIds.DeliciousXocoatl,
    "Вкусный шокоатль",
    FoodTypeIds.DEFBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersDEFFor300s(235),
    "Готовка",
  ]).setRarity(3).setRecipeId(ResourceRecipeIds.RecipeXocoatl),
  [ResourceFoodIds.EmotionalSupport]: ResourceFoodClass.init([
    ResourceFoodIds.EmotionalSupport,
    "«Эмоциональная поддержка»",
    FoodTypeIds.DEFBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersDEFFor300s(282),
    "Готовка",
  ]).setCharacterId(CharacterIds.Ifa).setRarity(3).setRecipeId(ResourceRecipeIds.RecipeXocoatl),
  [ResourceFoodIds.SuspiciousXocoatl]: ResourceFoodClass.init([
    ResourceFoodIds.SuspiciousXocoatl,
    "Странный шокоатль",
    FoodTypeIds.DEFBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersDEFFor300s(165),
    "Готовка",
  ]).setRarity(3).setRecipeId(ResourceRecipeIds.RecipeXocoatl),
  [ResourceFoodIds.Xocoatl]: ResourceFoodClass.init([
    ResourceFoodIds.Xocoatl,
    "Шокоатль",
    FoodTypeIds.DEFBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersDEFFor300s(235),
    "Готовка",
  ]).setRarity(3).setRecipeId(ResourceRecipeIds.RecipeXocoatl),
  [ResourceRecipeIds.RecipeXocoatl]: ResourceRecipeClass.init([
    ResourceRecipeIds.RecipeXocoatl,
    "Рецепт: Шокоатль",
    "Купить у Чанки",
    ResourceFoodUtility.IncreasesAllPartyMembersDEFFor300s("165–235"),
    15,
    [
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Milk, 3),
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Mint, 3),
      new ResourceRecipeIngredientClass(ResourceCookingIngredientIds.Sugar, 1),
      new ResourceRecipeIngredientClass(ResourceMaterialIds.Cacahuatl, 3),
    ],
  ]).setRarity(3),
};

export default {
  [ResourceFoodIds.AutumnFrost]: ResourceFoodClass.init([
    ResourceFoodIds.AutumnFrost,
    "«Осенний иней»",
    FoodTypeIds.RecoveryDish,
    ResourceFoodUtility.RestoresPercentOfMaxHPAndAnAdditionalHPToTheSelectedCharacter(42, 2850),
    "Кулинарный мек: Импровизированное приготовление Эскофье",
  ]).setRarity(4),
  [ResourceFoodIds.GildedHall]: ResourceFoodClass.init([
    ResourceFoodIds.GildedHall,
    "«Позолоченный зал»",
    FoodTypeIds.ATKBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersATKAndCRITDMGFor300s(372, 24),
    "Кулинарный мек: Импровизированное приготовление Эскофье",
  ]).setRarity(5),
  [ResourceFoodIds.VerdantGift]: ResourceFoodClass.init([
    ResourceFoodIds.VerdantGift,
    "«Зелёный дар»",
    FoodTypeIds.ATKBoostingDish,
    ResourceFoodUtility.IncreasesAllPartyMembersATKAndCRITRate300s(320, 10),
    "Кулинарный мек: Импровизированное приготовление Эскофье",
  ]).setRarity(4),
  [ResourceFoodIds.WaveKissedSands]: ResourceFoodClass.init([
    ResourceFoodIds.WaveKissedSands,
    "Прибрежные пески",
    FoodTypeIds.AdventurersDish,
    ResourceFoodUtility.DecreasesAllPartyMembersSprintingAndSwimmingStaminaConsumptionFor900Seconds(25),
    "Кулинарный мек: Импровизированное приготовление Эскофье",
  ]).setRarity(3),

  /* Миндальный тофу                 */ ...AlmondTofu,
  /* Яичные суши                     */ ...BirdEggSushi,
  /* Молочный пирог с пузырьками     */ ...BubblemilkPie,
  /* Конфеты «Ракушки»               */ ...CandyShells,
  /* Грибные шашлычки с сыром        */ ...CheesyMushroomSkewer,
  /* Хрустящие креветки с картофелем */ ...CrispyPotatoShrimpPlatter,
  /* Напиток 455                     */ ...Drink455,
  /* «Яркий лес»                     */ ...ForestOfColor,
  /* «Лёгкий морской бриз»           */ ...GentleSeaBreeze,
  /* Жареная рыба в мятном соусе     */ ...GrilledFishInMintSauce,
  /* «Дар богатого урожая»           */ ...HarvestsBoon,
  /* Магмовые яйца                   */ ...MagmaEggs,
  /* «Радость мясоеда»               */ ...MeatLoversFeast,
  /* Мини-мешочки аши                */ ...MiniAshaPockets,
  /* Мисо-суп                        */ ...MisoSoup,
  /* Нанасовый пирог                 */ ...NanasCake,
  /* Нектар девяти фруктов           */ ...NineFruitNectar,
  /* Тортик «Дебор»: Особый          */ ...PetitGateauDebordRevisedVersion,
  /* «Расти гора»                    */ ...PileEmUp,
  /* Батончики из злакофрукта        */ ...PuffedGrainfruitBars,
  /* Моти с сакурой                  */ ...SakuraMochi,
  /* Биск с креветками               */ ...ShrimpBisque,
  /* Гриб-звезда                     */ ...Starshroom,
  /* Солнечная рыба                  */ ...SunshineSprat,
  /* Яичница по-тейватски            */ ...TeyvatFriedEgg,
  /* Шокоатль                        */ ...Xocoatl,

  /* Кухонные ингредиенты            */ ...{
    [ResourceCookingIngredientIds.Almond]: ResourceCookingIngredientClass.init([
      ResourceCookingIngredientIds.Almond,
      "Миндаль",
      "Купить у торговцев",
    ]),
    [ResourceCookingIngredientIds.Berry]: ResourceCookingIngredientClass.init([
      ResourceCookingIngredientIds.Berry,
      "Ягода",
      "Дикая природа",
    ]),
    [ResourceCookingIngredientIds.BirdEgg]: ResourceCookingIngredientClass.init([
      ResourceCookingIngredientIds.BirdEgg,
      "Яйцо",
      ["Дикая природа", "Купить у торговцев"],
    ]),
    [ResourceCookingIngredientIds.Butter]: ResourceCookingIngredientClass.init([
      ResourceCookingIngredientIds.Butter,
      "Сливочное масло",
      ["Заготовка ингредиентов", "Покупка у торговцев"],
    ]),
    [ResourceCookingIngredientIds.Cheese]: ResourceCookingIngredientClass.init([
      ResourceCookingIngredientIds.Cheese,
      "Сыр",
      ["Заготовка ингредиентов", "Покупка у торговцев"],
    ]),
    [ResourceCookingIngredientIds.CoffeeBeans]: ResourceCookingIngredientClass.init([
      ResourceCookingIngredientIds.CoffeeBeans,
      "Кофейные зёрна",
      "Купить у Энтеки в кафе «Пуспа»",
    ]),
    [ResourceCookingIngredientIds.Cream]: ResourceCookingIngredientClass.init([
      ResourceCookingIngredientIds.Cream,
      "Сметана",
      ["Заготовка ингредиентов", "Покупка у торговцев"],
    ]),
    [ResourceCookingIngredientIds.Fish]: ResourceCookingIngredientClass.init([
      ResourceCookingIngredientIds.Fish,
      "Рыба",
      ["Водоёмы", "Купить у торговцев", "Заготовка", "Загадочный мясной продукт"],
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
      ["Натлан", "Купить у торговцев", "Садоводство"],
    ]),
    [ResourceCookingIngredientIds.Milk]: ResourceCookingIngredientClass.init([
      ResourceCookingIngredientIds.Milk,
      "Молоко",
      "Купить у торговцев",
    ]),
    [ResourceCookingIngredientIds.Mint]: ResourceCookingIngredientClass.init([
      ResourceCookingIngredientIds.Mint,
      "Мята",
      ["Дикая природа", "Купить у торговцев", "Садоводство"],
    ]),
    [ResourceCookingIngredientIds.Onion]: ResourceCookingIngredientClass.init([
      ResourceCookingIngredientIds.Onion,
      "Лук",
      "Купить у торговцев",
    ]),
    [ResourceCookingIngredientIds.Potato]: ResourceCookingIngredientClass.init([
      ResourceCookingIngredientIds.Potato,
      "Картофель",
      ["Исследование Тейвата", "Купить у торговцев"],
    ]),
    [ResourceCookingIngredientIds.RawMeat]: ResourceCookingIngredientClass.init([
      ResourceCookingIngredientIds.RawMeat,
      "Сырое мясо",
      ["Дикие животные", "Купить у торговцев", "Загадочный мясной продукт"],
    ]),
    [ResourceCookingIngredientIds.RedBerryshroom]: ResourceCookingIngredientClass.init([
      ResourceCookingIngredientIds.RedBerryshroom,
      "Красный грибофрукт",
      "Атокпан, Натлан",
    ]),
    [ResourceCookingIngredientIds.Rice]: ResourceCookingIngredientClass.init([
      ResourceCookingIngredientIds.Rice,
      "Рис",
      "Купить у торговцев",
    ]),
    [ResourceCookingIngredientIds.Salt]: ResourceCookingIngredientClass.init([
      ResourceCookingIngredientIds.Salt,
      "Соль",
      "Купить у торговцев",
    ]),
    [ResourceCookingIngredientIds.Seagrass]: ResourceCookingIngredientClass.init([
      ResourceCookingIngredientIds.Seagrass,
      "Морская водоросль",
      ["Инадзума", "Купить у торговцев", "Садоводство"],
    ]),
    [ResourceCookingIngredientIds.ShrimpMeat]: ResourceCookingIngredientClass.init([
      ResourceCookingIngredientIds.ShrimpMeat,
      "Мясо креветки",
      "Купить у торговцев",
    ]),
    [ResourceCookingIngredientIds.Sugar]: ResourceCookingIngredientClass.init([
      ResourceCookingIngredientIds.Sugar,
      "Сахар",
      ["Заготовка ингредиентов", "Купить у торговцев"],
    ]),
    [ResourceCookingIngredientIds.Tidalga]: ResourceCookingIngredientClass.init([
      ResourceCookingIngredientIds.Tidalga,
      "Тидалья",
      "Подводные зоны Фонтейна",
    ]),
    [ResourceCookingIngredientIds.Tofu]: ResourceCookingIngredientClass.init([
      ResourceCookingIngredientIds.Tofu,
      "Тофу",
      "Купить у торговцев",
    ]),
    [ResourceCookingIngredientIds.Tomato]: ResourceCookingIngredientClass.init([
      ResourceCookingIngredientIds.Tomato,
      "Помидор",
      "Купить у торговцев",
    ]),
    [ResourceCookingIngredientIds.ZaytunPeach]: ResourceCookingIngredientClass.init([
      ResourceCookingIngredientIds.ZaytunPeach,
      "Персик зайтун",
      [ResourceSource.FoundInTheWild, ResourceSource.BuyingFromMerchants, "Садоводство"],
    ]),
  },
  /* Еда                             */ ...{
    [ResourceFoodIds.Apple]: ResourceFoodClass.init([
      ResourceFoodIds.Apple,
      "Яблоко",
      FoodTypeIds.RecoveryDish,
      ResourceFoodUtility.RestoresHP(300),
      ["Дикая природа", "Купить у торговцев"],
    ]),
    [ResourceFoodIds.BulleFruit]: ResourceFoodClass.init([
      ResourceFoodIds.BulleFruit,
      "Пузырин",
      FoodTypeIds.RecoveryDish,
      ResourceFoodUtility.RestoresHP(300),
      ["Дикая природа", "Купить у торговцев"],
    ]),
    [ResourceFoodIds.CandlecapMushroom]: ResourceFoodClass.init([
      ResourceFoodIds.CandlecapMushroom,
      "Свечевик",
      FoodTypeIds.RecoveryDish,
      ResourceFoodUtility.RestoresHP(300),
      ["Натлан", "Купить у торговцев"],
    ]),
    [ResourceFoodIds.Sunsettia]: ResourceFoodClass.init([
      ResourceFoodIds.Sunsettia,
      "Закатник",
      FoodTypeIds.RecoveryDish,
      ResourceFoodUtility.RestoresHP(300),
      ["Дикая природа", "Купить у торговцев"],
    ]),
  },
  /* Диковинка Фонтейна              */ ...{
    [ResourceLocalSpecialtyFontaineIds.RomaritimeFlower]: ResourceLocalSpecialtyFontaineClass.init([
      ResourceLocalSpecialtyFontaineIds.RomaritimeFlower,
      "Ромарин",
      ["Дикая природа", "Салосское морское плато", "Купить у торговцев"],
    ]),
  },
  /* Диковинки Инадзумы              */ ...{
    [ResourceLocalSpecialtyInazumaIds.SakuraBloom]: ResourceLocalSpecialtyInazumaClass.init([
      ResourceLocalSpecialtyInazumaIds.SakuraBloom,
      "Цвет сакуры",
      "Остров Наруками",
    ]),
  },
  /* Диковинки Мондштадта            */ ...{
    [ResourceLocalSpecialtyMondstadtIds.SmallLampGrass]: ResourceLocalSpecialtyMondstadtClass.init([
      ResourceLocalSpecialtyMondstadtIds.SmallLampGrass,
      "Трава-светяшка",
      ["Ночью за городом", "Вольфендом", "Шепчущий лес", "Купить у Флоры", "Садоводство"],
    ]),
  },
  /* Диковинки Натлана               */ ...{
    [ResourceLocalSpecialtyNatlanIds.QuenepaBerry]: ResourceLocalSpecialtyNatlanClass.init([
      ResourceLocalSpecialtyNatlanIds.QuenepaBerry,
      "Ягода квенепа",
      [ResourceSource.Natlan, ResourceSource.BuyingFromMerchants],
    ]),
  },
  /* Материалы                       */ ...{
    [ResourceMaterialIds.Cacahuatl]: ResourceMaterialClass.init([
      ResourceMaterialIds.Cacahuatl,
      "Какауатль",
      ["Натлан", "Купить у торговцев", "Садоводство"],
    ]),
  },
} as Record<Resource["id"], Resource>;
