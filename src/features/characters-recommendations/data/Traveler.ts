import type { CharacterRecommendations } from "../types";
import type { ElementId } from "../../elements/types";
import { ArtifactSetIds } from "@/enums/artifact-set";
import { ArtifactSlotIds } from "@/enums/artifact-slot";
import {
  CharacterArtifactRecommendationsClass,
  CharacterArtifactSetRecommendationWithIdClass,
  CharacterArtifactSetRecommendationWithIdsClass,
  CharacterArtifactStatRecommendationClass,
  CharacterRecommendationsClass,
  CharacterWeaponRecommendationClass,
} from "../classes";
import { CharacterIds } from "../../characters/enums";
import { CharacterRecommendationsVideoSources } from "../enums";
import { ElementIds } from "../../elements/enums";
import { StatIds } from "../../stats/enums";
import { VideoSourceClass } from "../../video-sources/classes";
import { WeaponIds } from "../../weapons/enums";

const TravelerRecommendationsVideoSources = [
  CharacterRecommendationsVideoSources.BestWeaponsForEveryCharacter,
];
const TravelerRecommendationsWeapons = [
  new CharacterWeaponRecommendationClass(WeaponIds.FavoniusSword).setIsBetter().setRefinement(5),
  new CharacterWeaponRecommendationClass(WeaponIds.SacrificialSword).setIsBetter().setRefinement(5),
];

export default {
  [ElementIds.Anemo]: new CharacterRecommendationsClass(CharacterIds.TravelerAnemo)
    .setVideoSources(TravelerRecommendationsVideoSources).setWeapons(TravelerRecommendationsWeapons),
  [ElementIds.Dendro]: new CharacterRecommendationsClass(CharacterIds.TravelerDendro)
    .setVideoSources(TravelerRecommendationsVideoSources).setWeapons(TravelerRecommendationsWeapons),
  [ElementIds.Electro]: new CharacterRecommendationsClass(CharacterIds.TravelerElectro)
    .setVideoSources(TravelerRecommendationsVideoSources).setWeapons(TravelerRecommendationsWeapons),
  [ElementIds.Geo]: new CharacterRecommendationsClass(CharacterIds.TravelerGeo)
    .setVideoSources(TravelerRecommendationsVideoSources).setWeapons(TravelerRecommendationsWeapons),
  [ElementIds.Hydro]: new CharacterRecommendationsClass(CharacterIds.TravelerHydro)
    .setVideoSources(TravelerRecommendationsVideoSources).setWeapons(TravelerRecommendationsWeapons),
  [ElementIds.Pyro]: new CharacterRecommendationsClass(CharacterIds.TravelerPyro)
    .setArtifacts(CharacterArtifactRecommendationsClass.init([
      [
        new CharacterArtifactSetRecommendationWithIdClass(ArtifactSetIds.ScrollOfTheHeroOfCinderCity).setDescription("для игры из кармана"),
        new CharacterArtifactSetRecommendationWithIdClass(ArtifactSetIds.TenacityOfTheMillelith).setDescription("для игры из кармана"),
        new CharacterArtifactSetRecommendationWithIdClass(ArtifactSetIds.Instructor).setDescription("для игры из кармана"),
        new CharacterArtifactSetRecommendationWithIdClass(ArtifactSetIds.ObsidianCodex).setDescription("для игры на поле").setPercent(1.000),
        new CharacterArtifactSetRecommendationWithIdClass(ArtifactSetIds.GildedDreams).setDescription("для игры на поле").setPercent(0.884),
        new CharacterArtifactSetRecommendationWithIdsClass([
          ArtifactSetIds.GladiatorsFinale,
          ArtifactSetIds.ShimenawasReminiscence,
        ]).setDescription("для игры на поле").setPercent(0.839),
        new CharacterArtifactSetRecommendationWithIdsClass([
          ArtifactSetIds.GladiatorsFinale,
          ArtifactSetIds.CrimsonWitchOfFlames,
        ]).setDescription("для игры на поле").setPercent(0.827),
        new CharacterArtifactSetRecommendationWithIdsClass([
          ArtifactSetIds.ObsidianCodex,
          ArtifactSetIds.CrimsonWitchOfFlames,
        ]).setDescription("для игры на поле").setPercent(0.819),
      ],
      {
        [ArtifactSlotIds.Sands]: [new CharacterArtifactStatRecommendationClass(StatIds.AtkPercentage)],
        [ArtifactSlotIds.Goblet]: [
          new CharacterArtifactStatRecommendationClass(StatIds.PyroDmgBonus),
          new CharacterArtifactStatRecommendationClass(StatIds.AtkPercentage),
        ],
        [ArtifactSlotIds.Circlet]: [
          new CharacterArtifactStatRecommendationClass(StatIds.CritRate),
          new CharacterArtifactStatRecommendationClass(StatIds.CritDMG),
        ],
        additional: [
          new CharacterArtifactStatRecommendationClass(StatIds.CritDMG),
          new CharacterArtifactStatRecommendationClass(StatIds.CritRate),
          new CharacterArtifactStatRecommendationClass(StatIds.AtkPercentage),
          new CharacterArtifactStatRecommendationClass(StatIds.EnergyRecharge).setNotes(["Намеренно собирать не нужно"]),
          new CharacterArtifactStatRecommendationClass(StatIds.Atk),
        ],
      },
    ]))
    .setVideoSources([
      new VideoSourceClass("Зачем нужен Пиро Путешественник? | Подробный гайд на Пиро ГГ {Анимекул}").setVkUrl("https://vkvideo.ru/video-229156089_456239059"),
    ])
    .setWeapons({
      "для игры из кармана": [
        new CharacterWeaponRecommendationClass(WeaponIds.FreedomSworn),
        new CharacterWeaponRecommendationClass(WeaponIds.FavoniusSword),
        new CharacterWeaponRecommendationClass(WeaponIds.SacrificialSword),
      ],
      "для игры на поле": [
        new CharacterWeaponRecommendationClass(WeaponIds.MistsplitterReforged).setPercent(1.240),
        new CharacterWeaponRecommendationClass(WeaponIds.HaranGeppakuFutsu).setPercent(1.172),
        new CharacterWeaponRecommendationClass(WeaponIds.LightOfFoliarIncision).setPercent(1.168),
        new CharacterWeaponRecommendationClass(WeaponIds.PrimordialJadeCutter).setPercent(1.164),
        new CharacterWeaponRecommendationClass(WeaponIds.UrakuMisugiri).setPercent(1.126),
        new CharacterWeaponRecommendationClass(WeaponIds.TheBlackSword).setPercent(1.000).setRefinement(5),
        new CharacterWeaponRecommendationClass(WeaponIds.WolfFang).setPercent(0.986).setRefinement(5),
        new CharacterWeaponRecommendationClass(WeaponIds.IronSting).setPercent(0.976).setRefinement(5),
        new CharacterWeaponRecommendationClass(WeaponIds.KagotsurubeIsshin).setPercent(0.966).setRefinement(1),
        new CharacterWeaponRecommendationClass(WeaponIds.TheBlackSword).setPercent(0.954).setRefinement(1),
        new CharacterWeaponRecommendationClass(WeaponIds.WolfFang).setPercent(0.950).setRefinement(1),
        new CharacterWeaponRecommendationClass(WeaponIds.IronSting).setPercent(0.938).setRefinement(1),
      ],
    }),
} as Record<Exclude<ElementId, typeof ElementIds.Cryo>, CharacterRecommendations>;
