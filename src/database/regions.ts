import { publicImageSrc } from "@/lib/utils";

type Region = { name: string; emblem_image_src?: string };
type Regions = Record<RegionUid, Region>;

export type RegionUid = typeof RegionUidEnum[keyof typeof RegionUidEnum];

export const RegionUidEnum = {
  /* Фонтейн   */ Fontaine: "fontaine",
  /* Инадзума  */ Inazuma: "inazuma",
  /* Ли Юэ     */ Liyue: "liyue",
  /* Мондштадт */ Mondstadt: "mondstadt",
  /* Натлан    */ Natlan: "natlan",
  /* Снежная   */ Snezhnaya: "snezhnaya",
  /* Сумеру    */ Sumeru: "sumeru",
} as const;

const imageSrc: typeof publicImageSrc = src => publicImageSrc(`regions/${src}`);

const regions = {
  [RegionUidEnum.Mondstadt]: { name: "Мондштадт", emblem_image_src: imageSrc("mondstadt-emblem-256x256.png") },
  [RegionUidEnum.Liyue]: { name: "Ли Юэ", emblem_image_src: imageSrc("liyue-emblem-256x256.png") },
  [RegionUidEnum.Inazuma]: { name: "Инадзума", emblem_image_src: imageSrc("inazuma-emblem-256x256.png") },
  [RegionUidEnum.Sumeru]: { name: "Сумеру", emblem_image_src: imageSrc("sumeru-emblem-256x256.png") },
  [RegionUidEnum.Fontaine]: { name: "Фонтейн", emblem_image_src: imageSrc("fontaine-emblem-256x256.png") },
  [RegionUidEnum.Natlan]: { name: "Натлан", emblem_image_src: imageSrc("natlan-emblem-256x256.png") },
  [RegionUidEnum.Snezhnaya]: { name: "Снежная" },
} as Regions;

export function getRegions() {
  return regions;
}
