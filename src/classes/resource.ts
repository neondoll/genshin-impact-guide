import type {
  ResourceAbstract as TypeAbstract,
  ResourceCookingIngredient as TypeCookingIngredient,
  ResourceFood as TypeFood,
  ResourceLocalSpecialtyFontaine as TypeLocalSpecialtyFontaine,
  ResourceLocalSpecialtyInazuma as TypeLocalSpecialtyInazuma,
  ResourceLocalSpecialtyLiyue as TypeLocalSpecialtyLiyue,
  ResourceLocalSpecialtyMondstadt as TypeLocalSpecialtyMondstadt,
  ResourceLocalSpecialtyNatlan as TypeLocalSpecialtyNatlan,
  ResourceMaterial as TypeMaterial,
  ResourceRecipe as TypeRecipe,
  ResourceRecipeIngredient as TypeRecipeIngredient,
} from "@/types/resource";
import { publicImageSrc } from "@/lib/utils";
import { ResourceTypeIds } from "@/enums/resource-type";

abstract class ResourceAbstract implements TypeAbstract {
  readonly id: TypeAbstract["id"];
  readonly image_src: TypeAbstract["image_src"];
  readonly name: TypeAbstract["name"];
  readonly type_id: TypeAbstract["type_id"];
  readonly rarity: TypeAbstract["rarity"];
  readonly source: TypeAbstract["source"];

  static PATH = "resources";

  protected constructor(
    id: TypeAbstract["id"],
    imageName: string,
    name: TypeAbstract["name"],
    typeId: TypeAbstract["type_id"],
    rarity: TypeAbstract["rarity"],
    source: TypeAbstract["source"],
  ) {
    this.id = id;
    this.image_src = publicImageSrc(`${ResourceAbstract.PATH}/${imageName}`);
    this.name = name;
    this.type_id = typeId;
    this.rarity = rarity;
    this.source = source;
  }
}

export class ResourceCookingIngredient extends ResourceAbstract implements TypeCookingIngredient {
  declare readonly id: TypeCookingIngredient["id"];
  declare readonly image_src: TypeCookingIngredient["image_src"];
  declare readonly name: TypeCookingIngredient["name"];
  declare readonly type_id: TypeCookingIngredient["type_id"];
  declare readonly rarity: TypeCookingIngredient["rarity"];
  declare readonly source: TypeCookingIngredient["source"];

  static PATH = "cooking-ingredients";

  constructor(
    id: TypeCookingIngredient["id"],
    name: TypeCookingIngredient["name"],
    source: TypeCookingIngredient["source"],
  ) {
    super(id, `${ResourceCookingIngredient.PATH}/${id}.webp`, name, ResourceTypeIds.CookingIngredient, undefined, source);
  }

  static init(params: ConstructorParameters<typeof ResourceCookingIngredient>) {
    return new ResourceCookingIngredient(...params);
  }
}

export class ResourceFood extends ResourceAbstract implements TypeFood {
  declare readonly id: TypeFood["id"];
  declare readonly image_src: TypeFood["image_src"];
  declare readonly name: TypeFood["name"];
  declare readonly type_id: TypeFood["type_id"];
  readonly food_type_id: TypeFood["food_type_id"];
  declare readonly rarity: TypeFood["rarity"];
  readonly utility: TypeFood["utility"];
  declare readonly source: TypeFood["source"];
  protected _related_item_ids: TypeFood["related_item_ids"];
  protected _recipe_id: TypeFood["recipe_id"];
  protected _character_id: TypeFood["character_id"];

  static PATH = "foods";

  constructor(
    id: TypeFood["id"],
    name: TypeFood["name"],
    typeId: TypeFood["food_type_id"],
    rarity: TypeFood["rarity"],
    utility: TypeFood["utility"],
    source: TypeFood["source"],
  ) {
    super(id, `${ResourceFood.PATH}/${id}.webp`, name, ResourceTypeIds.Food, rarity, source);

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

  setCharacterId(val: NonNullable<TypeFood["character_id"]>) {
    this._character_id = val;

    return this;
  }

  setRecipeId(val: NonNullable<TypeFood["recipe_id"]>) {
    this._recipe_id = val;

    return this;
  }

  setRelatedItemIds(val: NonNullable<TypeFood["related_item_ids"]>) {
    this._related_item_ids = val;

    return this;
  }

  static init(params: ConstructorParameters<typeof ResourceFood>) {
    return new ResourceFood(...params);
  }
}

export class ResourceLocalSpecialtyFontaine extends ResourceAbstract implements TypeLocalSpecialtyFontaine {
  declare readonly id: TypeLocalSpecialtyFontaine["id"];
  declare readonly image_src: TypeLocalSpecialtyFontaine["image_src"];
  declare readonly name: TypeLocalSpecialtyFontaine["name"];
  declare readonly type_id: TypeLocalSpecialtyFontaine["type_id"];
  declare readonly rarity: TypeLocalSpecialtyFontaine["rarity"];
  declare readonly source: TypeLocalSpecialtyFontaine["source"];

