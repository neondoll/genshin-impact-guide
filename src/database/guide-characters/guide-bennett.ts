import { ArtifactPieceUidEnum } from "../enums/artifact-pieces";
import { ArtifactSetUidEnum } from "../enums/artifact-sets";
import { AttributeUidEnum } from "../enums/attributes";
import { CharacterUidEnum } from "../enums/characters";
import { TalentUidEnum } from "../enums/talents";
import { WeaponUidEnum } from "../enums/weapons";
import type { CharacterRecommendation } from "../types/character-recommendations";

export default {
  character_uid: CharacterUidEnum.Bennett,
  artifact_recommendations: {
    sets: [
      {
        uid: ArtifactSetUidEnum.NoblesseOblige,
        is_better: true,
        notes: [
          "Лучший комплект для Беннета в роли поддержки. Увеличивает собственный урон от взрыва стихий и даёт дополнительный бонус к атаке. Используется, когда никто другой не носит данный комплект артефактов.",
        ],
      },
      {
        uid: ArtifactSetUidEnum.EmblemOfSeveredFate,
        notes: [
          "Комплект не даёт никаких бонусов другим членам отряда, но увеличивает восстановление энергии Беннета и урон от его взрыва стихий. Комплект используется, если хочется, чтобы Беннет наносил дополнительный урон.",
        ],
      },
    ],
    attributes: {
      [ArtifactPieceUidEnum.SandsOfEon]: [
        { uid: AttributeUidEnum.EnergyRecharge, use_percent: 0.703 },
        { uid: AttributeUidEnum.HealthPercent, use_percent: 0.187 },
        { uid: AttributeUidEnum.AttackPercent, use_percent: 0.089 },
      ],
      [ArtifactPieceUidEnum.GobletOfEonothem]: [
        { uid: AttributeUidEnum.HealthPercent, use_percent: 0.749 },
        { uid: AttributeUidEnum.AttackPercent, use_percent: 0.109 },
        { uid: AttributeUidEnum.PyroDamageBonus, use_percent: 0.105 },
      ],
      [ArtifactPieceUidEnum.CircletOfLogos]: [
        { uid: AttributeUidEnum.HealingBonus, use_percent: 0.543 },
        { uid: AttributeUidEnum.HealthPercent, use_percent: 0.224 },
        { uid: AttributeUidEnum.CriticalRate, use_percent: 0.111 },
        { uid: AttributeUidEnum.CriticalDamage },
      ],
      additional: [
        { uid: AttributeUidEnum.HealthPercent, notes: ["Приоритетно", "от 25000"] },
        { uid: AttributeUidEnum.EnergyRecharge, notes: ["Приоритетно", "от 220%"] },
        {
          uid: AttributeUidEnum.CriticalRate,
          notes: ["от 50% (при использовании меча Фавония или если Беннет будет наносить дополнительный урон)"],
        },
        { uid: AttributeUidEnum.CriticalDamage, notes: ["от 120% (если Беннет будет наносить дополнительный урон)"] },
      ],
    },
  },
  assembly_weapons: [{ uid: WeaponUidEnum.SapwoodBlade }],
  key_constellations: [6],
  required_level: 90,
  talent_leveling_recommendations: [
    { uid: TalentUidEnum.NormalAttack, priority: "Не качаем\n(1)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "Не качаем\n(1)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "Главный приоритет\n(10)" },
  ],
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ таланты ft.@AnimeCool_Genshin",
      vk_url: "https://vkvideo.ru/video-227044935_456239080",
    },
  ],
} as CharacterRecommendation;
