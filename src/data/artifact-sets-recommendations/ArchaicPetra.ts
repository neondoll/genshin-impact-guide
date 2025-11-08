import { ARTIFACT_SETS } from "@/features/artifact-sets";
import { ARTIFACT_SLOTS } from "@/features/artifact-slots";
import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { CharacterIds } from "@/enums/character";
import { STATS } from "@/constants/stats";
import { StatsCrit } from "./_help";
import { VideoSourceIds } from "@/enums/video-source";

export default new ArtifactSetRecommendations(ARTIFACT_SETS.ARCHAIC_PETRA)
  .setCharacters([
    new ArtifactSetCharacterRecommendation(CharacterIds.Albedo),
    new ArtifactSetCharacterRecommendation(CharacterIds.Ningguang).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Noelle).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.YunJin),
    new ArtifactSetCharacterRecommendation(CharacterIds.Zhongli).setIsBetter(),
  ])
  .setPreferredStats({
    [ARTIFACT_SLOTS.SANDS]: [STATS.DEF_PERCENTAGE, STATS.ENERGY_RECHARGE, STATS.HP_PERCENTAGE],
    [ARTIFACT_SLOTS.GOBLET]: [STATS.DEF_PERCENTAGE, STATS.HP_PERCENTAGE],
    [ARTIFACT_SLOTS.CIRCLET]: [...StatsCrit, STATS.HP_PERCENTAGE],
    additional: [...StatsCrit, STATS.ATK_PERCENTAGE, STATS.ELEMENTAL_MASTERY, STATS.ENERGY_RECHARGE],
  })
  .setVideoSourceIds([VideoSourceIds.AllAboutAllArtifactSets]);
