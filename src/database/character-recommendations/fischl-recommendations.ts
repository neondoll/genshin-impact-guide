import { ArtifactSetKeys } from "../enums/artifact-set";
import { ArtifactSlotKeys } from "../enums/artifact-slot";
import { CharacterKeys } from "../enums/character";
import { StAtkeys } from "../enums/stat";
import { TalentKeys } from "../enums/talent";
import { WeaponKeys } from "../enums/weapon";
import type { CharacterRecommendations } from "../types/character-recommendations";

export default {
  artifacts: {
    sets: [{ key: ArtifactSetKeys.GoldenTroupe }],
    stats: {
      [ArtifactSlotKeys.Sands]: [
        { key: StAtkeys.AtkPercentage, percent: 0.785 },
        { key: StAtkeys.ElementalMastery, percent: 0.125 },
        { key: StAtkeys.EnergyRecharge, percent: 0.062 },
      ],
      [ArtifactSlotKeys.Goblet]: [
        { key: StAtkeys.ElectroDmgBonus, percent: 0.830 },
        { key: StAtkeys.AtkPercentage, percent: 0.119 },
        { key: StAtkeys.ElementalMastery, percent: 0.018 },
      ],
      [ArtifactSlotKeys.Circlet]: [
        { key: StAtkeys.CritRate, percent: 0.669 },
        { key: StAtkeys.CritDMG, percent: 0.266 },
        { key: StAtkeys.AtkPercentage, percent: 0.034 },
      ],
      additional: [
        { key: StAtkeys.CritRate, description: "Приоритетно" },
        { key: StAtkeys.CritDMG, description: "Приоритетно" },
        { key: StAtkeys.AtkPercentage },
      ],
    },
  },
  character_key: CharacterKeys.Fischl,
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
