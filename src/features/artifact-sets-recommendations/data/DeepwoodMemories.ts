import { ArtifactSetCharacterRecommendationClass, ArtifactSetRecommendationsClass } from "../classes";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSetRecommendationsVideoSources } from "../enums";
import { ArtifactSlotIds } from "../../artifact-slots/enums";
import { CharacterIds } from "../../characters/enums";
import { StatIds } from "../../stats/enums";
import { StatsCrit, StatsElementDamageBonus } from "./_help";

export default ArtifactSetRecommendationsClass.init([ArtifactSetIds.DeepwoodMemories, [
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Baizhu).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Nahida).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Yaoyao).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Zhongli).setIsBetter(),
]])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatIds.ElementalMastery, StatIds.EnergyRecharge, StatIds.HpPercentage],
    [ArtifactSlotIds.Goblet]: [...StatsElementDamageBonus, StatIds.ElementalMastery, StatIds.HpPercentage],
    [ArtifactSlotIds.Circlet]: [...StatsCrit, StatIds.ElementalMastery],
    additional: [...StatsCrit, StatIds.ElementalMastery, StatIds.EnergyRecharge, StatIds.HpPercentage],
  })
  .setVideoSources([ArtifactSetRecommendationsVideoSources.AllAboutAll]);
