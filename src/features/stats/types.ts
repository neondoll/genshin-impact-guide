import { StatIds } from "./enums";

export interface Stat {
  id: StatId;
  name: string;
  abbr?: string;
}

export type StatId = typeof StatIds[keyof typeof StatIds];
