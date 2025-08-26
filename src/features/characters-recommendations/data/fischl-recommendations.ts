import type { CharacterRecommendations } from "@/features/characters-recommendations/types";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSlotIds } from "../../artifact-slots/enums";
import { CharacterIds } from "../../characters/enums";
import { StatKeys } from "@/database/stats/enums";
import { TalentKeys } from "@/database/talents/enums";
import { WeaponKeys } from "@/database/weapons/enums";

export default {
  artifacts: {
    sets: [{ key: ArtifactSetIds.GoldenTroupe }],
    stats: {
      [ArtifactSlotIds.Sands]: [
        { key: StatKeys.AtkPercentage, percent: 0.785 },
        { key: StatKeys.ElementalMastery, percent: 0.125 },
        { key: StatKeys.EnergyRecharge, percent: 0.062 },
      ],
      [ArtifactSlotIds.Goblet]: [
        { key: StatKeys.ElectroDmgBonus, percent: 0.830 },
        { key: StatKeys.AtkPercentage, percent: 0.119 },
        { key: StatKeys.ElementalMastery, percent: 0.018 },
      ],
      [ArtifactSlotIds.Circlet]: [
        { key: StatKeys.CritRate, percent: 0.669 },
        { key: StatKeys.CritDMG, percent: 0.266 },
        { key: StatKeys.AtkPercentage, percent: 0.034 },
      ],
      additional: [
        { key: StatKeys.CritRate, description: "Приоритетно" },
        { key: StatKeys.CritDMG, description: "Приоритетно" },
        { key: StatKeys.AtkPercentage },
      ],
    },
  },
  character_key: CharacterIds.Fischl,
  required_level: 90,
  talent_leveling: [
    { key: TalentKeys.NormalAttack, priority: "Не качаем\n(1)" },
    { key: TalentKeys.ElementalSkill, priority: "В первую очередь\n(10)" },
    { key: TalentKeys.ElementalBurst, priority: "Во вторую очередь\n(6)" },
  ],
  video_sources: [
    { title: "Miron MinMax: Лучшее Оружие для Каждого Персонажа", youtube_url: "https://youtu.be/cjatyGw0EO0" },
    {
      title: "Miron MinMax: ВСЁ про ВСЕ таланты ft.@AnimeCool_Genshin",
      vk_url: "https://vkvideo.ru/video-227044935_456239080",
    },
  ],
  weapons: [
    { key: WeaponKeys.AquaSimulacra, refinement: 1, is_better: true },
    { key: WeaponKeys.ElegyForTheEnd, refinement: 1, is_better: true },
    { key: WeaponKeys.TheStringless },
  ],
} as CharacterRecommendations;
