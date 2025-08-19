import { ArtifactSetKeys } from "../artifact-sets/enums";
import { ArtifactSlotKeys } from "../artifact-slots/enums";
import { CharacterKeys } from "../characters/enums";
import { StatKeys } from "../enums/stat";
import { TalentKeys } from "../enums/talent";
import { WeaponKeys } from "../enums/weapon";
import type { CharacterRecommendations } from "../types/character-recommendations";

export default {
  artifacts: {
    sets: [
      {
        key: ArtifactSetKeys.NoblesseOblige,
        is_better: true,
        notes: [
          "Лучший комплект для Беннета в роли поддержки. Увеличивает собственный урон от взрыва стихий и даёт дополнительный бонус к атаке. Используется, когда никто другой не носит данный комплект артефактов.",
        ],
      },
      {
        key: ArtifactSetKeys.EmblemOfSeveredFate,
        notes: [
          "Комплект не даёт никаких бонусов другим членам отряда, но увеличивает восстановление энергии Беннета и урон от его взрыва стихий. Комплект используется, если хочется, чтобы Беннет наносил дополнительный урон.",
        ],
      },
    ],
    stats: {
      [ArtifactSlotKeys.Sands]: [
        { key: StatKeys.EnergyRecharge, use_percent: 0.703 },
        { key: StatKeys.HpPercentage, use_percent: 0.187 },
        { key: StatKeys.AtkPercentage, use_percent: 0.089 },
      ],
      [ArtifactSlotKeys.Goblet]: [
        { key: StatKeys.HpPercentage, use_percent: 0.749 },
        { key: StatKeys.AtkPercentage, use_percent: 0.109 },
        { key: StatKeys.PyroDmgBonus, use_percent: 0.105 },
      ],
      [ArtifactSlotKeys.Circlet]: [
        { key: StatKeys.Heal, use_percent: 0.543 },
        { key: StatKeys.HpPercentage, use_percent: 0.224 },
        { key: StatKeys.CritRate, use_percent: 0.111 },
        { key: StatKeys.CritDMG },
      ],
      additional: [
        { key: StatKeys.HpPercentage, notes: ["Приоритетно", "от 25000"] },
        { key: StatKeys.EnergyRecharge, notes: ["Приоритетно", "от 220%"] },
        {
          key: StatKeys.CritRate,
          notes: ["от 50% (при использовании меча Фавония или если Беннет будет наносить дополнительный урон)"],
        },
        { key: StatKeys.CritDMG, notes: ["от 120% (если Беннет будет наносить дополнительный урон)"] },
      ],
    },
  },
  character_key: CharacterKeys.Bennett,
  key_constellations: [6],
  required_level: 90,
  talent_leveling: [
    { key: TalentKeys.NormalAttack, priority: "Не качаем\n(1)" },
    { key: TalentKeys.ElementalSkill, priority: "Не качаем\n(1)" },
    { key: TalentKeys.ElementalBurst, priority: "В первую очередь\n(10)" },
  ],
  video_sources: [
    { title: "Miron MinMax: Лучшее Оружие для Каждого Персонажа", youtube_url: "https://youtu.be/cjatyGw0EO0" },
    {
      title: "Miron MinMax: ВСЁ про ВСЕ таланты ft.@AnimeCool_Genshin",
      vk_url: "https://vkvideo.ru/video-227044935_456239080",
    },
  ],
  weapons: [
    { key: WeaponKeys.MistsplitterReforged, refinement: 1, is_better: true },
    { key: WeaponKeys.AquilaFavonia, refinement: 1, is_better: true },
    { key: WeaponKeys.SkywardBlade, refinement: 1, is_better: true },
    { key: WeaponKeys.SapwoodBlade },
  ],
} as CharacterRecommendations;
