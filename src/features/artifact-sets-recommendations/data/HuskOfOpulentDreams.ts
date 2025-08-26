import { ArtifactSetCharacterRecommendationClass, ArtifactSetRecommendationsClass } from "../classes";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSetRecommendationsVideoSources } from "../enums";
import { ArtifactSlotIds } from "../../artifact-slots/enums";
import { CharacterIds } from "../../characters/enums";
import { StatKeys } from "@/database/stats/enums";
import { StatsCrit } from "./_help";

export default ArtifactSetRecommendationsClass.init([ArtifactSetIds.HuskOfOpulentDreams, [
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Albedo),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.AratakiItto).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Noelle).setIsBetter(),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.YunJin),
]])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatKeys.DefPercentage],
    [ArtifactSlotIds.Goblet]: [StatKeys.DefPercentage, StatKeys.GeoDmgBonus],
    [ArtifactSlotIds.Circlet]: StatsCrit,
    additional: [...StatsCrit, StatKeys.DefPercentage, StatKeys.EnergyRecharge],
  })
  .setVideoSources([ArtifactSetRecommendationsVideoSources.AllAboutAll]);
