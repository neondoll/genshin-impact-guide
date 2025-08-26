import { ArtifactSetCharacterRecommendationClass, ArtifactSetRecommendationsClass } from "../classes";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSetRecommendationsVideoSources } from "../enums";
import { ArtifactSlotIds } from "../../artifact-slots/enums";
import { CharacterIds } from "../../characters/enums";
import { StatKeys } from "@/database/stats/enums";

export default ArtifactSetRecommendationsClass.init([ArtifactSetIds.OceanHuedClam, [
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Baizhu),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Barbara).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Jean),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.SangonomiyaKokomi).setIsBetter(),
]])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatKeys.EnergyRecharge, StatKeys.HpPercentage],
    [ArtifactSlotIds.Goblet]: [StatKeys.EnergyRecharge, StatKeys.HpPercentage],
    [ArtifactSlotIds.Circlet]: [StatKeys.Heal, StatKeys.HpPercentage],
    additional: [StatKeys.EnergyRecharge, StatKeys.HpPercentage],
  })
  .setVideoSources([ArtifactSetRecommendationsVideoSources.AllAboutAll]);
