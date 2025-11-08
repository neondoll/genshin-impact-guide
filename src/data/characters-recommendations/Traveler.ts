import type { CharacterRecommendations as Type } from "@/types/character-recommendations";
import type { ElementId } from "@/types/element";
import { ARTIFACT_SETS } from "@/constants/artifact-sets";
import { ARTIFACT_SLOTS } from "@/constants/artifact-slots";
import {
  CharacterArtifactRecommendations as ClassArtifacts,
  CharacterArtifactSetRecommendationWithId as ClassArtifactSetWithId,
  CharacterArtifactSetRecommendationWithIds as ClassArtifactSetWithIds,
  CharacterArtifactStatRecommendation as ClassArtifactStat,
  CharacterRecommendations as Class,
  CharacterWeaponRecommendation as ClassWeapon,
} from "@/classes/character-recommendations";
import { CharacterIds } from "@/enums/character";
import { ELEMENTS } from "@/constants/elements";
import { STATS } from "@/constants/stats";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";

const TravelerADEGHRecommendationsVideoSourceIds = [
  VideoSourceIds.TheBestAvailableWeaponsForEveryCharacter,
  VideoSourceIds.TheBestWeaponsForEveryCharacter,
];
const TravelerADEGHRecommendationsWeapons = [
  new ClassWeapon(WeaponIds.FavoniusSword).setIsBetter("Лучшее оружие").setRefinement(5),
  new ClassWeapon(WeaponIds.SacrificialSword).setIsBetter("Лучшее оружие").setRefinement(5),
];

export default {
  [ELEMENTS.ANEMO]: new Class(CharacterIds.TravelerAnemo)
    .setVideoSourceIds(TravelerADEGHRecommendationsVideoSourceIds)
    .setWeapons(TravelerADEGHRecommendationsWeapons),
  [ELEMENTS.DENDRO]: new Class(CharacterIds.TravelerDendro)
    .setRequiredLevel("90/90")
    .setVideoSourceIds([...TravelerADEGHRecommendationsVideoSourceIds, VideoSourceIds.WhoNeedsLevelingPart1])
    .setWeapons(TravelerADEGHRecommendationsWeapons),
  [ELEMENTS.ELECTRO]: new Class(CharacterIds.TravelerElectro)
    .setVideoSourceIds(TravelerADEGHRecommendationsVideoSourceIds)
    .setWeapons(TravelerADEGHRecommendationsWeapons),
  [ELEMENTS.GEO]: new Class(CharacterIds.TravelerGeo)
    .setVideoSourceIds(TravelerADEGHRecommendationsVideoSourceIds)
    .setWeapons(TravelerADEGHRecommendationsWeapons),
  [ELEMENTS.HYDRO]: new Class(CharacterIds.TravelerHydro)
    .setVideoSourceIds(TravelerADEGHRecommendationsVideoSourceIds)
    .setWeapons(TravelerADEGHRecommendationsWeapons),
  [ELEMENTS.PYRO]: new Class(CharacterIds.TravelerPyro)
    .setArtifacts(ClassArtifacts.init([
      [
        new ClassArtifactSetWithId(ARTIFACT_SETS.SCROLL_OF_THE_HERO_OF_CINDER_CITY).setDescription("для игры из кармана"),
        new ClassArtifactSetWithId(ARTIFACT_SETS.TENACITY_OF_THE_MILLELITH).setDescription("для игры из кармана"),
        new ClassArtifactSetWithId(ARTIFACT_SETS.INSTRUCTOR).setDescription("для игры из кармана"),
        new ClassArtifactSetWithId(ARTIFACT_SETS.OBSIDIAN_CODEX).setDescription("для игры на поле").setPercent(1.000),
        new ClassArtifactSetWithId(ARTIFACT_SETS.GILDED_DREAMS).setDescription("для игры на поле").setPercent(0.884),
        new ClassArtifactSetWithIds([ARTIFACT_SETS.GLADIATORS_FINALE, ARTIFACT_SETS.SHIMENAWAS_REMINISCENCE]).setDescription("для игры на поле").setPercent(0.839),
        new ClassArtifactSetWithIds([ARTIFACT_SETS.GLADIATORS_FINALE, ARTIFACT_SETS.CRIMSON_WITCH_OF_FLAMES]).setDescription("для игры на поле").setPercent(0.827),
        new ClassArtifactSetWithIds([ARTIFACT_SETS.OBSIDIAN_CODEX, ARTIFACT_SETS.CRIMSON_WITCH_OF_FLAMES]).setDescription("для игры на поле").setPercent(0.819),
      ],
      {
        [ARTIFACT_SLOTS.SANDS]: [new ClassArtifactStat(STATS.ATK_PERCENTAGE)],
        [ARTIFACT_SLOTS.GOBLET]: [
          new ClassArtifactStat(STATS.PYRO_DMG_BONUS),
          new ClassArtifactStat(STATS.ATK_PERCENTAGE),
        ],
        [ARTIFACT_SLOTS.CIRCLET]: [new ClassArtifactStat(STATS.CRIT_RATE), new ClassArtifactStat(STATS.CRIT_DMG)],
        additional: [
          new ClassArtifactStat(STATS.CRIT_DMG),
          new ClassArtifactStat(STATS.CRIT_RATE),
          new ClassArtifactStat(STATS.ATK_PERCENTAGE),
          new ClassArtifactStat(STATS.ENERGY_RECHARGE).setNotes(["Намеренно собирать не нужно"]),
          new ClassArtifactStat(STATS.ATK),
        ],
      },
    ]))
    .setVideoSourceIds([VideoSourceIds.GuideToTravelerPyro])
    .setWeapons({
      "для игры из кармана": [
        new ClassWeapon(WeaponIds.FreedomSworn),
        new ClassWeapon(WeaponIds.FavoniusSword),
        new ClassWeapon(WeaponIds.SacrificialSword),
      ],
      "для игры на поле": [
        new ClassWeapon(WeaponIds.MistsplitterReforged).setPercent(1.240),
        new ClassWeapon(WeaponIds.HaranGeppakuFutsu).setPercent(1.172),
        new ClassWeapon(WeaponIds.LightOfFoliarIncision).setPercent(1.168),
        new ClassWeapon(WeaponIds.PrimordialJadeCutter).setPercent(1.164),
        new ClassWeapon(WeaponIds.UrakuMisugiri).setPercent(1.126),
        new ClassWeapon(WeaponIds.TheBlackSword).setPercent(1.000).setRefinement(5),
        new ClassWeapon(WeaponIds.WolfFang).setPercent(0.986).setRefinement(5),
        new ClassWeapon(WeaponIds.IronSting).setPercent(0.976).setRefinement(5),
        new ClassWeapon(WeaponIds.KagotsurubeIsshin).setPercent(0.966).setRefinement(1),
        new ClassWeapon(WeaponIds.TheBlackSword).setPercent(0.954).setRefinement(1),
        new ClassWeapon(WeaponIds.WolfFang).setPercent(0.950).setRefinement(1),
        new ClassWeapon(WeaponIds.IronSting).setPercent(0.938).setRefinement(1),
      ],
    }),
} as Record<Exclude<ElementId, typeof ELEMENTS.CRYO>, Type>;
