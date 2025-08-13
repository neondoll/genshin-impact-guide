import { ArtifactSetKeys } from "../enums/artifact-set";
import { ArtifactSlotKeys } from "../enums/artifact-slot";
import { CharacterKeys } from "../enums/character";
import { StatKeys } from "../enums/stat";
import { TalentKeys } from "../enums/talent";
import { WeaponKeys } from "../enums/weapon";
import type { CharacterRecommendations } from "../types/character-recommendations";

export default {
  artifacts: {
    sets: [
      {
        key: ArtifactSetKeys.FragmentOfHarmonicWhimsy,
        is_better: true,
        notes: [
          "Лучший вариант для Арлекино, так как повышает важную силу атаки и наносимый урон.",
          "Арлекино сама способна накладывать Долг жизни, поэтому условие 4 предметов выполняется.",
        ],
      },
      {
        key: ArtifactSetKeys.GladiatorsFinale,
        notes: [
          "Арлекино использует древковое оружие и наносит урон преимущественно обычными атаками, поэтому ей подходит бонус 4 предметов.",
        ],
      },
    ],
    stats: {
      [ArtifactSlotKeys.Sands]: [{ key: StatKeys.AtkPercentage }, { key: StatKeys.ElementalMastery }],
      [ArtifactSlotKeys.Goblet]: [
        { key: StatKeys.PyroDmgBonus, notes: ["Лучше"] },
        { key: StatKeys.AtkPercentage },
      ],
      [ArtifactSlotKeys.Circlet]: [{ key: StatKeys.CritDMG }, { key: StatKeys.CritRate }],
      additional: [
        { key: StatKeys.CritRate, notes: ["Приоритетно", "от 65%"] },
        { key: StatKeys.CritDMG, notes: ["Приоритетно", "от 150%"] },
        { key: StatKeys.AtkPercentage, notes: ["от 2000"] },
        { key: StatKeys.ElementalMastery, notes: ["от 150 (если Арлекино активирует реакции)"] },
        { key: StatKeys.EnergyRecharge, notes: ["Специально не собирать"] },
      ],
    },
  },
  character_key: CharacterKeys.Arlecchino,
  first_constellation_or_signature_weapon: "С1 и Сигна",
  talent_leveling: [
    { key: TalentKeys.NormalAttack, priority: "В первую очередь\n(10)" },
    { key: TalentKeys.ElementalSkill, priority: "По необходимости\n(6 | 8)" },
    { key: TalentKeys.ElementalBurst, priority: "Во вторую очередь\n(6 | 8)" },
  ],
  video_sources: [
    { title: "Miron MinMax: Лучшее Оружие для Каждого Персонажа", youtube_url: "https://youtu.be/cjatyGw0EO0" },
  ],
  weapons: {
    "Гиперкери | Прожарка | отр. Шеврёз": [
      { key: WeaponKeys.CrimsonMoonsSemblance, is_better: true, percent: 1.316 },
      { key: WeaponKeys.PrimordialJadeWingedSpear, percent: 1.124 },
      { key: WeaponKeys.StaffOfTheScarletSands, percent: 1.112 },
      { key: WeaponKeys.LumidouceElegy, percent: 1.103 },
      { key: WeaponKeys.Deathmatch, refinement: 5, percent: 1.087 },
      { key: WeaponKeys.StaffOfHoma, percent: 1.085 },
      { key: WeaponKeys.CalamityQueller, percent: 1.063 },
      { key: WeaponKeys.Deathmatch, refinement: 1, percent: 1.032 },
      { key: WeaponKeys.WhiteTassel, percent: 1 },
      { key: WeaponKeys.BalladOfTheFjords, percent: 0.968 },
      { key: WeaponKeys.SkywardSpine, percent: 0.948 },
      { key: WeaponKeys.BlackcliffPole, percent: 0.899 },
      { key: WeaponKeys.MissiveWindspear, percent: 0.875 },
    ],
    "Пар | Таяние": [
      { key: WeaponKeys.CrimsonMoonsSemblance, is_better: true, percent: 1.309 },
      { key: WeaponKeys.StaffOfTheScarletSands, percent: 1.156 },
      { key: WeaponKeys.PrimordialJadeWingedSpear, percent: 1.114 },
      { key: WeaponKeys.Deathmatch, refinement: 5, percent: 1.105 },
      { key: WeaponKeys.LumidouceElegy, percent: 1.103 },
      { key: WeaponKeys.BalladOfTheFjords, refinement: 5, percent: 1.098 },
      { key: WeaponKeys.StaffOfHoma, percent: 1.086 },
      { key: WeaponKeys.CalamityQueller, percent: 1.062 },
      { key: WeaponKeys.VortexVanquisher, percent: 1.044 },
      { key: WeaponKeys.LithicSpear, refinement: 5, percent: 1.043 },
      { key: WeaponKeys.Deathmatch, refinement: 1, percent: 1.043 },
      { key: WeaponKeys.BalladOfTheFjords, refinement: 1, percent: 1.023 },
      { key: WeaponKeys.WhiteTassel, percent: 1 },
      { key: WeaponKeys.MissiveWindspear, percent: 0.99 },
      { key: WeaponKeys.DragonsBane, percent: 0.965 },
      { key: WeaponKeys.LithicSpear, refinement: 1, percent: 0.965 },
      { key: WeaponKeys.SkywardSpine, percent: 0.943 },
      { key: WeaponKeys.BlackcliffPole, percent: 0.938 },
    ],
  },
} as CharacterRecommendations;
