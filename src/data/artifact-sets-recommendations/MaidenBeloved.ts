import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ArtifactSetIds } from "@/enums/artifact-set";
import { ArtifactSlotIds } from "@/enums/artifact-slot";
import { CharacterIds } from "@/enums/character";
import { StatIds } from "@/enums/stat";
import { VideoSourceIds } from "@/enums/video-source";

export default new ArtifactSetRecommendations(ArtifactSetIds.MaidenBeloved)
  .setCharacters([
    new ArtifactSetCharacterRecommendation(CharacterIds.Barbara).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Jean).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Qiqi),
    new ArtifactSetCharacterRecommendation(CharacterIds.SangonomiyaKokomi).setIsBetter(),
  ])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatIds.AtkPercentage, StatIds.EnergyRecharge, StatIds.HpPercentage],
    [ArtifactSlotIds.Goblet]: [StatIds.AtkPercentage, StatIds.EnergyRecharge, StatIds.HpPercentage],
    [ArtifactSlotIds.Circlet]: [StatIds.AtkPercentage, StatIds.Heal, StatIds.HpPercentage],
    additional: [StatIds.AtkPercentage, StatIds.EnergyRecharge, StatIds.HpPercentage],
  })
  .setVideoSourceIds([VideoSourceIds.AllAboutAllArtifactSets]);
