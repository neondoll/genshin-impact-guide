import { ArtifactPieceUidEnum } from "../enums/artifact-pieces";
import { ArtifactSetUidEnum } from "../enums/artifact-sets";
import { AttributeUidEnum } from "../enums/attributes";
import { CharacterUidEnum } from "../enums/characters";
import { TalentUidEnum } from "../enums/talents";
import { WeaponUidEnum } from "../enums/weapons";
import type { GuideCharacter } from "../types/guide-characters";

export default {
  character_uid: CharacterUidEnum.Varesa,
  artifact_recommendations: {
    sets: [
      {
        uid: ArtifactSetUidEnum.LongNightsOath,
        notes: ["Лучший набор для Варесы, поскольку значительно увеличивает её урон от атак в падении."],
      },
      {
        uid: ArtifactSetUidEnum.ObsidianCodex,
        notes: [
          "Комплект увеличивает урон Варесы и повышает шанс крит. попадания в сумме до 40%, позволяя сосредоточиться на крит. уроне в артефактах.",
          "Так как Вареса обладает Благословением Ночного духа, она полностью реализует условия комплекта.",
        ],
      },
    ],
    attributes: {
      [ArtifactPieceUidEnum.SandsOfEon]: [{ uid: AttributeUidEnum.AttackPercent }],
      [ArtifactPieceUidEnum.GobletOfEonothem]: [
        { uid: AttributeUidEnum.ElectroDamageBonus, notes: ["Лучше с Цаплей всегда"] },
        { uid: AttributeUidEnum.AttackPercent, notes: ["Лучше с Фуриной или в сете на планжи"] },
      ],
      [ArtifactPieceUidEnum.CircletOfLogos]: [
        { uid: AttributeUidEnum.CriticalRate },
        { uid: AttributeUidEnum.CriticalDamage },
      ],
      additional: [
        { uid: AttributeUidEnum.AttackPercent, notes: ["от 1800"] },
        { uid: AttributeUidEnum.CriticalRate, notes: ["от 60%"] },
        { uid: AttributeUidEnum.CriticalDamage, notes: ["от 180%"] },
        { uid: AttributeUidEnum.EnergyRecharge, notes: ["115% - 135% для Взрыва стихии"] },
        { uid: AttributeUidEnum.ElementalMastery, notes: ["от 150 (при игре через реакцию Вегетация)"] },
      ],
    },
  },
  assembly_weapons: [
    { uid: WeaponUidEnum.VividNotions, percent: 1.28 },
    { uid: WeaponUidEnum.LostPrayerToTheSacredWinds, percent: 1.06 },
    { uid: WeaponUidEnum.KagurasVerity, percent: 1.05 },
    { uid: WeaponUidEnum.TomeOfTheEternalFlow, percent: 1.04 },
    { uid: WeaponUidEnum.CashflowSupervision, percent: 1.04 },
    { uid: WeaponUidEnum.SurfsUp, percent: 1.03 },
    { uid: WeaponUidEnum.TheWidsith, refinement: 5, percent: 1 },
    { uid: WeaponUidEnum.SacrificialJade, refinement: 5, percent: 0.92 },
    { uid: WeaponUidEnum.FlowingPurity, refinement: 5, percent: 0.92 },
  ],
  first_constellation_or_signature_weapon: "Однозначно Сигна",
  talent_leveling_recommendations: [
    { uid: TalentUidEnum.NormalAttack, priority: "Высокий приоритет\n(10)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "Средний приоритет\n(8)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "Высокий приоритет\n(10)" },
  ],
} as GuideCharacter;
