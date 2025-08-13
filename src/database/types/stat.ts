import { StatKeys } from "../enums/stat";

export interface Stat {
  key: StatKey;
  name: string;
  abbr?: string;
}

export type StatKey = typeof StatKeys[keyof typeof StatKeys];
