import type { CharacterRecommendations as Type } from "@/types/character-recommendations";
import type { ElementId } from "@/types/element";
import { ArtifactSetIds } from "@/enums/artifact-set";
import { ArtifactSlotIds } from "@/enums/artifact-slot";
import {
  CharacterArtifactRecommendations as ClassArtifacts,
  CharacterArtifactSetRecommendationWithId as ClassArtifactSetWithId,
  CharacterArtifactSetRecommendationWithIds as ClassArtifactSetWithIds,
  CharacterArtifactStatRecommendation as ClassArtifactStat,
  CharacterRecommendations as Class,
  CharacterWeaponRecommendation as ClassWeapon,
} from "@/classes/character-recommendations";
import { CharacterIds } from "@/enums/character";
import { ElementIds } from "@/enums/element";
import { StatIds } from "@/enums/stat";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";

const TravelerADEGHRecommendationsVideoSourceIds = [
  VideoSourceIds.TheBestAvailableWeaponsForEveryCharacter,
  VideoSourceIds.TheBestWeaponsForEveryCharacter,
];
const TravelerADEGHRecommendationsWeapons = [
  new ClassWeapon(WeaponIds.FavoniusSword).setIsBetter("Лучшее сигнатурное/доступное оружие").setRefinement(5),
  new ClassWeapon(WeaponIds.SacrificialSword).setIsBetter("Лучшее сигнатурное/доступное оружие").setRefinement(5),
];

export default {
  [ElementIds.Anemo]: new Class(CharacterIds.TravelerAnemo)
    .setVideoSourceIds(TravelerADEGHRecommendationsVideoSourceIds)
    .setWeapons(TravelerADEGHRecommendationsWeapons),
  [ElementIds.Dendro]: new Class(CharacterIds.TravelerDendro)
    .setRequiredLevel("90/90")
    .setVideoSourceIds([...TravelerADEGHRecommendationsVideoSourceIds, VideoSourceIds.WhoNeedsLevelingPart1])
    .setWeapons(TravelerADEGHRecommendationsWeapons),
  [ElementIds.Electro]: new Class(CharacterIds.TravelerElectro)
    .setVideoSourceIds(TravelerADEGHRecommendationsVideoSourceIds)
    .setWeapons(TravelerADEGHRecommendationsWeapons),
  [ElementIds.Geo]: new Class(CharacterIds.TravelerGeo)
    .setVideoSourceIds(TravelerADEGHRecommendationsVideoSourceIds)
    .setWeapons(TravelerADEGHRecommendationsWeapons),
  [ElementIds.Hydro]: new Class(CharacterIds.TravelerHydro)
    .setVideoSourceIds(TravelerADEGHRecommendationsVideoSourceIds)
    .setWeapons(TravelerADEGHRecommendationsWeapons),
  [ElementIds.Pyro]: new Class(CharacterIds.TravelerPyro)
    .setArtifacts(ClassArtifacts.init([
      [
        new ClassArtifactSetWithId(ArtifactSetIds.ScrollOfTheHeroOfCinderCity).setDescription("для игры из кармана"),
        new ClassArtifactSetWithId(ArtifactSetIds.TenacityOfTheMillelith).setDescription("для игры из кармана"),
        new ClassArtifactSetWithId(ArtifactSetIds.Instructor).setDescription("для игры из кармана"),
        new ClassArtifactSetWithId(ArtifactSetIds.ObsidianCodex).setDescription("для игры на поле").setPercent(1.000),
        new ClassArtifactSetWithId(ArtifactSetIds.GildedDreams).setDescription("для игры на поле").setPercent(0.884),
        new ClassArtifactSetWithIds([ArtifactSetIds.GladiatorsFinale, ArtifactSetIds.ShimenawasReminiscence]).setDescription("для игры на поле").setPercent(0.839),
        new ClassArtifactSetWithIds([ArtifactSetIds.GladiatorsFinale, ArtifactSetIds.CrimsonWitchOfFlames]).setDescription("для игры на поле").setPercent(0.827),
        new ClassArtifactSetWithIds([ArtifactSetIds.ObsidianCodex, ArtifactSetIds.CrimsonWitchOfFlames]).setDescription("для игры на поле").setPercent(0.819),
      ],
      {
        [ArtifactSlotIds.Sands]: [new ClassArtifactStat(StatIds.AtkPercentage)],
        [ArtifactSlotIds.Goblet]: [
          new ClassArtifactStat(StatIds.PyroDmgBonus),
          new ClassArtifactStat(StatIds.AtkPercentage),
        ],
        [ArtifactSlotIds.Circlet]: [new ClassArtifactStat(StatIds.CritRate), new ClassArtifactStat(StatIds.CritDMG)],
        additional: [
          new ClassArtifactStat(StatIds.CritDMG),
          new ClassArtifactStat(StatIds.CritRate),
          new ClassArtifactStat(StatIds.AtkPercentage),
          new ClassArtifactStat(StatIds.EnergyRecharge).setNotes(["Намеренно собирать не нужно"]),
          new ClassArtifactStat(StatIds.Atk),
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
} as Record<Exclude<ElementId, typeof ElementIds.Cryo>, Type>;