  static PATH = "local-specialties-fontaine";

  constructor(
    id: TypeLocalSpecialtyFontaine["id"],
    name: TypeLocalSpecialtyFontaine["name"],
    source: TypeLocalSpecialtyFontaine["source"],
  ) {
    super(id, `${ResourceLocalSpecialtyFontaine.PATH}/${id}.webp`, name, ResourceTypeIds.LocalSpecialtyFontaine, undefined, source);
  }

  static init(params: ConstructorParameters<typeof ResourceLocalSpecialtyFontaine>) {
    return new ResourceLocalSpecialtyFontaine(...params);
  }
}

export class ResourceLocalSpecialtyInazuma extends ResourceAbstract implements TypeLocalSpecialtyInazuma {
  declare readonly id: TypeLocalSpecialtyInazuma["id"];
  declare readonly image_src: TypeLocalSpecialtyInazuma["image_src"];
  declare readonly name: TypeLocalSpecialtyInazuma["name"];
  declare readonly type_id: TypeLocalSpecialtyInazuma["type_id"];
  declare readonly rarity: TypeLocalSpecialtyInazuma["rarity"];
  declare readonly source: TypeLocalSpecialtyInazuma["source"];

  static PATH = "local-specialties-inazuma";

  constructor(
    id: TypeLocalSpecialtyInazuma["id"],
    name: TypeLocalSpecialtyInazuma["name"],
    source: TypeLocalSpecialtyInazuma["source"],
  ) {
    super(id, `${ResourceLocalSpecialtyInazuma.PATH}/${id}.webp`, name, ResourceTypeIds.LocalSpecialtyInazuma, undefined, source);
  }

  static init(params: ConstructorParameters<typeof ResourceLocalSpecialtyInazuma>) {
    return new ResourceLocalSpecialtyInazuma(...params);
  }
}

export class ResourceLocalSpecialtyLiyue extends ResourceAbstract implements TypeLocalSpecialtyLiyue {
  declare readonly id: TypeLocalSpecialtyLiyue["id"];
  declare readonly image_src: TypeLocalSpecialtyLiyue["image_src"];
  declare readonly name: TypeLocalSpecialtyLiyue["name"];
  declare readonly type_id: TypeLocalSpecialtyLiyue["type_id"];
  declare readonly rarity: TypeLocalSpecialtyLiyue["rarity"];
  declare readonly source: TypeLocalSpecialtyLiyue["source"];

  static PATH = "local-specialties-liyue";

  constructor(
    id: TypeLocalSpecialtyLiyue["id"],
    name: TypeLocalSpecialtyLiyue["name"],
    source: TypeLocalSpecialtyLiyue["source"],
  ) {
    super(id, `${ResourceLocalSpecialtyLiyue.PATH}/${id}.webp`, name, ResourceTypeIds.LocalSpecialtyLiyue, undefined, source);
  }

  static init(params: ConstructorParameters<typeof ResourceLocalSpecialtyLiyue>) {
    return new ResourceLocalSpecialtyLiyue(...params);
  }
}

export class ResourceLocalSpecialtyMondstadt extends ResourceAbstract implements TypeLocalSpecialtyMondstadt {
  declare readonly id: TypeLocalSpecialtyMondstadt["id"];
  declare readonly image_src: TypeLocalSpecialtyMondstadt["image_src"];
  declare readonly name: TypeLocalSpecialtyMondstadt["name"];
  declare readonly type_id: TypeLocalSpecialtyMondstadt["type_id"];
  declare readonly rarity: TypeLocalSpecialtyMondstadt["rarity"];
  declare readonly source: TypeLocalSpecialtyMondstadt["source"];

