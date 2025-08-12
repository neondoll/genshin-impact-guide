import { StAtkeys } from "../enums/stat";

export type Stat = { key: StAtkey; name: string; abbr?: string };
export type StAtkey = typeof StAtkeys[keyof typeof StAtkeys];
