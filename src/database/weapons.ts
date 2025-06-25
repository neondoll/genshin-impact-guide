type Weapon = { name: string; quality: 3 | 4 | 5; small_image_src: string };
type Weapons = Record<WeaponUid, Weapon>;

export const WeaponUidEnum = {
  BalladOfTheFjords: "Ballad of the Fjords",
  CalamityQueller: "Calamity Queller",
  CrimsonMoonsSemblance: "Crimson Moon's Semblance",
  Deathmatch: "Deathmatch",
  LithicSpear: "Lithic Spear",
  LumidouceElegy: "Lumidouce Elegy",
  PrimordialJadeWingedSpear: "Primordial Jade Winged-Spear",
  StaffOfHoma: "Staff of Homa",
  StaffOfTheScarletSands: "Staff of the Scarlet Sands",
  VortexVanquisher: "Vortex Vanquisher",
  WhiteTassel: "White Tassel",
};

export type WeaponUid = typeof WeaponUidEnum[keyof typeof WeaponUidEnum];

const imageSrc = (name: string) => `/images/weapons/${name}`;

const weapons = {
  [WeaponUidEnum.BalladOfTheFjords]: {
    name: "Баллада фьордов",
    quality: 4,
    small_image_src: imageSrc("ballad_of_the_fjords-small-256x256.png"),
  },
  [WeaponUidEnum.WhiteTassel]: {
    name: "Белая кисть",
    quality: 3,
    small_image_src: imageSrc("white_tassel-small-256x256.png"),
  },
  [WeaponUidEnum.LithicSpear]: {
    name: "Каменное копье",
    quality: 4,
    small_image_src: imageSrc("lithic_spear-small-256x256.png"),
  },
  [WeaponUidEnum.PrimordialJadeWingedSpear]: {
    name: "Нефритовый коршун",
    quality: 5,
    small_image_src: imageSrc("primordial_jade_winged_spear-small-256x256.png"),
  },
  [WeaponUidEnum.CrimsonMoonsSemblance]: {
    name: "Очертания алой луны",
    quality: 5,
    small_image_src: imageSrc("crimson_moons_semblance-small-256x256.png"),
  },
  [WeaponUidEnum.VortexVanquisher]: {
    name: "Покоритель вихря",
    quality: 5,
    small_image_src: imageSrc("vortex_vanquisher-small-256x256.png"),
  },
  [WeaponUidEnum.StaffOfTheScarletSands]: {
    name: "Посох алых песков",
    quality: 5,
    small_image_src: imageSrc("staff_of_the_scarlet_sands-small-256x256.png"),
  },
  [WeaponUidEnum.StaffOfHoma]: {
    name: "Посох Хомы",
    quality: 5,
    small_image_src: imageSrc("staff_of_homa-small-256x256.png"),
  },
  [WeaponUidEnum.Deathmatch]: {
    name: "Смертельный бой",
    quality: 4,
    small_image_src: imageSrc("deathmatch-small-256x256.png"),
  },
  [WeaponUidEnum.CalamityQueller]: {
    name: "Усмиритель бед",
    quality: 5,
    small_image_src: imageSrc("calamity_queller-small-256x256.png"),
  },
  [WeaponUidEnum.LumidouceElegy]: {
    name: "Элегия Люмидус",
    quality: 5,
    small_image_src: imageSrc("lumidouce_elegy-small-512x512.png"),
  },
} as Weapons;

export async function getWeapons() {
  return weapons;
}
