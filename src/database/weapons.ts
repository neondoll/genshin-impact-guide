import { type WeaponTypeUid, WeaponTypeUidEnum } from "./weapon-types";

type Weapon = { name: string; quality: 3 | 4 | 5; type: WeaponTypeUid; small_image_src: string };
type Weapons = Record<WeaponUid, Weapon>;

export const WeaponUidEnum = {
  /* Баллада фьордов       */ BalladOfTheFjords: "ballad_of_the_fjords",
  /* Черногорская пика     */ BlackcliffPole: "blackcliff_pole",
  /* Усмиритель бед        */ CalamityQueller: "calamity_queller",
  /* Очертания алой луны   */ CrimsonMoonsSemblance: "crimson_moons_semblance",
  /* Смертельный бой       */ Deathmatch: "deathmatch",
  /* Гроза драконов        */ DragonsBane: "dragons_bane",
  /* Каменное копье        */ LithicSpear: "lithic_spear",
  /* Элегия Люмидус        */ LumidouceElegy: "lumidouce_elegy",
  /* Копьё послания ветров */ MissiveWindspear: "missive_windspear",
  /* Нефритовый коршун     */ PrimordialJadeWingedSpear: "primordial_jade_winged_spear",
  /* Небесная ось          */ SkywardSpine: "skyward_spine",
  /* Посох Хомы            */ StaffOfHoma: "staff_of_homa",
  /* Посох алых песков     */ StaffOfTheScarletSands: "staff_of_the_scarlet_sands",
  /* Покоритель вихря      */ VortexVanquisher: "vortex_vanquisher",
  /* Белая кисть           */ WhiteTassel: "white_tassel",
} as const;

export type WeaponUid = typeof WeaponUidEnum[keyof typeof WeaponUidEnum];

const imageSrc = (name: string) => {
  console.log("imageSrc", name);

  return `/images/weapons/${name}`;
};

const weapons = {
  [WeaponUidEnum.BalladOfTheFjords]: {
    name: "Баллада фьордов",
    quality: 4,
    type: WeaponTypeUidEnum.Polearm,
    small_image_src: imageSrc("ballad_of_the_fjords-small-256x256.png"),
  },
  [WeaponUidEnum.WhiteTassel]: {
    name: "Белая кисть",
    quality: 3,
    type: WeaponTypeUidEnum.Polearm,
    small_image_src: imageSrc("white_tassel-small-256x256.png"),
  },
  [WeaponUidEnum.DragonsBane]: {
    name: "Гроза драконов",
    quality: 4,
    type: WeaponTypeUidEnum.Polearm,
    small_image_src: imageSrc("dragons_bane-small-256x256.png"),
  },
  [WeaponUidEnum.LithicSpear]: {
    name: "Каменное копье",
    quality: 4,
    type: WeaponTypeUidEnum.Polearm,
    small_image_src: imageSrc("lithic_spear-small-256x256.png"),
  },
  [WeaponUidEnum.MissiveWindspear]: {
    name: "Копьё послания ветров",
    quality: 4,
    type: WeaponTypeUidEnum.Polearm,
    small_image_src: imageSrc("missive_windspear-small-256x256.png"),
  },
  [WeaponUidEnum.SkywardSpine]: {
    name: "Небесная ось",
    quality: 5,
    type: WeaponTypeUidEnum.Polearm,
    small_image_src: imageSrc("skyward_spine-small-256x256.png"),
  },
  [WeaponUidEnum.PrimordialJadeWingedSpear]: {
    name: "Нефритовый коршун",
    quality: 5,
    type: WeaponTypeUidEnum.Polearm,
    small_image_src: imageSrc("primordial_jade_winged_spear-small-256x256.png"),
  },
  [WeaponUidEnum.CrimsonMoonsSemblance]: {
    name: "Очертания алой луны",
    quality: 5,
    type: WeaponTypeUidEnum.Polearm,
    small_image_src: imageSrc("crimson_moons_semblance-small-256x256.png"),
  },
  [WeaponUidEnum.VortexVanquisher]: {
    name: "Покоритель вихря",
    quality: 5,
    type: WeaponTypeUidEnum.Polearm,
    small_image_src: imageSrc("vortex_vanquisher-small-256x256.png"),
  },
  [WeaponUidEnum.StaffOfTheScarletSands]: {
    name: "Посох алых песков",
    quality: 5,
    type: WeaponTypeUidEnum.Polearm,
    small_image_src: imageSrc("staff_of_the_scarlet_sands-small-256x256.png"),
  },
  [WeaponUidEnum.StaffOfHoma]: {
    name: "Посох Хомы",
    quality: 5,
    type: WeaponTypeUidEnum.Polearm,
    small_image_src: imageSrc("staff_of_homa-small-256x256.png"),
  },
  [WeaponUidEnum.Deathmatch]: {
    name: "Смертельный бой",
    quality: 4,
    type: WeaponTypeUidEnum.Polearm,
    small_image_src: imageSrc("deathmatch-small-256x256.png"),
  },
  [WeaponUidEnum.CalamityQueller]: {
    name: "Усмиритель бед",
    quality: 5,
    type: WeaponTypeUidEnum.Polearm,
    small_image_src: imageSrc("calamity_queller-small-256x256.png"),
  },
  [WeaponUidEnum.BlackcliffPole]: {
    name: "Черногорская пика",
    quality: 4,
    type: WeaponTypeUidEnum.Polearm,
    small_image_src: imageSrc("blackcliff_pole-small-256x256.png"),
  },
  [WeaponUidEnum.LumidouceElegy]: {
    name: "Элегия Люмидус",
    quality: 5,
    type: WeaponTypeUidEnum.Polearm,
    small_image_src: imageSrc("lumidouce_elegy-small-512x512.png"),
  },
} as Weapons;

export async function getWeapons() {
  console.log("getWeapons");

  return weapons;
}
