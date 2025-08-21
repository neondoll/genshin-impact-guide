import type { IRegion } from "./types";
import { publicImageSrc } from "@/lib/utils";

export class CRegion implements IRegion {
  readonly key: IRegion["key"];
  readonly name: IRegion["name"];
  readonly emblem_image_src: IRegion["emblem_image_src"];

  static PATH = "regions";

  constructor(key: IRegion["key"], name: IRegion["name"], imageName?: string) {
    this.key = key;
    this.name = name;
    this.emblem_image_src = imageName ? publicImageSrc(`${CRegion.PATH}/${imageName}`) : undefined;
  }

  static init(params: ConstructorParameters<typeof CRegion>) {
    return new CRegion(...params);
  }
}
