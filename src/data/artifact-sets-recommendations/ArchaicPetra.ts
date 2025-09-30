import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ArtifactSetIds } from "@/enums/artifact-set";
import { ArtifactSetRecommendationsVideoSources } from "@/enums/artifact-set-recommendations";
import { ArtifactSlotIds } from "@/enums/artifact-slot";
import { CharacterIds } from "@/features/characters/enums";
import { StatIds } from "@/features/stats/enums";
import { StatsCrit } from "./_help";

export default ArtifactSetRecommendations.init([
  ArtifactSetIds.ArchaicPetra,
  [
    new ArtifactSetCharacterRecommendation(CharacterIds.Albedo),
    new ArtifactSetCharacterRecommendation(CharacterIds.Ningguang).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Noelle).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.YunJin),
    new ArtifactSetCharacterRecommendation(CharacterIds.Zhongli).setIsBetter(),
  ],
])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatIds.DefPercentage, StatIds.EnergyRecharge, StatIds.HpPercentage],
    [ArtifactSlotIds.Goblet]: [StatIds.DefPercentage, StatIds.HpPercentage],
    [ArtifactSlotIds.Circlet]: [...StatsCrit, StatIds.HpPercentage],
    additional: [...StatsCrit, StatIds.AtkPercentage, StatIds.ElementalMastery, StatIds.EnergyRecharge],
  })
  .setVideoSources([ArtifactSetRecommendationsVideoSources.AllAboutAll]);
