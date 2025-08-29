import type { Region } from "./types";
import { publicImageSrc } from "@/lib/utils";
import { RegionIds } from "./enums";

export class RegionClass implements Region {
  readonly id: Region["id"];
  readonly name: Region["name"];
  readonly emblem_image_src: Region["emblem_image_src"];

  static PATH = "regions";

  constructor(id: Region["id"], name: Region["name"], imageName?: string) {
    this.id = id;
    this.name = name;
    this.emblem_image_src = imageName ? publicImageSrc(`${RegionClass.PATH}/${imageName}`) : undefined;
  }

  static init(params: ConstructorParameters<typeof RegionClass>) {
    return new RegionClass(...params);
  }
}

export default {
  [RegionIds.Fontaine]: RegionClass.init([RegionIds.Fontaine, "Фонтейн", "fontaine-emblem-256x256.png"]),
  [RegionIds.Inazuma]: RegionClass.init([RegionIds.Inazuma, "Инадзума", "inazuma-emblem-256x256.png"]),
  [RegionIds.Liyue]: RegionClass.init([RegionIds.Liyue, "Ли Юэ", "liyue-emblem-256x256.png"]),
  [RegionIds.Mondstadt]: RegionClass.init([RegionIds.Mondstadt, "Мондштадт", "mondstadt-emblem-256x256.png"]),
  [RegionIds.Natlan]: RegionClass.init([RegionIds.Natlan, "Натлан", "natlan-emblem-256x256.png"]),
  [RegionIds.Snezhnaya]: RegionClass.init([RegionIds.Snezhnaya, "Снежная"]),
  [RegionIds.Sumeru]: RegionClass.init([RegionIds.Sumeru, "Сумеру", "sumeru-emblem-256x256.png"]),
} as Record<Region["id"], Region>;
