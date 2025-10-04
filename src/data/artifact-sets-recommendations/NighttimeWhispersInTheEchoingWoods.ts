import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ArtifactSetIds } from "@/enums/artifact-set";
import { ArtifactSetRecommendationsVideoSources } from "@/enums/artifact-set-recommendations";
import { ArtifactSlotIds } from "@/enums/artifact-slot";
import { CharacterIds } from "@/enums/character";
import { StatIds } from "@/enums/stat";
import { StatsCrit } from "./_help";

export default ArtifactSetRecommendations.init([ArtifactSetIds.NighttimeWhispersInTheEchoingWoods, [
  new ArtifactSetCharacterRecommendation(CharacterIds.Navia).setIsBetter()
    .setNotes("Является одним из лучших комплектов для Навии, так как увеличивает силу атаки и бонус Гео урона в сумме до 50% при выполнении всех условий 4 предметов. Для реализации условий в команде необходимо иметь Пиро/Крио/Гидро и/или Электро персонажей."),
]])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatIds.AtkPercentage],
    [ArtifactSlotIds.Goblet]: [StatIds.AtkPercentage, StatIds.GeoDmgBonus],
    [ArtifactSlotIds.Circlet]: StatsCrit,
    additional: [...StatsCrit, StatIds.AtkPercentage, StatIds.EnergyRecharge],
  })
  .setVideoSources([ArtifactSetRecommendationsVideoSources.AllAboutAll]);
