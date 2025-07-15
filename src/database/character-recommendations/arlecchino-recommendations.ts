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
        uid: ArtifactSetUidEnum.FragmentOfHarmonicWhimsy,
        is_better: true,
        notes: [
          "Лучший вариант для Арлекино, так как повышает важную силу атаки и наносимый урон.",
          "Арлекино сама способна накладывать Долг жизни, поэтому условие 4 предметов выполняется.",
        ],
      },
      {
        uid: ArtifactSetUidEnum.GladiatorsFinale,
        notes: [
          "Арлекино использует древковое оружие и наносит урон преимущественно обычными атаками, поэтому ей подходит бонус 4 предметов.",
        ],
      },
    ],
    attributes: {
      [ArtifactPieceUidEnum.SandsOfEon]: [
        { uid: AttributeUidEnum.AttackPercent },
        { uid: AttributeUidEnum.ElementalMastery },
      ],
      [ArtifactPieceUidEnum.GobletOfEonothem]: [
        { uid: AttributeUidEnum.PyroDamageBonus, notes: ["Лучше"] },
        { uid: AttributeUidEnum.AttackPercent },
      ],
      [ArtifactPieceUidEnum.CircletOfLogos]: [{ uid: AttributeUidEnum.CritDmg }, { uid: AttributeUidEnum.CritRate }],
      additional: [
        { uid: AttributeUidEnum.CritRate, notes: ["Приоритетно", "от 65%"] },
        { uid: AttributeUidEnum.CritDmg, notes: ["Приоритетно", "от 150%"] },
        { uid: AttributeUidEnum.AttackPercent, notes: ["от 2000"] },
        { uid: AttributeUidEnum.ElementalMastery, notes: ["от 150 (если Арлекино активирует реакции)"] },
        { uid: AttributeUidEnum.EnergyRecharge, notes: ["Специально не собирать"] },
      ],
    },
  },
  character_uid: CharacterUidEnum.Arlecchino,
  first_constellation_or_signature_weapon: "С1 и Сигна",
  talent_leveling: [
    { uid: TalentUidEnum.NormalAttack, priority: "В первую очередь\n(10)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "По необходимости\n(6 | 8)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "Во вторую очередь\n(6 | 8)" },
  ],
  weapons: {
    "Гиперкери | Прожарка | отр. Шеврёз": [
      { uid: WeaponUidEnum.CrimsonMoonsSemblance, percent: 1.316 },
      { uid: WeaponUidEnum.PrimordialJadeWingedSpear, percent: 1.124 },
      { uid: WeaponUidEnum.StaffOfTheScarletSands, percent: 1.112 },
      { uid: WeaponUidEnum.LumidouceElegy, percent: 1.103 },
      { uid: WeaponUidEnum.Deathmatch, refinement: 5, percent: 1.087 },
      { uid: WeaponUidEnum.StaffOfHoma, percent: 1.085 },
      { uid: WeaponUidEnum.CalamityQueller, percent: 1.063 },
      { uid: WeaponUidEnum.Deathmatch, refinement: 1, percent: 1.032 },
      { uid: WeaponUidEnum.WhiteTassel, percent: 1 },
      { uid: WeaponUidEnum.BalladOfTheFjords, percent: 0.968 },
      { uid: WeaponUidEnum.SkywardSpine, percent: 0.948 },
      { uid: WeaponUidEnum.BlackcliffPole, percent: 0.899 },
      { uid: WeaponUidEnum.MissiveWindspear, percent: 0.875 },
    ],
    "Пар | Таяние": [
      { uid: WeaponUidEnum.CrimsonMoonsSemblance, percent: 1.309 },
      { uid: WeaponUidEnum.StaffOfTheScarletSands, percent: 1.156 },
      { uid: WeaponUidEnum.PrimordialJadeWingedSpear, percent: 1.114 },
      { uid: WeaponUidEnum.Deathmatch, refinement: 5, percent: 1.105 },
      { uid: WeaponUidEnum.LumidouceElegy, percent: 1.103 },
      { uid: WeaponUidEnum.BalladOfTheFjords, refinement: 5, percent: 1.098 },
      { uid: WeaponUidEnum.StaffOfHoma, percent: 1.086 },
      { uid: WeaponUidEnum.CalamityQueller, percent: 1.062 },
      { uid: WeaponUidEnum.VortexVanquisher, percent: 1.044 },
      { uid: WeaponUidEnum.LithicSpear, refinement: 5, percent: 1.043 },
      { uid: WeaponUidEnum.Deathmatch, refinement: 1, percent: 1.043 },
      { uid: WeaponUidEnum.BalladOfTheFjords, refinement: 1, percent: 1.023 },
      { uid: WeaponUidEnum.WhiteTassel, percent: 1 },
      { uid: WeaponUidEnum.MissiveWindspear, percent: 0.99 },
      { uid: WeaponUidEnum.DragonsBane, percent: 0.965 },
      { uid: WeaponUidEnum.LithicSpear, refinement: 1, percent: 0.965 },
      { uid: WeaponUidEnum.SkywardSpine, percent: 0.943 },
      { uid: WeaponUidEnum.BlackcliffPole, percent: 0.938 },
    ],
  },
} as CharacterRecommendations;
