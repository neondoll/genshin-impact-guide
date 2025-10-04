import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ArtifactSetIds } from "@/enums/artifact-set";
import { ArtifactSetRecommendationsVideoSources } from "@/enums/artifact-set-recommendations";
import { ArtifactSlotIds } from "@/enums/artifact-slot";
import { CharacterIds } from "@/enums/character";
import { StatIds } from "@/enums/stat";
import { StatsCrit, StatsElementDamageBonus } from "./_help";

export default ArtifactSetRecommendations.init([
  ArtifactSetIds.DeepwoodMemories,
  [
    new ArtifactSetCharacterRecommendation(CharacterIds.Baizhu).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Nahida).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Yaoyao).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Zhongli).setIsBetter(),
  ],
])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatIds.ElementalMastery, StatIds.EnergyRecharge, StatIds.HpPercentage],
    [ArtifactSlotIds.Goblet]: [...StatsElementDamageBonus, StatIds.ElementalMastery, StatIds.HpPercentage],
    [ArtifactSlotIds.Circlet]: [...StatsCrit, StatIds.ElementalMastery],
    additional: [...StatsCrit, StatIds.ElementalMastery, StatIds.EnergyRecharge, StatIds.HpPercentage],
  })
  .setVideoSources([ArtifactSetRecommendationsVideoSources.AllAboutAll]);
