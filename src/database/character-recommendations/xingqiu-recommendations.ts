import { ArtifactPieceUidEnum } from "../enums/artifact-pieces";
import { ArtifactSetUidEnum } from "../enums/artifact-sets";
import { AttributeUidEnum } from "../enums/attributes";
import { CharacterUidEnum } from "../enums/characters";
import { TalentUidEnum } from "../enums/talents";
import { WeaponUidEnum } from "../enums/weapons";
import type { CharacterRecommendation } from "../types/character-recommendations";

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
        { uid: AttributeUidEnum.AttackPercent, use_percent: 0.525 },
        { uid: AttributeUidEnum.EnergyRecharge, use_percent: 0.410 },
        { uid: AttributeUidEnum.HealthPercent, use_percent: 0.030 },
      ],
      [ArtifactPieceUidEnum.GobletOfEonothem]: [
        { uid: AttributeUidEnum.HydroDamageBonus, use_percent: 0.844 },
        { uid: AttributeUidEnum.AttackPercent, use_percent: 0.108 },
        { uid: AttributeUidEnum.HealthPercent, use_percent: 0.025 },
      ],
      [ArtifactPieceUidEnum.CircletOfLogos]: [
        { uid: AttributeUidEnum.CriticalRate, use_percent: 0.650 },
        { uid: AttributeUidEnum.CriticalDamage, use_percent: 0.258 },
        { uid: AttributeUidEnum.AttackPercent, use_percent: 0.055 },
      ],
      additional: [
        { uid: AttributeUidEnum.CriticalRate, notes: ["Приоритетно", "от 60%"] },
        { uid: AttributeUidEnum.CriticalDamage, notes: ["Приоритетно", "от 120%"] },
        { uid: AttributeUidEnum.AttackPercent, notes: ["от 1400"] },
        { uid: AttributeUidEnum.EnergyRecharge, notes: ["от 220%"] },
      ],
    },
  },
  character_uid: CharacterUidEnum.Xingqiu,
  required_level: 90,
  talent_leveling: [
    { uid: TalentUidEnum.NormalAttack, priority: "Не качаем\n(1)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "Золотая середина\n(8)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "Главный приоритет\n(10)" },
  ],
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ таланты ft.@AnimeCool_Genshin",
      vk_url: "https://vkvideo.ru/video-227044935_456239080",
    },
  ],
  weapons: [{ uid: WeaponUidEnum.SacrificialSword }],
} as CharacterRecommendation;
