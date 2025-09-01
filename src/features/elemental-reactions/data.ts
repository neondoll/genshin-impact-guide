import type { ElementalReaction } from "./types";
import { ElementalReactionIds } from "./enums";
import { ElementIds } from "../elements/enums";

class ElementalReactionClass implements ElementalReaction {
  readonly id: ElementalReaction["id"];
  readonly name: ElementalReaction["name"];
  readonly first_element_id: ElementalReaction["first_element_id"];
  readonly second_element_id: ElementalReaction["second_element_id"];

  constructor(
    id: ElementalReaction["id"],
    name: ElementalReaction["name"],
    firstElementId: ElementalReaction["first_element_id"],
    secondElementId: ElementalReaction["second_element_id"],
  ) {
    this.id = id;
    this.name = name;
    this.first_element_id = firstElementId;
    this.second_element_id = secondElementId;
  }
}

export default {
  [ElementalReactionIds.Aggravate]: new ElementalReactionClass(ElementalReactionIds.Aggravate, "Обострение", ElementalReactionIds.Quicken, ElementIds.Electro),
  [ElementalReactionIds.Bloom]: new ElementalReactionClass(ElementalReactionIds.Bloom, "Бутонизация", ElementIds.Hydro, ElementIds.Dendro),
  [ElementalReactionIds.Burgeon]: new ElementalReactionClass(ElementalReactionIds.Burgeon, "Цветение", ElementalReactionIds.Bloom, ElementIds.Pyro),
  [ElementalReactionIds.Burning]: new ElementalReactionClass(ElementalReactionIds.Burning, "Горение", ElementIds.Pyro, ElementIds.Dendro),
  [ElementalReactionIds.Crystallize]: new ElementalReactionClass(ElementalReactionIds.Crystallize, "Кристалл", ElementIds.Geo, [ElementIds.Cryo, ElementIds.Electro, ElementIds.Hydro, ElementIds.Pyro]),
  [ElementalReactionIds.ElectroCharged]: new ElementalReactionClass(ElementalReactionIds.ElectroCharged, "Заряжен", ElementIds.Electro, ElementIds.Hydro),
  [ElementalReactionIds.Frozen]: new ElementalReactionClass(ElementalReactionIds.Frozen, "Заморозка", ElementIds.Hydro, ElementIds.Cryo),
  [ElementalReactionIds.Hyperbloom]: new ElementalReactionClass(ElementalReactionIds.Hyperbloom, "Вегетация", ElementalReactionIds.Bloom, ElementIds.Electro),
  [ElementalReactionIds.LunarCharged]: new ElementalReactionClass(ElementalReactionIds.LunarCharged, "Лунный заряд", ElementIds.Electro, ElementIds.Hydro),
  [ElementalReactionIds.Melt]: new ElementalReactionClass(ElementalReactionIds.Melt, "Таяние", ElementIds.Cryo, ElementIds.Pyro),
  [ElementalReactionIds.Overloaded]: new ElementalReactionClass(ElementalReactionIds.Overloaded, "Перегрузка", ElementIds.Electro, ElementIds.Pyro),
  [ElementalReactionIds.Quicken]: new ElementalReactionClass(ElementalReactionIds.Quicken, "Стимуляция", ElementIds.Electro, ElementIds.Dendro),
  [ElementalReactionIds.Spread]: new ElementalReactionClass(ElementalReactionIds.Spread, "Разрастание", ElementalReactionIds.Quicken, ElementIds.Dendro),
  [ElementalReactionIds.Superconduct]: new ElementalReactionClass(ElementalReactionIds.Superconduct, "Сверхпроводник", ElementIds.Cryo, ElementIds.Electro),
  [ElementalReactionIds.Swirl]: new ElementalReactionClass(ElementalReactionIds.Swirl, "Рассеивание", ElementIds.Anemo, [ElementIds.Cryo, ElementIds.Electro, ElementIds.Hydro, ElementIds.Pyro]),
  [ElementalReactionIds.Vaporize]: new ElementalReactionClass(ElementalReactionIds.Vaporize, "Пар", ElementIds.Pyro, ElementIds.Hydro),
} as Record<ElementalReaction["id"], ElementalReaction>;
