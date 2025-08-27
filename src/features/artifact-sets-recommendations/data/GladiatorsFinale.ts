import { ArtifactSetCharacterRecommendationClass, ArtifactSetRecommendationsClass } from "../classes";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSetRecommendationsVideoSources } from "../enums";
import { ArtifactSlotIds } from "../../artifact-slots/enums";
import { CharacterIds } from "../../characters/enums";
import { StatIds } from "../../stats/enums";
import { StatsCrit, StatsElementDamageBonus } from "./_help";

export default ArtifactSetRecommendationsClass.init([ArtifactSetIds.GladiatorsFinale, [
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Cyno).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.KamisatoAyato).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Noelle),
]])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatIds.AtkPercentage, StatIds.ElementalMastery],
    [ArtifactSlotIds.Goblet]: [...StatsElementDamageBonus, StatIds.AtkPercentage],
    [ArtifactSlotIds.Circlet]: StatsCrit,
    additional: [...StatsCrit, StatIds.AtkPercentage, StatIds.ElementalMastery, StatIds.EnergyRecharge],
  })
  .setVideoSources([ArtifactSetRecommendationsVideoSources.AllAboutAll]);
