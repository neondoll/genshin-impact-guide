import { ElementKeys } from "../enums/element";
import type { RegionKey } from "./region";

export type Element = {
  key: ElementKey;
  name: string;
  image_src: string;
  region_key: RegionKey;
  reacts_with: ElementKey[];
};
export type ElementKey = typeof ElementKeys[keyof typeof ElementKeys];
