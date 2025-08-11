import { publicImageSrc } from "@/lib/utils";
import { RegionKeys } from "./enums/region";
import type { Region, RegionKey } from "./types/region";

const imageSrc: typeof publicImageSrc = src => publicImageSrc(`regions/${src}`);

export default {
  [RegionKeys.Fontaine]: { name: "Фонтейн", emblem_image_src: imageSrc("fontaine-emblem-256x256.png") },
  [RegionKeys.Inazuma]: { name: "Инадзума", emblem_image_src: imageSrc("inazuma-emblem-256x256.png") },
  [RegionKeys.Liyue]: { name: "Ли Юэ", emblem_image_src: imageSrc("liyue-emblem-256x256.png") },
  [RegionKeys.Mondstadt]: { name: "Мондштадт", emblem_image_src: imageSrc("mondstadt-emblem-256x256.png") },
  [RegionKeys.Natlan]: { name: "Натлан", emblem_image_src: imageSrc("natlan-emblem-256x256.png") },
  [RegionKeys.Snezhnaya]: { name: "Снежная" },
  [RegionKeys.Sumeru]: { name: "Сумеру", emblem_image_src: imageSrc("sumeru-emblem-256x256.png") },
} as Record<RegionKey, Region>;
