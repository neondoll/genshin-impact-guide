import { FoodKeys } from "./enums/food";
import { FoodTypeKeys } from "./enums/food-type";
import type { Food } from "./types/food";

class _Food implements Food {
  readonly key: Food["key"];
  readonly name: Food["name"];
  readonly type_key: Food["type_key"];
  readonly utility: Food["utility"];
  readonly source: Food["source"];

  constructor(
    key: keyof typeof FoodKeys,
    name: Food["name"],
    typeKey: keyof typeof FoodTypeKeys,
    utility: Food["utility"],
    source: keyof typeof FoodSource,
  ) {
    this.key = FoodKeys[key];
    this.name = name;
    this.type_key = FoodTypeKeys[typeKey];
    this.utility = utility;
    this.source = FoodSource[source];
  }
}

const FoodSource = {
  ObtainedByCooking: "Готовка",
} as const;
const FoodUtility = {
  IncreasesAllPartyMembersCRITRate: (CRITRate: string) => `Увеличивает шанс крит. попадания всех членов отряда на ${CRITRate} на 300 сек. В совместном режиме этот эффект применяется только к вашим персонажам.`,
} as const;

export default {
  [FoodKeys.DeliciousNineFruitNectar]: new _Food("DeliciousNineFruitNectar", "Вкусный нектар девяти фруктов", "ATKBoostingDish", FoodUtility.IncreasesAllPartyMembersCRITRate("20%"), "ObtainedByCooking"),
  [FoodKeys.NineFruitNectar]: new _Food("NineFruitNectar", "Нектар девяти фруктов", "ATKBoostingDish", FoodUtility.IncreasesAllPartyMembersCRITRate("15%"), "ObtainedByCooking"),
  [FoodKeys.SuspiciousNineFruitNectar]: new _Food("SuspiciousNineFruitNectar", "Странный нектар девяти фруктов", "ATKBoostingDish", FoodUtility.IncreasesAllPartyMembersCRITRate("10%"), "ObtainedByCooking"),
} as Record<Food["key"], Food>;
