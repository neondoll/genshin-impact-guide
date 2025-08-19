import type { TRegionKey } from "../regions/types";
import { ElementKeys } from "./enums";

export interface IElement {
  key: TElementKey;
  name: string;
  image_src: string;
  region_key: TRegionKey;
  reacts_with: TElementKey[];
}

export type TElementKey = typeof ElementKeys[keyof typeof ElementKeys];
