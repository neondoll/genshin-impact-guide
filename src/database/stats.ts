import { StatKeys } from "./enums/stat";
import type { Stat } from "./types/stat";

class _Stat implements Stat {
  readonly key: Stat["key"];
  readonly name: Stat["name"];
  readonly abbr: Stat["abbr"];

  constructor(key: keyof typeof StatKeys, name: Stat["name"], abbr: Stat["abbr"] = undefined) {
    this.key = StatKeys[key];
    this.name = name;
    this.abbr = abbr;
  }
}

export default {
  [StatKeys.AnemoDmgBonus]: new _Stat("AnemoDmgBonus", "Бонус Анемо урона"),
  [StatKeys.Atk]: new _Stat("Atk", "Сила атаки"),
  [StatKeys.AtkPercentage]: new _Stat("AtkPercentage", "Процент от силы атаки", "Сила атаки %"),
  [StatKeys.CritDMG]: new _Stat("CritDMG", "Крит. урон"),
  [StatKeys.CritRate]: new _Stat("CritRate", "Шанс крит. попадания"),
  [StatKeys.CryoDmgBonus]: new _Stat("CryoDmgBonus", "Бонус Крио урона"),
  [StatKeys.Def]: new _Stat("Def", "Защита"),
  [StatKeys.DefPercentage]: new _Stat("DefPercentage", "Процент от защиты", "Защита %"),
  [StatKeys.DendroDmgBonus]: new _Stat("DendroDmgBonus", "Бонус Дендро урона"),
  [StatKeys.ElectroDmgBonus]: new _Stat("ElectroDmgBonus", "Бонус Электро урона"),
  [StatKeys.ElementalMastery]: new _Stat("ElementalMastery", "Мастерство стихий"),
  [StatKeys.EnergyRecharge]: new _Stat("EnergyRecharge", "Восст. энергии"),
  [StatKeys.GeoDmgBonus]: new _Stat("GeoDmgBonus", "Бонус Гео урона"),
  [StatKeys.Heal]: new _Stat("Heal", "Бонус лечения"),
  [StatKeys.Hp]: new _Stat("Hp", "HP"),
  [StatKeys.HpPercentage]: new _Stat("HpPercentage", "Процент от HP", "HP %"),
  [StatKeys.HydroDmgBonus]: new _Stat("HydroDmgBonus", "Бонус Гидро урона"),
  [StatKeys.PhysicalDmgBonus]: new _Stat("PhysicalDmgBonus", "Бонус физ. урона"),
  [StatKeys.PyroDmgBonus]: new _Stat("PyroDmgBonus", "Бонус Пиро урона"),
} as Record<Stat["key"], Stat>;
