import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ArtifactSetIds } from "@/enums/artifact-set";
import { ArtifactSetRecommendationsVideoSources } from "@/enums/artifact-set-recommendations";
import { ArtifactSlotIds } from "@/enums/artifact-slot";
import { CharacterIds } from "@/features/characters/enums";
import { StatIds } from "@/features/stats/enums";
import { StatsCrit } from "./_help";

export default ArtifactSetRecommendations.init([ArtifactSetIds.HuskOfOpulentDreams, [
  new ArtifactSetCharacterRecommendation(CharacterIds.Albedo),
  new ArtifactSetCharacterRecommendation(CharacterIds.AratakiItto).setIsBetter(),
  new ArtifactSetCharacterRecommendation(CharacterIds.Noelle).setIsBetter(),
  new ArtifactSetCharacterRecommendation(CharacterIds.YunJin),
]])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatIds.DefPercentage],
    [ArtifactSlotIds.Goblet]: [StatIds.DefPercentage, StatIds.GeoDmgBonus],
    [ArtifactSlotIds.Circlet]: StatsCrit,
    additional: [...StatsCrit, StatIds.DefPercentage, StatIds.EnergyRecharge],
  })
  .setVideoSources([ArtifactSetRecommendationsVideoSources.AllAboutAll]);
