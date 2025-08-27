import type { IStat } from "./types";
import { CStat } from "./classes";
import { StatIds } from "@/features/stats/enums";

export default {
  [StatIds.AnemoDmgBonus]: CStat.init([StatIds.AnemoDmgBonus, "Бонус Анемо урона"]),
  [StatIds.Atk]: CStat.init([StatIds.Atk, "Сила атаки"]),
  [StatIds.AtkPercentage]: CStat.init([StatIds.AtkPercentage, "Процент от силы атаки", "Сила атаки %"]),
  [StatIds.CritDMG]: CStat.init([StatIds.CritDMG, "Крит. урон"]),
  [StatIds.CritRate]: CStat.init([StatIds.CritRate, "Шанс крит. попадания"]),
  [StatIds.CryoDmgBonus]: CStat.init([StatIds.CryoDmgBonus, "Бонус Крио урона"]),
  [StatIds.Def]: CStat.init([StatIds.Def, "Защита"]),
  [StatIds.DefPercentage]: CStat.init([StatIds.DefPercentage, "Процент от защиты", "Защита %"]),
  [StatIds.DendroDmgBonus]: CStat.init([StatIds.DendroDmgBonus, "Бонус Дендро урона"]),
  [StatIds.ElectroDmgBonus]: CStat.init([StatIds.ElectroDmgBonus, "Бонус Электро урона"]),
  [StatIds.ElementalMastery]: CStat.init([StatIds.ElementalMastery, "Мастерство стихий"]),
  [StatIds.EnergyRecharge]: CStat.init([StatIds.EnergyRecharge, "Восст. энергии"]),
  [StatIds.GeoDmgBonus]: CStat.init([StatIds.GeoDmgBonus, "Бонус Гео урона"]),
  [StatIds.Heal]: CStat.init([StatIds.Heal, "Бонус лечения"]),
  [StatIds.Hp]: CStat.init([StatIds.Hp, "HP"]),
  [StatIds.HpPercentage]: CStat.init([StatIds.HpPercentage, "Процент от HP", "HP %"]),
  [StatIds.HydroDmgBonus]: CStat.init([StatIds.HydroDmgBonus, "Бонус Гидро урона"]),
  [StatIds.PhysicalDmgBonus]: CStat.init([StatIds.PhysicalDmgBonus, "Бонус физ. урона"]),
  [StatIds.PyroDmgBonus]: CStat.init([StatIds.PyroDmgBonus, "Бонус Пиро урона"]),
} as Record<IStat["key"], IStat>;
