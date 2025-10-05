import { RegionIds } from "@/enums/region";

export interface Region {
  id: RegionId;
  name: string;
  emblem_image_src?: string;
}

export type RegionId = typeof RegionIds[keyof typeof RegionIds];
