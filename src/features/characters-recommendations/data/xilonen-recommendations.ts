import type { CharacterRecommendations } from "@/features/characters-recommendations/types";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSlotIds } from "../../artifact-slots/enums";
import { CharacterIds } from "../../characters/enums";
import { StatKeys } from "@/database/stats/enums";
import { TalentKeys } from "@/database/talents/enums";
import { WeaponKeys } from "@/database/weapons/enums";

export default {
  artifacts: {
    sets: [{ key: ArtifactSetIds.ScrollOfTheHeroOfCinderCity }],
    stats: {
      [ArtifactSlotIds.Sands]: [{ key: StatKeys.DefPercentage }, { key: StatKeys.EnergyRecharge }],
      [ArtifactSlotIds.Goblet]: [{ key: StatKeys.DefPercentage }],
      [ArtifactSlotIds.Circlet]: [
        { key: StatKeys.DefPercentage },
        { key: StatKeys.CritRate },
        { key: StatKeys.Heal },
      ],
      additional: [
        { key: StatKeys.DefPercentage },
        { key: StatKeys.EnergyRecharge, description: "~160% ВЭ для стабильной ульты" },
      ],
    },
  },
  character_key: CharacterIds.Xilonen,
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
