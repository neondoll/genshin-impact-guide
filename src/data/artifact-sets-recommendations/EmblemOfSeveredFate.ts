import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ARTIFACT_SETS } from "@/features/artifact-sets";
import { ARTIFACT_SLOTS } from "@/features/artifact-slots";
import { CharacterIds } from "@/enums/character";
import { STATS } from "@/constants/stats";
import { StatsCrit, StatsElementDamageBonus } from "./_help";
import { VideoSourceIds } from "@/enums/video-source";

export default new ArtifactSetRecommendations(ARTIFACT_SETS.EMBLEM_OF_SEVERED_FATE)
  .setCharacters([
    new ArtifactSetCharacterRecommendation(CharacterIds.Chevreuse).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Ganyu),
    new ArtifactSetCharacterRecommendation(CharacterIds.Mona),
    new ArtifactSetCharacterRecommendation(CharacterIds.RaidenShogun).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Shenhe),
    new ArtifactSetCharacterRecommendation(CharacterIds.Xiangling).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Xingqiu).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Yelan).setIsBetter(),
  ])
  .setPreferredStats({
    [ARTIFACT_SLOTS.SANDS]: [
      STATS.ATK_PERCENTAGE, STATS.ELEMENTAL_MASTERY, STATS.ENERGY_RECHARGE, STATS.HP_PERCENTAGE,
    ],
    [ARTIFACT_SLOTS.GOBLET]: [...StatsElementDamageBonus, STATS.ATK_PERCENTAGE, STATS.HP_PERCENTAGE],
    [ARTIFACT_SLOTS.CIRCLET]: [...StatsCrit, STATS.HP_PERCENTAGE],
    additional: [...StatsCrit, STATS.ATK_PERCENTAGE, STATS.ELEMENTAL_MASTERY, STATS.ENERGY_RECHARGE],
  })
  .setVideoSourceIds([VideoSourceIds.AllAboutAllArtifactSets]);
