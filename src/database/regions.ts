import { publicImageSrc } from "@/lib/utils";
import { RegionKeys } from "./enums/region";
import type { Region } from "./types/region";

class _Region implements Region {
  readonly key: Region["key"];
  readonly name: Region["name"];
  readonly emblem_image_src: Region["emblem_image_src"];

  static PATH = "regions";

  constructor(key: keyof typeof RegionKeys, name: Region["name"], imageName?: string) {
    this.key = RegionKeys[key];
    this.name = name;
    this.emblem_image_src = imageName ? publicImageSrc(`${_Region.PATH}/${imageName}`) : undefined;
  }
}

export default {
  [RegionKeys.Fontaine]: new _Region("Fontaine", "Фонтейн", "fontaine-emblem-256x256.png"),
  [RegionKeys.Inazuma]: new _Region("Inazuma", "Инадзума", "inazuma-emblem-256x256.png"),
  [RegionKeys.Liyue]: new _Region("Liyue", "Ли Юэ", "liyue-emblem-256x256.png"),
  [RegionKeys.Mondstadt]: new _Region("Mondstadt", "Мондштадт", "mondstadt-emblem-256x256.png"),
  [RegionKeys.Natlan]: new _Region("Natlan", "Натлан", "natlan-emblem-256x256.png"),
  [RegionKeys.Snezhnaya]: new _Region("Snezhnaya", "Снежная"),
  [RegionKeys.Sumeru]: new _Region("Sumeru", "Сумеру", "sumeru-emblem-256x256.png"),
} as Record<Region["key"], Region>;
