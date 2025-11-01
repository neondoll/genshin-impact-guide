import { type WorldIds } from "@/enums/world";

export interface World {
  id: WorldId;
  name: string;
}

export type WorldId = typeof WorldIds[keyof typeof WorldIds];
