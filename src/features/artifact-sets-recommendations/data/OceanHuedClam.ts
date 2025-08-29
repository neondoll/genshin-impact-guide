import { ArtifactSetCharacterRecommendationClass, ArtifactSetRecommendationsClass } from "../classes";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSetRecommendationsVideoSources } from "../enums";
import { ArtifactSlotIds } from "../../artifact-slots/enums";
import { CharacterIds } from "../../characters/enums";
import { StatIds } from "../../stats/enums";

export default ArtifactSetRecommendationsClass.init([ArtifactSetIds.OceanHuedClam, [
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Baizhu),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Barbara).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Jean),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.SangonomiyaKokomi).setIsBetter(),
]])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatIds.EnergyRecharge, StatIds.HpPercentage],
    [ArtifactSlotIds.Goblet]: [StatIds.EnergyRecharge, StatIds.HpPercentage],
    [ArtifactSlotIds.Circlet]: [StatIds.Heal, StatIds.HpPercentage],
    additional: [StatIds.EnergyRecharge, StatIds.HpPercentage],
  })
  .setVideoSources([ArtifactSetRecommendationsVideoSources.AllAboutAll]);
