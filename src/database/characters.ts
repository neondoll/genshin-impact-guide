import { publicImageSrc } from "@/lib/utils";
import { type ElementUid, ElementUidEnum } from "./elements";
import { type RegionUid, RegionUidEnum } from "./regions";
import { type WeaponTypeUid, WeaponTypeUidEnum } from "./weapon-types";
import { type WeaponUid, WeaponUidEnum } from "./weapons";
import { type WorldUid, WorldUidEnum } from "./worlds";
import { type CharacterRoleUid, CharacterRoleUidEnum } from "./character-roles";
import type { QualityUid } from "./qualities";

type Character = {
  name: string;
  quality: QualityUid;
  weapon_type_uid: WeaponTypeUid;
  element_uid: ElementUid;
  roles_uid: CharacterRoleUid[];
  world_uid: WorldUid;
  region_uid?: RegionUid;
  signature_weapon_uid?: WeaponUid;
  small_image_src: string;
};
type Characters = Record<CharacterUid, Character>;

export type CharacterUid = typeof CharacterUidEnum[keyof typeof CharacterUidEnum];

export const CharacterUidEnum = {
  /* Арлекино    */ Arlecchino: "arlecchino",
  /* Беннет      */ Bennett: "bennett",
  /* Шеврёз      */ Chevreuse: "chevreuse",
  /* Эскофье     */ Escoffier: "escoffier",
  /* Фишль       */ Fischl: "fischl",
  /* Фурина      */ Furina: "furina",
  /* Иансан      */ Iansan: "iansan",
  /* Куки Синобу */ KukiShinobu: "kuki_shinobu",
  /* Лайла       */ Layla: "layla",
  /* Нёвиллет    */ Neuvillette: "neuvillette",
  /* Скирк       */ Skirk: "skirk",
  /* Сахароза    */ Sucrose: "sucrose",
  /* Вареса      */ Varesa: "varesa",
  /* Сян Лин     */ Xiangling: "xiangling",
  /* Шилонен     */ Xilonen: "xilonen",
  /* Син Цю      */ Xingqiu: "xingqiu",
} as const;

const imageSrc: typeof publicImageSrc = src => publicImageSrc(`characters/${src}`);

const characters = {
  [CharacterUidEnum.Arlecchino]: {
    name: "Арлекино",
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Polearm,
    element_uid: ElementUidEnum.Pyro,
    roles_uid: [CharacterRoleUidEnum.OnField, CharacterRoleUidEnum.DPS],
    world_uid: WorldUidEnum.Teyvat,
    region_uid: RegionUidEnum.Snezhnaya,
    signature_weapon_uid: WeaponUidEnum.CrimsonMoonsSemblance,
    small_image_src: imageSrc("arlecchino-small-106x106.png"),
  },
  [CharacterUidEnum.Bennett]: {
    name: "Беннет",
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Sword,
    element_uid: ElementUidEnum.Pyro,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.Support, CharacterRoleUidEnum.Survivability],
    world_uid: WorldUidEnum.Teyvat,
    region_uid: RegionUidEnum.Mondstadt,
    small_image_src: imageSrc("bennett-small-106x106.png"),
  },
  [CharacterUidEnum.Varesa]: {
    name: "Вареса",
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Catalyst,
    element_uid: ElementUidEnum.Electro,
    roles_uid: [CharacterRoleUidEnum.OnField, CharacterRoleUidEnum.DPS],
    world_uid: WorldUidEnum.Teyvat,
    region_uid: RegionUidEnum.Natlan,
    signature_weapon_uid: WeaponUidEnum.VividNotions,
    small_image_src: imageSrc("varesa-small-106x106.png"),
  },
  [CharacterUidEnum.Iansan]: {
    name: "Иансан",
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Polearm,
    element_uid: ElementUidEnum.Electro,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.Support, CharacterRoleUidEnum.Survivability],
    world_uid: WorldUidEnum.Teyvat,
    region_uid: RegionUidEnum.Natlan,
    small_image_src: imageSrc("iansan-small-106x106.png"),
  },
  [CharacterUidEnum.KukiShinobu]: {
    name: "Куки Синобу",
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Sword,
    world_uid: WorldUidEnum.Teyvat,
    region_uid: RegionUidEnum.Inazuma,
    small_image_src: imageSrc("kuki_shinobu-small-106x106.png"),
  },
  [CharacterUidEnum.Layla]: {
    name: "Лайла",
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Sword,
    world_uid: WorldUidEnum.Teyvat,
    region_uid: RegionUidEnum.Sumeru,
    small_image_src: imageSrc("layla-small-106x106.png"),
  },
  [CharacterUidEnum.Neuvillette]: {
    name: "Нёвиллет",
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Catalyst,
    world_uid: WorldUidEnum.Teyvat,
    region_uid: RegionUidEnum.Fontaine,
    small_image_src: imageSrc("neuvillette-small-106x106.png"),
  },
  [CharacterUidEnum.Sucrose]: {
    name: "Сахароза",
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Catalyst,
    world_uid: WorldUidEnum.Teyvat,
    region_uid: RegionUidEnum.Mondstadt,
    small_image_src: imageSrc("sucrose-small-106x106.png"),
  },
  [CharacterUidEnum.Xingqiu]: {
    name: "Син Цю",
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Sword,
    world_uid: WorldUidEnum.Teyvat,
    region_uid: RegionUidEnum.Liyue,
    small_image_src: imageSrc("xingqiu-small-106x106.png"),
  },
  [CharacterUidEnum.Skirk]: {
    name: "Скирк",
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Sword,
    world_uid: WorldUidEnum.Another,
    small_image_src: imageSrc("skirk-small-106x106.png"),
  },
  [CharacterUidEnum.Xiangling]: {
    name: "Сян Лин",
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Polearm,
    world_uid: WorldUidEnum.Teyvat,
    region_uid: RegionUidEnum.Liyue,
    small_image_src: imageSrc("xiangling-small-106x106.png"),
  },
  [CharacterUidEnum.Fischl]: {
    name: "Фишль",
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Bow,
    world_uid: WorldUidEnum.Teyvat,
    region_uid: RegionUidEnum.Mondstadt,
    small_image_src: imageSrc("fischl-small-106x106.png"),
  },
  [CharacterUidEnum.Furina]: {
    name: "Фурина",
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Sword,
    world_uid: WorldUidEnum.Teyvat,
    region_uid: RegionUidEnum.Fontaine,
    small_image_src: imageSrc("furina-small-106x106.png"),
  },
  [CharacterUidEnum.Chevreuse]: {
    name: "Шеврёз",
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Polearm,
    world_uid: WorldUidEnum.Teyvat,
    region_uid: RegionUidEnum.Fontaine,
    small_image_src: imageSrc("chevreuse-small-106x106.png"),
  },
  [CharacterUidEnum.Xilonen]: {
    name: "Шилонен",
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Sword,
    world_uid: WorldUidEnum.Teyvat,
    region_uid: RegionUidEnum.Natlan,
    small_image_src: imageSrc("xilonen-small-106x106.png"),
  },
  [CharacterUidEnum.Escoffier]: {
    name: "Эскофье",
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Polearm,
    world_uid: WorldUidEnum.Teyvat,
    region_uid: RegionUidEnum.Fontaine,
    small_image_src: imageSrc("escoffier-small-106x106.png"),
  },
} as Characters;

export function getCharacter(uid: CharacterUid) {
  return characters[uid];
}

export function getCharacters() {
  return characters;
}
