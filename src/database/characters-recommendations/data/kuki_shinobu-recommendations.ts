import type { ICharacterRecommendations } from "../types";
import { ArtifactSetKeys } from "../../artifact-sets/enums";
import { ArtifactSlotKeys } from "../../artifact-slots/enums";
import { CharacterKeys } from "../../characters/enums";
import { StatKeys } from "../../stats/enums";
import { TalentKeys } from "../../talents/enums";
import { WeaponKeys } from "../../weapons/enums";

export default {
  artifacts: {
    sets: [
      {
        key: ArtifactSetKeys.TenacityOfTheMillelith,
        notes: [
          "Набор увеличивает лечение Синобу благодаря бонусу HP и увеличивает силу атаки и прочность щита всего отряда, так как элементальный навык Синобу срабатывает каждые 1.5 секунды.",
          "Набор хорошо показывает себя в любом отряде",
        ],
      },
      {
        key: ArtifactSetKeys.MaidenBeloved,
        notes: ["Набор хорошо работает, если Синобу используется исключительно для лечения команды."],
      },
      {
        key: ArtifactSetKeys.FlowerOfParadiseLost,
        notes: [
          "Набор хорошо работает только в команде с Дендро и Гидро персонажами. Бонус мастерства стихий увеличивает лечение Синобу и урон от реакций.",
          "Так как элементальный навык Синобу срабатывает каждый 1.5 секунды, он активирует реакцию Вегетация и увеличивает урон реакции.",
        ],
      },
      {
        key: ArtifactSetKeys.GildedDreams,
        notes: [
          "Бонус мастерства стихий увеличивает лечение Синобу и урон от реакций.",
          "Отлично подходит для отрядов, которые вызывают реакции с Дендро.",
        ],
      },
    ],
    stats: {
      [ArtifactSlotKeys.Sands]: [
        { key: StatKeys.ElementalMastery, use_percent: 0.894 },
        { key: StatKeys.HpPercentage, use_percent: 0.073 },
        { key: StatKeys.AtkPercentage, use_percent: 0.016 },
      ],
      [ArtifactSlotKeys.Goblet]: [
        { key: StatKeys.ElementalMastery, use_percent: 0.810 },
        { key: StatKeys.HpPercentage, use_percent: 0.114 },
        { key: StatKeys.ElectroDmgBonus, use_percent: 0.044 },
      ],
      [ArtifactSlotKeys.Circlet]: [
        { key: StatKeys.ElementalMastery, use_percent: 0.807 },
        { key: StatKeys.Heal, use_percent: 0.071 },
        { key: StatKeys.HpPercentage, use_percent: 0.056 },
      ],
      additional: [
        { key: StatKeys.ElementalMastery, notes: ["Приоритетно", "от 700"] },
        { key: StatKeys.HpPercentage, notes: ["от 30000"] },
      ],
    },
  },
  character_key: CharacterKeys.KukiShinobu,
  key_constellations: [2],
  required_level: 90,
  talent_leveling: [
    { key: TalentKeys.NormalAttack, priority: "Не качаем\n(1)" },
    { key: TalentKeys.ElementalSkill, priority: "В первую очередь\n(8)" },
    { key: TalentKeys.ElementalBurst, priority: "Не качаем\n(1)" },
  ],
  video_sources: [
    { title: "Miron MinMax: Лучшее Оружие для Каждого Персонажа", youtube_url: "https://youtu.be/cjatyGw0EO0" },
    {
      title: "Miron MinMax: ВСЁ про ВСЕ таланты ft.@AnimeCool_Genshin",
      vk_url: "https://vkvideo.ru/video-227044935_456239080",
    },
  ],
  weapons: [
    { key: WeaponKeys.FreedomSworn, refinement: 1, is_better: true },
    { key: WeaponKeys.XiphosMoonlight },
  ],
} as ICharacterRecommendations;
