import type { ElementUidEnum } from "../enums/elements";
import type { RegionUid } from "./regions";

type Element = { name: string; region_uid: RegionUid; image_src: string; color_var: string };

export type Elements = Record<ElementUid, Element>;
export type ElementUid = typeof ElementUidEnum[keyof typeof ElementUidEnum];
