import { ArtifactSetCharacterRecommendationClass, ArtifactSetRecommendationsClass } from "../classes";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSetRecommendationsVideoSources } from "../enums";
import { ArtifactSlotIds } from "../../artifact-slots/enums";
import { CharacterIds } from "../../characters/enums";
import { StatKeys } from "@/database/stats/enums";
import { StatsCrit, StatsElementDamageBonus } from "./_help";

export default ArtifactSetRecommendationsClass.init([ArtifactSetIds.Lavawalker, [
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Diluc),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.HuTao),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Klee).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Lyney).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Yanfei),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Yoimiya),
]])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatKeys.AtkPercentage],
    [ArtifactSlotIds.Goblet]: [...StatsElementDamageBonus, StatKeys.AtkPercentage],
    [ArtifactSlotIds.Circlet]: StatsCrit,
    additional: [...StatsCrit, StatKeys.AtkPercentage, StatKeys.EnergyRecharge],
  })
  .setVideoSources([ArtifactSetRecommendationsVideoSources.AllAboutAll]);
