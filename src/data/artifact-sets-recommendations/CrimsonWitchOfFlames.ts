import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ArtifactSetIds } from "@/enums/artifact-set";
import { ArtifactSetRecommendationsVideoSources } from "@/enums/artifact-set-recommendations";
import { ArtifactSlotIds } from "@/enums/artifact-slot";
import { CharacterIds } from "@/enums/character";
import { StatIds } from "@/enums/stat";
import { StatsCrit, StatsElementDamageBonus } from "./_help";

export default ArtifactSetRecommendations.init([
  ArtifactSetIds.CrimsonWitchOfFlames,
  [
    new ArtifactSetCharacterRecommendation(CharacterIds.Diluc).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.HuTao).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Klee).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Yanfei),
    new ArtifactSetCharacterRecommendation(CharacterIds.Yoimiya),
  ],
])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatIds.AtkPercentage],
    [ArtifactSlotIds.Goblet]: [...StatsElementDamageBonus, StatIds.AtkPercentage],
    [ArtifactSlotIds.Circlet]: StatsCrit,
    additional: [...StatsCrit, StatIds.AtkPercentage, StatIds.EnergyRecharge],
  })
  .setVideoSources([ArtifactSetRecommendationsVideoSources.AllAboutAll]);
