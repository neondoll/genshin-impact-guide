import { ArtifactSetCharacterRecommendationClass, ArtifactSetRecommendationsClass } from "../classes";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSetRecommendationsVideoSources } from "../enums";
import { ArtifactSlotIds } from "../../artifact-slots/enums";
import { CharacterIds } from "../../characters/enums";
import { StatKeys } from "@/database/stats/enums";
import { StatsCrit, StatsElementDamageBonus } from "./_help";

export default ArtifactSetRecommendationsClass.init([ArtifactSetIds.ShimenawasReminiscence, [
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Ganyu).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.HuTao).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Wanderer).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Wriothesley).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Yoimiya).setIsBetter(),
]])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatKeys.AtkPercentage, StatKeys.ElementalMastery, StatKeys.HpPercentage],
    [ArtifactSlotIds.Goblet]: [...StatsElementDamageBonus, StatKeys.AtkPercentage],
    [ArtifactSlotIds.Circlet]: StatsCrit,
    additional: [...StatsCrit, StatKeys.AtkPercentage, StatKeys.ElementalMastery, StatKeys.EnergyRecharge, StatKeys.HpPercentage],
  })
  .setVideoSources([ArtifactSetRecommendationsVideoSources.AllAboutAll]);
