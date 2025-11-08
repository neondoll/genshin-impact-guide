import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ARTIFACT_SETS } from "@/features/artifact-sets";
import { ARTIFACT_SLOTS } from "@/features/artifact-slots";
import { CharacterIds } from "@/enums/character";
import { STATS } from "@/constants/stats";
import { StatsCrit, StatsElementDamageBonus } from "./_help";
import { VideoSourceIds } from "@/enums/video-source";

export default new ArtifactSetRecommendations(ARTIFACT_SETS.SHIMENAWAS_REMINISCENCE)
  .setCharacters([
    new ArtifactSetCharacterRecommendation(CharacterIds.Ganyu).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.HuTao).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Wanderer).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Wriothesley).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Yoimiya).setIsBetter(),
  ])
  .setPreferredStats({
    [ARTIFACT_SLOTS.SANDS]: [STATS.ATK_PERCENTAGE, STATS.ELEMENTAL_MASTERY, STATS.HP_PERCENTAGE],
    [ARTIFACT_SLOTS.GOBLET]: [...StatsElementDamageBonus, STATS.ATK_PERCENTAGE],
    [ARTIFACT_SLOTS.CIRCLET]: StatsCrit,
    additional: [
      ...StatsCrit, STATS.ATK_PERCENTAGE, STATS.ELEMENTAL_MASTERY, STATS.ENERGY_RECHARGE, STATS.HP_PERCENTAGE,
    ],
  })
  .setVideoSourceIds([VideoSourceIds.AllAboutAllArtifactSets]);
