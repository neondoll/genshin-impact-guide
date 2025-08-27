import { ArtifactSetCharacterRecommendationClass, ArtifactSetRecommendationsClass } from "../classes";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSetRecommendationsVideoSources } from "../enums";
import { ArtifactSlotIds } from "../../artifact-slots/enums";
import { CharacterIds } from "../../characters/enums";
import { StatIds } from "../../stats/enums";
import { StatsCrit, StatsElementDamageBonus } from "./_help";

export default ArtifactSetRecommendationsClass.init([ArtifactSetIds.NoblesseOblige, [
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Bennett).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Charlotte).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Chevreuse).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Ganyu).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Gorou).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Jean).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.KujouSara).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Mona).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Shenhe).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Xingqiu).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Zhongli).setIsBetter(),
]])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatIds.AtkPercentage, StatIds.EnergyRecharge, StatIds.HpPercentage],
    [ArtifactSlotIds.Goblet]: [...StatsElementDamageBonus, StatIds.AtkPercentage, StatIds.HpPercentage],
    [ArtifactSlotIds.Circlet]: [...StatsCrit, StatIds.HpPercentage],
    additional: [...StatsCrit, StatIds.AtkPercentage, StatIds.ElementalMastery, StatIds.EnergyRecharge, StatIds.HpPercentage],
  })
  .setVideoSources([ArtifactSetRecommendationsVideoSources.AllAboutAll]);
