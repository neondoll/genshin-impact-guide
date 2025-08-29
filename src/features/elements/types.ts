import type { RegionId } from "../regions/types";
import { ElementIds } from "./enums";

export interface Element {
  id: ElementId;
  name: string;
  image_src: string;
  region_id: RegionId;
  reacts_with: ElementId[];
}

export type ElementId = typeof ElementIds[keyof typeof ElementIds];
