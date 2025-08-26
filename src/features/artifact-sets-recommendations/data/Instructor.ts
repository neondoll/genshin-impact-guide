import { ArtifactSetCharacterRecommendationClass, ArtifactSetRecommendationsClass } from "../classes";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSetRecommendationsVideoSources } from "../enums";
import { ArtifactSlotIds } from "../../artifact-slots/enums";
import { CharacterIds } from "../../characters/enums";
import { StatKeys } from "@/database/stats/enums";

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
    [ArtifactSlotIds.Sands]: [StatKeys.ElementalMastery, StatKeys.EnergyRecharge, StatKeys.HpPercentage],
    [ArtifactSlotIds.Goblet]: [StatKeys.ElementalMastery, StatKeys.HpPercentage],
    [ArtifactSlotIds.Circlet]: [StatKeys.ElementalMastery, StatKeys.HpPercentage],
    additional: [StatKeys.ElementalMastery, StatKeys.EnergyRecharge, StatKeys.HpPercentage],
  })
  .setVideoSources([ArtifactSetRecommendationsVideoSources.AllAboutAll]);
