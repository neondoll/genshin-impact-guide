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
        { uid: AttributeUidEnum.CritRate, use_percent: 0.111 },
        { uid: AttributeUidEnum.CritDmg },
      ],
      additional: [
        { uid: AttributeUidEnum.HealthPercent, notes: ["Приоритетно", "от 25000"] },
        { uid: AttributeUidEnum.EnergyRecharge, notes: ["Приоритетно", "от 220%"] },
        {
          uid: AttributeUidEnum.CritRate,
          notes: ["от 50% (при использовании меча Фавония или если Беннет будет наносить дополнительный урон)"],
        },
        { uid: AttributeUidEnum.CritDmg, notes: ["от 120% (если Беннет будет наносить дополнительный урон)"] },
      ],
    },
  },
  character_uid: CharacterUidEnum.Bennett,
  key_constellations: [6],
  required_level: 90,
  talent_leveling: [
    { uid: TalentUidEnum.NormalAttack, priority: "Не качаем\n(1)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "Не качаем\n(1)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "В первую очередь\n(10)" },
  ],
  video_sources: [
    { title: "Miron MinMax: Лучшее Оружие для Каждого Персонажа", youtube_url: "https://youtu.be/cjatyGw0EO0" },
    {
      title: "Miron MinMax: ВСЁ про ВСЕ таланты ft.@AnimeCool_Genshin",
      vk_url: "https://vkvideo.ru/video-227044935_456239080",
    },
  ],
  weapons: [
    { uid: WeaponUidEnum.MistsplitterReforged, refinement: 1, is_better: true },
    { uid: WeaponUidEnum.AquilaFavonia, refinement: 1, is_better: true },
    { uid: WeaponUidEnum.SkywardBlade, refinement: 1, is_better: true },
    { uid: WeaponUidEnum.SapwoodBlade },
  ],
} as CharacterRecommendations;
