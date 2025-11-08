import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ARTIFACT_SETS } from "@/features/artifact-sets";
import { ARTIFACT_SLOTS } from "@/features/artifact-slots";
import { CharacterIds } from "@/enums/character";
import { STATS } from "@/constants/stats";
import { VideoSourceIds } from "@/enums/video-source";

export default new ArtifactSetRecommendations(ARTIFACT_SETS.INSTRUCTOR)
  .setCharacters([
    new ArtifactSetCharacterRecommendation(CharacterIds.Bennett).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Collei),
    new ArtifactSetCharacterRecommendation(CharacterIds.Kirara),
    new ArtifactSetCharacterRecommendation(CharacterIds.KukiShinobu),
    new ArtifactSetCharacterRecommendation(CharacterIds.Mona).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Sucrose).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Zhongli).setIsBetter(),
  ])
  .setPreferredStats({
    [ARTIFACT_SLOTS.SANDS]: [STATS.ELEMENTAL_MASTERY, STATS.ENERGY_RECHARGE, STATS.HP_PERCENTAGE],
    [ARTIFACT_SLOTS.GOBLET]: [STATS.ELEMENTAL_MASTERY, STATS.HP_PERCENTAGE],
    [ARTIFACT_SLOTS.CIRCLET]: [STATS.ELEMENTAL_MASTERY, STATS.HP_PERCENTAGE],
    additional: [STATS.ELEMENTAL_MASTERY, STATS.ENERGY_RECHARGE, STATS.HP_PERCENTAGE],
  })
  .setVideoSourceIds([VideoSourceIds.AllAboutAllArtifactSets]);
