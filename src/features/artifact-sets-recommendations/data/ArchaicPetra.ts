import { ArtifactSetCharacterRecommendationClass, ArtifactSetRecommendationsClass } from "../classes";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSetRecommendationsVideoSources } from "../enums";
import { ArtifactSlotIds } from "../../artifact-slots/enums";
import { CharacterIds } from "../../characters/enums";
import { StatKeys } from "@/database/stats/enums";
import { StatsCrit } from "./_help";

export default ArtifactSetRecommendationsClass.init([ArtifactSetIds.ArchaicPetra, [
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Albedo),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Ningguang).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Noelle).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.YunJin),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Zhongli).setIsBetter(),
]])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatKeys.DefPercentage, StatKeys.EnergyRecharge, StatKeys.HpPercentage],
    [ArtifactSlotIds.Goblet]: [StatKeys.DefPercentage, StatKeys.HpPercentage],
    [ArtifactSlotIds.Circlet]: [...StatsCrit, StatKeys.HpPercentage],
    additional: [...StatsCrit, StatKeys.AtkPercentage, StatKeys.ElementalMastery, StatKeys.EnergyRecharge],
  })
  .setVideoSources([ArtifactSetRecommendationsVideoSources.AllAboutAll]);
