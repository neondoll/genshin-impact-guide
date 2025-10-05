import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ArtifactSetIds } from "@/enums/artifact-set";
import { ArtifactSlotIds } from "@/enums/artifact-slot";
import { CharacterIds } from "@/enums/character";
import { StatIds } from "@/enums/stat";
import { StatsCrit, StatsElementDamageBonus } from "./_help";
import { VideoSourceIds } from "@/enums/video-source";

export default new ArtifactSetRecommendations(ArtifactSetIds.WanderersTroupe)
  .setCharacters([
    new ArtifactSetCharacterRecommendation(CharacterIds.Amber),
    new ArtifactSetCharacterRecommendation(CharacterIds.Ganyu).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Klee).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Tighnari).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Yanfei).setIsBetter(),
  ])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatIds.AtkPercentage, StatIds.ElementalMastery],
    [ArtifactSlotIds.Goblet]: [...StatsElementDamageBonus, StatIds.AtkPercentage],
    [ArtifactSlotIds.Circlet]: StatsCrit,
    additional: [...StatsCrit, StatIds.AtkPercentage, StatIds.ElementalMastery, StatIds.EnergyRecharge],
  })
  .setVideoSourceIds([VideoSourceIds.AllAboutAllArtifactSets]);
