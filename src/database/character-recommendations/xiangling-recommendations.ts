import { ArtifactSetKeys } from "../enums/artifact-set";
import { ArtifactSlotKeys } from "../enums/artifact-slot";
import { CharacterKeys } from "../enums/character";
import { StAtkeys } from "../enums/stat";
import { TalentKeys } from "../enums/talent";
import { WeaponKeys } from "../enums/weapon";
import type { CharacterRecommendations } from "../types/character-recommendations";

export default {
  artifacts: {
    sets: [{ key: ArtifactSetKeys.EmblemOfSeveredFate }],
    stats: {
      [ArtifactSlotKeys.Sands]: [
        { key: StAtkeys.EnergyRecharge, percent: 0.748 },
        { key: StAtkeys.AtkPercentage, percent: 0.171 },
        { key: StAtkeys.ElementalMastery, percent: 0.055 },
      ],
      [ArtifactSlotKeys.Goblet]: [
        { key: StAtkeys.PyroDmgBonus, percent: 0.841 },
        { key: StAtkeys.AtkPercentage, percent: 0.118 },
        { key: StAtkeys.HpPercentage, percent: 0.013 },
      ],
      [ArtifactSlotKeys.Circlet]: [
        { key: StAtkeys.CritRate, percent: 0.642 },
        { key: StAtkeys.CritDMG, percent: 0.291 },
        { key: StAtkeys.AtkPercentage, percent: 0.042 },
      ],
      additional: [
        { key: StAtkeys.CritRate, description: "Приоритетно" },
        { key: StAtkeys.CritDMG, description: "Приоритетно" },
        { key: StAtkeys.EnergyRecharge },
      ],
    },
  },
  character_key: CharacterKeys.Xiangling,
  required_level: 90,
  talent_leveling: [
    { key: TalentKeys.NormalAttack, priority: "Не качаем\n(1)" },
    { key: TalentKeys.ElementalSkill, priority: "Во вторую очередь\n(8)" },
    { key: TalentKeys.ElementalBurst, priority: "В первую очередь\n(10)" },
  ],
  video_sources: [
    { title: "Miron MinMax: Лучшее Оружие для Каждого Персонажа", youtube_url: "https://youtu.be/cjatyGw0EO0" },
    {
      title: "Miron MinMax: ВСЁ про ВСЕ таланты ft.@AnimeCool_Genshin",
      vk_url: "https://vkvideo.ru/video-227044935_456239080",
    },
  ],
  weapons: [
    { key: WeaponKeys.EngulfingLightning, refinement: 1, is_better: true },
    { key: WeaponKeys.StaffOfHoma, refinement: 1 },
    { key: WeaponKeys.StaffOfTheScarletSands, refinement: 1 },
  ],
} as CharacterRecommendations;
