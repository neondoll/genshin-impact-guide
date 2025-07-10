import { RegionUidEnum } from "../enums/region";

export type Region = { name: string; emblem_image_src?: string };
export type RegionUid = typeof RegionUidEnum[keyof typeof RegionUidEnum];
