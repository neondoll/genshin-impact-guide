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
        notes: [
          "Набор увеличивает лечение Синобу благодаря бонусу HP и увеличивает силу атаки и прочность щита всего отряда, так как элементальный навык Синобу срабатывает каждые 1.5 секунды.",
          "Набор хорошо показывает себя в любом отряде",
        ],
      },
      {
        uid: ArtifactSetUidEnum.MaidenBeloved,
        notes: ["Набор хорошо работает, если Синобу используется исключительно для лечения команды."],
      },
      {
        uid: ArtifactSetUidEnum.FlowerOfParadiseLost,
        notes: [
          "Набор хорошо работает только в команде с Дендро и Гидро персонажами. Бонус мастерства стихий увеличивает лечение Синобу и урон от реакций.",
          "Так как элементальный навык Синобу срабатывает каждый 1.5 секунды, он активирует реакцию Вегетация и увеличивает урон реакции.",
        ],
      },
      {
        uid: ArtifactSetUidEnum.GildedDreams,
        notes: [
          "Бонус мастерства стихий увеличивает лечение Синобу и урон от реакций.",
          "Отлично подходит для отрядов, которые вызывают реакции с Дендро.",
        ],
      },
    ],
    attributes: {
      [ArtifactPieceUidEnum.SandsOfEon]: [
        { uid: AttributeUidEnum.ElementalMastery, use_percent: 0.894 },
        { uid: AttributeUidEnum.HPPercentage, use_percent: 0.073 },
        { uid: AttributeUidEnum.ATKPercentage, use_percent: 0.016 },
      ],
      [ArtifactPieceUidEnum.GobletOfEonothem]: [
        { uid: AttributeUidEnum.ElementalMastery, use_percent: 0.810 },
        { uid: AttributeUidEnum.HPPercentage, use_percent: 0.114 },
        { uid: AttributeUidEnum.ElectroDMGBonus, use_percent: 0.044 },
      ],
      [ArtifactPieceUidEnum.CircletOfLogos]: [
        { uid: AttributeUidEnum.ElementalMastery, use_percent: 0.807 },
        { uid: AttributeUidEnum.HealingBonus, use_percent: 0.071 },
        { uid: AttributeUidEnum.HPPercentage, use_percent: 0.056 },
      ],
      additional: [
        { uid: AttributeUidEnum.ElementalMastery, notes: ["Приоритетно", "от 700"] },
        { uid: AttributeUidEnum.HPPercentage, notes: ["от 30000"] },
      ],
    },
  },
  character_uid: CharacterUidEnum.KukiShinobu,
  key_constellations: [2],
  required_level: 90,
  talent_leveling: [
    { uid: TalentUidEnum.NormalAttack, priority: "Не качаем\n(1)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "В первую очередь\n(8)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "Не качаем\n(1)" },
  ],
  video_sources: [
    { title: "Miron MinMax: Лучшее Оружие для Каждого Персонажа", youtube_url: "https://youtu.be/cjatyGw0EO0" },
    {
      title: "Miron MinMax: ВСЁ про ВСЕ таланты ft.@AnimeCool_Genshin",
      vk_url: "https://vkvideo.ru/video-227044935_456239080",
    },
  ],
  weapons: [
    { uid: WeaponUidEnum.FreedomSworn, refinement: 1, is_better: true },
    { uid: WeaponUidEnum.XiphosMoonlight },
  ],
} as CharacterRecommendations;
