import { ArtifactSetCharacterRecommendationClass, ArtifactSetRecommendationsClass } from "../classes";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSetRecommendationsVideoSources } from "../enums";
import { ArtifactSlotIds } from "../../artifact-slots/enums";
import { CharacterIds } from "../../characters/enums";
import { StatIds } from "../../stats/enums";
import { StatsCrit, StatsElementDamageBonus } from "./_help";

export default ArtifactSetRecommendationsClass.init([ArtifactSetIds.ShimenawasReminiscence, [
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Ganyu).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.HuTao).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Wanderer).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Wriothesley).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Yoimiya).setIsBetter(),
]])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatIds.AtkPercentage, StatIds.ElementalMastery, StatIds.HpPercentage],
    [ArtifactSlotIds.Goblet]: [...StatsElementDamageBonus, StatIds.AtkPercentage],
    [ArtifactSlotIds.Circlet]: StatsCrit,
    additional: [...StatsCrit, StatIds.AtkPercentage, StatIds.ElementalMastery, StatIds.EnergyRecharge, StatIds.HpPercentage],
  })
  .setVideoSources([ArtifactSetRecommendationsVideoSources.AllAboutAll]);
