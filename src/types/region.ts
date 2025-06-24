export interface Region {
  name: string;
}

export type RegionKey = "fontaine" | "inazuma" | "liyue" | "mondstadt" | "natlan" | "snezhnaya" | "sumeru";
export type Regions = Record<RegionKey, Region>;
