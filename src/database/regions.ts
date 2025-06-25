type Region = { name: string };
type Regions = Record<RegionUid, Region>;

export type RegionUid = typeof RegionUidEnum[keyof typeof RegionUidEnum];

export const RegionUidEnum = {
  Fontaine: "Fontaine",
  Inazuma: "Inazuma",
  Liyue: "Liyue",
  Mondstadt: "Mondstadt",
  Natlan: "Natlan",
  Snezhnaya: "Snezhnaya",
  Sumeru: "Sumeru",
} as const;

const regions = {
  [RegionUidEnum.Mondstadt]: { name: "Мондштадт" },
  [RegionUidEnum.Liyue]: { name: "Ли Юэ" },
  [RegionUidEnum.Inazuma]: { name: "Инадзума" },
  [RegionUidEnum.Sumeru]: { name: "Сумеру" },
  [RegionUidEnum.Fontaine]: { name: "Фонтейн" },
  [RegionUidEnum.Natlan]: { name: "Натлан" },
  [RegionUidEnum.Snezhnaya]: { name: "Снежная" },
} as Regions;

export async function getRegions() {
  return regions;
}
