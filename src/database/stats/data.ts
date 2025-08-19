import type { IStat } from "./types";
import { CStat } from "./classes";
import { StatKeys } from "./enums";

export default {
  [StatKeys.AnemoDmgBonus]: new CStat("AnemoDmgBonus", "Бонус Анемо урона"),
  [StatKeys.Atk]: new CStat("Atk", "Сила атаки"),
  [StatKeys.AtkPercentage]: new CStat("AtkPercentage", "Процент от силы атаки", "Сила атаки %"),
  [StatKeys.CritDMG]: new CStat("CritDMG", "Крит. урон"),
  [StatKeys.CritRate]: new CStat("CritRate", "Шанс крит. попадания"),
  [StatKeys.CryoDmgBonus]: new CStat("CryoDmgBonus", "Бонус Крио урона"),
  [StatKeys.Def]: new CStat("Def", "Защита"),
  [StatKeys.DefPercentage]: new CStat("DefPercentage", "Процент от защиты", "Защита %"),
  [StatKeys.DendroDmgBonus]: new CStat("DendroDmgBonus", "Бонус Дендро урона"),
  [StatKeys.ElectroDmgBonus]: new CStat("ElectroDmgBonus", "Бонус Электро урона"),
  [StatKeys.ElementalMastery]: new CStat("ElementalMastery", "Мастерство стихий"),
  [StatKeys.EnergyRecharge]: new CStat("EnergyRecharge", "Восст. энергии"),
  [StatKeys.GeoDmgBonus]: new CStat("GeoDmgBonus", "Бонус Гео урона"),
  [StatKeys.Heal]: new CStat("Heal", "Бонус лечения"),
  [StatKeys.Hp]: new CStat("Hp", "HP"),
  [StatKeys.HpPercentage]: new CStat("HpPercentage", "Процент от HP", "HP %"),
  [StatKeys.HydroDmgBonus]: new CStat("HydroDmgBonus", "Бонус Гидро урона"),
  [StatKeys.PhysicalDmgBonus]: new CStat("PhysicalDmgBonus", "Бонус физ. урона"),
  [StatKeys.PyroDmgBonus]: new CStat("PyroDmgBonus", "Бонус Пиро урона"),
} as Record<IStat["key"], IStat>;
