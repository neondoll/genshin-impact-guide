import { ArtifactSetCharacterRecommendationClass, ArtifactSetRecommendationsClass } from "../classes";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSetRecommendationsVideoSources } from "../enums";
import { ArtifactSlotIds } from "../../artifact-slots/enums";
import { CharacterIds } from "../../characters/enums";
import { StatIds } from "../../stats/enums";
import { StatsCrit } from "./_help";

export default ArtifactSetRecommendationsClass.init([ArtifactSetIds.PaleFlame, [
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Eula).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Freminet),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Razor),
]])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatIds.AtkPercentage],
    [ArtifactSlotIds.Goblet]: [StatIds.AtkPercentage, StatIds.PhysicalDmgBonus],
    [ArtifactSlotIds.Circlet]: StatsCrit,
    additional: [...StatsCrit, StatIds.AtkPercentage],
  })
  .setVideoSources([ArtifactSetRecommendationsVideoSources.AllAboutAll]);
