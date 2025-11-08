import type { ElementalReaction } from "@/types/elemental-reaction";
import { ElementalReaction as Class } from "@/classes/elemental-reaction";
import { ElementalReactionIds } from "@/enums/elemental-reaction";
import { ELEMENTS } from "@/constants/elements";

export default {
  [ElementalReactionIds.Aggravate]: Class.init([
    ElementalReactionIds.Aggravate,
    "Обострение",
    ElementalReactionIds.Quicken,
    ELEMENTS.ELECTRO,
  ]),
  [ElementalReactionIds.Bloom]: Class.init([
    ElementalReactionIds.Bloom,
    "Бутонизация",
    ELEMENTS.HYDRO,
    ELEMENTS.DENDRO,
  ]),
  [ElementalReactionIds.Burgeon]: Class.init([
    ElementalReactionIds.Burgeon,
    "Цветение",
    ElementalReactionIds.Bloom,
    ELEMENTS.PYRO,
  ]),
  [ElementalReactionIds.Burning]: Class.init([
    ElementalReactionIds.Burning,
    "Горение",
    ELEMENTS.PYRO,
    ELEMENTS.DENDRO,
  ]),
  [ElementalReactionIds.Crystallize]: Class.init([
    ElementalReactionIds.Crystallize,
    "Кристалл",
    ELEMENTS.GEO,
    [ELEMENTS.CRYO, ELEMENTS.ELECTRO, ELEMENTS.HYDRO, ELEMENTS.PYRO],
  ]),
  [ElementalReactionIds.ElectroCharged]: Class.init([
    ElementalReactionIds.ElectroCharged,
    "Заряжен",
    ELEMENTS.ELECTRO,
    ELEMENTS.HYDRO,
  ]),
  [ElementalReactionIds.Frozen]: Class.init([
    ElementalReactionIds.Frozen,
    "Заморозка",
    ELEMENTS.HYDRO,
    ELEMENTS.CRYO,
  ]),
  [ElementalReactionIds.Hyperbloom]: Class.init([
    ElementalReactionIds.Hyperbloom,
    "Вегетация",
    ElementalReactionIds.Bloom,
    ELEMENTS.ELECTRO,
  ]),
  [ElementalReactionIds.LunarBloom]: Class.init([ElementalReactionIds.LunarBloom, "Лунная бутонизация", ELEMENTS.HYDRO, ELEMENTS.DENDRO, true]),
  [ElementalReactionIds.LunarCharged]: Class.init([ElementalReactionIds.LunarCharged, "Лунный заряд", ELEMENTS.ELECTRO, ELEMENTS.HYDRO, true]),
  [ElementalReactionIds.Melt]: Class.init([ElementalReactionIds.Melt, "Таяние", ELEMENTS.CRYO, ELEMENTS.PYRO]),
  [ElementalReactionIds.Overloaded]: Class.init([
    ElementalReactionIds.Overloaded,
    "Перегрузка",
    ELEMENTS.ELECTRO,
    ELEMENTS.PYRO,
  ]),
  [ElementalReactionIds.Quicken]: Class.init([
    ElementalReactionIds.Quicken,
    "Стимуляция",
    ELEMENTS.ELECTRO,
    ELEMENTS.DENDRO,
  ]),
  [ElementalReactionIds.Spread]: Class.init([
    ElementalReactionIds.Spread,
    "Разрастание",
    ElementalReactionIds.Quicken,
    ELEMENTS.DENDRO,
  ]),
  [ElementalReactionIds.Superconduct]: Class.init([
    ElementalReactionIds.Superconduct,
    "Сверхпроводник",
    ELEMENTS.CRYO,
    ELEMENTS.ELECTRO,
  ]),
  [ElementalReactionIds.Swirl]: Class.init([
    ElementalReactionIds.Swirl,
    "Рассеивание",
    ELEMENTS.ANEMO,
    [ELEMENTS.CRYO, ELEMENTS.ELECTRO, ELEMENTS.HYDRO, ELEMENTS.PYRO],
  ]),
  [ElementalReactionIds.Vaporize]: Class.init([
    ElementalReactionIds.Vaporize,
    "Пар",
    ELEMENTS.PYRO,
    ELEMENTS.HYDRO,
  ]),
} as Record<ElementalReaction["id"], ElementalReaction>;
