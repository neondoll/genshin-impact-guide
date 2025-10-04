import type { Element as Type } from "@/types/element";
import { publicImageSrc } from "@/lib/utils";

export class Element implements Type {
  readonly id: Type["id"];
  readonly name: Type["name"];
  readonly img_src: Type["img_src"];
  readonly icon_src: Type["icon_src"];
  readonly icon_white_src: Type["icon_white_src"];

  static PATH = "elements";

  constructor(id: Type["id"], name: Type["name"]) {
    this.id = id;
    this.name = name;
    this.img_src = publicImageSrc(`${Element.PATH}/${id}.webp`);
    this.icon_src = publicImageSrc(`${Element.PATH}/${id}.svg`);
    this.icon_white_src = publicImageSrc(`${Element.PATH}/${id}_white.svg`);
  }
}
