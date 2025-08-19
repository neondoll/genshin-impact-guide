import { ArtifactSetKeys } from "../artifact-sets/enums";
import { ArtifactSlotKeys } from "../artifact-slots/enums";
import { CharacterKeys } from "../characters/enums";
import { StatKeys } from "../enums/stat";
import { TalentKeys } from "../enums/talent";
import { WeaponKeys } from "../enums/weapon";
import type { CharacterRecommendations } from "../types/character-recommendations";

export default {
  artifacts: {
    sets: [
      {
        key: ArtifactSetKeys.EmblemOfSeveredFate,
        is_better: true,
        notes: [
          "Лучший комплект для Син Цю, так как повысит очень важное восстановление энергии и увеличит урон от взрыва стихии, который является основным талантом Син Цю.",
        ],
      },
      {
        key: ArtifactSetKeys.NoblesseOblige,
        notes: [
          "Увеличивает как урон Син Цю от взрыва стихии, так и силу атаки всего отряда.",
          "Рекомендуется, только если никто другой в команде не носит данный комплект артефактов.",
        ],
      },
    ],
    stats: {
      [ArtifactSlotKeys.Sands]: [
        { key: StatKeys.AtkPercentage, use_percent: 0.525 },
        { key: StatKeys.EnergyRecharge, use_percent: 0.410 },
        { key: StatKeys.HpPercentage, use_percent: 0.030 },
      ],
      [ArtifactSlotKeys.Goblet]: [
        { key: StatKeys.HydroDmgBonus, use_percent: 0.844 },
        { key: StatKeys.AtkPercentage, use_percent: 0.108 },
        { key: StatKeys.HpPercentage, use_percent: 0.025 },
      ],
      [ArtifactSlotKeys.Circlet]: [
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
  character_key: CharacterKeys.Xingqiu,
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
