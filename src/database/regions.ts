import { publicImageSrc } from "@/lib/utils";
import { RegionUidEnum } from "./enums/region";
import type { Region, RegionUid } from "./types/region";

const imageSrc: typeof publicImageSrc = src => publicImageSrc(`regions/${src}`);

export default {
  [RegionUidEnum.Fontaine]: { name: "Фонтейн", emblem_image_src: imageSrc("fontaine-emblem-256x256.png") },
  [RegionUidEnum.Inazuma]: { name: "Инадзума", emblem_image_src: imageSrc("inazuma-emblem-256x256.png") },
  [RegionUidEnum.Liyue]: { name: "Ли Юэ", emblem_image_src: imageSrc("liyue-emblem-256x256.png") },
  [RegionUidEnum.Mondstadt]: { name: "Мондштадт", emblem_image_src: imageSrc("mondstadt-emblem-256x256.png") },
  [RegionUidEnum.Natlan]: { name: "Натлан", emblem_image_src: imageSrc("natlan-emblem-256x256.png") },
  [RegionUidEnum.Snezhnaya]: { name: "Снежная" },
  [RegionUidEnum.Sumeru]: { name: "Сумеру", emblem_image_src: imageSrc("sumeru-emblem-256x256.png") },
} as Record<RegionUid, Region>;
