import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ArtifactSetIds } from "@/enums/artifact-set";
import { ArtifactSetRecommendationsVideoSources } from "@/enums/artifact-set-recommendations";
import { ArtifactSlotIds } from "@/enums/artifact-slot";
import { CharacterIds } from "@/features/characters/enums";
import { StatIds } from "@/features/stats/enums";
import { StatsCrit, StatsElementDamageBonus } from "./_help";

export default ArtifactSetRecommendations.init([ArtifactSetIds.Lavawalker, [
  new ArtifactSetCharacterRecommendation(CharacterIds.Diluc),
  new ArtifactSetCharacterRecommendation(CharacterIds.HuTao),
  new ArtifactSetCharacterRecommendation(CharacterIds.Klee).setIsBetter(),
  new ArtifactSetCharacterRecommendation(CharacterIds.Lyney).setIsBetter(),
  new ArtifactSetCharacterRecommendation(CharacterIds.Yanfei),
  new ArtifactSetCharacterRecommendation(CharacterIds.Yoimiya),
]])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatIds.AtkPercentage],
    [ArtifactSlotIds.Goblet]: [...StatsElementDamageBonus, StatIds.AtkPercentage],
    [ArtifactSlotIds.Circlet]: StatsCrit,
    additional: [...StatsCrit, StatIds.AtkPercentage, StatIds.EnergyRecharge],
  })
  .setVideoSources([ArtifactSetRecommendationsVideoSources.AllAboutAll]);
