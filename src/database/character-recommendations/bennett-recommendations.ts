import { ArtifactSetKeys } from "../enums/artifact-set";
import { ArtifactSlotKeys } from "../enums/artifact-slot";
import { CharacterKeys } from "../enums/character";
import { StAtkeys } from "../enums/stat";
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
        { key: StAtkeys.EnergyRecharge, use_percent: 0.703 },
        { key: StAtkeys.HpPercentage, use_percent: 0.187 },
        { key: StAtkeys.AtkPercentage, use_percent: 0.089 },
      ],
      [ArtifactSlotKeys.Goblet]: [
        { key: StAtkeys.HpPercentage, use_percent: 0.749 },
        { key: StAtkeys.AtkPercentage, use_percent: 0.109 },
        { key: StAtkeys.PyroDmgBonus, use_percent: 0.105 },
      ],
      [ArtifactSlotKeys.Circlet]: [
        { key: StAtkeys.Heal, use_percent: 0.543 },
        { key: StAtkeys.HpPercentage, use_percent: 0.224 },
        { key: StAtkeys.CritRate, use_percent: 0.111 },
        { key: StAtkeys.CritDMG },
      ],
      additional: [
        { key: StAtkeys.HpPercentage, notes: ["Приоритетно", "от 25000"] },
        { key: StAtkeys.EnergyRecharge, notes: ["Приоритетно", "от 220%"] },
        {
          key: StAtkeys.CritRate,
          notes: ["от 50% (при использовании меча Фавония или если Беннет будет наносить дополнительный урон)"],
        },
        { key: StAtkeys.CritDMG, notes: ["от 120% (если Беннет будет наносить дополнительный урон)"] },
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
