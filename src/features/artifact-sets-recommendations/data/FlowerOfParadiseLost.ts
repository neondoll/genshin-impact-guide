import { ArtifactSetCharacterRecommendationClass, ArtifactSetRecommendationsClass } from "../classes";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSetRecommendationsVideoSources } from "../enums";
import { ArtifactSlotIds } from "../../artifact-slots/enums";
import { CharacterIds } from "../../characters/enums";
import { StatIds } from "../../stats/enums";

export default ArtifactSetRecommendationsClass.init([ArtifactSetIds.FlowerOfParadiseLost, [
  new ArtifactSetCharacterRecommendationClass(CharacterIds.KukiShinobu).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Nilou).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.RaidenShogun).setIsBetter(),
]])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatIds.ElementalMastery, StatIds.HpPercentage],
    [ArtifactSlotIds.Goblet]: [StatIds.ElementalMastery, StatIds.HpPercentage],
    [ArtifactSlotIds.Circlet]: [StatIds.ElementalMastery, StatIds.HpPercentage],
    additional: [StatIds.ElementalMastery, StatIds.EnergyRecharge, StatIds.HpPercentage],
  })
  .setVideoSources([ArtifactSetRecommendationsVideoSources.AllAboutAll]);
