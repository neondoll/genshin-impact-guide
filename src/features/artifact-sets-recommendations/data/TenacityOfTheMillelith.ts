import { ArtifactSetCharacterRecommendationClass, ArtifactSetRecommendationsClass } from "../classes";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSetRecommendationsVideoSources } from "../enums";
import { ArtifactSlotIds } from "../../artifact-slots/enums";
import { CharacterIds } from "../../characters/enums";
import { StatIds } from "../../stats/enums";
import { StatsCrit, StatsElementDamageBonus } from "./_help";

export default ArtifactSetRecommendationsClass.init([ArtifactSetIds.TenacityOfTheMillelith, [
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Dehya),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.KukiShinobu),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Mona).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.SangonomiyaKokomi).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Zhongli).setIsBetter(),
]])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatIds.EnergyRecharge, StatIds.HpPercentage],
    [ArtifactSlotIds.Goblet]: [...StatsElementDamageBonus, StatIds.HpPercentage],
    [ArtifactSlotIds.Circlet]: [...StatsCrit, StatIds.HpPercentage],
    additional: [...StatsCrit, StatIds.AtkPercentage, StatIds.EnergyRecharge, StatIds.HpPercentage],
  })
  .setVideoSources([ArtifactSetRecommendationsVideoSources.AllAboutAll]);
