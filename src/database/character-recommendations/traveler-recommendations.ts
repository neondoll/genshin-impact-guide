import { ArtifactSetKeys } from "../enums/artifact-set";
import { ArtifactSlotKeys } from "../enums/artifact-slot";
import { CharacterKeys } from "../enums/character";
import { ElementKeys } from "../enums/element";
import { StatKeys } from "../enums/stat";
import { WeaponKeys } from "../enums/weapon";
import type { CharacterRecommendations } from "../types/character-recommendations";
import type { ElementKey } from "../types/element";

const recommendations = {
  video_sources: [
    { title: "Miron MinMax: Лучшее Оружие для Каждого Персонажа", youtube_url: "https://youtu.be/cjatyGw0EO0" },
  ],
  weapons: [
    { key: WeaponKeys.FavoniusSword, refinement: 5, is_better: true },
    { key: WeaponKeys.SacrificialSword, refinement: 5, is_better: true },
  ],
} as Omit<CharacterRecommendations, "character_key">;

export default {
  [ElementKeys["🌪️"]]: { ...recommendations, character_key: CharacterKeys["Traveler🌪️"] },
  [ElementKeys["🌿"]]: { ...recommendations, character_key: CharacterKeys["Traveler🌿"] },
  [ElementKeys["⚡️"]]: { ...recommendations, character_key: CharacterKeys["Traveler⚡️"] },
  [ElementKeys["🏔️"]]: { ...recommendations, character_key: CharacterKeys["Traveler🏔️"] },
  [ElementKeys["💧"]]: { ...recommendations, character_key: CharacterKeys["Traveler💧"] },
  [ElementKeys["🔥"]]: {
    artifacts: {
      sets: [
        { key: ArtifactSetKeys.ScrollOfTheHeroOfCinderCity, description: "для игры из кармана" },
        { key: ArtifactSetKeys.TenacityOfTheMillelith, description: "для игры из кармана" },
        { key: ArtifactSetKeys.Instructor, description: "для игры из кармана" },
        { key: ArtifactSetKeys.ObsidianCodex, description: "для игры на поле", percent: 1.000 },
        { key: ArtifactSetKeys.GildedDreams, description: "для игры на поле", percent: 0.884 },
        {
          keys: [ArtifactSetKeys.GladiatorsFinale, ArtifactSetKeys.ShimenawasReminiscence],
          description: "для игры на поле",
          percent: 0.839,
        },
        {
          keys: [ArtifactSetKeys.GladiatorsFinale, ArtifactSetKeys.CrimsonWitchOfFlames],
          description: "для игры на поле",
          percent: 0.827,
        },
        {
          keys: [ArtifactSetKeys.ObsidianCodex, ArtifactSetKeys.CrimsonWitchOfFlames],
          description: "для игры на поле",
          percent: 0.819,
        },
      ],
      stats: {
        [ArtifactSlotKeys.Sands]: [{ key: StatKeys.AtkPercentage }],
        [ArtifactSlotKeys.Goblet]: [{ key: StatKeys.PyroDmgBonus }, { key: StatKeys.AtkPercentage }],
        [ArtifactSlotKeys.Circlet]: [{ key: StatKeys.CritRate }, { key: StatKeys.CritDMG }],
        additional: [
          { key: StatKeys.CritDMG },
          { key: StatKeys.CritRate },
          { key: StatKeys.AtkPercentage },
          { key: StatKeys.EnergyRecharge, notes: ["Намеренно собирать не нужно"] },
          { key: StatKeys.Atk },
        ],
      },
    },
    character_key: CharacterKeys["Traveler🔥"],
    video_sources: [
      {
        title: "Зачем нужен Пиро Путешественник? | Подробный гайд на Пиро ГГ {Анимекул}",
        vk_url: "https://vkvideo.ru/video-229156089_456239059",
      },
    ],
    weapons: {
      "для игры из кармана": [
        { key: WeaponKeys.FreedomSworn },
        { key: WeaponKeys.FavoniusSword },
        { key: WeaponKeys.SacrificialSword },
      ],
      "для игры на поле": [
        { key: WeaponKeys.MistsplitterReforged, percent: 1.240 },
        { key: WeaponKeys.HaranGeppakuFutsu, percent: 1.172 },
        { key: WeaponKeys.LightOfFoliarIncision, percent: 1.168 },
        { key: WeaponKeys.PrimordialJadeCutter, percent: 1.164 },
        { key: WeaponKeys.UrakuMisugiri, percent: 1.126 },
        { key: WeaponKeys.TheBlackSword, refinement: 5, percent: 1.000 },
        { key: WeaponKeys.WolfFang, refinement: 5, percent: 0.986 },
        { key: WeaponKeys.IronSting, refinement: 5, percent: 0.976 },
        { key: WeaponKeys.KagotsurubeIsshin, refinement: 1, percent: 0.966 },
        { key: WeaponKeys.TheBlackSword, refinement: 1, percent: 0.954 },
        { key: WeaponKeys.WolfFang, refinement: 1, percent: 0.950 },
        { key: WeaponKeys.IronSting, refinement: 1, percent: 0.938 },
      ],
    },
  },
} as Record<Exclude<ElementKey, typeof ElementKeys["❄️"]>, CharacterRecommendations>;
