import type { IElement } from "./types";
import { ElementKeys } from "./enums";
import { publicImageSrc } from "@/lib/utils";
import { RegionKeys } from "../regions/enums";

export class CElement implements IElement {
  readonly key: IElement["key"];
  readonly name: IElement["name"];
  readonly image_src: IElement["image_src"];
  readonly region_key: IElement["region_key"];
  readonly reacts_with: IElement["reacts_with"];

  static PATH = "elements";

  constructor(
    key: keyof typeof ElementKeys,
    name: IElement["name"],
    regionKey: keyof typeof RegionKeys,
    reactsWith: (keyof typeof ElementKeys)[],
  ) {
    this.key = ElementKeys[key];
    this.name = name;
    this.image_src = publicImageSrc(`${CElement.PATH}/${this.key}-84x84.png`);
    this.region_key = RegionKeys[regionKey];
    this.reacts_with = reactsWith.map(reactWith => ElementKeys[reactWith]);
  }
}
