import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ArtifactSetIds } from "@/enums/artifact-set";
import { ArtifactSetRecommendationsVideoSources } from "@/enums/artifact-set-recommendations";
import { ArtifactSlotIds } from "@/enums/artifact-slot";
import { CharacterIds } from "@/enums/character";
import { StatIds } from "@/enums/stat";
import { StatsCrit, StatsElementDamageBonus } from "./_help";

export default ArtifactSetRecommendations.init([
  ArtifactSetIds.BloodstainedChivalry,
  [
    new ArtifactSetCharacterRecommendation(CharacterIds.Eula).setIsBetter(),
    new ArtifactSetCharacterRecommendation(CharacterIds.Freminet),
    new ArtifactSetCharacterRecommendation(CharacterIds.Razor),
  ],
])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatIds.AtkPercentage],
    [ArtifactSlotIds.Goblet]: [...StatsElementDamageBonus, StatIds.AtkPercentage],
    [ArtifactSlotIds.Circlet]: StatsCrit,
    additional: [...StatsCrit, StatIds.AtkPercentage, StatIds.EnergyRecharge],
  })
  .setVideoSources([ArtifactSetRecommendationsVideoSources.AllAboutAll]);
