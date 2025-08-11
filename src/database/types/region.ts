import { RegionKeys } from "../enums/region";

export type Region = { name: string; emblem_image_src?: string };
export type RegionKey = typeof RegionKeys[keyof typeof RegionKeys];
