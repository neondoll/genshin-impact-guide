import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ARTIFACT_SETS } from "@/features/artifact-sets";
import { ARTIFACT_SLOTS } from "@/features/artifact-slots";
import { CharacterIds } from "@/enums/character";
import { STATS } from "@/constants/stats";
import { StatsCrit, StatsElementDamageBonus } from "./_help";
import { VideoSourceIds } from "@/enums/video-source";

export default new ArtifactSetRecommendations(ARTIFACT_SETS.NOBLESSE_OBLIGE)
  .setCharacters([
    new ArtifactSetCharacterRecommendation(CharacterIds.Bennett).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Charlotte).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Chevreuse).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Ganyu).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Gorou).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Jean).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.KujouSara).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Mona).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Shenhe).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Xingqiu).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Zhongli).setIsBetter(),
  ])
  .setPreferredStats({
    [ARTIFACT_SLOTS.SANDS]: [STATS.ATK_PERCENTAGE, STATS.ENERGY_RECHARGE, STATS.HP_PERCENTAGE],
    [ARTIFACT_SLOTS.GOBLET]: [...StatsElementDamageBonus, STATS.ATK_PERCENTAGE, STATS.HP_PERCENTAGE],
    [ARTIFACT_SLOTS.CIRCLET]: [...StatsCrit, STATS.HP_PERCENTAGE],
    additional: [
      ...StatsCrit, STATS.ATK_PERCENTAGE, STATS.ELEMENTAL_MASTERY, STATS.ENERGY_RECHARGE, STATS.HP_PERCENTAGE,
    ],
  })
  .setVideoSourceIds([VideoSourceIds.AllAboutAllArtifactSets]);
