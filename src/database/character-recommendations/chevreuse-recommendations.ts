import artifactSets from "../artifact-sets";
import weapons from "../weapons";
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
      { key: ArtifactSetKeys.NoblesseOblige },
      {
        key: ArtifactSetKeys.SongOfDaysPast,
        description: "Не рекомендуется, слишком нестабильна и требует овер хил",
      },
      {
        key: ArtifactSetKeys.ScrollOfTheHeroOfCinderCity,
        description: `Если ${artifactSets[ArtifactSetKeys.NoblesseOblige].name} занята`,
      },
      {
        key: ArtifactSetKeys.EmblemOfSeveredFate,
        description: `Если ${artifactSets[ArtifactSetKeys.NoblesseOblige].name} и ${artifactSets[ArtifactSetKeys.ScrollOfTheHeroOfCinderCity].name} заняты`,
      },
    ],
    stats: {
      [ArtifactSlotKeys.SandsOfEon]: [{ key: StatKeys.HPPercentage }],
      [ArtifactSlotKeys.GobletOfEonothem]: [{ key: StatKeys.HPPercentage }],
      [ArtifactSlotKeys.CircletOfLogos]: [
        { key: StatKeys.HPPercentage },
        { key: StatKeys.CRITRate, description: `Если в руках ${weapons[WeaponKeys.FavoniusLance].name}` },
      ],
      additional: [{ key: StatKeys.HPPercentage }, { key: StatKeys.EnergyRecharge }],
    },
  },
  character_key: CharacterKeys.Chevreuse,
  required_level: 90,
  talent_leveling: [
    { key: TalentKeys.NormalAttack, priority: "Не качаем\n(1)" },
    { key: TalentKeys.ElementalSkill, priority: "В первую очередь\n(8)" },
    { key: TalentKeys.ElementalBurst, priority: "Во вторую очередь\n(8)" },
  ],
  video_sources: [
    { title: "Miron MinMax: Лучшее Оружие для Каждого Персонажа", youtube_url: "https://youtu.be/cjatyGw0EO0" },
    {
      title: "Miron MinMax: ВСЁ про ВСЕ таланты ft.@AnimeCool_Genshin",
      vk_url: "https://vkvideo.ru/video-227044935_456239080",
    },
  ],
  weapons: [
    { key: WeaponKeys.StaffOfHoma, refinement: 1, is_better: true },
    { key: WeaponKeys.DialoguesOfTheDesertSages, refinement: 5 },
    { key: WeaponKeys.FavoniusLance, refinement: 5 },
    { key: WeaponKeys.RightfulReward, refinement: 5 },
  ],
} as CharacterRecommendations;
