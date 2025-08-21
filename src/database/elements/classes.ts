import type { IElement } from "./types";
import { publicImageSrc } from "@/lib/utils";

export class CElement implements IElement {
  readonly key: IElement["key"];
  readonly name: IElement["name"];
  readonly image_src: IElement["image_src"];
  readonly region_key: IElement["region_key"];
  readonly reacts_with: IElement["reacts_with"];

  static PATH = "elements";

  constructor(
    key: IElement["key"],
    name: IElement["name"],
    regionKey: IElement["region_key"],
    reactsWith: IElement["reacts_with"],
  ) {
    this.key = key;
    this.name = name;
    this.image_src = publicImageSrc(`${CElement.PATH}/${key}-84x84.png`);
    this.region_key = regionKey;
    this.reacts_with = reactsWith;
  }

  static init(params: ConstructorParameters<typeof CElement>) {
    return new CElement(...params);
  }
}
