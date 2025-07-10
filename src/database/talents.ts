import { TalentTypeUidEnum, TalentUidEnum } from "./enums/talent";
import type { Talent, TalentUid } from "./types/talent";

export default {
  [TalentUidEnum.AlternateSprint]: {
    uid: TalentUidEnum.NormalAttack,
    name: "Альтернативный спринт",
    type_uid: TalentTypeUidEnum.Passive,
  },
  [TalentUidEnum.ElementalBurst]: {
    uid: TalentUidEnum.ElementalBurst,
    name: "Взрыв стихии",
    type_uid: TalentTypeUidEnum.Combat,
  },
  [TalentUidEnum.ElementalSkill]: {
    uid: TalentUidEnum.ElementalSkill,
    name: "Элементальный навык",
    type_uid: TalentTypeUidEnum.Combat,
  },
  [TalentUidEnum.FirstAscensionPassive]: {
    uid: TalentUidEnum.FirstAscensionPassive,
    name: "1-е пассивное вознесение",
    type_uid: TalentTypeUidEnum.Ascension,
  },
  [TalentUidEnum.FourthAscensionPassive]: {
    uid: TalentUidEnum.FourthAscensionPassive,
    name: "4-е пассивное вознесение",
    type_uid: TalentTypeUidEnum.Ascension,
  },
  [TalentUidEnum.NightRealmsGiftPassive]: {
    uid: TalentUidEnum.NightRealmsGiftPassive,
    name: "Дар Ночного царства пассивен",
    type_uid: TalentTypeUidEnum.Passive,
  },
  [TalentUidEnum.NormalAttack]: {
    uid: TalentUidEnum.NormalAttack,
    name: "Обычная атака",
    type_uid: TalentTypeUidEnum.Combat,
  },
  [TalentUidEnum.UtilityPassive]: {
    uid: TalentUidEnum.UtilityPassive,
    name: "Полезность Пассивная",
    type_uid: TalentTypeUidEnum.Passive,
  },
} as Record<TalentUid, Talent>;
