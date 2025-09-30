import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ArtifactSetIds } from "@/enums/artifact-set";
import { ArtifactSetRecommendationsVideoSources } from "@/enums/artifact-set-recommendations";
import { ArtifactSlotIds } from "@/enums/artifact-slot";
import { CharacterIds } from "@/features/characters/enums";
import { StatIds } from "@/features/stats/enums";
import { StatsCrit, StatsElementDamageBonus } from "./_help";

export default ArtifactSetRecommendations.init([ArtifactSetIds.NoblesseOblige, [
  new ArtifactSetCharacterRecommendation(CharacterIds.Bennett).setIsBetter(),
  new ArtifactSetCharacterRecommendation(CharacterIds.Charlotte).setIsBetter(),
  new ArtifactSetCharacterRecommendation(CharacterIds.Chevreuse).setIsBetter(),
  new ArtifactSetCharacterRecommendation(CharacterIds.Ganyu).setIsBetter(),
  new ArtifactSetCharacterRecommendation(CharacterIds.Gorou).setIsBetter(),
  new ArtifactSetCharacterRecommendation(CharacterIds.Jean).setIsBetter(),
  new ArtifactSetCharacterRecommendation(CharacterIds.KujouSara).setIsBetter(),
  new ArtifactSetCharacterRecommendation(CharacterIds.Mona).setIsBetter(),
  new ArtifactSetCharacterRecommendation(CharacterIds.Shenhe).setIsBetter(),
  new ArtifactSetCharacterRecommendation(CharacterIds.Xingqiu).setIsBetter(),
  new ArtifactSetCharacterRecommendation(CharacterIds.Zhongli).setIsBetter(),
]])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatIds.AtkPercentage, StatIds.EnergyRecharge, StatIds.HpPercentage],
    [ArtifactSlotIds.Goblet]: [...StatsElementDamageBonus, StatIds.AtkPercentage, StatIds.HpPercentage],
    [ArtifactSlotIds.Circlet]: [...StatsCrit, StatIds.HpPercentage],
    additional: [...StatsCrit, StatIds.AtkPercentage, StatIds.ElementalMastery, StatIds.EnergyRecharge, StatIds.HpPercentage],
  })
  .setVideoSources([ArtifactSetRecommendationsVideoSources.AllAboutAll]);
