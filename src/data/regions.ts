import type { Region as Type } from "@/types/region";
import { Region as Class } from "@/classes/region";
import { RegionIds } from "@/enums/region";

export default {
  [RegionIds.Fontaine]: Class.init([RegionIds.Fontaine, "Фонтейн", "fontaine-emblem-256x256.png"]),
  [RegionIds.Inazuma]: Class.init([RegionIds.Inazuma, "Инадзума", "inazuma-emblem-256x256.png"]),
  [RegionIds.Liyue]: Class.init([RegionIds.Liyue, "Ли Юэ", "liyue-emblem-256x256.png"]),
  [RegionIds.Mondstadt]: Class.init([RegionIds.Mondstadt, "Мондштадт", "mondstadt-emblem-256x256.png"]),
  [RegionIds.Natlan]: Class.init([RegionIds.Natlan, "Натлан", "natlan-emblem-256x256.png"]),
  [RegionIds.Snezhnaya]: Class.init([RegionIds.Snezhnaya, "Снежная"]),
  [RegionIds.Sumeru]: Class.init([RegionIds.Sumeru, "Сумеру", "sumeru-emblem-256x256.png"]),
} as Record<Type["id"], Type>;
