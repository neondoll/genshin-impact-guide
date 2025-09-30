import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ArtifactSetIds } from "@/enums/artifact-set";
import { ArtifactSetRecommendationsVideoSources } from "@/enums/artifact-set-recommendations";
import { ArtifactSlotIds } from "@/enums/artifact-slot";
import { CharacterIds } from "@/features/characters/enums";
import { StatIds } from "@/features/stats/enums";

export default ArtifactSetRecommendations.init([ArtifactSetIds.FlowerOfParadiseLost, [
  new ArtifactSetCharacterRecommendation(CharacterIds.KukiShinobu).setIsBetter(),
  new ArtifactSetCharacterRecommendation(CharacterIds.Nilou).setIsBetter(),
  new ArtifactSetCharacterRecommendation(CharacterIds.RaidenShogun).setIsBetter(),
]])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatIds.ElementalMastery, StatIds.HpPercentage],
    [ArtifactSlotIds.Goblet]: [StatIds.ElementalMastery, StatIds.HpPercentage],
    [ArtifactSlotIds.Circlet]: [StatIds.ElementalMastery, StatIds.HpPercentage],
    additional: [StatIds.ElementalMastery, StatIds.EnergyRecharge, StatIds.HpPercentage],
  })
  .setVideoSources([ArtifactSetRecommendationsVideoSources.AllAboutAll]);
