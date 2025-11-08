import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ARTIFACT_SETS } from "@/features/artifact-sets";
import { ARTIFACT_SLOTS } from "@/features/artifact-slots";
import { CharacterIds } from "@/enums/character";
import { STATS } from "@/constants/stats";
import { StatsCrit } from "./_help";
import { VideoSourceIds } from "@/enums/video-source";

export default new ArtifactSetRecommendations(ARTIFACT_SETS.HUSK_OF_OPULENT_DREAMS)
  .setCharacters([
    new ArtifactSetCharacterRecommendation(CharacterIds.Albedo),
    new ArtifactSetCharacterRecommendation(CharacterIds.AratakiItto).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Noelle).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.YunJin),
  ])
  .setPreferredStats({
    [ARTIFACT_SLOTS.SANDS]: [STATS.DEF_PERCENTAGE],
    [ARTIFACT_SLOTS.GOBLET]: [STATS.DEF_PERCENTAGE, STATS.GEO_DMG_BONUS],
    [ARTIFACT_SLOTS.CIRCLET]: StatsCrit,
    additional: [...StatsCrit, STATS.DEF_PERCENTAGE, STATS.ENERGY_RECHARGE],
  })
  .setVideoSourceIds([VideoSourceIds.AllAboutAllArtifactSets]);
