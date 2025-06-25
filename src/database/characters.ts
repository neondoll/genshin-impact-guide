import { RegionEnum, type RegionKey } from "./regions.ts";
import { WorldEnum, type WorldKey } from "./worlds.ts";

type Character = { name: string; world_key: WorldKey; region_key?: RegionKey; small_image_src: string };
type CharacterKeys = "arlecchino" | "bennett" | "chevreuse" | "escoffier" | "fischl" | "furina" | "iansan"
  | "kuki_shinobu" | "neuvillette" | "skirk" | "sucrose" | "varesa" | "xiangling" | "xilonen" | "xingqiu";
type Characters = Record<CharacterKeys, Character>;

const imageSrc = (name: string) => `/images/characters/${name}`;

export default {
  arlecchino: {
    name: "Арлекино",
    world_key: WorldEnum.Teyvat,
    region_key: RegionEnum.Snezhnaya,
    small_image_src: imageSrc("arlecchino-small-106x106.png"),
  },
  bennett: {
    name: "Беннет",
    world_key: WorldEnum.Teyvat,
    region_key: RegionEnum.Mondstadt,
    small_image_src: imageSrc("bennett-small-106x106.png"),
  },
  varesa: {
    name: "Вареса",
    world_key: WorldEnum.Teyvat,
    region_key: RegionEnum.Natlan,
    small_image_src: imageSrc("varesa-small-106x106.png"),
  },
  iansan: {
    name: "Иансан",
    world_key: WorldEnum.Teyvat,
    region_key: RegionEnum.Natlan,
    small_image_src: imageSrc("iansan-small-106x106.png"),
  },
  kuki_shinobu: {
    name: "Куки Синобу",
    world_key: WorldEnum.Teyvat,
    region_key: RegionEnum.Inazuma,
    small_image_src: imageSrc("kuki_shinobu-small-106x106.png"),
  },
  neuvillette: {
    name: "Нёвиллет",
    world_key: WorldEnum.Teyvat,
    region_key: RegionEnum.Fontaine,
    small_image_src: imageSrc("neuvillette-small-106x106.png"),
  },
  sucrose: {
    name: "Сахароза",
    world_key: WorldEnum.Teyvat,
    region_key: RegionEnum.Mondstadt,
    small_image_src: imageSrc("sucrose-small-106x106.png"),
  },
  xingqiu: {
    name: "Син Цю",
    world_key: WorldEnum.Teyvat,
    region_key: RegionEnum.Liyue,
    small_image_src: imageSrc("xingqiu-small-106x106.png"),
  },
  skirk: { name: "Скирк", world_key: WorldEnum.Another, small_image_src: imageSrc("skirk-small-106x106.png") },
  xiangling: {
    name: "Сян Лин",
    world_key: WorldEnum.Teyvat,
    region_key: RegionEnum.Liyue,
    small_image_src: imageSrc("xiangling-small-106x106.png"),
  },
  fischl: {
    name: "Фишль",
    world_key: WorldEnum.Teyvat,
    region_key: RegionEnum.Mondstadt,
    small_image_src: imageSrc("fischl-small-106x106.png"),
  },
  furina: {
    name: "Фурина",
    world_key: WorldEnum.Teyvat,
    region_key: RegionEnum.Fontaine,
    small_image_src: imageSrc("furina-small-106x106.png"),
  },
  chevreuse: {
    name: "Шеврёз",
    world_key: WorldEnum.Teyvat,
    region_key: RegionEnum.Fontaine,
    small_image_src: imageSrc("chevreuse-small-106x106.png"),
  },
  xilonen: {
    name: "Шилонен",
    world_key: WorldEnum.Teyvat,
    region_key: RegionEnum.Natlan,
    small_image_src: imageSrc("xilonen-small-106x106.png"),
  },
  escoffier: {
    name: "Эскофье",
    world_key: WorldEnum.Teyvat,
    region_key: RegionEnum.Fontaine,
    small_image_src: imageSrc("escoffier-small-106x106.png"),
  },
} as Characters;
