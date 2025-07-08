import { TalentUidEnum } from "./enums/talents";
import type { Talents } from "./types/talents";

export default {
  [TalentUidEnum.NormalAttack]: { name: "Обычная атака" },
  [TalentUidEnum.ElementalSkill]: { name: "Элементальный навык" },
  [TalentUidEnum.ElementalBurst]: { name: "Взрыв стихии" },
} as Talents;
