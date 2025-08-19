import type { IRegion } from "./types";
import { CRegion } from "./classes";
import { RegionKeys } from "./enums";

export default {
  [RegionKeys.Fontaine]: new CRegion("Fontaine", "Фонтейн", "fontaine-emblem-256x256.png"),
  [RegionKeys.Inazuma]: new CRegion("Inazuma", "Инадзума", "inazuma-emblem-256x256.png"),
  [RegionKeys.Liyue]: new CRegion("Liyue", "Ли Юэ", "liyue-emblem-256x256.png"),
  [RegionKeys.Mondstadt]: new CRegion("Mondstadt", "Мондштадт", "mondstadt-emblem-256x256.png"),
  [RegionKeys.Natlan]: new CRegion("Natlan", "Натлан", "natlan-emblem-256x256.png"),
  [RegionKeys.Snezhnaya]: new CRegion("Snezhnaya", "Снежная"),
  [RegionKeys.Sumeru]: new CRegion("Sumeru", "Сумеру", "sumeru-emblem-256x256.png"),
} as Record<IRegion["key"], IRegion>;
