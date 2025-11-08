import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ARTIFACT_SETS } from "@/features/artifact-sets";
import { ARTIFACT_SLOTS } from "@/features/artifact-slots";
import { CharacterIds } from "@/enums/character";
import { STATS } from "@/constants/stats";
import { StatsCrit, StatsElementDamageBonus } from "./_help";
import { VideoSourceIds } from "@/enums/video-source";

export default new ArtifactSetRecommendations(ARTIFACT_SETS.BLOODSTAINED_CHIVALRY)
  .setCharacters([
    new ArtifactSetCharacterRecommendation(CharacterIds.Eula).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Freminet),
    new ArtifactSetCharacterRecommendation(CharacterIds.Razor),
  ])
  .setPreferredStats({
    [ARTIFACT_SLOTS.SANDS]: [STATS.ATK_PERCENTAGE],
    [ARTIFACT_SLOTS.GOBLET]: [...StatsElementDamageBonus, STATS.ATK_PERCENTAGE],
    [ARTIFACT_SLOTS.CIRCLET]: StatsCrit,
    additional: [...StatsCrit, STATS.ATK_PERCENTAGE, STATS.ENERGY_RECHARGE],
  })
  .setVideoSourceIds([VideoSourceIds.AllAboutAllArtifactSets]);
