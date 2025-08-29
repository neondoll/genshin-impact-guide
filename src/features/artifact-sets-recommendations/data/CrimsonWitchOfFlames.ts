import { ArtifactSetCharacterRecommendationClass, ArtifactSetRecommendationsClass } from "../classes";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSetRecommendationsVideoSources } from "../enums";
import { ArtifactSlotIds } from "../../artifact-slots/enums";
import { CharacterIds } from "../../characters/enums";
import { StatIds } from "../../stats/enums";
import { StatsCrit, StatsElementDamageBonus } from "./_help";

export default ArtifactSetRecommendationsClass.init([ArtifactSetIds.CrimsonWitchOfFlames, [
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Diluc).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.HuTao).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Klee).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Yanfei),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Yoimiya),
]])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatIds.AtkPercentage],
    [ArtifactSlotIds.Goblet]: [...StatsElementDamageBonus, StatIds.AtkPercentage],
    [ArtifactSlotIds.Circlet]: StatsCrit,
    additional: [...StatsCrit, StatIds.AtkPercentage, StatIds.EnergyRecharge],
  })
  .setVideoSources([ArtifactSetRecommendationsVideoSources.AllAboutAll]);
