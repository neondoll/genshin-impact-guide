import { ArtifactPieceUidEnum } from "../enums/artifact-piece";
import { ArtifactSetUidEnum } from "../enums/artifact-set";
import { AttributeUidEnum } from "../enums/attribute";
import { CharacterUidEnum } from "../enums/character";
import { ElementUidEnum } from "../enums/element";
import { WeaponUidEnum } from "../enums/weapon";
import type { CharacterRecommendations } from "../types/character-recommendations";
import type { ElementUid } from "../types/element";

const recommendations = {
  video_sources: [
    { title: "Miron MinMax: Лучшее Оружие для Каждого Персонажа", youtube_url: "https://youtu.be/cjatyGw0EO0" },
  ],
  weapons: [
    { uid: WeaponUidEnum.FavoniusSword, refinement: 5, is_better: true },
    { uid: WeaponUidEnum.SacrificialSword, refinement: 5, is_better: true },
  ],
} as Omit<CharacterRecommendations, "character_uid">;

export default {
  [ElementUidEnum.Anemo]: { ...recommendations, character_uid: CharacterUidEnum.TravelerAnemo },
  [ElementUidEnum.Dendro]: { ...recommendations, character_uid: CharacterUidEnum.TravelerDendro },
  [ElementUidEnum.Electro]: { ...recommendations, character_uid: CharacterUidEnum.TravelerElectro },
  [ElementUidEnum.Geo]: { ...recommendations, character_uid: CharacterUidEnum.TravelerGeo },
  [ElementUidEnum.Hydro]: { ...recommendations, character_uid: CharacterUidEnum.TravelerHydro },
  [ElementUidEnum.Pyro]: {
    artifacts: {
      sets: [
        { uid: ArtifactSetUidEnum.ScrollOfTheHeroOfCinderCity, description: "для игры из кармана" },
        { uid: ArtifactSetUidEnum.TenacityOfTheMillelith, description: "для игры из кармана" },
        { uid: ArtifactSetUidEnum.Instructor, description: "для игры из кармана" },
        { uid: ArtifactSetUidEnum.ObsidianCodex, description: "для игры на поле", percent: 1.000 },
        { uid: ArtifactSetUidEnum.GildedDreams, description: "для игры на поле", percent: 0.884 },
        {
          uids: [ArtifactSetUidEnum.GladiatorsFinale, ArtifactSetUidEnum.ShimenawasReminiscence],
          description: "для игры на поле",
          percent: 0.839,
        },
        {
          uids: [ArtifactSetUidEnum.GladiatorsFinale, ArtifactSetUidEnum.CrimsonWitchOfFlames],
          description: "для игры на поле",
          percent: 0.827,
        },
        {
          uids: [ArtifactSetUidEnum.ObsidianCodex, ArtifactSetUidEnum.CrimsonWitchOfFlames],
          description: "для игры на поле",
          percent: 0.819,
        },
      ],
      attributes: {
        [ArtifactPieceUidEnum.SandsOfEon]: [{ uid: AttributeUidEnum.AttackPercent }],
        [ArtifactPieceUidEnum.GobletOfEonothem]: [
          { uid: AttributeUidEnum.PyroDamageBonus },
          { uid: AttributeUidEnum.AttackPercent },
        ],
        [ArtifactPieceUidEnum.CircletOfLogos]: [{ uid: AttributeUidEnum.CritRate }, { uid: AttributeUidEnum.CritDmg }],
        additional: [
          { uid: AttributeUidEnum.CritDmg },
          { uid: AttributeUidEnum.CritRate },
          { uid: AttributeUidEnum.AttackPercent },
          { uid: AttributeUidEnum.EnergyRecharge, notes: ["Намеренно собирать не нужно"] },
          { uid: AttributeUidEnum.Attack },
        ],
      },
    },
    character_uid: CharacterUidEnum.TravelerPyro,
    video_sources: [
      {
        title: "Зачем нужен Пиро Путешественник? | Подробный гайд на Пиро ГГ {Анимекул}",
        vk_url: "https://vkvideo.ru/video-229156089_456239059",
      },
    ],
    weapons: {
      "для игры из кармана": [
        { uid: WeaponUidEnum.FreedomSworn },
        { uid: WeaponUidEnum.FavoniusSword },
        { uid: WeaponUidEnum.SacrificialSword },
      ],
      "для игры на поле": [
        { uid: WeaponUidEnum.MistsplitterReforged, percent: 1.240 },
        { uid: WeaponUidEnum.HaranGeppakuFutsu, percent: 1.172 },
        { uid: WeaponUidEnum.LightOfFoliarIncision, percent: 1.168 },
        { uid: WeaponUidEnum.PrimordialJadeCutter, percent: 1.164 },
        { uid: WeaponUidEnum.UrakuMisugiri, percent: 1.126 },
        { uid: WeaponUidEnum.TheBlackSword, refinement: 5, percent: 1.000 },
        { uid: WeaponUidEnum.WolfFang, refinement: 5, percent: 0.986 },
        { uid: WeaponUidEnum.IronSting, refinement: 5, percent: 0.976 },
        { uid: WeaponUidEnum.KagotsurubeIsshin, refinement: 1, percent: 0.966 },
        { uid: WeaponUidEnum.TheBlackSword, refinement: 1, percent: 0.954 },
        { uid: WeaponUidEnum.WolfFang, refinement: 1, percent: 0.950 },
        { uid: WeaponUidEnum.IronSting, refinement: 1, percent: 0.938 },
      ],
    },
  },
} as Record<Exclude<ElementUid, typeof ElementUidEnum.Cryo>, CharacterRecommendations>;
