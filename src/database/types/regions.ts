import type { RegionUidEnum } from "../enums/regions";

type Region = { name: string; emblem_image_src?: string };

export type Regions = Record<RegionUid, Region>;
export type RegionUid = typeof RegionUidEnum[keyof typeof RegionUidEnum];
