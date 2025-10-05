import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ArtifactSetIds } from "@/enums/artifact-set";
import { ArtifactSlotIds } from "@/enums/artifact-slot";
import { CharacterIds } from "@/enums/character";
import { StatIds } from "@/enums/stat";
import { StatsCrit, StatsElementDamageBonus } from "./_help";
import { VideoSourceIds } from "@/enums/video-source";

export default new ArtifactSetRecommendations(ArtifactSetIds.TenacityOfTheMillelith)
  .setCharacters([
    new ArtifactSetCharacterRecommendation(CharacterIds.Dehya),
    new ArtifactSetCharacterRecommendation(CharacterIds.KukiShinobu),
    new ArtifactSetCharacterRecommendation(CharacterIds.Mona).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.SangonomiyaKokomi).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Zhongli).setIsBetter(),
  ])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatIds.EnergyRecharge, StatIds.HpPercentage],
    [ArtifactSlotIds.Goblet]: [...StatsElementDamageBonus, StatIds.HpPercentage],
    [ArtifactSlotIds.Circlet]: [...StatsCrit, StatIds.HpPercentage],
    additional: [...StatsCrit, StatIds.AtkPercentage, StatIds.EnergyRecharge, StatIds.HpPercentage],
  })
  .setVideoSourceIds([VideoSourceIds.AllAboutAllArtifactSets]);
