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
        uid: ArtifactSetUidEnum.EmblemOfSeveredFate,
        is_better: true,
        notes: [
          "Лучший комплект для Син Цю, так как повысит очень важное восстановление энергии и увеличит урон от взрыва стихии, который является основным талантом Син Цю.",
        ],
      },
      {
        uid: ArtifactSetUidEnum.NoblesseOblige,
        notes: [
          "Увеличивает как урон Син Цю от взрыва стихии, так и силу атаки всего отряда.",
          "Рекомендуется, только если никто другой в команде не носит данный комплект артефактов.",
        ],
      },
    ],
    attributes: {
      [ArtifactPieceUidEnum.SandsOfEon]: [
        { uid: AttributeUidEnum.ATKPercentage, use_percent: 0.525 },
        { uid: AttributeUidEnum.EnergyRecharge, use_percent: 0.410 },
        { uid: AttributeUidEnum.HPPercentage, use_percent: 0.030 },
      ],
      [ArtifactPieceUidEnum.GobletOfEonothem]: [
        { uid: AttributeUidEnum.HydroDMGBonus, use_percent: 0.844 },
        { uid: AttributeUidEnum.ATKPercentage, use_percent: 0.108 },
        { uid: AttributeUidEnum.HPPercentage, use_percent: 0.025 },
      ],
      [ArtifactPieceUidEnum.CircletOfLogos]: [
        { uid: AttributeUidEnum.CRITRate, use_percent: 0.650 },
        { uid: AttributeUidEnum.CRITDMG, use_percent: 0.258 },
        { uid: AttributeUidEnum.ATKPercentage, use_percent: 0.055 },
      ],
      additional: [
        { uid: AttributeUidEnum.CRITRate, notes: ["Приоритетно", "от 60%"] },
        { uid: AttributeUidEnum.CRITDMG, notes: ["Приоритетно", "от 120%"] },
        { uid: AttributeUidEnum.ATKPercentage, notes: ["от 1400"] },
        { uid: AttributeUidEnum.EnergyRecharge, notes: ["от 220%"] },
      ],
    },
  },
  character_uid: CharacterUidEnum.Xingqiu,
  required_level: 90,
  talent_leveling: [
    { uid: TalentUidEnum.NormalAttack, priority: "Не качаем\n(1)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "Во вторую очередь\n(8)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "В первую очередь\n(10)" },
  ],
  video_sources: [
    { title: "Miron MinMax: Лучшее Оружие для Каждого Персонажа", youtube_url: "https://youtu.be/cjatyGw0EO0" },
    {
      title: "Miron MinMax: ВСЁ про ВСЕ таланты ft.@AnimeCool_Genshin",
      vk_url: "https://vkvideo.ru/video-227044935_456239080",
    },
  ],
  weapons: [{ uid: WeaponUidEnum.SacrificialSword, refinement: 5, is_better: true }],
} as CharacterRecommendations;
