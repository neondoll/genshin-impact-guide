import type { CharacterRecommendations } from "@/features/characters-recommendations/types";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSlotIds } from "../../artifact-slots/enums";
import { CharacterIds } from "../../characters/enums";
import { StatKeys } from "@/database/stats/enums";
import { TalentKeys } from "@/database/talents/enums";
import { WeaponKeys } from "@/database/weapons/enums";

export default {
  artifacts: {
    sets: [
      {
        key: ArtifactSetIds.TenacityOfTheMillelith,
        is_better: true,
        notes: [
          "Лучший комплект, так как бонус к HP повысит прочность щита и урон Лайлы.",
          "Лайла будет повышать атаку остальных членов отряда, что отлично подходит ей как персонажу поддержки.",
        ],
      },
      {
        key: ArtifactSetIds.NoblesseOblige,
        notes: [
          "Увеличивает урон от взрыва стихии Лайлы и увеличивает силу атаки другим членам отряда.",
          "Рекомендуется, если никто другой в отряде не носит данный комплект.",
        ],
      },
      {
        key: ArtifactSetIds.BlizzardStrayer,
        notes: [
          "Рекомендуется, только если хочется получить больше урона от Лайлы.",
          "Рекомендуется иметь в отряде Гидро и других Крио персонажей для поддержания Заморозки.",
        ],
      },
    ],
    stats: {
      [ArtifactSlotIds.Sands]: [
        { key: StatKeys.HpPercentage, use_percent: 0.907 },
        { key: StatKeys.EnergyRecharge, use_percent: 0.051 },
        { key: StatKeys.AtkPercentage, use_percent: 0.025 },
      ],
      [ArtifactSlotIds.Goblet]: [
        { key: StatKeys.HpPercentage, use_percent: 0.902 },
        { key: StatKeys.CryoDmgBonus, use_percent: 0.058 },
        { key: StatKeys.AtkPercentage, use_percent: 0.015 },
      ],
      [ArtifactSlotIds.Circlet]: [
        { key: StatKeys.HpPercentage, use_percent: 0.860 },
        { key: StatKeys.CritRate, use_percent: 0.080 },
        { key: StatKeys.CritDMG, use_percent: 0.035 },
      ],
      additional: [
        { key: StatKeys.HpPercentage, notes: ["Приоритетно", "от 25000"] },
        { key: StatKeys.EnergyRecharge, notes: ["от 120%"] },
        { key: StatKeys.CritRate, notes: ["от 50%"] },
        { key: StatKeys.CritDMG, notes: ["от 120%"] },
        { key: StatKeys.ElementalMastery, notes: ["от 250 (только при игре через реакции)"] },
      ],
    },
  },
  character_key: CharacterIds.Layla,
  required_level: 80,
  talent_leveling: [
    { key: TalentKeys.NormalAttack, priority: "Не качаем\n(1)" },
    { key: TalentKeys.ElementalSkill, priority: "В первую очередь\n(8)" },
    { key: TalentKeys.ElementalBurst, priority: "Во вторую очередь\n(6)" },
  ],
  video_sources: [
    { title: "Miron MinMax: Лучшее Оружие для Каждого Персонажа", youtube_url: "https://youtu.be/cjatyGw0EO0" },
    {
      title: "Miron MinMax: ВСЁ про ВСЕ таланты ft.@AnimeCool_Genshin",
      vk_url: "https://vkvideo.ru/video-227044935_456239080",
    },
  ],
  weapons: [{ key: WeaponKeys.FavoniusSword, refinement: 5, is_better: true }],
} as CharacterRecommendations;
