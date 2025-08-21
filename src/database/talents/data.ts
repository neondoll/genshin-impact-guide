import type { ITalent } from "./types";
import { CTalent } from "./classes";
import { TalentKeys, TalentTypeKeys } from "./enums";

export default {
  [TalentKeys.AlternateSprint]: CTalent.init([
    TalentKeys.AlternateSprint,
    "Альтернативный спринт",
    TalentTypeKeys.Passive,
  ]),
  [TalentKeys.ElementalBurst]: CTalent.init([TalentKeys.ElementalBurst, "Взрыв стихии", TalentTypeKeys.Combat]),
  [TalentKeys.ElementalSkill]: CTalent.init([TalentKeys.ElementalSkill, "Элементальный навык", TalentTypeKeys.Combat]),
  [TalentKeys.FirstAscensionPassive]: CTalent.init([
    TalentKeys.FirstAscensionPassive,
    "1-е пассивное вознесение",
    TalentTypeKeys.Ascension,
  ]),
  [TalentKeys.FourthAscensionPassive]: CTalent.init([
    TalentKeys.FourthAscensionPassive,
    "4-е пассивное вознесение",
    TalentTypeKeys.Ascension,
  ]),
  [TalentKeys.NightRealmsGiftPassive]: CTalent.init([
    TalentKeys.NightRealmsGiftPassive,
    "Дар Ночного царства пассивен",
    TalentTypeKeys.Passive,
  ]),
  [TalentKeys.NormalAttack]: CTalent.init([TalentKeys.NormalAttack, "Обычная атака", TalentTypeKeys.Combat]),
  [TalentKeys.UtilityPassive]: CTalent.init([
    TalentKeys.UtilityPassive,
    "Полезность Пассивная",
    TalentTypeKeys.Passive,
  ]),
} as Record<ITalent["key"], ITalent>;
