import { AttributeUidEnum } from "./enums/attributes";
import type { Attributes } from "./types/attributes";

export const attributes = {
  [AttributeUidEnum.HP]: { name: "HP", abbreviation: "HP" },
  [AttributeUidEnum.PercentageOfHP]: { name: "Процент от HP", abbreviation: "Процент от HP" },
  [AttributeUidEnum.AttackPower]: { name: "Сила атаки", abbreviation: "АТК" },
  [AttributeUidEnum.PercentageOfAttackPower]: { name: "Процент от силы атаки", abbreviation: "АТК%" },
  [AttributeUidEnum.Protection]: { name: "Защита", abbreviation: "Защита" },
  [AttributeUidEnum.PercentageOfProtection]: { name: "Процент от защиты", abbreviation: "Процент от защиты" },
  [AttributeUidEnum.CriticalHitChance]: { name: "Шанс крит. попадания", abbreviation: "Шанс крит. попадания" },
  [AttributeUidEnum.CriticalDamage]: { name: "Крит. урон", abbreviation: "Крит. урон" },
  [AttributeUidEnum.MasteryOfElements]: { name: "Мастерство стихий", abbreviation: "Мастерство стихий" },
  [AttributeUidEnum.EnergyRestoration]: { name: "Восст. энергии", abbreviation: "Восст. энергии" },
  [AttributeUidEnum.PhysicalDamageBonus]: { name: "Бонус физ. урона", abbreviation: "Бонус физ. урона" },
  [AttributeUidEnum.PyroDamageBonus]: { name: "Бонус Пиро урона", abbreviation: "Бонус Пиро урона" },
  [AttributeUidEnum.ElectroDamageBonus]: { name: "Бонус Электро урона", abbreviation: "Бонус Электро урона" },
  [AttributeUidEnum.HydroDamageBonus]: { name: "Бонус Гидро урона", abbreviation: "Бонус Гидро урона" },
  [AttributeUidEnum.DendroDamageBonus]: { name: "Бонус Дендро урона", abbreviation: "Бонус Дендро урона" },
  [AttributeUidEnum.AnemoDamageBonus]: { name: "Бонус Анемо урона", abbreviation: "Бонус Анемо урона" },
  [AttributeUidEnum.GeoDamageBonus]: { name: "Бонус Гео урона", abbreviation: "Бонус Гео урона" },
  [AttributeUidEnum.CryoDamageBonus]: { name: "Бонус Крио урона", abbreviation: "Бонус Крио" },
  [AttributeUidEnum.TreatmentBonus]: { name: "Бонус лечения", abbreviation: "Бонус лечения" },
} as Attributes;
