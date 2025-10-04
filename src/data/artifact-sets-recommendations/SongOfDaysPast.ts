import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ArtifactSetIds } from "@/enums/artifact-set";
import { ArtifactSetRecommendationsVideoSources } from "@/enums/artifact-set-recommendations";
import { ArtifactSlotIds } from "@/enums/artifact-slot";
import { CharacterIds } from "@/enums/character";
import { StatIds } from "@/enums/stat";

export default ArtifactSetRecommendations.init([ArtifactSetIds.SongOfDaysPast, [
  new ArtifactSetCharacterRecommendation(CharacterIds.Barbara).setIsBetter(),
  new ArtifactSetCharacterRecommendation(CharacterIds.SangonomiyaKokomi).setIsBetter(),
]])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatIds.HpPercentage],
    [ArtifactSlotIds.Goblet]: [StatIds.HpPercentage],
    [ArtifactSlotIds.Circlet]: [StatIds.Heal, StatIds.HpPercentage],
    additional: [StatIds.EnergyRecharge, StatIds.HpPercentage],
  })
  .setVideoSources([ArtifactSetRecommendationsVideoSources.AllAboutAll]);
