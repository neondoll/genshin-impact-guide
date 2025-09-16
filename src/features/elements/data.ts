import type { Element } from "./types";
import { ElementIds } from "./enums";
import { publicImageSrc } from "@/lib/utils";

class ElementClass implements Element {
  readonly id: Element["id"];
  readonly name: Element["name"];
  readonly img_src: Element["img_src"];
  readonly icon_src: Element["icon_src"];
  readonly icon_white_src: Element["icon_white_src"];

  static PATH = "elements";

  constructor(id: Element["id"], name: Element["name"]) {
    this.id = id;
    this.name = name;
    this.img_src = publicImageSrc(`${ElementClass.PATH}/${id}.webp`);
    this.icon_src = publicImageSrc(`${ElementClass.PATH}/${id}.svg`);
    this.icon_white_src = publicImageSrc(`${ElementClass.PATH}/${id}_white.svg`);
  }
}

export default {
  [ElementIds.Anemo]: new ElementClass(ElementIds.Anemo, "Анемо"),
  [ElementIds.Cryo]: new ElementClass(ElementIds.Cryo, "Крио"),
  [ElementIds.Dendro]: new ElementClass(ElementIds.Dendro, "Дендро"),
  [ElementIds.Electro]: new ElementClass(ElementIds.Electro, "Электро"),
  [ElementIds.Geo]: new ElementClass(ElementIds.Geo, "Гео"),
  [ElementIds.Hydro]: new ElementClass(ElementIds.Hydro, "Гидро"),
  [ElementIds.Pyro]: new ElementClass(ElementIds.Pyro, "Пиро"),
} as Record<Element["id"], Element>;
