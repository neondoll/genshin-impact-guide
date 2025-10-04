import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ArtifactSetIds } from "@/enums/artifact-set";
import { ArtifactSetRecommendationsVideoSources } from "@/enums/artifact-set-recommendations";
import { ArtifactSlotIds } from "@/enums/artifact-slot";
import { CharacterIds } from "@/enums/character";
import { StatIds } from "@/enums/stat";

export default ArtifactSetRecommendations.init([ArtifactSetIds.Instructor, [
  new ArtifactSetCharacterRecommendation(CharacterIds.Bennett).setIsBetter(),
  new ArtifactSetCharacterRecommendation(CharacterIds.Collei),
  new ArtifactSetCharacterRecommendation(CharacterIds.Kirara),
  new ArtifactSetCharacterRecommendation(CharacterIds.KukiShinobu),
  new ArtifactSetCharacterRecommendation(CharacterIds.Mona).setIsBetter(),
  new ArtifactSetCharacterRecommendation(CharacterIds.Sucrose).setIsBetter(),
  new ArtifactSetCharacterRecommendation(CharacterIds.Zhongli).setIsBetter(),
]])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatIds.ElementalMastery, StatIds.EnergyRecharge, StatIds.HpPercentage],
    [ArtifactSlotIds.Goblet]: [StatIds.ElementalMastery, StatIds.HpPercentage],
    [ArtifactSlotIds.Circlet]: [StatIds.ElementalMastery, StatIds.HpPercentage],
    additional: [StatIds.ElementalMastery, StatIds.EnergyRecharge, StatIds.HpPercentage],
  })
  .setVideoSources([ArtifactSetRecommendationsVideoSources.AllAboutAll]);
