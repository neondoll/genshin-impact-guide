import { ArtifactSetCharacterRecommendationClass, ArtifactSetRecommendationsClass } from "../classes";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSetRecommendationsVideoSources } from "../enums";
import { ArtifactSlotIds } from "../../artifact-slots/enums";
import { CharacterIds } from "../../characters/enums";
import { StatIds } from "../../stats/enums";
import { StatsCrit, StatsElementDamageBonus } from "./_help";

export default ArtifactSetRecommendationsClass.init([ArtifactSetIds.EmblemOfSeveredFate, [
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Chevreuse).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Ganyu),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Mona),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.RaidenShogun).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Shenhe),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Xiangling).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Xingqiu).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Yelan).setIsBetter(),
]])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatIds.AtkPercentage, StatIds.ElementalMastery, StatIds.EnergyRecharge, StatIds.HpPercentage],
    [ArtifactSlotIds.Goblet]: [...StatsElementDamageBonus, StatIds.AtkPercentage, StatIds.HpPercentage],
    [ArtifactSlotIds.Circlet]: [...StatsCrit, StatIds.HpPercentage],
    additional: [...StatsCrit, StatIds.AtkPercentage, StatIds.ElementalMastery, StatIds.EnergyRecharge],
  })
  .setVideoSources([ArtifactSetRecommendationsVideoSources.AllAboutAll]);
