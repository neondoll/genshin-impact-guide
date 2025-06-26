type Region = { name: string };
type Regions = Record<RegionUid, Region>;

export type RegionUid = typeof RegionUidEnum[keyof typeof RegionUidEnum];

export const RegionUidEnum = {
  /* Фонтейн   */ Fontaine: "fontaine",
  /* Инадзума  */ Inazuma: "inazuma",
  /* Ли Юэ     */ Liyue: "liyue",
  /* Мондштадт */ Mondstadt: "mondstadt",
  /* Натлан    */ Natlan: "natlan",
  /* Снежная   */ Snezhnaya: "snezhnaya",
  /* Сумеру    */ Sumeru: "sumeru",
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
  console.log("getRegions");

  return regions;
}
