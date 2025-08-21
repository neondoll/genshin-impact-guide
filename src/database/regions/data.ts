import type { IRegion } from "./types";
import { CRegion } from "./classes";
import { RegionKeys } from "./enums";

export default {
  [RegionKeys.Fontaine]: CRegion.init([RegionKeys.Fontaine, "Фонтейн", "fontaine-emblem-256x256.png"]),
  [RegionKeys.Inazuma]: CRegion.init([RegionKeys.Inazuma, "Инадзума", "inazuma-emblem-256x256.png"]),
  [RegionKeys.Liyue]: CRegion.init([RegionKeys.Liyue, "Ли Юэ", "liyue-emblem-256x256.png"]),
  [RegionKeys.Mondstadt]: CRegion.init([RegionKeys.Mondstadt, "Мондштадт", "mondstadt-emblem-256x256.png"]),
  [RegionKeys.Natlan]: CRegion.init([RegionKeys.Natlan, "Натлан", "natlan-emblem-256x256.png"]),
  [RegionKeys.Snezhnaya]: CRegion.init([RegionKeys.Snezhnaya, "Снежная"]),
  [RegionKeys.Sumeru]: CRegion.init([RegionKeys.Sumeru, "Сумеру", "sumeru-emblem-256x256.png"]),
} as Record<IRegion["key"], IRegion>;
