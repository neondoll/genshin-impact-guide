import { ArtifactSetCharacterRecommendationClass, ArtifactSetRecommendationsClass } from "../classes";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSetRecommendationsVideoSources } from "../enums";
import { ArtifactSlotIds } from "../../artifact-slots/enums";
import { CharacterIds } from "../../characters/enums";
import { StatIds } from "../../stats/enums";

export default ArtifactSetRecommendationsClass.init([ArtifactSetIds.Instructor, [
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Bennett).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Collei),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Kirara),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.KukiShinobu),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Mona).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Sucrose).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Zhongli).setIsBetter(),
]])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatIds.ElementalMastery, StatIds.EnergyRecharge, StatIds.HpPercentage],
    [ArtifactSlotIds.Goblet]: [StatIds.ElementalMastery, StatIds.HpPercentage],
    [ArtifactSlotIds.Circlet]: [StatIds.ElementalMastery, StatIds.HpPercentage],
    additional: [StatIds.ElementalMastery, StatIds.EnergyRecharge, StatIds.HpPercentage],
  })
  .setVideoSources([ArtifactSetRecommendationsVideoSources.AllAboutAll]);
