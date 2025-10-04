import type { Region as Type } from "@/types/region";
import { publicImageSrc } from "@/lib/utils";

export class Region implements Type {
  readonly id: Type["id"];
  readonly name: Type["name"];
  readonly emblem_image_src: Type["emblem_image_src"];

  static PATH = "regions";

  constructor(id: Type["id"], name: Type["name"], imageName?: string) {
    this.id = id;
    this.name = name;
    this.emblem_image_src = imageName ? publicImageSrc(`${Region.PATH}/${imageName}`) : undefined;
  }

  static init(params: ConstructorParameters<typeof Region>) {
    return new Region(...params);
  }
}
