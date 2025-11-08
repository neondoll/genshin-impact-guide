import { artifactSetById } from "./_help";
import { ARTIFACT_SETS } from "@/features/artifact-sets";
import { ARTIFACT_SLOTS } from "@/features/artifact-slots";
import {
  CharacterArtifactRecommendations,
  CharacterArtifactSetRecommendationWithId,
  CharacterArtifactStatRecommendation,
  CharacterRecommendations,
  CharacterTalentLevelingRecommendation,
  CharacterWeaponRecommendation,
} from "@/classes/character-recommendations";
import { CharacterIds } from "@/enums/character";
import { STATS } from "@/constants/stats";
import { TalentIds } from "@/enums/talent";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";
import weapons from "../weapons";

export default new CharacterRecommendations(CharacterIds.Chevreuse)
  .setArtifacts(CharacterArtifactRecommendations.init([
    [
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.NOBLESSE_OBLIGE),
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.SONG_OF_DAYS_PAST).setDescription("Не рекомендуется, слишком нестабильна и требует овер хил"),
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.SCROLL_OF_THE_HERO_OF_CINDER_CITY).setDescription(`Если ${artifactSetById(ARTIFACT_SETS.NOBLESSE_OBLIGE)} занята`),
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.EMBLEM_OF_SEVERED_FATE).setDescription(`Если ${artifactSetById(ARTIFACT_SETS.NOBLESSE_OBLIGE)} и ${artifactSetById(ARTIFACT_SETS.SCROLL_OF_THE_HERO_OF_CINDER_CITY)} заняты`),
    ],
    {
      [ARTIFACT_SLOTS.SANDS]: [new CharacterArtifactStatRecommendation(STATS.HP_PERCENTAGE)],
      [ARTIFACT_SLOTS.GOBLET]: [new CharacterArtifactStatRecommendation(STATS.HP_PERCENTAGE)],
      [ARTIFACT_SLOTS.CIRCLET]: [
        new CharacterArtifactStatRecommendation(STATS.HP_PERCENTAGE),
        new CharacterArtifactStatRecommendation(STATS.CRIT_RATE).setDescription(`Если в руках ${weapons[WeaponIds.FavoniusLance].title}`),
      ],
      additional: [
        new CharacterArtifactStatRecommendation(STATS.HP_PERCENTAGE),
        new CharacterArtifactStatRecommendation(STATS.ENERGY_RECHARGE),
      ],
    },
  ]))
  .setRequiredLevel(90)
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "В первую очередь\n(8)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "Во вторую очередь\n(8)"]),
  ])
  .setVideoSourceIds([
    VideoSourceIds.AllAboutAllTalents,
    VideoSourceIds.TheBestAvailableWeaponsForEveryCharacter,
    VideoSourceIds.TheBestWeaponsForEveryCharacter,
  ])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.StaffOfHoma).setIsBetter("Лучшее оружие (низкая зависимость)").setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.DialoguesOfTheDesertSages).setIsBetter("Лучшее доступное оружие").setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.RightfulReward).setIsBetter("Лучшее доступное оружие").setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.FavoniusLance).setRefinement(5),
  ]);
