import type { Talent } from "./types";
import { TalentIds, TalentTypeIds } from "./enums";

class TalentClass implements Talent {
  readonly id: Talent["id"];
  readonly name: Talent["name"];
  readonly type_id: Talent["type_id"];

  constructor(id: Talent["id"], name: Talent["name"], typeId: Talent["type_id"]) {
    this.id = id;
    this.name = name;
    this.type_id = typeId;
  }

  static init(params: ConstructorParameters<typeof TalentClass>) {
    return new TalentClass(...params);
  }
}

export default {
  [TalentIds.AlternateSprint]: TalentClass.init([TalentIds.AlternateSprint, "Альтернативный спринт", TalentTypeIds.Passive]),
  [TalentIds.ElementalBurst]: TalentClass.init([TalentIds.ElementalBurst, "Взрыв стихии", TalentTypeIds.Combat]),
  [TalentIds.ElementalSkill]: TalentClass.init([TalentIds.ElementalSkill, "Элементальный навык", TalentTypeIds.Combat]),
  [TalentIds.FirstAscensionPassive]: TalentClass.init([TalentIds.FirstAscensionPassive, "1-е пассивное вознесение", TalentTypeIds.Ascension]),
  [TalentIds.FourthAscensionPassive]: TalentClass.init([TalentIds.FourthAscensionPassive, "4-е пассивное вознесение", TalentTypeIds.Ascension]),
  [TalentIds.NightRealmsGiftPassive]: TalentClass.init([TalentIds.NightRealmsGiftPassive, "Дар Ночного царства пассивен", TalentTypeIds.Passive]),
  [TalentIds.NormalAttack]: TalentClass.init([TalentIds.NormalAttack, "Обычная атака", TalentTypeIds.Combat]),
  [TalentIds.UtilityPassive]: TalentClass.init([TalentIds.UtilityPassive, "Полезность Пассивная", TalentTypeIds.Passive]),
} as Record<Talent["id"], Talent>;
