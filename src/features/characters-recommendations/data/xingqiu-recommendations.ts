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
        key: ArtifactSetIds.EmblemOfSeveredFate,
        is_better: true,
        notes: [
          "Лучший комплект для Син Цю, так как повысит очень важное восстановление энергии и увеличит урон от взрыва стихии, который является основным талантом Син Цю.",
        ],
      },
      {
        key: ArtifactSetIds.NoblesseOblige,
        notes: [
          "Увеличивает как урон Син Цю от взрыва стихии, так и силу атаки всего отряда.",
          "Рекомендуется, только если никто другой в команде не носит данный комплект артефактов.",
        ],
      },
    ],
    stats: {
      [ArtifactSlotIds.Sands]: [
        { key: StatKeys.AtkPercentage, use_percent: 0.525 },
        { key: StatKeys.EnergyRecharge, use_percent: 0.410 },
        { key: StatKeys.HpPercentage, use_percent: 0.030 },
      ],
      [ArtifactSlotIds.Goblet]: [
        { key: StatKeys.HydroDmgBonus, use_percent: 0.844 },
        { key: StatKeys.AtkPercentage, use_percent: 0.108 },
        { key: StatKeys.HpPercentage, use_percent: 0.025 },
      ],
      [ArtifactSlotIds.Circlet]: [
        { key: StatKeys.CritRate, use_percent: 0.650 },
        { key: StatKeys.CritDMG, use_percent: 0.258 },
        { key: StatKeys.AtkPercentage, use_percent: 0.055 },
      ],
      additional: [
        { key: StatKeys.CritRate, notes: ["Приоритетно", "от 60%"] },
        { key: StatKeys.CritDMG, notes: ["Приоритетно", "от 120%"] },
        { key: StatKeys.AtkPercentage, notes: ["от 1400"] },
        { key: StatKeys.EnergyRecharge, notes: ["от 220%"] },
      ],
    },
  },
  character_key: CharacterIds.Xingqiu,
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
  weapons: [{ key: WeaponKeys.SacrificialSword, refinement: 5, is_better: true }],
} as CharacterRecommendations;
