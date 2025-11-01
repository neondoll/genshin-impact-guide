import { type StatIds } from "@/enums/stat";

export interface Stat {
  id: StatId;
  name: string;
  abbr?: string;
}

export type StatId = typeof StatIds[keyof typeof StatIds];
