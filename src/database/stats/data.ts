import type { IStat } from "./types";
import { CStat } from "./classes";
import { StatKeys } from "./enums";

export default {
  [StatKeys.AnemoDmgBonus]: CStat.init([StatKeys.AnemoDmgBonus, "Бонус Анемо урона"]),
  [StatKeys.Atk]: CStat.init([StatKeys.Atk, "Сила атаки"]),
  [StatKeys.AtkPercentage]: CStat.init([StatKeys.AtkPercentage, "Процент от силы атаки", "Сила атаки %"]),
  [StatKeys.CritDMG]: CStat.init([StatKeys.CritDMG, "Крит. урон"]),
  [StatKeys.CritRate]: CStat.init([StatKeys.CritRate, "Шанс крит. попадания"]),
  [StatKeys.CryoDmgBonus]: CStat.init([StatKeys.CryoDmgBonus, "Бонус Крио урона"]),
  [StatKeys.Def]: CStat.init([StatKeys.Def, "Защита"]),
  [StatKeys.DefPercentage]: CStat.init([StatKeys.DefPercentage, "Процент от защиты", "Защита %"]),
  [StatKeys.DendroDmgBonus]: CStat.init([StatKeys.DendroDmgBonus, "Бонус Дендро урона"]),
  [StatKeys.ElectroDmgBonus]: CStat.init([StatKeys.ElectroDmgBonus, "Бонус Электро урона"]),
  [StatKeys.ElementalMastery]: CStat.init([StatKeys.ElementalMastery, "Мастерство стихий"]),
  [StatKeys.EnergyRecharge]: CStat.init([StatKeys.EnergyRecharge, "Восст. энергии"]),
  [StatKeys.GeoDmgBonus]: CStat.init([StatKeys.GeoDmgBonus, "Бонус Гео урона"]),
  [StatKeys.Heal]: CStat.init([StatKeys.Heal, "Бонус лечения"]),
  [StatKeys.Hp]: CStat.init([StatKeys.Hp, "HP"]),
  [StatKeys.HpPercentage]: CStat.init([StatKeys.HpPercentage, "Процент от HP", "HP %"]),
  [StatKeys.HydroDmgBonus]: CStat.init([StatKeys.HydroDmgBonus, "Бонус Гидро урона"]),
  [StatKeys.PhysicalDmgBonus]: CStat.init([StatKeys.PhysicalDmgBonus, "Бонус физ. урона"]),
  [StatKeys.PyroDmgBonus]: CStat.init([StatKeys.PyroDmgBonus, "Бонус Пиро урона"]),
} as Record<IStat["key"], IStat>;
