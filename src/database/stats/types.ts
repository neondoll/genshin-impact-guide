import { StatKeys } from "./enums";

export interface IStat {
  key: TStatKey;
  name: string;
  abbr?: string;
}

export type TStatKey = typeof StatKeys[keyof typeof StatKeys];
