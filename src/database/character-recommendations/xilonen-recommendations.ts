import { ArtifactSetKeys } from "../enums/artifact-set";
import { ArtifactSlotKeys } from "../enums/artifact-slot";
import { CharacterKeys } from "../enums/character";
import { StatKeys } from "../enums/stat";
import { TalentKeys } from "../enums/talent";
import { WeaponKeys } from "../enums/weapon";
import type { CharacterRecommendations } from "../types/character-recommendations";

export default {
  artifacts: {
    sets: [{ key: ArtifactSetKeys.ScrollOfTheHeroOfCinderCity }],
    stats: {
      [ArtifactSlotKeys.SandsOfEon]: [{ key: StatKeys.DefensePercent }, { key: StatKeys.EnergyRecharge }],
      [ArtifactSlotKeys.GobletOfEonothem]: [{ key: StatKeys.DefensePercent }],
      [ArtifactSlotKeys.CircletOfLogos]: [
        { key: StatKeys.DefensePercent },
        { key: StatKeys.CRITRate },
        { key: StatKeys.HealingBonus },
      ],
      additional: [
        { key: StatKeys.DefensePercent },
        { key: StatKeys.EnergyRecharge, description: "~160% ВЭ для стабильной ульты" },
      ],
    },
  },
  character_key: CharacterKeys.Xilonen,
  first_constellation_or_signature_weapon: "Сигна > С1, но С2 > Сигна",
  talent_leveling: [
    { key: TalentKeys.NormalAttack, priority: "Не качаем\n(1)" },
    { key: TalentKeys.ElementalSkill, priority: "В первую очередь\n(10)" },
    { key: TalentKeys.ElementalBurst, priority: "Во вторую очередь\n(8)" },
  ],
  video_sources: [
    { title: "Miron MinMax: Лучшее Оружие для Каждого Персонажа", youtube_url: "https://youtu.be/cjatyGw0EO0" },
  ],
  weapons: [
    { key: WeaponKeys.PeakPatrolSong, refinement: 1, is_better: true },
    { key: WeaponKeys.FavoniusSword, refinement: 5 },
  ],
} as CharacterRecommendations;
