import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ArtifactSetIds } from "@/enums/artifact-set";
import { ArtifactSlotIds } from "@/enums/artifact-slot";
import { CharacterIds } from "@/enums/character";
import { StatIds } from "@/enums/stat";
import { VideoSourceIds } from "@/enums/video-source";

export default new ArtifactSetRecommendations(ArtifactSetIds.SongOfDaysPast)
  .setCharacters([
    new ArtifactSetCharacterRecommendation(CharacterIds.Barbara).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.SangonomiyaKokomi).setIsBetter(),
  ])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatIds.HpPercentage],
    [ArtifactSlotIds.Goblet]: [StatIds.HpPercentage],
    [ArtifactSlotIds.Circlet]: [StatIds.Heal, StatIds.HpPercentage],
    additional: [StatIds.EnergyRecharge, StatIds.HpPercentage],
  })
  .setVideoSourceIds([VideoSourceIds.AllAboutAllArtifactSets]);
