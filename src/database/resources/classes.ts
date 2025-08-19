import type {
  IResource,
  IResourceCookingIngredient,
  IResourceFood,
  IResourceIngredient,
  IResourceRecipe,
} from "./types";
import { FoodTypeKeys } from "../food-types/enums";
import { publicImageSrc } from "@/lib/utils";
import { ResourceCookingIngredientKeys } from "./enums";
import { ResourceTypeKeys } from "../resource-types/enums";

abstract class CResource implements IResource {
  readonly key: IResource["key"];
  readonly image_src: IResource["image_src"];
  readonly name: IResource["name"];
  readonly type_key: IResource["type_key"];
  readonly source: IResource["source"];

  static PATH = "resources";

  constructor(
    key: IResource["key"],
    imageName: string,
    name: IResource["name"],
    typeKey: IResource["type_key"],
    source: IResource["source"],
  ) {
    this.key = key;
    this.image_src = publicImageSrc(`${CResource.PATH}/${imageName}`);
    this.name = name;
    this.type_key = typeKey;
    this.source = source;
  }
}

export class CResourceCookingIngredient extends CResource implements IResourceCookingIngredient {
  declare readonly key: IResourceCookingIngredient["key"];
  declare readonly image_src: IResourceCookingIngredient["image_src"];
  declare readonly name: IResourceCookingIngredient["name"];
  declare readonly type_key: IResourceCookingIngredient["type_key"];
  declare readonly source: IResourceCookingIngredient["source"];

  static PATH = "cooking-ingredients";

  constructor(
    key: keyof typeof ResourceCookingIngredientKeys,
    name: IResourceCookingIngredient["name"],
    source: IResourceCookingIngredient["source"],
  ) {
    const thisKey = ResourceCookingIngredientKeys[key];

    super(
      thisKey,
      `${CResourceCookingIngredient.PATH}/${thisKey}.webp`,
      name,
      ResourceTypeKeys.CookingIngredient,
      source,
    );
  }
}

export class CResourceFood extends CResource implements IResourceFood {
  private _ingredients: IResourceFood["ingredients"];
  private _recipe_key: IResourceFood["recipe_key"];
  private _related_dish_keys: IResourceFood["related_dish_keys"];
  declare readonly key: IResourceFood["key"];
  declare readonly image_src: IResourceFood["image_src"];
  declare readonly name: IResourceFood["name"];
  declare readonly type_key: IResourceFood["type_key"];
  readonly food_type_key: IResourceFood["food_type_key"];
  readonly utility: IResourceFood["utility"];
  declare readonly source: IResourceFood["source"];

  static PATH = "foods";

  constructor(
    key: IResourceFood["key"],
    name: IResourceFood["name"],
    typeKey: keyof typeof FoodTypeKeys,
    utility: IResourceFood["utility"],
    source: IResourceFood["source"],
  ) {
    super(key, `${CResourceFood.PATH}/${key}.webp`, name, ResourceTypeKeys.Food, source);

    this.food_type_key = FoodTypeKeys[typeKey];
    this.utility = utility;
  }

  get ingredients() {
    return this._ingredients;
  }

  get recipe_key() {
    return this._recipe_key;
  }

  get related_dish_keys() {
    return this._related_dish_keys;
  }

  setRecipe(key: NonNullable<IResourceFood["recipe_key"]>, ingredients: NonNullable<IResourceFood["ingredients"]>) {
    this._recipe_key = key;
    this._ingredients = ingredients;

    return this;
  }

  setRelatedDishKeys(keys: NonNullable<IResourceFood["related_dish_keys"]>) {
    this._related_dish_keys = keys;

    return this;
  }
}

export class CResourceIngredient<Type extends (IResourceCookingIngredient | IResourceFood)> implements IResourceIngredient {
  readonly key: IResourceIngredient["key"];
  readonly count: IResourceIngredient["count"];

  constructor(item: Type, count: IResourceIngredient["count"]) {
    this.key = item.key;
    this.count = count;
  }
}

export class CResourceRecipe extends CResource implements IResourceRecipe {
  declare readonly key: IResourceRecipe["key"];
  declare readonly image_src: IResourceRecipe["image_src"];
  declare readonly name: IResourceRecipe["name"];
  declare readonly type_key: IResourceRecipe["type_key"];
  declare readonly source: IResourceRecipe["source"];
  readonly dish_effects: IResourceRecipe["dish_effects"];
  readonly proficiency: IResourceRecipe["proficiency"];
  readonly dish_keys: IResourceRecipe["dish_keys"];
  readonly ingredients: IResourceRecipe["ingredients"];

  constructor(
    key: IResourceRecipe["key"],
    name: IResourceRecipe["name"],
    source: IResourceRecipe["source"],
    dishEffects: IResourceRecipe["dish_effects"],
    proficiency: IResourceRecipe["proficiency"],
    dishKeys: IResourceRecipe["dish_keys"],
    ingredients: IResourceRecipe["ingredients"],
  ) {
    const thisTypeKey = ResourceTypeKeys.Recipe;

    super(key, `${thisTypeKey}.webp`, name, thisTypeKey, source);

    this.dish_effects = dishEffects;
    this.proficiency = proficiency;
    this.dish_keys = dishKeys;
    this.ingredients = ingredients;
  }
}
