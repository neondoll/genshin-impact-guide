type Region = { name: string };
type Regions = Record<RegionKey, Region>;

export const RegionEnum = {
  Fontaine: "Fontaine",
  Inazuma: "Inazuma",
  Liyue: "Liyue",
  Mondstadt: "Mondstadt",
  Natlan: "Natlan",
  Snezhnaya: "Snezhnaya",
  Sumeru: "Sumeru",
} as const;

export type RegionKey = typeof RegionEnum[keyof typeof RegionEnum];

export default {
  [RegionEnum.Mondstadt]: { name: "Мондштадт" },
  [RegionEnum.Liyue]: { name: "Ли Юэ" },
  [RegionEnum.Inazuma]: { name: "Инадзума" },
  [RegionEnum.Sumeru]: { name: "Сумеру" },
  [RegionEnum.Fontaine]: { name: "Фонтейн" },
  [RegionEnum.Natlan]: { name: "Натлан" },
  [RegionEnum.Snezhnaya]: { name: "Снежная" },
} as Regions;
