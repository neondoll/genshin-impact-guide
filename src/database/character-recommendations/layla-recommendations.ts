import { ArtifactPieceUidEnum } from "../enums/artifact-piece";
import { ArtifactSetUidEnum } from "../enums/artifact-set";
import { AttributeUidEnum } from "../enums/attribute";
import { CharacterUidEnum } from "../enums/character";
import { TalentUidEnum } from "../enums/talent";
import { WeaponUidEnum } from "../enums/weapon";
import type { CharacterRecommendations } from "../types/character-recommendations";

export default {
  artifacts: {
    sets: [
      {
        uid: ArtifactSetUidEnum.TenacityOfTheMillelith,
        is_better: true,
        notes: [
          "Лучший комплект, так как бонус к HP повысит прочность щита и урон Лайлы.",
          "Лайла будет повышать атаку остальных членов отряда, что отлично подходит ей как персонажу поддержки.",
        ],
      },
      {
        uid: ArtifactSetUidEnum.NoblesseOblige,
        notes: [
          "Увеличивает урон от взрыва стихии Лайлы и увеличивает силу атаки другим членам отряда.",
          "Рекомендуется, если никто другой в отряде не носит данный комплект.",
        ],
      },
      {
        uid: ArtifactSetUidEnum.BlizzardStrayer,
        notes: [
          "Рекомендуется, только если хочется получить больше урона от Лайлы.",
          "Рекомендуется иметь в отряде Гидро и других Крио персонажей для поддержания Заморозки.",
        ],
      },
    ],
    attributes: {
      [ArtifactPieceUidEnum.SandsOfEon]: [
        { uid: AttributeUidEnum.HPPercentage, use_percent: 0.907 },
        { uid: AttributeUidEnum.EnergyRecharge, use_percent: 0.051 },
        { uid: AttributeUidEnum.ATKPercentage, use_percent: 0.025 },
      ],
      [ArtifactPieceUidEnum.GobletOfEonothem]: [
        { uid: AttributeUidEnum.HPPercentage, use_percent: 0.902 },
        { uid: AttributeUidEnum.CryoDMGBonus, use_percent: 0.058 },
        { uid: AttributeUidEnum.ATKPercentage, use_percent: 0.015 },
      ],
      [ArtifactPieceUidEnum.CircletOfLogos]: [
        { uid: AttributeUidEnum.HPPercentage, use_percent: 0.860 },
        { uid: AttributeUidEnum.CRITRate, use_percent: 0.080 },
        { uid: AttributeUidEnum.CRITDMG, use_percent: 0.035 },
      ],
      additional: [
        { uid: AttributeUidEnum.HPPercentage, notes: ["Приоритетно", "от 25000"] },
        { uid: AttributeUidEnum.EnergyRecharge, notes: ["от 120%"] },
        { uid: AttributeUidEnum.CRITRate, notes: ["от 50%"] },
        { uid: AttributeUidEnum.CRITDMG, notes: ["от 120%"] },
        { uid: AttributeUidEnum.ElementalMastery, notes: ["от 250 (только при игре через реакции)"] },
      ],
    },
  },
  character_uid: CharacterUidEnum.Layla,
  required_level: 80,
  talent_leveling: [
    { uid: TalentUidEnum.NormalAttack, priority: "Не качаем\n(1)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "В первую очередь\n(8)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "Во вторую очередь\n(6)" },
  ],
  video_sources: [
    { title: "Miron MinMax: Лучшее Оружие для Каждого Персонажа", youtube_url: "https://youtu.be/cjatyGw0EO0" },
    {
      title: "Miron MinMax: ВСЁ про ВСЕ таланты ft.@AnimeCool_Genshin",
      vk_url: "https://vkvideo.ru/video-227044935_456239080",
    },
  ],
  weapons: [{ uid: WeaponUidEnum.FavoniusSword, refinement: 5, is_better: true }],
} as CharacterRecommendations;
