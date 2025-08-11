import { StAtkeys } from "./enums/stat";
import type { Stat, StAtkey } from "./types/stat";

export default {
  [StAtkeys.AnemoDmgBonus]: { key: StAtkeys.AnemoDmgBonus, name: "Бонус Анемо урона" },
  [StAtkeys.Atk]: { key: StAtkeys.Atk, name: "Сила атаки" },
  [StAtkeys.AtkPercentage]: {
    key: StAtkeys.AtkPercentage,
    name: "Процент от силы атаки",
    abbreviation: "Сила атаки %",
  },
  [StAtkeys.CritDMG]: { key: StAtkeys.CritDMG, name: "Крит. урон" },
  [StAtkeys.CritRate]: { key: StAtkeys.CritRate, name: "Шанс крит. попадания" },
  [StAtkeys.CryoDmgBonus]: { key: StAtkeys.CryoDmgBonus, name: "Бонус Крио урона" },
  [StAtkeys.Def]: { key: StAtkeys.Def, name: "Защита" },
  [StAtkeys.DefPercentage]: { key: StAtkeys.DefPercentage, name: "Процент от защиты", abbreviation: "Защита %" },
  [StAtkeys.DendroDmgBonus]: { key: StAtkeys.DendroDmgBonus, name: "Бонус Дендро урона" },
  [StAtkeys.ElectroDmgBonus]: { key: StAtkeys.ElectroDmgBonus, name: "Бонус Электро урона" },
  [StAtkeys.ElementalMastery]: { key: StAtkeys.ElementalMastery, name: "Мастерство стихий" },
  [StAtkeys.EnergyRecharge]: { key: StAtkeys.EnergyRecharge, name: "Восст. энергии" },
  [StAtkeys.GeoDmgBonus]: { key: StAtkeys.GeoDmgBonus, name: "Бонус Гео урона" },
  [StAtkeys.Heal]: { key: StAtkeys.Heal, name: "Бонус лечения" },
  [StAtkeys.Hp]: { key: StAtkeys.Hp, name: "HP" },
  [StAtkeys.HpPercentage]: { key: StAtkeys.HpPercentage, name: "Процент от HP", abbreviation: "HP %" },
  [StAtkeys.HydroDmgBonus]: { key: StAtkeys.HydroDmgBonus, name: "Бонус Гидро урона" },
  [StAtkeys.PhysicalDmgBonus]: { key: StAtkeys.PhysicalDmgBonus, name: "Бонус физ. урона" },
  [StAtkeys.PyroDmgBonus]: { key: StAtkeys.PyroDmgBonus, name: "Бонус Пиро урона" },
} as Record<StAtkey, Stat>;
