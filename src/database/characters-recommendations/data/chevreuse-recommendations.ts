import type { ICharacterRecommendations } from "../types";
import { artifactSetByKey } from "./help";
import { ArtifactSetIds } from "@/features/artifact-sets/enums";
import { ArtifactSlotKeys } from "../../artifact-slots/enums";
import { CharacterKeys } from "../../characters/enums";
import { StatKeys } from "../../stats/enums";
import { TalentKeys } from "../../talents/enums";
import { WeaponKeys } from "../../weapons/enums";
import weapons from "../../weapons/data";

export default {
  artifacts: {
    sets: [
      { key: ArtifactSetIds.NoblesseOblige },
      {
        key: ArtifactSetIds.SongOfDaysPast,
        description: "Не рекомендуется, слишком нестабильна и требует овер хил",
      },
      {
        key: ArtifactSetIds.ScrollOfTheHeroOfCinderCity,
        description: `Если ${artifactSetByKey(ArtifactSetIds.NoblesseOblige)} занята`,
      },
      {
        key: ArtifactSetIds.EmblemOfSeveredFate,
        description: `Если ${artifactSetByKey(ArtifactSetIds.NoblesseOblige)} и ${artifactSetByKey(ArtifactSetIds.ScrollOfTheHeroOfCinderCity)} заняты`,
      },
    ],
    stats: {
      [ArtifactSlotKeys.Sands]: [{ key: StatKeys.HpPercentage }],
      [ArtifactSlotKeys.Goblet]: [{ key: StatKeys.HpPercentage }],
      [ArtifactSlotKeys.Circlet]: [
        { key: StatKeys.HpPercentage },
        { key: StatKeys.CritRate, description: `Если в руках ${weapons[WeaponKeys.FavoniusLance].name}` },
      ],
      additional: [{ key: StatKeys.HpPercentage }, { key: StatKeys.EnergyRecharge }],
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
} as ICharacterRecommendations;
