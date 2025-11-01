import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ArtifactSetIds } from "@/enums/artifact-set";
import { ArtifactSlotIds } from "@/enums/artifact-slot";
import { CharacterIds } from "@/enums/character";
import { StatIds } from "@/enums/stat";
import { StatsCrit, StatsElementDamageBonus } from "./_help";
import { VideoSourceIds } from "@/enums/video-source";

export default new ArtifactSetRecommendations(ArtifactSetIds.EmblemOfSeveredFate)
  .setCharacters([
    new ArtifactSetCharacterRecommendation(CharacterIds.Chevreuse).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Ganyu),
    new ArtifactSetCharacterRecommendation(CharacterIds.Mona),
    new ArtifactSetCharacterRecommendation(CharacterIds.RaidenShogun).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Shenhe),
    new ArtifactSetCharacterRecommendation(CharacterIds.Xiangling).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Xingqiu).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Yelan).setIsBetter(),
  ])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [
      StatIds.AtkPercentage, StatIds.ElementalMastery, StatIds.EnergyRecharge, StatIds.HpPercentage
    ],
    [ArtifactSlotIds.Goblet]: [...StatsElementDamageBonus, StatIds.AtkPercentage, StatIds.HpPercentage],
    [ArtifactSlotIds.Circlet]: [...StatsCrit, StatIds.HpPercentage],
    additional: [...StatsCrit, StatIds.AtkPercentage, StatIds.ElementalMastery, StatIds.EnergyRecharge],
  })
  .setVideoSourceIds([VideoSourceIds.AllAboutAllArtifactSets]);
