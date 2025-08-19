import type { ITalent } from "./types";
import { CTalent } from "./classes";
import { TalentKeys } from "./enums";

export default {
  [TalentKeys.AlternateSprint]: new CTalent("NormalAttack", "Альтернативный спринт", "Passive"),
  [TalentKeys.ElementalBurst]: new CTalent("ElementalBurst", "Взрыв стихии", "Combat"),
  [TalentKeys.ElementalSkill]: new CTalent("ElementalSkill", "Элементальный навык", "Combat"),
  [TalentKeys.FirstAscensionPassive]: new CTalent("FirstAscensionPassive", "1-е пассивное вознесение", "Ascension"),
  [TalentKeys.FourthAscensionPassive]: new CTalent("FourthAscensionPassive", "4-е пассивное вознесение", "Ascension"),
  [TalentKeys.NightRealmsGiftPassive]: new CTalent("NightRealmsGiftPassive", "Дар Ночного царства пассивен", "Passive"),
  [TalentKeys.NormalAttack]: new CTalent("NormalAttack", "Обычная атака", "Combat"),
  [TalentKeys.UtilityPassive]: new CTalent("UtilityPassive", "Полезность Пассивная", "Passive"),
} as Record<ITalent["key"], ITalent>;
