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
      {
        key: ArtifactSetKeys.TenacityOfTheMillelith,
        is_better: true,
        notes: [
          "Лучший комплект, так как бонус к HP повысит прочность щита и урон Лайлы.",
          "Лайла будет повышать атаку остальных членов отряда, что отлично подходит ей как персонажу поддержки.",
        ],
      },
      {
        key: ArtifactSetKeys.NoblesseOblige,
        notes: [
          "Увеличивает урон от взрыва стихии Лайлы и увеличивает силу атаки другим членам отряда.",
          "Рекомендуется, если никто другой в отряде не носит данный комплект.",
        ],
      },
      {
        key: ArtifactSetKeys.BlizzardStrayer,
        notes: [
          "Рекомендуется, только если хочется получить больше урона от Лайлы.",
          "Рекомендуется иметь в отряде Гидро и других Крио персонажей для поддержания Заморозки.",
        ],
      },
    ],
    stats: {
      [ArtifactSlotKeys.SandsOfEon]: [
        { key: StatKeys.HPPercentage, use_percent: 0.907 },
        { key: StatKeys.EnergyRecharge, use_percent: 0.051 },
        { key: StatKeys.ATKPercentage, use_percent: 0.025 },
      ],
      [ArtifactSlotKeys.GobletOfEonothem]: [
        { key: StatKeys.HPPercentage, use_percent: 0.902 },
        { key: StatKeys.CryoDMGBonus, use_percent: 0.058 },
        { key: StatKeys.ATKPercentage, use_percent: 0.015 },
      ],
      [ArtifactSlotKeys.CircletOfLogos]: [
        { key: StatKeys.HPPercentage, use_percent: 0.860 },
        { key: StatKeys.CRITRate, use_percent: 0.080 },
        { key: StatKeys.CRITDMG, use_percent: 0.035 },
      ],
      additional: [
        { key: StatKeys.HPPercentage, notes: ["Приоритетно", "от 25000"] },
        { key: StatKeys.EnergyRecharge, notes: ["от 120%"] },
        { key: StatKeys.CRITRate, notes: ["от 50%"] },
        { key: StatKeys.CRITDMG, notes: ["от 120%"] },
        { key: StatKeys.ElementalMastery, notes: ["от 250 (только при игре через реакции)"] },
      ],
    },
  },
  character_key: CharacterKeys.Layla,
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
