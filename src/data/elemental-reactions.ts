import type { ElementalReaction } from "@/types/elemental-reaction";
import { ElementalReaction as Class } from "@/classes/elemental-reaction";
import { ElementalReactionIds } from "@/enums/elemental-reaction";
import { ElementIds } from "@/enums/element";

export default {
  [ElementalReactionIds.Aggravate]: Class.init([
    ElementalReactionIds.Aggravate,
    "Обострение",
    ElementalReactionIds.Quicken,
    ElementIds.Electro,
  ]),
  [ElementalReactionIds.Bloom]: Class.init([
    ElementalReactionIds.Bloom,
    "Бутонизация",
    ElementIds.Hydro,
    ElementIds.Dendro,
  ]),
  [ElementalReactionIds.Burgeon]: Class.init([
    ElementalReactionIds.Burgeon,
    "Цветение",
    ElementalReactionIds.Bloom,
    ElementIds.Pyro,
  ]),
  [ElementalReactionIds.Burning]: Class.init([
    ElementalReactionIds.Burning,
    "Горение",
    ElementIds.Pyro,
    ElementIds.Dendro,
  ]),
  [ElementalReactionIds.Crystallize]: Class.init([
    ElementalReactionIds.Crystallize,
    "Кристалл",
    ElementIds.Geo,
    [ElementIds.Cryo, ElementIds.Electro, ElementIds.Hydro, ElementIds.Pyro],
  ]),
  [ElementalReactionIds.ElectroCharged]: Class.init([
    ElementalReactionIds.ElectroCharged,
    "Заряжен",
    ElementIds.Electro,
    ElementIds.Hydro,
  ]),
  [ElementalReactionIds.Frozen]: Class.init([
    ElementalReactionIds.Frozen,
    "Заморозка",
    ElementIds.Hydro,
    ElementIds.Cryo,
  ]),
  [ElementalReactionIds.Hyperbloom]: Class.init([
    ElementalReactionIds.Hyperbloom,
    "Вегетация",
    ElementalReactionIds.Bloom,
    ElementIds.Electro,
  ]),
  [ElementalReactionIds.LunarBloom]: Class.init([ElementalReactionIds.LunarBloom, "Лунная бутонизация", ElementIds.Hydro, ElementIds.Dendro, true]),
  [ElementalReactionIds.LunarCharged]: Class.init([ElementalReactionIds.LunarCharged, "Лунный заряд", ElementIds.Electro, ElementIds.Hydro, true]),
  [ElementalReactionIds.Melt]: Class.init([ElementalReactionIds.Melt, "Таяние", ElementIds.Cryo, ElementIds.Pyro]),
  [ElementalReactionIds.Overloaded]: Class.init([
    ElementalReactionIds.Overloaded,
    "Перегрузка",
    ElementIds.Electro,
    ElementIds.Pyro,
  ]),
  [ElementalReactionIds.Quicken]: Class.init([
    ElementalReactionIds.Quicken,
    "Стимуляция",
    ElementIds.Electro,
    ElementIds.Dendro,
  ]),
  [ElementalReactionIds.Spread]: Class.init([
    ElementalReactionIds.Spread,
    "Разрастание",
    ElementalReactionIds.Quicken,
    ElementIds.Dendro,
  ]),
  [ElementalReactionIds.Superconduct]: Class.init([
    ElementalReactionIds.Superconduct,
    "Сверхпроводник",
    ElementIds.Cryo,
    ElementIds.Electro,
  ]),
  [ElementalReactionIds.Swirl]: Class.init([
    ElementalReactionIds.Swirl,
    "Рассеивание",
    ElementIds.Anemo,
    [ElementIds.Cryo, ElementIds.Electro, ElementIds.Hydro, ElementIds.Pyro],
  ]),
  [ElementalReactionIds.Vaporize]: Class.init([
    ElementalReactionIds.Vaporize,
    "Пар",
    ElementIds.Pyro,
    ElementIds.Hydro,
  ]),
} as Record<ElementalReaction["id"], ElementalReaction>;
