import { ArtifactSetCharacterRecommendationClass, ArtifactSetRecommendationsClass } from "../classes";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSetRecommendationsVideoSources } from "../enums";
import { ArtifactSlotIds } from "../../artifact-slots/enums";
import { CharacterIds } from "../../characters/enums";
import { StatIds } from "../../stats/enums";
import { StatsCrit, StatsElementDamageBonus } from "./_help";

export default ArtifactSetRecommendationsClass.init([ArtifactSetIds.GildedDreams, [
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Alhaitham).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Cyno).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Keqing),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.KukiShinobu),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Nahida).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.RaidenShogun),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Tighnari).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.YaeMiko).setIsBetter(),
]])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatIds.AtkPercentage, StatIds.ElementalMastery],
    [ArtifactSlotIds.Goblet]: [...StatsElementDamageBonus, StatIds.ElementalMastery],
    [ArtifactSlotIds.Circlet]: [...StatsCrit, StatIds.ElementalMastery],
    additional: [...StatsCrit, StatIds.AtkPercentage, StatIds.ElementalMastery, StatIds.EnergyRecharge, StatIds.HpPercentage],
  })
  .setVideoSources([ArtifactSetRecommendationsVideoSources.AllAboutAll]);
