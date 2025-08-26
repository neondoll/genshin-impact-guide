import { ArtifactSetCharacterRecommendationClass, ArtifactSetRecommendationsClass } from "../classes";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSetRecommendationsVideoSources } from "../enums";
import { ArtifactSlotIds } from "../../artifact-slots/enums";
import { CharacterIds } from "../../characters/enums";
import { StatKeys } from "@/database/stats/enums";

export default ArtifactSetRecommendationsClass.init([ArtifactSetIds.FlowerOfParadiseLost, [
  new ArtifactSetCharacterRecommendationClass(CharacterIds.KukiShinobu).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Nilou).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.RaidenShogun).setIsBetter(),
]])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatKeys.ElementalMastery, StatKeys.HpPercentage],
    [ArtifactSlotIds.Goblet]: [StatKeys.ElementalMastery, StatKeys.HpPercentage],
    [ArtifactSlotIds.Circlet]: [StatKeys.ElementalMastery, StatKeys.HpPercentage],
    additional: [StatKeys.ElementalMastery, StatKeys.EnergyRecharge, StatKeys.HpPercentage],
  })
  .setVideoSources([ArtifactSetRecommendationsVideoSources.AllAboutAll]);
