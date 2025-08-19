import { RegionKeys } from "./enums";

export interface IRegion {
  key: TRegionKey;
  name: string;
  emblem_image_src?: string;
}

export type TRegionKey = typeof RegionKeys[keyof typeof RegionKeys];
