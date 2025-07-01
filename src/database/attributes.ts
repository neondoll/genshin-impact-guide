import { AttributeUidEnum } from "./enums/attributes";
import { publicImageSrc } from "@/lib/utils";
import type { Attributes } from "./types/attributes";

const imageSrc: typeof publicImageSrc = src => publicImageSrc(`attributes/${src}`);

export const attributes = {
  [AttributeUidEnum.Health]: {
    uid: AttributeUidEnum.Health,
    name: "HP",
    abbreviation: "HP",
    icon_src: imageSrc("health-icon-48x48.png"),
  },
  [AttributeUidEnum.Attack]: {
    uid: AttributeUidEnum.Attack,
    name: "Сила атаки",
    abbreviation: "АТК",
    icon_src: imageSrc("attack-icon-48x48.png"),
  },
  [AttributeUidEnum.Defense]: {
    uid: AttributeUidEnum.Defense,
    name: "Защита",
    abbreviation: "Защита",
    icon_src: imageSrc("defense-icon-48x48.png"),
  },
  [AttributeUidEnum.ElementalMastery]: {
    uid: AttributeUidEnum.ElementalMastery,
    name: "Мастерство стихий",
    abbreviation: "Мастерство стихий",
    icon_src: imageSrc("elemental_mastery-icon-48x48.png"),
  },

  [AttributeUidEnum.PercentageOfHP]: { name: "Процент от HP", abbreviation: "Процент от HP" },
  [AttributeUidEnum.PercentageOfAttackPower]: { name: "Процент от силы атаки", abbreviation: "АТК%" },
  [AttributeUidEnum.PercentageOfProtection]: { name: "Процент от защиты", abbreviation: "Процент от защиты" },
  [AttributeUidEnum.CriticalHitChance]: { name: "Шанс крит. попадания", abbreviation: "Шанс крит. попадания" },
  [AttributeUidEnum.CriticalDamage]: { name: "Крит. урон", abbreviation: "Крит. урон" },
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
