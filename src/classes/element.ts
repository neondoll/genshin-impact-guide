import type { Element as Type } from "@/types/element";
import { publicImageSrc } from "@/lib/utils";

export class Element implements Type {
  readonly id: Type["id"];
  readonly name: Type["name"];
  readonly imageSrc: Type["imageSrc"];
  readonly iconSrc: Type["iconSrc"];
  readonly iconWhiteSrc: Type["iconWhiteSrc"];

  static PATH = "elements";

  constructor(id: Type["id"], name: Type["name"]) {
    this.id = id;
    this.name = name;
    this.imageSrc = publicImageSrc(`${Element.PATH}/${id}.webp`);
    this.iconSrc = publicImageSrc(`${Element.PATH}/${id}.svg`);
    this.iconWhiteSrc = publicImageSrc(`${Element.PATH}/${id}_white.svg`);
  }
}
