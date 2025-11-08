import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ARTIFACT_SETS } from "@/features/artifact-sets";
import { ARTIFACT_SLOTS } from "@/features/artifact-slots";
import { CharacterIds } from "@/enums/character";
import { STATS } from "@/constants/stats";
import { StatsCrit, StatsElementDamageBonus } from "./_help";
import { VideoSourceIds } from "@/enums/video-source";

export default new ArtifactSetRecommendations(ARTIFACT_SETS.MARECHAUSSEE_HUNTER)
  .setCharacters([
    new ArtifactSetCharacterRecommendation(CharacterIds.Lyney).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Neuvillette).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Skirk),
    new ArtifactSetCharacterRecommendation(CharacterIds.Wriothesley).setIsBetter(),
  ])
  .setPreferredStats({
    [ARTIFACT_SLOTS.SANDS]: [STATS.ATK_PERCENTAGE, STATS.HP_PERCENTAGE],
    [ARTIFACT_SLOTS.GOBLET]: [...StatsElementDamageBonus, STATS.ATK_PERCENTAGE],
    [ARTIFACT_SLOTS.CIRCLET]: StatsCrit,
    additional: [...StatsCrit, STATS.ATK_PERCENTAGE, STATS.ENERGY_RECHARGE, STATS.HP_PERCENTAGE],
  })
  .setVideoSourceIds([VideoSourceIds.AllAboutAllArtifactSets]);
