import { ArtifactSetCharacterRecommendationClass, ArtifactSetRecommendationsClass } from "../classes";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSetRecommendationsVideoSources } from "../enums";
import { ArtifactSlotIds } from "../../artifact-slots/enums";
import { CharacterIds } from "../../characters/enums";
import { StatIds } from "../../stats/enums";
import { StatsCrit } from "./_help";

export default ArtifactSetRecommendationsClass.init([ArtifactSetIds.ArchaicPetra, [
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Albedo),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Ningguang).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Noelle).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.YunJin),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Zhongli).setIsBetter(),
]])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatIds.DefPercentage, StatIds.EnergyRecharge, StatIds.HpPercentage],
    [ArtifactSlotIds.Goblet]: [StatIds.DefPercentage, StatIds.HpPercentage],
    [ArtifactSlotIds.Circlet]: [...StatsCrit, StatIds.HpPercentage],
    additional: [...StatsCrit, StatIds.AtkPercentage, StatIds.ElementalMastery, StatIds.EnergyRecharge],
  })
  .setVideoSources([ArtifactSetRecommendationsVideoSources.AllAboutAll]);
