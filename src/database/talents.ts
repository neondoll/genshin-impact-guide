import { TalentKeys, TalentTypeKeys } from "./enums/talent";
import type { Talent } from "./types/talent";

class _Talent implements Talent {
  readonly key: Talent["key"];
  readonly name: Talent["name"];
  readonly type_key: Talent["type_key"];

  constructor(key: keyof typeof TalentKeys, name: Talent["name"], typeKey: keyof typeof TalentTypeKeys) {
    this.key = TalentKeys[key];
    this.name = name;
    this.type_key = TalentTypeKeys[typeKey];
  }
}

export default {
  [TalentKeys.AlternateSprint]: new _Talent("NormalAttack", "Альтернативный спринт", "Passive"),
  [TalentKeys.ElementalBurst]: new _Talent("ElementalBurst", "Взрыв стихии", "Combat"),
  [TalentKeys.ElementalSkill]: new _Talent("ElementalSkill", "Элементальный навык", "Combat"),
  [TalentKeys.FirstAscensionPassive]: new _Talent("FirstAscensionPassive", "1-е пассивное вознесение", "Ascension"),
  [TalentKeys.FourthAscensionPassive]: new _Talent("FourthAscensionPassive", "4-е пассивное вознесение", "Ascension"),
  [TalentKeys.NightRealmsGiftPassive]: new _Talent("NightRealmsGiftPassive", "Дар Ночного царства пассивен", "Passive"),
  [TalentKeys.NormalAttack]: new _Talent("NormalAttack", "Обычная атака", "Combat"),
  [TalentKeys.UtilityPassive]: new _Talent("UtilityPassive", "Полезность Пассивная", "Passive"),
} as Record<Talent["key"], Talent>;
