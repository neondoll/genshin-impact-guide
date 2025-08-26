import { ArtifactSetCharacterRecommendationClass, ArtifactSetRecommendationsClass } from "../classes";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSetRecommendationsVideoSources } from "../enums";
import { ArtifactSlotIds } from "../../artifact-slots/enums";
import { CharacterIds } from "../../characters/enums";
import { StatKeys } from "@/database/stats/enums";
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
    [ArtifactSlotIds.Sands]: [StatKeys.AtkPercentage, StatKeys.ElementalMastery],
    [ArtifactSlotIds.Goblet]: [...StatsElementDamageBonus, StatKeys.ElementalMastery],
    [ArtifactSlotIds.Circlet]: [...StatsCrit, StatKeys.ElementalMastery],
    additional: [...StatsCrit, StatKeys.AtkPercentage, StatKeys.ElementalMastery, StatKeys.EnergyRecharge, StatKeys.HpPercentage],
  })
  .setVideoSources([ArtifactSetRecommendationsVideoSources.AllAboutAll]);
