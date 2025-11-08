import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ARTIFACT_SETS } from "@/features/artifact-sets";
import { ARTIFACT_SLOTS } from "@/features/artifact-slots";
import { CharacterIds } from "@/enums/character";
import { STATS } from "@/constants/stats";
import { VideoSourceIds } from "@/enums/video-source";

export default new ArtifactSetRecommendations(ARTIFACT_SETS.SONG_OF_DAYS_PAST)
  .setCharacters([
    new ArtifactSetCharacterRecommendation(CharacterIds.Barbara).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.SangonomiyaKokomi).setIsBetter(),
  ])
  .setPreferredStats({
    [ARTIFACT_SLOTS.SANDS]: [STATS.HP_PERCENTAGE],
    [ARTIFACT_SLOTS.GOBLET]: [STATS.HP_PERCENTAGE],
    [ARTIFACT_SLOTS.CIRCLET]: [STATS.HEALING_BONUS, STATS.HP_PERCENTAGE],
    additional: [STATS.ENERGY_RECHARGE, STATS.HP_PERCENTAGE],
  })
  .setVideoSourceIds([VideoSourceIds.AllAboutAllArtifactSets]);
