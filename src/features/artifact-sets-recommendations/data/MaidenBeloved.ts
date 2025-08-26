import { ArtifactSetCharacterRecommendationClass, ArtifactSetRecommendationsClass } from "../classes";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSetRecommendationsVideoSources } from "../enums";
import { ArtifactSlotIds } from "../../artifact-slots/enums";
import { CharacterIds } from "../../characters/enums";
import { StatKeys } from "@/database/stats/enums";

export default ArtifactSetRecommendationsClass.init([ArtifactSetIds.MaidenBeloved, [
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Barbara).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Jean).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Qiqi),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.SangonomiyaKokomi).setIsBetter(),
]])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatKeys.AtkPercentage, StatKeys.EnergyRecharge, StatKeys.HpPercentage],
    [ArtifactSlotIds.Goblet]: [StatKeys.AtkPercentage, StatKeys.EnergyRecharge, StatKeys.HpPercentage],
    [ArtifactSlotIds.Circlet]: [StatKeys.AtkPercentage, StatKeys.Heal, StatKeys.HpPercentage],
    additional: [StatKeys.AtkPercentage, StatKeys.EnergyRecharge, StatKeys.HpPercentage],
  })
  .setVideoSources([ArtifactSetRecommendationsVideoSources.AllAboutAll]);
