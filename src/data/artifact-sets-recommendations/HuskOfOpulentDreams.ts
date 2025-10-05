import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ArtifactSetIds } from "@/enums/artifact-set";
import { ArtifactSlotIds } from "@/enums/artifact-slot";
import { CharacterIds } from "@/enums/character";
import { StatIds } from "@/enums/stat";
import { StatsCrit } from "./_help";
import { VideoSourceIds } from "@/enums/video-source";

export default new ArtifactSetRecommendations(ArtifactSetIds.HuskOfOpulentDreams)
  .setCharacters([
    new ArtifactSetCharacterRecommendation(CharacterIds.Albedo),
    new ArtifactSetCharacterRecommendation(CharacterIds.AratakiItto).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Noelle).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.YunJin),
  ])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatIds.DefPercentage],
    [ArtifactSlotIds.Goblet]: [StatIds.DefPercentage, StatIds.GeoDmgBonus],
    [ArtifactSlotIds.Circlet]: StatsCrit,
    additional: [...StatsCrit, StatIds.DefPercentage, StatIds.EnergyRecharge],
  })
  .setVideoSourceIds([VideoSourceIds.AllAboutAllArtifactSets]);
