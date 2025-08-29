import type { Stat } from "./types";
import { StatIds } from "./enums";

class StatClass implements Stat {
  readonly id: Stat["id"];
  readonly name: Stat["name"];
  readonly abbr: Stat["abbr"];

  constructor(id: Stat["id"], name: Stat["name"], abbr: Stat["abbr"] = undefined) {
    this.id = id;
    this.name = name;
    this.abbr = abbr;
  }

  static init(params: ConstructorParameters<typeof StatClass>) {
    return new StatClass(...params);
  }
}

export default {
  [StatIds.AnemoDmgBonus]: StatClass.init([StatIds.AnemoDmgBonus, "Бонус Анемо урона"]),
  [StatIds.Atk]: StatClass.init([StatIds.Atk, "Сила атаки"]),
  [StatIds.AtkPercentage]: StatClass.init([StatIds.AtkPercentage, "Процент от силы атаки", "Сила атаки %"]),
  [StatIds.CritDMG]: StatClass.init([StatIds.CritDMG, "Крит. урон"]),
  [StatIds.CritRate]: StatClass.init([StatIds.CritRate, "Шанс крит. попадания"]),
  [StatIds.CryoDmgBonus]: StatClass.init([StatIds.CryoDmgBonus, "Бонус Крио урона"]),
  [StatIds.Def]: StatClass.init([StatIds.Def, "Защита"]),
  [StatIds.DefPercentage]: StatClass.init([StatIds.DefPercentage, "Процент от защиты", "Защита %"]),
  [StatIds.DendroDmgBonus]: StatClass.init([StatIds.DendroDmgBonus, "Бонус Дендро урона"]),
  [StatIds.ElectroDmgBonus]: StatClass.init([StatIds.ElectroDmgBonus, "Бонус Электро урона"]),
  [StatIds.ElementalMastery]: StatClass.init([StatIds.ElementalMastery, "Мастерство стихий"]),
  [StatIds.EnergyRecharge]: StatClass.init([StatIds.EnergyRecharge, "Восст. энергии"]),
  [StatIds.GeoDmgBonus]: StatClass.init([StatIds.GeoDmgBonus, "Бонус Гео урона"]),
  [StatIds.Heal]: StatClass.init([StatIds.Heal, "Бонус лечения"]),
  [StatIds.Hp]: StatClass.init([StatIds.Hp, "HP"]),
  [StatIds.HpPercentage]: StatClass.init([StatIds.HpPercentage, "Процент от HP", "HP %"]),
  [StatIds.HydroDmgBonus]: StatClass.init([StatIds.HydroDmgBonus, "Бонус Гидро урона"]),
  [StatIds.PhysicalDmgBonus]: StatClass.init([StatIds.PhysicalDmgBonus, "Бонус физ. урона"]),
  [StatIds.PyroDmgBonus]: StatClass.init([StatIds.PyroDmgBonus, "Бонус Пиро урона"]),
} as Record<Stat["id"], Stat>;
