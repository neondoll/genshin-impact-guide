import { TalentKeys, TalentTypeKeys } from "./enums/talent";
import type { Talent, TalentKey } from "./types/talent";

export default {
  [TalentKeys.AlternateSprint]: {
    key: TalentKeys.NormalAttack,
    name: "Альтернативный спринт",
    type_key: TalentTypeKeys.Passive,
  },
  [TalentKeys.ElementalBurst]: {
    key: TalentKeys.ElementalBurst,
    name: "Взрыв стихии",
    type_key: TalentTypeKeys.Combat,
  },
  [TalentKeys.ElementalSkill]: {
    key: TalentKeys.ElementalSkill,
    name: "Элементальный навык",
    type_key: TalentTypeKeys.Combat,
  },
  [TalentKeys.FirstAscensionPassive]: {
    key: TalentKeys.FirstAscensionPassive,
    name: "1-е пассивное вознесение",
    type_key: TalentTypeKeys.Ascension,
  },
  [TalentKeys.FourthAscensionPassive]: {
    key: TalentKeys.FourthAscensionPassive,
    name: "4-е пассивное вознесение",
    type_key: TalentTypeKeys.Ascension,
  },
  [TalentKeys.NightRealmsGiftPassive]: {
    key: TalentKeys.NightRealmsGiftPassive,
    name: "Дар Ночного царства пассивен",
    type_key: TalentTypeKeys.Passive,
  },
  [TalentKeys.NormalAttack]: { key: TalentKeys.NormalAttack, name: "Обычная атака", type_key: TalentTypeKeys.Combat },
  [TalentKeys.UtilityPassive]: {
    key: TalentKeys.UtilityPassive,
    name: "Полезность Пассивная",
    type_key: TalentTypeKeys.Passive,
  },
} as Record<TalentKey, Talent>;
