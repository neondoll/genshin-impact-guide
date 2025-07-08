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
        { uid: AttributeUidEnum.HealthPercent, use_percent: 0.907 },
        { uid: AttributeUidEnum.EnergyRecharge, use_percent: 0.051 },
        { uid: AttributeUidEnum.AttackPercent, use_percent: 0.025 },
      ],
      [ArtifactPieceUidEnum.GobletOfEonothem]: [
        { uid: AttributeUidEnum.HealthPercent, use_percent: 0.902 },
        { uid: AttributeUidEnum.CryoDamageBonus, use_percent: 0.058 },
        { uid: AttributeUidEnum.AttackPercent, use_percent: 0.015 },
      ],
      [ArtifactPieceUidEnum.CircletOfLogos]: [
        { uid: AttributeUidEnum.HealthPercent, use_percent: 0.860 },
        { uid: AttributeUidEnum.CriticalRate, use_percent: 0.080 },
        { uid: AttributeUidEnum.CriticalDamage, use_percent: 0.035 },
      ],
      additional: [
        { uid: AttributeUidEnum.HealthPercent, notes: ["Приоритетно", "от 25000"] },
        { uid: AttributeUidEnum.EnergyRecharge, notes: ["от 120%"] },
        { uid: AttributeUidEnum.CriticalRate, notes: ["от 50%"] },
        { uid: AttributeUidEnum.CriticalDamage, notes: ["от 120%"] },
        { uid: AttributeUidEnum.ElementalMastery, notes: ["от 250 (только при игре через реакции)"] },
      ],
    },
  },
  character_uid: CharacterUidEnum.Layla,
  required_level: 80,
  talent_leveling: [
    { uid: TalentUidEnum.NormalAttack, priority: "Не качаем\n(1)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "Золотая середина\n(8)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "Можно прокачать\n(6)" },
  ],
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ таланты ft.@AnimeCool_Genshin",
      vk_url: "https://vkvideo.ru/video-227044935_456239080",
    },
  ],
  weapons: [{ uid: WeaponUidEnum.FavoniusSword }],
} as CharacterRecommendation;