  static PATH = "local-specialties-mondstadt";

  constructor(
    id: TypeLocalSpecialtyMondstadt["id"],
    name: TypeLocalSpecialtyMondstadt["name"],
    source: TypeLocalSpecialtyMondstadt["source"],
  ) {
    super(id, `${ResourceLocalSpecialtyMondstadt.PATH}/${id}.webp`, name, ResourceTypeIds.LocalSpecialtyMondstadt, undefined, source);
  }

  static init(params: ConstructorParameters<typeof ResourceLocalSpecialtyMondstadt>) {
    return new ResourceLocalSpecialtyMondstadt(...params);
  }
}

export class ResourceLocalSpecialtyNatlan extends ResourceAbstract implements TypeLocalSpecialtyNatlan {
  declare readonly id: TypeLocalSpecialtyNatlan["id"];
  declare readonly image_src: TypeLocalSpecialtyNatlan["image_src"];
  declare readonly name: TypeLocalSpecialtyNatlan["name"];
  declare readonly type_id: TypeLocalSpecialtyNatlan["type_id"];
  declare readonly rarity: TypeLocalSpecialtyNatlan["rarity"];
  declare readonly source: TypeLocalSpecialtyNatlan["source"];

  static PATH = "local-specialties-natlan";

  constructor(
    id: TypeLocalSpecialtyNatlan["id"],
    name: TypeLocalSpecialtyNatlan["name"],
    source: TypeLocalSpecialtyNatlan["source"],
  ) {
    super(id, `${ResourceLocalSpecialtyNatlan.PATH}/${id}.webp`, name, ResourceTypeIds.LocalSpecialtyNatlan, undefined, source);
  }

  static init(params: ConstructorParameters<typeof ResourceLocalSpecialtyNatlan>) {
    return new ResourceLocalSpecialtyNatlan(...params);
  }
}

export class ResourceMaterial extends ResourceAbstract implements TypeMaterial {
  declare readonly id: TypeMaterial["id"];
  declare readonly image_src: TypeMaterial["image_src"];
  declare readonly name: TypeMaterial["name"];
  declare readonly type_id: TypeMaterial["type_id"];
  declare readonly rarity: TypeMaterial["rarity"];
  declare readonly source: TypeMaterial["source"];

  static PATH = "materials";

  constructor(id: TypeMaterial["id"], name: TypeMaterial["name"], source: TypeMaterial["source"]) {
    super(id, `${ResourceMaterial.PATH}/${id}.webp`, name, ResourceTypeIds.Material, undefined, source);
  }

  static init(params: ConstructorParameters<typeof ResourceMaterial>) {
    return new ResourceMaterial(...params);
  }
}

export class ResourceRecipe extends ResourceAbstract implements TypeRecipe {
  declare readonly id: TypeRecipe["id"];
  declare readonly image_src: TypeRecipe["image_src"];
  declare readonly name: TypeRecipe["name"];
  declare readonly type_id: TypeRecipe["type_id"];
  declare readonly rarity: TypeRecipe["rarity"];
  declare readonly source: TypeRecipe["source"];
  readonly dish_effects: TypeRecipe["dish_effects"];
  readonly proficiency: TypeRecipe["proficiency"];
  readonly ingredients: TypeRecipe["ingredients"];

  constructor(
    id: TypeRecipe["id"],
    name: TypeRecipe["name"],
    rarity: TypeRecipe["rarity"],
    source: TypeRecipe["source"],
    dishEffects: TypeRecipe["dish_effects"],
    ingredients: TypeRecipe["ingredients"],
  ) {
    const typeId = ResourceTypeIds.Recipe;

    super(id, `${typeId}.webp`, name, typeId, rarity, source);

    this.dish_effects = dishEffects;
    this.proficiency = rarity ? (rarity * 5) : undefined;
    this.ingredients = ingredients;
  }

  static init(params: ConstructorParameters<typeof ResourceRecipe>) {
    return new ResourceRecipe(...params);
  }
}

export class ResourceRecipeIngredient implements TypeRecipeIngredient {
  readonly id: TypeRecipeIngredient["id"];
  readonly count: TypeRecipeIngredient["count"];

  constructor(id: TypeRecipeIngredient["id"], count: TypeRecipeIngredient["count"]) {
    this.id = id;
    this.count = count;
  }
}
