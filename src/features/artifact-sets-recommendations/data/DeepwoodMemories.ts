import { ArtifactSetCharacterRecommendationClass, ArtifactSetRecommendationsClass } from "../classes";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSetRecommendationsVideoSources } from "../enums";
import { ArtifactSlotIds } from "../../artifact-slots/enums";
import { CharacterIds } from "../../characters/enums";
import { StatKeys } from "@/database/stats/enums";
import { StatsCrit, StatsElementDamageBonus } from "./_help";

export default ArtifactSetRecommendationsClass.init([ArtifactSetIds.DeepwoodMemories, [
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Baizhu).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Nahida).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Yaoyao).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Zhongli).setIsBetter(),
]])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatKeys.ElementalMastery, StatKeys.EnergyRecharge, StatKeys.HpPercentage],
    [ArtifactSlotIds.Goblet]: [...StatsElementDamageBonus, StatKeys.ElementalMastery, StatKeys.HpPercentage],
    [ArtifactSlotIds.Circlet]: [...StatsCrit, StatKeys.ElementalMastery],
    additional: [...StatsCrit, StatKeys.ElementalMastery, StatKeys.EnergyRecharge, StatKeys.HpPercentage],
  })
  .setVideoSources([ArtifactSetRecommendationsVideoSources.AllAboutAll]);
