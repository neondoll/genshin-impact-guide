import type { ElementUidEnum } from "../enums/elements";
import type { RegionUid } from "./regions";

type Element = {
  uid: ElementUid;
  name: string;
  image_src: string;
  region_uid: RegionUid;
  reacts_with: ElementUid[];
  color_var: string;
};

export type Elements = Record<ElementUid, Element>;
export type ElementUid = typeof ElementUidEnum[keyof typeof ElementUidEnum];
