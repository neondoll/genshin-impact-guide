import { ArtifactSetKeys } from "../artifact-sets/enums";
import { ArtifactSlotKeys } from "../artifact-slots/enums";
import { CharacterKeys } from "../characters/enums";
import { StatKeys } from "../enums/stat";
import { TalentKeys } from "../enums/talent";
import { WeaponKeys } from "../enums/weapon";
import type { CharacterRecommendations } from "../types/character-recommendations";

export default {
  artifacts: {
    sets: [
      {
        key: ArtifactSetKeys.LongNightsOath,
        notes: ["Лучший набор для Варесы, поскольку значительно увеличивает её урон от атак в падении."],
      },
      {
        key: ArtifactSetKeys.ObsidianCodex,
        notes: [
          "Комплект увеличивает урон Варесы и повышает шанс крит. попадания в сумме до 40%, позволяя сосредоточиться на крит. уроне в артефактах.",
          "Так как Вареса обладает Благословением Ночного духа, она полностью реализует условия комплекта.",
        ],
      },
    ],
    stats: {
      [ArtifactSlotKeys.Sands]: [{ key: StatKeys.AtkPercentage }],
      [ArtifactSlotKeys.Goblet]: [
        { key: StatKeys.ElectroDmgBonus, notes: ["Лучше с Цаплей всегда"] },
        { key: StatKeys.AtkPercentage, notes: ["Лучше с Фуриной или в сете на планжи"] },
      ],
      [ArtifactSlotKeys.Circlet]: [{ key: StatKeys.CritRate }, { key: StatKeys.CritDMG }],
      additional: [
        { key: StatKeys.AtkPercentage, notes: ["от 1800"] },
        { key: StatKeys.CritRate, notes: ["от 60%"] },
        { key: StatKeys.CritDMG, notes: ["от 180%"] },
        { key: StatKeys.EnergyRecharge, notes: ["115% - 135% для Взрыва стихии"] },
        { key: StatKeys.ElementalMastery, notes: ["от 150 (при игре через реакцию Вегетация)"] },
      ],
    },
  },
  character_key: CharacterKeys.Varesa,
  first_constellation_or_signature_weapon: "Однозначно Сигна",
  talent_leveling: [
    { key: TalentKeys.NormalAttack, priority: "В первую очередь\n(10)" },
    { key: TalentKeys.ElementalSkill, priority: "По необходимости\n(8)" },
    { key: TalentKeys.ElementalBurst, priority: "Во вторую очередь\n(10)" },
  ],
  weapons: [
    { key: WeaponKeys.VividNotions, percent: 1.28 },
    { key: WeaponKeys.LostPrayerToTheSacredWinds, percent: 1.06 },
    { key: WeaponKeys.KagurasVerity, percent: 1.05 },
    { key: WeaponKeys.TomeOfTheEternalFlow, percent: 1.04 },
    { key: WeaponKeys.CashflowSupervision, percent: 1.04 },
    { key: WeaponKeys.SurfsUp, percent: 1.03 },
    { key: WeaponKeys.TheWidsith, refinement: 5, percent: 1 },
    { key: WeaponKeys.SacrificialJade, refinement: 5, percent: 0.92 },
    { key: WeaponKeys.FlowingPurity, refinement: 5, percent: 0.92 },
  ],
} as CharacterRecommendations;
