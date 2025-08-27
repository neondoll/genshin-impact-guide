import { ArtifactSetCharacterRecommendationClass, ArtifactSetRecommendationsClass } from "../classes";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSetRecommendationsVideoSources } from "../enums";
import { ArtifactSlotIds } from "../../artifact-slots/enums";
import { CharacterIds } from "../../characters/enums";
import { StatIds } from "../../stats/enums";
import { StatsCrit, StatsElementDamageBonus } from "./_help";

export default ArtifactSetRecommendationsClass.init([ArtifactSetIds.MarechausseeHunter, [
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Lyney).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Neuvillette).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Skirk),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Wriothesley).setIsBetter(),
]])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatIds.AtkPercentage, StatIds.HpPercentage],
    [ArtifactSlotIds.Goblet]: [...StatsElementDamageBonus, StatIds.AtkPercentage],
    [ArtifactSlotIds.Circlet]: StatsCrit,
    additional: [...StatsCrit, StatIds.AtkPercentage, StatIds.EnergyRecharge, StatIds.HpPercentage],
  })
  .setVideoSources([ArtifactSetRecommendationsVideoSources.AllAboutAll]);
