import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ARTIFACT_SETS } from "@/constants/artifact-sets";
import { ARTIFACT_SLOTS } from "@/constants/artifact-slots";
import { CharacterIds } from "@/enums/character";
import { STATS } from "@/constants/stats";
import { StatsCrit, StatsElementDamageBonus } from "./_help";
import { VideoSourceIds } from "@/enums/video-source";

export default new ArtifactSetRecommendations(ARTIFACT_SETS.GILDED_DREAMS)
  .setCharacters([
    new ArtifactSetCharacterRecommendation(CharacterIds.Alhaitham).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Cyno).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Keqing),
    new ArtifactSetCharacterRecommendation(CharacterIds.KukiShinobu),
    new ArtifactSetCharacterRecommendation(CharacterIds.Nahida).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.RaidenShogun),
    new ArtifactSetCharacterRecommendation(CharacterIds.Tighnari).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.YaeMiko).setIsBetter(),
  ])
  .setPreferredStats({
    [ARTIFACT_SLOTS.SANDS]: [STATS.ATK_PERCENTAGE, STATS.ELEMENTAL_MASTERY],
    [ARTIFACT_SLOTS.GOBLET]: [...StatsElementDamageBonus, STATS.ELEMENTAL_MASTERY],
    [ARTIFACT_SLOTS.CIRCLET]: [...StatsCrit, STATS.ELEMENTAL_MASTERY],
    additional: [
      ...StatsCrit, STATS.ATK_PERCENTAGE, STATS.ELEMENTAL_MASTERY, STATS.ENERGY_RECHARGE, STATS.HP_PERCENTAGE,
    ],
  })
  .setVideoSourceIds([VideoSourceIds.AllAboutAllArtifactSets]);
