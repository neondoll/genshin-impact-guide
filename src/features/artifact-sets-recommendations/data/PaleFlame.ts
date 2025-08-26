import { ArtifactSetCharacterRecommendationClass, ArtifactSetRecommendationsClass } from "../classes";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSetRecommendationsVideoSources } from "../enums";
import { ArtifactSlotIds } from "../../artifact-slots/enums";
import { CharacterIds } from "../../characters/enums";
import { StatKeys } from "@/database/stats/enums";
import { StatsCrit } from "./_help";

export default ArtifactSetRecommendationsClass.init([ArtifactSetIds.PaleFlame, [
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Eula).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Freminet),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Razor),
]])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatKeys.AtkPercentage],
    [ArtifactSlotIds.Goblet]: [StatKeys.AtkPercentage, StatKeys.PhysicalDmgBonus],
    [ArtifactSlotIds.Circlet]: StatsCrit,
    additional: [...StatsCrit, StatKeys.AtkPercentage],
  })
  .setVideoSources([ArtifactSetRecommendationsVideoSources.AllAboutAll]);
