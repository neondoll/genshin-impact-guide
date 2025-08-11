import { StatKeys } from "../enums/stat";

export type Stat = { key: StatKey; name: string; abbreviation?: string };
export type StatKey = typeof StatKeys[keyof typeof StatKeys];
