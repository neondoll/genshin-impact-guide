import { AttributeUidEnum } from "./enums/attributes";
import { elements } from "./elements";
import { ElementUidEnum } from "./enums/elements";
import { publicImageSrc } from "@/lib/utils";
import type { Attributes } from "./types/attributes";

const imageSrc: typeof publicImageSrc = src => publicImageSrc(`attributes/${src}`);

export const attributes = {
  [AttributeUidEnum.Health]: {
    uid: AttributeUidEnum.Health,
    name: "HP",
    abbreviation: "HP",
    image_src: imageSrc("health-48x48.png"),
  },
  [AttributeUidEnum.Attack]: {
    uid: AttributeUidEnum.Attack,
    name: "Сила атаки",
    abbreviation: "АТК",
    image_src: imageSrc("attack-48x48.png"),
  },
  [AttributeUidEnum.Defense]: {
    uid: AttributeUidEnum.Defense,
    name: "Защита",
    abbreviation: "Защита",
    image_src: imageSrc("defense-48x48.png"),
  },
  [AttributeUidEnum.ElementalMastery]: {
    uid: AttributeUidEnum.ElementalMastery,
    name: "Мастерство стихий",
    abbreviation: "Мастерство стихий",
    image_src: imageSrc("elemental_mastery-48x48.png"),
  },
  [AttributeUidEnum.Stamina]: {
    uid: AttributeUidEnum.Stamina,
    name: "Выносливость",
    abbreviation: "Выносливость",
    image_src: imageSrc("stamina-48x48.png"),
  },
  [AttributeUidEnum.CriticalRate]: {
    uid: AttributeUidEnum.CriticalRate,
    name: "Шанс крит. попадания",
    abbreviation: "Шанс крит. попадания",
    image_src: imageSrc("critical_hit-48x48.png"),
  },
  [AttributeUidEnum.CriticalDamage]: {
    uid: AttributeUidEnum.CriticalDamage,
    name: "Крит. урон",
    abbreviation: "Крит. урон",
    image_src: imageSrc("critical_hit-48x48.png"),
  },
  [AttributeUidEnum.HealingBonus]: {
    uid: AttributeUidEnum.HealingBonus,
    name: "Бонус лечения",
    abbreviation: "Бонус лечения",
    image_src: imageSrc("healing-48x48.png"),
  },
  [AttributeUidEnum.IncomingHealingBonus]: {
    uid: AttributeUidEnum.IncomingHealingBonus,
    name: "Бонус получаемого лечения",
    abbreviation: "Бонус получаемого лечения",
    image_src: imageSrc("healing-48x48.png"),
  },
  [AttributeUidEnum.EnergyRecharge]: {
    uid: AttributeUidEnum.EnergyRecharge,
    name: "Восст. энергии",
    abbreviation: "Восст. энергии",
    image_src: imageSrc("energy_recharge-48x48.png"),
  },
  [AttributeUidEnum.CooldownReduction]: {
    uid: AttributeUidEnum.CooldownReduction,
    name: "Снижение времени отката",
    abbreviation: "Снижение времени отката",
    image_src: imageSrc("cooldown_reduction-48x48.png"),
  },
  [AttributeUidEnum.ShieldStrength]: {
    uid: AttributeUidEnum.ShieldStrength,
    name: "Прочность щита",
    abbreviation: "Прочность щита",
    image_src: imageSrc("shield_strength-48x48.png"),
  },
  [AttributeUidEnum.AnemoDamageBonus]: {
    uid: AttributeUidEnum.AnemoDamageBonus,
    name: "Бонус Анемо урона",
    abbreviation: "Бонус Анемо урона",
    image_src: elements[ElementUidEnum.Anemo].image_src,
  },
  [AttributeUidEnum.CryoDamageBonus]: {
    uid: AttributeUidEnum.CryoDamageBonus,
    name: "Бонус Крио урона",
    abbreviation: "Бонус Крио",
    image_src: elements[ElementUidEnum.Cryo].image_src,
  },
  [AttributeUidEnum.DendroDamageBonus]: {
    uid: AttributeUidEnum.DendroDamageBonus,
    name: "Бонус Дендро урона",
    abbreviation: "Бонус Дендро урона",
    image_src: elements[ElementUidEnum.Dendro].image_src,
  },
  [AttributeUidEnum.ElectroDamageBonus]: {
    uid: AttributeUidEnum.ElectroDamageBonus,
    name: "Бонус Электро урона",
    abbreviation: "Бонус Электро урона",
    image_src: elements[ElementUidEnum.Electro].image_src,
  },
  [AttributeUidEnum.GeoDamageBonus]: {
    uid: AttributeUidEnum.GeoDamageBonus,
    name: "Бонус Гео урона",
    abbreviation: "Бонус Гео урона",
    image_src: elements[ElementUidEnum.Geo].image_src,
  },
  [AttributeUidEnum.HydroDamageBonus]: {
    uid: AttributeUidEnum.HydroDamageBonus,
    name: "Бонус Гидро урона",
    abbreviation: "Бонус Гидро урона",
    image_src: elements[ElementUidEnum.Hydro].image_src,
  },
  [AttributeUidEnum.PyroDamageBonus]: {
    uid: AttributeUidEnum.PyroDamageBonus,
    name: "Бонус Пиро урона",
    abbreviation: "Бонус Пиро урона",
    image_src: elements[ElementUidEnum.Pyro].image_src,
  },
  [AttributeUidEnum.PhysicalDamageBonus]: {
    uid: AttributeUidEnum.PhysicalDamageBonus,
    name: "Бонус физ. урона",
    abbreviation: "Бонус физ. урона",
    image_src: imageSrc("physical-64x64.png"),
  },
  [AttributeUidEnum.AnemoResistance]: {
    uid: AttributeUidEnum.AnemoResistance,
    name: "Сопротивление Анемо",
    abbreviation: "Сопротивление Анемо",
    image_src: elements[ElementUidEnum.Anemo].image_src,
  },
  [AttributeUidEnum.CryoResistance]: {
    uid: AttributeUidEnum.CryoResistance,
    name: "Сопротивление Крио",
    abbreviation: "Сопротивление Крио",
    image_src: elements[ElementUidEnum.Cryo].image_src,
  },
  [AttributeUidEnum.DendroResistance]: {
    uid: AttributeUidEnum.DendroResistance,
    name: "Сопротивление Дендро",
    abbreviation: "Сопротивление Дендро",
    image_src: elements[ElementUidEnum.Dendro].image_src,
  },
  [AttributeUidEnum.ElectroResistance]: {
    uid: AttributeUidEnum.ElectroResistance,
    name: "Сопротивление Электро",
    abbreviation: "Сопротивление Электро",
    image_src: elements[ElementUidEnum.Electro].image_src,
  },
  [AttributeUidEnum.GeoResistance]: {
    uid: AttributeUidEnum.GeoResistance,
    name: "Сопротивление Гео",
    abbreviation: "Сопротивление Гео",
    image_src: elements[ElementUidEnum.Geo].image_src,
  },
  [AttributeUidEnum.HydroResistance]: {
    uid: AttributeUidEnum.HydroResistance,
    name: "Сопротивление Гидро",
    abbreviation: "Сопротивление Гидро",
    image_src: elements[ElementUidEnum.Hydro].image_src,
  },
  [AttributeUidEnum.PyroResistance]: {
    uid: AttributeUidEnum.PyroResistance,
    name: "Сопротивление Пиро",
    abbreviation: "Сопротивление Пиро",
    image_src: elements[ElementUidEnum.Pyro].image_src,
  },
  [AttributeUidEnum.PhysicalResistance]: {
    uid: AttributeUidEnum.PhysicalResistance,
    name: "Сопротивление физ.",
    abbreviation: "Сопротивление физ.",
    image_src: imageSrc("physical-64x64.png"),
  },

  [AttributeUidEnum.PercentageOfHP]: { name: "Процент от HP", abbreviation: "Процент от HP" },
  [AttributeUidEnum.PercentageOfAttackPower]: { name: "Процент от силы атаки", abbreviation: "АТК%" },
  [AttributeUidEnum.PercentageOfProtection]: { name: "Процент от защиты", abbreviation: "Процент от защиты" },
} as Attributes;
