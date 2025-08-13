import { RegionKeys } from "../enums/region";

export interface Region {
  key: RegionKey;
  name: string;
  emblem_image_src?: string;
}

export type RegionKey = typeof RegionKeys[keyof typeof RegionKeys];
