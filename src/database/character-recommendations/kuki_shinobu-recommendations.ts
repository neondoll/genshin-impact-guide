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
        { uid: AttributeUidEnum.HealthPercent, use_percent: 0.073 },
        { uid: AttributeUidEnum.AttackPercent, use_percent: 0.016 },
      ],
      [ArtifactPieceUidEnum.GobletOfEonothem]: [
        { uid: AttributeUidEnum.ElementalMastery, use_percent: 0.810 },
        { uid: AttributeUidEnum.HealthPercent, use_percent: 0.114 },
        { uid: AttributeUidEnum.ElectroDamageBonus, use_percent: 0.044 },
      ],
      [ArtifactPieceUidEnum.CircletOfLogos]: [
        { uid: AttributeUidEnum.ElementalMastery, use_percent: 0.807 },
        { uid: AttributeUidEnum.HealingBonus, use_percent: 0.071 },
        { uid: AttributeUidEnum.HealthPercent, use_percent: 0.056 },
      ],
      additional: [
        { uid: AttributeUidEnum.ElementalMastery, notes: ["Приоритетно", "от 700"] },
        { uid: AttributeUidEnum.HealthPercent, notes: ["от 30000"] },
      ],
    },
  },
  character_uid: CharacterUidEnum.KukiShinobu,
  key_constellations: [2],
  required_level: 90,
  talent_leveling: [
    { uid: TalentUidEnum.NormalAttack, priority: "Не качаем\n(1)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "Главный приоритет\n(8)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "Не качаем\n(1)" },
  ],
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ таланты ft.@AnimeCool_Genshin",
      vk_url: "https://vkvideo.ru/video-227044935_456239080",
    },
  ],
  weapons: [{ uid: WeaponUidEnum.XiphosMoonlight }],
} as CharacterRecommendation;
