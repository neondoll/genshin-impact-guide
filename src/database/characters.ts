import { type RegionUid, RegionUidEnum } from "./regions";
import { type TalentUid, TalentUidEnum } from "./talents";
import { type WorldUid, WorldUidEnum } from "./worlds";

type Character = {
  name: string;
  quality: 4 | 5;
  world_uid: WorldUid;
  region_uid?: RegionUid;
  small_image_src: string;
  upgrading_talents?: Record<TalentUid, string>;
};
type Characters = Record<CharacterUid, Character>;

export type CharacterUid = "arlecchino" | "bennett" | "chevreuse" | "escoffier" | "fischl" | "furina" | "iansan"
  | "kuki_shinobu" | "neuvillette" | "skirk" | "sucrose" | "varesa" | "xiangling" | "xilonen" | "xingqiu";

const imageSrc = (name: string) => `/images/characters/${name}`;

const characters = {
  arlecchino: {
    name: "Арлекино",
    quality: 5,
    world_uid: WorldUidEnum.Teyvat,
    region_uid: RegionUidEnum.Snezhnaya,
    small_image_src: imageSrc("arlecchino-small-106x106.png"),
    upgrading_talents: {
      [TalentUidEnum.NormalAttack]: "Высокий приоритет (10)",
      [TalentUidEnum.ElementalSkill]: "Ситуативно (6 / 8)",
      [TalentUidEnum.ElementalBurst]: "Ситуативно (6 / 8)",
    },
  },
  bennett: {
    name: "Беннет",
    quality: 4,
    world_uid: WorldUidEnum.Teyvat,
    region_uid: RegionUidEnum.Mondstadt,
    small_image_src: imageSrc("bennett-small-106x106.png"),
  },
  varesa: {
    name: "Вареса",
    quality: 5,
    world_uid: WorldUidEnum.Teyvat,
    region_uid: RegionUidEnum.Natlan,
    small_image_src: imageSrc("varesa-small-106x106.png"),
  },
  iansan: {
    name: "Иансан",
    quality: 4,
    world_uid: WorldUidEnum.Teyvat,
    region_uid: RegionUidEnum.Natlan,
    small_image_src: imageSrc("iansan-small-106x106.png"),
  },
  kuki_shinobu: {
    name: "Куки Синобу",
    quality: 4,
    world_uid: WorldUidEnum.Teyvat,
    region_uid: RegionUidEnum.Inazuma,
    small_image_src: imageSrc("kuki_shinobu-small-106x106.png"),
  },
  neuvillette: {
    name: "Нёвиллет",
    quality: 5,
    world_uid: WorldUidEnum.Teyvat,
    region_uid: RegionUidEnum.Fontaine,
    small_image_src: imageSrc("neuvillette-small-106x106.png"),
  },
  sucrose: {
    name: "Сахароза",
    quality: 4,
    world_uid: WorldUidEnum.Teyvat,
    region_uid: RegionUidEnum.Mondstadt,
    small_image_src: imageSrc("sucrose-small-106x106.png"),
  },
  xingqiu: {
    name: "Син Цю",
    quality: 4,
    world_uid: WorldUidEnum.Teyvat,
    region_uid: RegionUidEnum.Liyue,
    small_image_src: imageSrc("xingqiu-small-106x106.png"),
  },
  skirk: {
    name: "Скирк",
    quality: 5,
    world_uid: WorldUidEnum.Another,
    small_image_src: imageSrc("skirk-small-106x106.png"),
  },
  xiangling: {
    name: "Сян Лин",
    quality: 4,
    world_uid: WorldUidEnum.Teyvat,
    region_uid: RegionUidEnum.Liyue,
    small_image_src: imageSrc("xiangling-small-106x106.png"),
  },
  fischl: {
    name: "Фишль",
    quality: 4,
    world_uid: WorldUidEnum.Teyvat,
    region_uid: RegionUidEnum.Mondstadt,
    small_image_src: imageSrc("fischl-small-106x106.png"),
  },
  furina: {
    name: "Фурина",
    quality: 5,
    world_uid: WorldUidEnum.Teyvat,
    region_uid: RegionUidEnum.Fontaine,
    small_image_src: imageSrc("furina-small-106x106.png"),
  },
  chevreuse: {
    name: "Шеврёз",
    quality: 4,
    world_uid: WorldUidEnum.Teyvat,
    region_uid: RegionUidEnum.Fontaine,
    small_image_src: imageSrc("chevreuse-small-106x106.png"),
  },
  xilonen: {
    name: "Шилонен",
    quality: 5,
    world_uid: WorldUidEnum.Teyvat,
    region_uid: RegionUidEnum.Natlan,
    small_image_src: imageSrc("xilonen-small-106x106.png"),
  },
  escoffier: {
    name: "Эскофье",
    quality: 5,
    world_uid: WorldUidEnum.Teyvat,
    region_uid: RegionUidEnum.Fontaine,
    small_image_src: imageSrc("escoffier-small-106x106.png"),
  },
} as Characters;

export async function getCharacter(uid: CharacterUid) {
  return characters[uid];
}

export async function getCharacters() {
  return characters;
}
