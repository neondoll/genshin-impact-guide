import type { ICharacterRecommendations } from "../types";
import type { TElementKey } from "../../elements/types";
import { ArtifactSetIds } from "@/features/artifact-sets/enums";
import { ArtifactSlotKeys } from "../../artifact-slots/enums";
import { CharacterKeys } from "../../characters/enums";
import { ElementKeys } from "../../elements/enums";
import { StatKeys } from "../../stats/enums";
import { WeaponKeys } from "../../weapons/enums";

const recommendations = {
  video_sources: [
    { title: "Miron MinMax: Лучшее Оружие для Каждого Персонажа", youtube_url: "https://youtu.be/cjatyGw0EO0" },
  ],
  weapons: [
    { key: WeaponKeys.FavoniusSword, refinement: 5, is_better: true },
    { key: WeaponKeys.SacrificialSword, refinement: 5, is_better: true },
  ],
} as Omit<ICharacterRecommendations, "character_key">;

export default {
  [ElementKeys.Anemo]: { ...recommendations, character_key: CharacterKeys.TravelerAnemo },
  [ElementKeys.Dendro]: { ...recommendations, character_key: CharacterKeys.TravelerDendro },
  [ElementKeys.Electro]: { ...recommendations, character_key: CharacterKeys.TravelerElectro },
  [ElementKeys.Geo]: { ...recommendations, character_key: CharacterKeys.TravelerGeo },
  [ElementKeys.Hydro]: { ...recommendations, character_key: CharacterKeys.TravelerHydro },
  [ElementKeys.Pyro]: {
    artifacts: {
      sets: [
        { key: ArtifactSetIds.ScrollOfTheHeroOfCinderCity, description: "для игры из кармана" },
        { key: ArtifactSetIds.TenacityOfTheMillelith, description: "для игры из кармана" },
        { key: ArtifactSetIds.Instructor, description: "для игры из кармана" },
        { key: ArtifactSetIds.ObsidianCodex, description: "для игры на поле", percent: 1.000 },
        { key: ArtifactSetIds.GildedDreams, description: "для игры на поле", percent: 0.884 },
        {
          keys: [ArtifactSetIds.GladiatorsFinale, ArtifactSetIds.ShimenawasReminiscence],
          description: "для игры на поле",
          percent: 0.839,
        },
        {
          keys: [ArtifactSetIds.GladiatorsFinale, ArtifactSetIds.CrimsonWitchOfFlames],
          description: "для игры на поле",
          percent: 0.827,
        },
        {
          keys: [ArtifactSetIds.ObsidianCodex, ArtifactSetIds.CrimsonWitchOfFlames],
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
    character_key: CharacterKeys.TravelerPyro,
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
} as Record<Exclude<TElementKey, typeof ElementKeys.Cryo>, ICharacterRecommendations>;
