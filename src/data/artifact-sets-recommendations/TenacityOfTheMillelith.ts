import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ARTIFACT_SETS } from "@/features/artifact-sets";
import { ARTIFACT_SLOTS } from "@/features/artifact-slots";
import { CharacterIds } from "@/enums/character";
import { STATS } from "@/constants/stats";
import { StatsCrit, StatsElementDamageBonus } from "./_help";
import { VideoSourceIds } from "@/enums/video-source";

export default new ArtifactSetRecommendations(ARTIFACT_SETS.TENACITY_OF_THE_MILLELITH)
  .setCharacters([
    new ArtifactSetCharacterRecommendation(CharacterIds.Dehya),
    new ArtifactSetCharacterRecommendation(CharacterIds.KukiShinobu),
    new ArtifactSetCharacterRecommendation(CharacterIds.Mona).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.SangonomiyaKokomi).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Zhongli).setIsBetter(),
  ])
  .setPreferredStats({
    [ARTIFACT_SLOTS.SANDS]: [STATS.ENERGY_RECHARGE, STATS.HP_PERCENTAGE],
    [ARTIFACT_SLOTS.GOBLET]: [...StatsElementDamageBonus, STATS.HP_PERCENTAGE],
    [ARTIFACT_SLOTS.CIRCLET]: [...StatsCrit, STATS.HP_PERCENTAGE],
    additional: [...StatsCrit, STATS.ATK_PERCENTAGE, STATS.ENERGY_RECHARGE, STATS.HP_PERCENTAGE],
  })
  .setVideoSourceIds([VideoSourceIds.AllAboutAllArtifactSets]);
