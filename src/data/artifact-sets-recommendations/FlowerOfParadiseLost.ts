import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ARTIFACT_SETS } from "@/constants/artifact-sets";
import { ARTIFACT_SLOTS } from "@/constants/artifact-slots";
import { CharacterIds } from "@/enums/character";
import { STATS } from "@/constants/stats";
import { VideoSourceIds } from "@/enums/video-source";

export default new ArtifactSetRecommendations(ARTIFACT_SETS.FLOWER_OF_PARADISE_LOST)
  .setCharacters([
    new ArtifactSetCharacterRecommendation(CharacterIds.KukiShinobu).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Nilou).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.RaidenShogun).setIsBetter(),
  ])
  .setPreferredStats({
    [ARTIFACT_SLOTS.SANDS]: [STATS.ELEMENTAL_MASTERY, STATS.HP_PERCENTAGE],
    [ARTIFACT_SLOTS.GOBLET]: [STATS.ELEMENTAL_MASTERY, STATS.HP_PERCENTAGE],
    [ARTIFACT_SLOTS.CIRCLET]: [STATS.ELEMENTAL_MASTERY, STATS.HP_PERCENTAGE],
    additional: [STATS.ELEMENTAL_MASTERY, STATS.ENERGY_RECHARGE, STATS.HP_PERCENTAGE],
  })
  .setVideoSourceIds([VideoSourceIds.AllAboutAllArtifactSets]);
