import { WorldIds } from "./enums";

export interface World {
  id: WorldId;
  name: string;
}

export type WorldId = typeof WorldIds[keyof typeof WorldIds];
