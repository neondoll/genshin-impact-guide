import { AttributeUidEnum } from "./enums/attributes";
import type { Attributes } from "./types/attributes";

export const attributes = {
  [AttributeUidEnum.HP]: { name: "HP" },
  [AttributeUidEnum.PercentageOfHP]: { name: "Процент от HP" },
  [AttributeUidEnum.AttackPower]: { name: "Сила атаки" },
  [AttributeUidEnum.PercentageOfAttackPower]: { name: "Процент от силы атаки" },
  [AttributeUidEnum.Protection]: { name: "Защита" },
  [AttributeUidEnum.PercentageOfProtection]: { name: "Процент от защиты" },
  [AttributeUidEnum.CriticalHitChance]: { name: "Шанс крит. попадания" },
  [AttributeUidEnum.CriticalDamage]: { name: "Крит. урон" },
  [AttributeUidEnum.MasteryOfElements]: { name: "Мастерство стихий" },
  [AttributeUidEnum.EnergyRestoration]: { name: "Восст. энергии" },
  [AttributeUidEnum.PhysicalDamageBonus]: { name: "Бонус физ. урона" },
  [AttributeUidEnum.PyroDamageBonus]: { name: "Бонус Пиро урона" },
  [AttributeUidEnum.ElectroDamageBonus]: { name: "Бонус Электро урона" },
  [AttributeUidEnum.HydroDamageBonus]: { name: "Бонус Гидро урона" },
  [AttributeUidEnum.DendroDamageBonus]: { name: "Бонус Дендро урона" },
  [AttributeUidEnum.AnemoDamageBonus]: { name: "Бонус Анемо урона" },
  [AttributeUidEnum.GeoDamageBonus]: { name: "Бонус Гео урона" },
  [AttributeUidEnum.CryoDamageBonus]: { name: "Бонус Крио урона" },
  [AttributeUidEnum.TreatmentBonus]: { name: "Бонус лечения" },
} as Attributes;
