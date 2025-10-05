import { artifactSetById, StatsCrit, StatsElementDamageBonus } from "./_help";
import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ArtifactSetIds } from "@/enums/artifact-set";
import { ArtifactSlotIds } from "@/enums/artifact-slot";
import { CharacterIds } from "@/enums/character";
import { StatIds } from "@/enums/stat";
import { VideoSourceIds } from "@/enums/video-source";

export default new ArtifactSetRecommendations(ArtifactSetIds.DesertPavilionChronicle)
  .setCharacters([
    new ArtifactSetCharacterRecommendation(CharacterIds.ShikanoinHeizou).setIsBetter().setNotes([
      "Может использовать как 4 предмета, так и 2 предмета.\nДля реализации условия 4 предметов необходимо "
      + "использовать заряженную атаку перед обычными.\n2 предмета можно сочетать с "
      + artifactSetById(ArtifactSetIds.GladiatorsFinale) + ", " + artifactSetById(ArtifactSetIds.ShimenawasReminiscence)
      + ", " + artifactSetById(ArtifactSetIds.EchoesOfAnOffering) + ", " + artifactSetById(ArtifactSetIds.GoldenTroupe)
      + " и " + artifactSetById(ArtifactSetIds.VermillionHereafter) + ". В данном случае комплект может быть заменён 2 "
      + "предметами набора " + artifactSetById(ArtifactSetIds.ViridescentVenerer) + ".",
    ]),
    new ArtifactSetCharacterRecommendation(CharacterIds.Wanderer).setIsBetter().setNotes([
      "Лучший комплект для Странника, так как даёт бонус Анемо урона и увеличивает урон обычной и заряженной атаки. "
      + "Для реализации условия 4 предметов необходимо использовать заряженную атаку перед обычными.\nСтраннику будет "
      + "полезен бонус и 2 предметов, которые он может сочетать с " + artifactSetById(ArtifactSetIds.GladiatorsFinale)
      + ", " + artifactSetById(ArtifactSetIds.ShimenawasReminiscence) + ", "
      + artifactSetById(ArtifactSetIds.EchoesOfAnOffering) + ", " + artifactSetById(ArtifactSetIds.MarechausseeHunter)
      + " и " + artifactSetById(ArtifactSetIds.VermillionHereafter) + ". В данном случае комплект может быть заменён 2 "
      + "предметами набора " + artifactSetById(ArtifactSetIds.ViridescentVenerer) + ".",
    ]),
    new ArtifactSetCharacterRecommendation(CharacterIds.Xiao).setIsBetter().setNotes([
      "Может использовать как 4 предмета, так и 2 предмета.\nДля реализации условия 4 предметов необходимо "
      + "использовать заряженную атаку сразу перед взрывом стихии.\n2 предмета можно сочетать с "
      + artifactSetById(ArtifactSetIds.GladiatorsFinale) + ", " + artifactSetById(ArtifactSetIds.ShimenawasReminiscence)
      + ", " + artifactSetById(ArtifactSetIds.EchoesOfAnOffering) + " и "
      + artifactSetById(ArtifactSetIds.VermillionHereafter) + ". В данном случае комплект может быть заменён 2 "
      + "предметами набора " + artifactSetById(ArtifactSetIds.ViridescentVenerer) + ".",
    ]),
  ])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatIds.AtkPercentage],
    [ArtifactSlotIds.Goblet]: [...StatsElementDamageBonus, StatIds.AtkPercentage],
    [ArtifactSlotIds.Circlet]: StatsCrit,
    additional: [...StatsCrit, StatIds.AtkPercentage, StatIds.EnergyRecharge],
  })
  .setVideoSourceIds([VideoSourceIds.AllAboutAllArtifactSets]);
