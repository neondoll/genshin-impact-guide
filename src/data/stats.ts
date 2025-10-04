import type { Stat as Type } from "@/types/stat";
import { Stat as Class } from "@/classes/stat";
import { StatIds } from "@/enums/stat";

export default {
  [StatIds.AnemoDmgBonus]: Class.init([StatIds.AnemoDmgBonus, "Бонус Анемо урона"]),
  [StatIds.Atk]: Class.init([StatIds.Atk, "Сила атаки"]),
  [StatIds.AtkPercentage]: Class.init([StatIds.AtkPercentage, "Процент от силы атаки", "Сила атаки %"]),
  [StatIds.CritDMG]: Class.init([StatIds.CritDMG, "Крит. урон"]),
  [StatIds.CritRate]: Class.init([StatIds.CritRate, "Шанс крит. попадания"]),
  [StatIds.CryoDmgBonus]: Class.init([StatIds.CryoDmgBonus, "Бонус Крио урона"]),
  [StatIds.Def]: Class.init([StatIds.Def, "Защита"]),
  [StatIds.DefPercentage]: Class.init([StatIds.DefPercentage, "Процент от защиты", "Защита %"]),
  [StatIds.DendroDmgBonus]: Class.init([StatIds.DendroDmgBonus, "Бонус Дендро урона"]),
  [StatIds.ElectroDmgBonus]: Class.init([StatIds.ElectroDmgBonus, "Бонус Электро урона"]),
  [StatIds.ElementalMastery]: Class.init([StatIds.ElementalMastery, "Мастерство стихий"]),
  [StatIds.EnergyRecharge]: Class.init([StatIds.EnergyRecharge, "Восст. энергии"]),
  [StatIds.GeoDmgBonus]: Class.init([StatIds.GeoDmgBonus, "Бонус Гео урона"]),
  [StatIds.Heal]: Class.init([StatIds.Heal, "Бонус лечения"]),
  [StatIds.Hp]: Class.init([StatIds.Hp, "HP"]),
  [StatIds.HpPercentage]: Class.init([StatIds.HpPercentage, "Процент от HP", "HP %"]),
  [StatIds.HydroDmgBonus]: Class.init([StatIds.HydroDmgBonus, "Бонус Гидро урона"]),
  [StatIds.PhysicalDmgBonus]: Class.init([StatIds.PhysicalDmgBonus, "Бонус физ. урона"]),
  [StatIds.PyroDmgBonus]: Class.init([StatIds.PyroDmgBonus, "Бонус Пиро урона"]),
} as Record<Type["id"], Type>;
