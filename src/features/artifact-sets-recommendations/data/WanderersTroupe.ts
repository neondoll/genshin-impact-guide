import { ArtifactSetCharacterRecommendationClass, ArtifactSetRecommendationsClass } from "../classes";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSetRecommendationsVideoSources } from "../enums";
import { ArtifactSlotIds } from "../../artifact-slots/enums";
import { CharacterIds } from "../../characters/enums";
import { StatKeys } from "@/database/stats/enums";
import { StatsCrit, StatsElementDamageBonus } from "./_help";

export default ArtifactSetRecommendationsClass.init([ArtifactSetIds.WanderersTroupe, [
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Amber),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Ganyu).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Klee).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Tighnari).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Yanfei).setIsBetter(),
]])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatKeys.AtkPercentage, StatKeys.ElementalMastery],
    [ArtifactSlotIds.Goblet]: [...StatsElementDamageBonus, StatKeys.AtkPercentage],
    [ArtifactSlotIds.Circlet]: StatsCrit,
    additional: [...StatsCrit, StatKeys.AtkPercentage, StatKeys.ElementalMastery, StatKeys.EnergyRecharge],
  })
  .setVideoSources([ArtifactSetRecommendationsVideoSources.AllAboutAll]);
