import { artifactSetById, StatsCrit, StatsElementDamageBonus } from "./_help";
import { ArtifactSetCharacterRecommendationClass, ArtifactSetRecommendationsClass } from "../classes";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSetRecommendationsVideoSources } from "../enums";
import { ArtifactSlotIds } from "../../artifact-slots/enums";
import { CharacterIds } from "../../characters/enums";
import { StatKeys } from "@/database/stats/enums";

export default ArtifactSetRecommendationsClass.init([ArtifactSetIds.DesertPavilionChronicle, [
  new ArtifactSetCharacterRecommendationClass(CharacterIds.ShikanoinHeizou).setIsBetter()
    .setNotes(`Может использовать как 4 предмета, так и 2 предмета.\nДля реализации условия 4 предметов необходимо использовать заряженную атаку перед обычными.\n2 предмета можно сочетать с ${artifactSetById(ArtifactSetIds.GladiatorsFinale)}, ${artifactSetById(ArtifactSetIds.ShimenawasReminiscence)}, ${artifactSetById(ArtifactSetIds.EchoesOfAnOffering)}, ${artifactSetById(ArtifactSetIds.GoldenTroupe)} и ${artifactSetById(ArtifactSetIds.VermillionHereafter)}. В данном случае комплект может быть заменён 2 предметами набора ${artifactSetById(ArtifactSetIds.ViridescentVenerer)}.`),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Wanderer).setIsBetter()
    .setNotes(`Лучший комплект для Странника, так как даёт бонус Анемо урона и увеличивает урон обычной и заряженной атаки. Для реализации условия 4 предметов необходимо использовать заряженную атаку перед обычными.\nСтраннику будет полезен бонус и 2 предметов, которые он может сочетать с ${artifactSetById(ArtifactSetIds.GladiatorsFinale)}, ${artifactSetById(ArtifactSetIds.ShimenawasReminiscence)}, ${artifactSetById(ArtifactSetIds.EchoesOfAnOffering)}, ${artifactSetById(ArtifactSetIds.MarechausseeHunter)} и ${artifactSetById(ArtifactSetIds.VermillionHereafter)}. В данном случае комплект может быть заменён 2 предметами набора ${artifactSetById(ArtifactSetIds.ViridescentVenerer)}.`),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Xiao).setIsBetter()
    .setNotes(`Может использовать как 4 предмета, так и 2 предмета.\nДля реализации условия 4 предметов необходимо использовать заряженную атаку сразу перед взрывом стихии.\n2 предмета можно сочетать с ${artifactSetById(ArtifactSetIds.GladiatorsFinale)}, ${artifactSetById(ArtifactSetIds.ShimenawasReminiscence)}, ${artifactSetById(ArtifactSetIds.EchoesOfAnOffering)} и ${artifactSetById(ArtifactSetIds.VermillionHereafter)}. В данном случае комплект может быть заменён 2 предметами набора ${artifactSetById(ArtifactSetIds.ViridescentVenerer)}.`),
]])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatKeys.AtkPercentage],
    [ArtifactSlotIds.Goblet]: [...StatsElementDamageBonus, StatKeys.AtkPercentage],
    [ArtifactSlotIds.Circlet]: StatsCrit,
    additional: [...StatsCrit, StatKeys.AtkPercentage, StatKeys.EnergyRecharge],
  })
  .setVideoSources([ArtifactSetRecommendationsVideoSources.AllAboutAll]);
