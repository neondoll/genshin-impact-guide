import elements from "./elements";
import { AttributeUidEnum } from "./enums/attribute";
import { ElementUidEnum } from "./enums/element";
import { publicImageSrc } from "@/lib/utils";
import type { Attribute, AttributeUid } from "./types/attribute";

const imageSrc: typeof publicImageSrc = src => publicImageSrc(`attributes/${src}`);

export default {
  [AttributeUidEnum.AnemoDamageBonus]: {
    uid: AttributeUidEnum.AnemoDamageBonus,
    name: "Бонус Анемо урона",
    image_src: elements[ElementUidEnum.Anemo].image_src,
  },
  [AttributeUidEnum.AnemoResistance]: { uid: AttributeUidEnum.AnemoResistance, name: "Анемо сопротивление" },
  [AttributeUidEnum.Attack]: {
    uid: AttributeUidEnum.Attack,
    name: "Сила атаки",
    image_src: imageSrc("attack-48x48.png"),
  },
  [AttributeUidEnum.AttackPercent]: {
    uid: AttributeUidEnum.AttackPercent,
    name: "Процент от силы атаки",
    abbreviation: "Сила атаки %",
  },
  [AttributeUidEnum.CooldownReduction]: {
    uid: AttributeUidEnum.CooldownReduction,
    name: "Снижение времени отката",
    image_src: imageSrc("cooldown_reduction-48x48.png"),
  },
  [AttributeUidEnum.CritDmg]: {
    uid: AttributeUidEnum.CritDmg,
    name: "Крит. урон",
    image_src: imageSrc("critical_hit-48x48.png"),
  },
  [AttributeUidEnum.CritRate]: {
    uid: AttributeUidEnum.CritRate,
    name: "Шанс крит. попадания",
    image_src: imageSrc("critical_hit-48x48.png"),
  },
  [AttributeUidEnum.CryoDamageBonus]: {
    uid: AttributeUidEnum.CryoDamageBonus,
    name: "Бонус Крио урона",
    image_src: elements[ElementUidEnum.Cryo].image_src,
  },
  [AttributeUidEnum.CryoResistance]: { uid: AttributeUidEnum.CryoResistance, name: "Крио сопротивление" },
  [AttributeUidEnum.Defense]: {
    uid: AttributeUidEnum.Defense,
    name: "Защита",
    image_src: imageSrc("defense-48x48.png"),
  },
  [AttributeUidEnum.DefensePercent]: {
    uid: AttributeUidEnum.DefensePercent,
    name: "Процент от защиты",
    abbreviation: "Защита %",
  },
  [AttributeUidEnum.DendroDamageBonus]: {
    uid: AttributeUidEnum.DendroDamageBonus,
    name: "Бонус Дендро урона",
    image_src: elements[ElementUidEnum.Dendro].image_src,
  },
  [AttributeUidEnum.DendroResistance]: { uid: AttributeUidEnum.DendroResistance, name: "Дендро сопротивление" },
  [AttributeUidEnum.ElectroDamageBonus]: {
    uid: AttributeUidEnum.ElectroDamageBonus,
    name: "Бонус Электро урона",
    image_src: elements[ElementUidEnum.Electro].image_src,
  },
  [AttributeUidEnum.ElectroResistance]: { uid: AttributeUidEnum.ElectroResistance, name: "Электро сопротивление" },
  [AttributeUidEnum.ElementalMastery]: {
    uid: AttributeUidEnum.ElementalMastery,
    name: "Мастерство стихий",
    image_src: imageSrc("elemental_mastery-48x48.png"),
  },
  [AttributeUidEnum.EnergyRecharge]: {
    uid: AttributeUidEnum.EnergyRecharge,
    name: "Восст. энергии",
    image_src: imageSrc("energy_recharge-48x48.png"),
  },
  [AttributeUidEnum.GeoDamageBonus]: {
    uid: AttributeUidEnum.GeoDamageBonus,
    name: "Бонус Гео урона",
    image_src: elements[ElementUidEnum.Geo].image_src,
  },
  [AttributeUidEnum.GeoResistance]: { uid: AttributeUidEnum.GeoResistance, name: "Гео сопротивление" },
  [AttributeUidEnum.HealingBonus]: {
    uid: AttributeUidEnum.HealingBonus,
    name: "Бонус лечения",
    image_src: imageSrc("healing-48x48.png"),
  },
  [AttributeUidEnum.Health]: { uid: AttributeUidEnum.Health, name: "HP", image_src: imageSrc("health-48x48.png") },
  [AttributeUidEnum.HealthPercent]: {
    uid: AttributeUidEnum.HealthPercent,
    name: "Процент от HP",
    abbreviation: "HP %",
  },
  [AttributeUidEnum.HydroDamageBonus]: {
    uid: AttributeUidEnum.HydroDamageBonus,
    name: "Бонус Гидро урона",
    image_src: elements[ElementUidEnum.Hydro].image_src,
  },
  [AttributeUidEnum.HydroResistance]: { uid: AttributeUidEnum.HydroResistance, name: "Гидро сопротивление" },
  [AttributeUidEnum.IncomingHealingBonus]: {
    uid: AttributeUidEnum.IncomingHealingBonus,
    name: "Бонус получаемого лечения",
    image_src: imageSrc("healing-48x48.png"),
  },
  [AttributeUidEnum.PhysicalDamageBonus]: {
    uid: AttributeUidEnum.PhysicalDamageBonus,
    name: "Бонус физ. урона",
    image_src: imageSrc("physical-64x64.png"),
  },
  [AttributeUidEnum.PhysicalResistance]: { uid: AttributeUidEnum.PhysicalResistance, name: "Физ. сопротивление" },
  [AttributeUidEnum.PyroDamageBonus]: {
    uid: AttributeUidEnum.PyroDamageBonus,
    name: "Бонус Пиро урона",
    image_src: elements[ElementUidEnum.Pyro].image_src,
  },
  [AttributeUidEnum.PyroResistance]: { uid: AttributeUidEnum.PyroResistance, name: "Пиро сопротивление" },
  [AttributeUidEnum.ShieldStrength]: {
    uid: AttributeUidEnum.ShieldStrength,
    name: "Прочность щита",
    image_src: imageSrc("shield_strength-48x48.png"),
  },
  [AttributeUidEnum.Stamina]: {
    uid: AttributeUidEnum.Stamina,
    name: "Выносливость",
    image_src: imageSrc("stamina-48x48.png"),
  },
} as Record<AttributeUid, Attribute>;
