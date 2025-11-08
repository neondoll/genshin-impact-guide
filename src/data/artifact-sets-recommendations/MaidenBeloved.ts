import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ARTIFACT_SETS } from "@/features/artifact-sets";
import { ARTIFACT_SLOTS } from "@/features/artifact-slots";
import { CharacterIds } from "@/enums/character";
import { STATS } from "@/constants/stats";
import { VideoSourceIds } from "@/enums/video-source";

export default new ArtifactSetRecommendations(ARTIFACT_SETS.MAIDEN_BELOVED)
  .setCharacters([
    new ArtifactSetCharacterRecommendation(CharacterIds.Barbara).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Jean).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Qiqi),
    new ArtifactSetCharacterRecommendation(CharacterIds.SangonomiyaKokomi).setIsBetter(),
  ])
  .setPreferredStats({
    [ARTIFACT_SLOTS.SANDS]: [STATS.ATK_PERCENTAGE, STATS.ENERGY_RECHARGE, STATS.HP_PERCENTAGE],
    [ARTIFACT_SLOTS.GOBLET]: [STATS.ATK_PERCENTAGE, STATS.ENERGY_RECHARGE, STATS.HP_PERCENTAGE],
    [ARTIFACT_SLOTS.CIRCLET]: [STATS.ATK_PERCENTAGE, STATS.HEALING_BONUS, STATS.HP_PERCENTAGE],
    additional: [STATS.ATK_PERCENTAGE, STATS.ENERGY_RECHARGE, STATS.HP_PERCENTAGE],
  })
  .setVideoSourceIds([VideoSourceIds.AllAboutAllArtifactSets]);
