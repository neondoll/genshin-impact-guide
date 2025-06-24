import type { RegionKey } from "./region.ts";
import type { WorldKey } from "./world.ts";

export interface Character {
  name: string;
  world_key: WorldKey;
  region_key?: RegionKey;
  small_image_src: string;
}

export type Characters = Record<string, Character>;
