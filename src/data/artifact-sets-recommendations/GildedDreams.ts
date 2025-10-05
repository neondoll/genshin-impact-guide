import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ArtifactSetIds } from "@/enums/artifact-set";
import { ArtifactSlotIds } from "@/enums/artifact-slot";
import { CharacterIds } from "@/enums/character";
import { StatIds } from "@/enums/stat";
import { StatsCrit, StatsElementDamageBonus } from "./_help";
import { VideoSourceIds } from "@/enums/video-source";

export default new ArtifactSetRecommendations(ArtifactSetIds.GildedDreams)
  .setCharacters([
    new ArtifactSetCharacterRecommendation(CharacterIds.Alhaitham).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Cyno).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Keqing),
    new ArtifactSetCharacterRecommendation(CharacterIds.KukiShinobu),
    new ArtifactSetCharacterRecommendation(CharacterIds.Nahida).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.RaidenShogun),
    new ArtifactSetCharacterRecommendation(CharacterIds.Tighnari).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.YaeMiko).setIsBetter(),
  ])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatIds.AtkPercentage, StatIds.ElementalMastery],
    [ArtifactSlotIds.Goblet]: [...StatsElementDamageBonus, StatIds.ElementalMastery],
    [ArtifactSlotIds.Circlet]: [...StatsCrit, StatIds.ElementalMastery],
    additional: [...StatsCrit, StatIds.AtkPercentage, StatIds.ElementalMastery, StatIds.EnergyRecharge, StatIds.HpPercentage],
  })
  .setVideoSourceIds([VideoSourceIds.AllAboutAllArtifactSets]);
