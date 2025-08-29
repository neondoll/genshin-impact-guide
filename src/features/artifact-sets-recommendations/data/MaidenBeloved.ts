import { ArtifactSetCharacterRecommendationClass, ArtifactSetRecommendationsClass } from "../classes";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSetRecommendationsVideoSources } from "../enums";
import { ArtifactSlotIds } from "../../artifact-slots/enums";
import { CharacterIds } from "../../characters/enums";
import { StatIds } from "../../stats/enums";

export default ArtifactSetRecommendationsClass.init([ArtifactSetIds.MaidenBeloved, [
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Barbara).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Jean).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Qiqi),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.SangonomiyaKokomi).setIsBetter(),
]])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatIds.AtkPercentage, StatIds.EnergyRecharge, StatIds.HpPercentage],
    [ArtifactSlotIds.Goblet]: [StatIds.AtkPercentage, StatIds.EnergyRecharge, StatIds.HpPercentage],
    [ArtifactSlotIds.Circlet]: [StatIds.AtkPercentage, StatIds.Heal, StatIds.HpPercentage],
    additional: [StatIds.AtkPercentage, StatIds.EnergyRecharge, StatIds.HpPercentage],
  })
  .setVideoSources([ArtifactSetRecommendationsVideoSources.AllAboutAll]);
