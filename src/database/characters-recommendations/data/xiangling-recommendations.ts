import type { ICharacterRecommendations } from "../types";
import { ArtifactSetKeys } from "../../artifact-sets/enums";
import { ArtifactSlotKeys } from "../../artifact-slots/enums";
import { CharacterKeys } from "../../characters/enums";
import { StatKeys } from "../../stats/enums";
import { TalentKeys } from "../../talents/enums";
import { WeaponKeys } from "../../weapons/enums";

export default {
  artifacts: {
    sets: [{ key: ArtifactSetKeys.EmblemOfSeveredFate }],
    stats: {
      [ArtifactSlotKeys.Sands]: [
        { key: StatKeys.EnergyRecharge, percent: 0.748 },
        { key: StatKeys.AtkPercentage, percent: 0.171 },
        { key: StatKeys.ElementalMastery, percent: 0.055 },
      ],
      [ArtifactSlotKeys.Goblet]: [
        { key: StatKeys.PyroDmgBonus, percent: 0.841 },
        { key: StatKeys.AtkPercentage, percent: 0.118 },
        { key: StatKeys.HpPercentage, percent: 0.013 },
      ],
      [ArtifactSlotKeys.Circlet]: [
        { key: StatKeys.CritRate, percent: 0.642 },
        { key: StatKeys.CritDMG, percent: 0.291 },
        { key: StatKeys.AtkPercentage, percent: 0.042 },
      ],
      additional: [
        { key: StatKeys.CritRate, description: "Приоритетно" },
        { key: StatKeys.CritDMG, description: "Приоритетно" },
        { key: StatKeys.EnergyRecharge },
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
} as ICharacterRecommendations;
