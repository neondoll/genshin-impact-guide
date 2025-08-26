import { ArtifactSetCharacterRecommendationClass, ArtifactSetRecommendationsClass } from "../classes";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSetRecommendationsVideoSources } from "../enums";
import { ArtifactSlotIds } from "../../artifact-slots/enums";
import { CharacterIds } from "../../characters/enums";
import { StatKeys } from "@/database/stats/enums";
import { StatsCrit, StatsElementDamageBonus } from "./_help";

export default ArtifactSetRecommendationsClass.init([ArtifactSetIds.TenacityOfTheMillelith, [
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Dehya),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.KukiShinobu),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Mona).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.SangonomiyaKokomi).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Zhongli).setIsBetter(),
]])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatKeys.EnergyRecharge, StatKeys.HpPercentage],
    [ArtifactSlotIds.Goblet]: [...StatsElementDamageBonus, StatKeys.HpPercentage],
    [ArtifactSlotIds.Circlet]: [...StatsCrit, StatKeys.HpPercentage],
    additional: [...StatsCrit, StatKeys.AtkPercentage, StatKeys.EnergyRecharge, StatKeys.HpPercentage],
  })
  .setVideoSources([ArtifactSetRecommendationsVideoSources.AllAboutAll]);
