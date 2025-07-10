import { ElementUidEnum } from "../enums/element";
import type { RegionUid } from "./region";

export type Element = {
  uid: ElementUid;
  name: string;
  image_src: string;
  region_uid: RegionUid;
  reacts_with: ElementUid[];
};
export type ElementUid = typeof ElementUidEnum[keyof typeof ElementUidEnum];
