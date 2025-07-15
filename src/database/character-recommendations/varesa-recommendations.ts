import { ArtifactPieceUidEnum } from "../enums/artifact-piece.ts";
import { ArtifactSetUidEnum } from "../enums/artifact-set.ts";
import { AttributeUidEnum } from "../enums/attribute.ts";
import { CharacterUidEnum } from "../enums/character.ts";
import { TalentUidEnum } from "../enums/talent.ts";
import { WeaponUidEnum } from "../enums/weapon.ts";
import type { CharacterRecommendations } from "../types/character-recommendations";

export default {
  artifacts: {
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
      [ArtifactPieceUidEnum.CircletOfLogos]: [{ uid: AttributeUidEnum.CritRate }, { uid: AttributeUidEnum.CritDmg }],
      additional: [
        { uid: AttributeUidEnum.AttackPercent, notes: ["от 1800"] },
        { uid: AttributeUidEnum.CritRate, notes: ["от 60%"] },
        { uid: AttributeUidEnum.CritDmg, notes: ["от 180%"] },
        { uid: AttributeUidEnum.EnergyRecharge, notes: ["115% - 135% для Взрыва стихии"] },
        { uid: AttributeUidEnum.ElementalMastery, notes: ["от 150 (при игре через реакцию Вегетация)"] },
      ],
    },
  },
  character_uid: CharacterUidEnum.Varesa,
  first_constellation_or_signature_weapon: "Однозначно Сигна",
  talent_leveling: [
    { uid: TalentUidEnum.NormalAttack, priority: "В первую очередь\n(10)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "По необходимости\n(8)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "Во вторую очередь\n(10)" },
  ],
  weapons: [
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
} as CharacterRecommendations;
