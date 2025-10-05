import type { Talent as Type } from "@/types/talent";
import { Talent as Class } from "@/classes/talent";
import { TalentIds, TalentTypeIds } from "@/enums/talent";

export default {
  [TalentIds.AlternateSprint]: Class.init([TalentIds.AlternateSprint, "Альтернативный спринт", TalentTypeIds.Passive]),
  [TalentIds.ElementalBurst]: Class.init([TalentIds.ElementalBurst, "Взрыв стихии", TalentTypeIds.Combat]),
  [TalentIds.ElementalSkill]: Class.init([TalentIds.ElementalSkill, "Элементальный навык", TalentTypeIds.Combat]),
  [TalentIds.FirstAscensionPassive]: Class.init([TalentIds.FirstAscensionPassive, "1-е пассивное вознесение", TalentTypeIds.Ascension]),
  [TalentIds.FourthAscensionPassive]: Class.init([TalentIds.FourthAscensionPassive, "4-е пассивное вознесение", TalentTypeIds.Ascension]),
  [TalentIds.NightRealmsGiftPassive]: Class.init([TalentIds.NightRealmsGiftPassive, "Дар Ночного царства пассивен", TalentTypeIds.Passive]),
  [TalentIds.NormalAttack]: Class.init([TalentIds.NormalAttack, "Обычная атака", TalentTypeIds.Combat]),
  [TalentIds.UtilityPassive]: Class.init([TalentIds.UtilityPassive, "Полезность Пассивная", TalentTypeIds.Passive]),
} as Record<Type["id"], Type>;
