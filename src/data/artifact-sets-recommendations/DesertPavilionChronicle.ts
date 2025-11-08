import { artifactSetById, StatsCrit, StatsElementDamageBonus } from "./_help";
import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ARTIFACT_SETS } from "@/features/artifact-sets";
import { ARTIFACT_SLOTS } from "@/features/artifact-slots";
import { CharacterIds } from "@/enums/character";
import { STATS } from "@/constants/stats";
import { VideoSourceIds } from "@/enums/video-source";

export default new ArtifactSetRecommendations(ARTIFACT_SETS.DESERT_PAVILION_CHRONICLE)
  .setCharacters([
    new ArtifactSetCharacterRecommendation(CharacterIds.ShikanoinHeizou).setIsBetter().setNotes([
      "Может использовать как 4 предмета, так и 2 предмета.\nДля реализации условия 4 предметов необходимо "
      + "использовать заряженную атаку перед обычными.\n2 предмета можно сочетать с "
      + artifactSetById(ARTIFACT_SETS.GLADIATORS_FINALE) + ", " + artifactSetById(ARTIFACT_SETS.SHIMENAWAS_REMINISCENCE)
      + ", " + artifactSetById(ARTIFACT_SETS.ECHOES_OF_AN_OFFERING) + ", " + artifactSetById(ARTIFACT_SETS.GOLDEN_TROUPE)
      + " и " + artifactSetById(ARTIFACT_SETS.VERMILLION_HEREAFTER) + ". В данном случае комплект может быть заменён 2 "
      + "предметами набора " + artifactSetById(ARTIFACT_SETS.VIRIDESCENT_VENERER) + ".",
    ]),
    new ArtifactSetCharacterRecommendation(CharacterIds.Wanderer).setIsBetter().setNotes([
      "Лучший комплект для Странника, так как даёт бонус Анемо урона и увеличивает урон обычной и заряженной атаки. "
      + "Для реализации условия 4 предметов необходимо использовать заряженную атаку перед обычными.\nСтраннику будет "
      + "полезен бонус и 2 предметов, которые он может сочетать с " + artifactSetById(ARTIFACT_SETS.GLADIATORS_FINALE)
      + ", " + artifactSetById(ARTIFACT_SETS.SHIMENAWAS_REMINISCENCE) + ", "
      + artifactSetById(ARTIFACT_SETS.ECHOES_OF_AN_OFFERING) + ", " + artifactSetById(ARTIFACT_SETS.MARECHAUSSEE_HUNTER)
      + " и " + artifactSetById(ARTIFACT_SETS.VERMILLION_HEREAFTER) + ". В данном случае комплект может быть заменён 2 "
      + "предметами набора " + artifactSetById(ARTIFACT_SETS.VIRIDESCENT_VENERER) + ".",
    ]),
    new ArtifactSetCharacterRecommendation(CharacterIds.Xiao).setIsBetter().setNotes([
      "Может использовать как 4 предмета, так и 2 предмета.\nДля реализации условия 4 предметов необходимо "
      + "использовать заряженную атаку сразу перед взрывом стихии.\n2 предмета можно сочетать с "
      + artifactSetById(ARTIFACT_SETS.GLADIATORS_FINALE) + ", " + artifactSetById(ARTIFACT_SETS.SHIMENAWAS_REMINISCENCE)
      + ", " + artifactSetById(ARTIFACT_SETS.ECHOES_OF_AN_OFFERING) + " и "
      + artifactSetById(ARTIFACT_SETS.VERMILLION_HEREAFTER) + ". В данном случае комплект может быть заменён 2 "
      + "предметами набора " + artifactSetById(ARTIFACT_SETS.VIRIDESCENT_VENERER) + ".",
    ]),
  ])
  .setPreferredStats({
    [ARTIFACT_SLOTS.SANDS]: [STATS.ATK_PERCENTAGE],
    [ARTIFACT_SLOTS.GOBLET]: [...StatsElementDamageBonus, STATS.ATK_PERCENTAGE],
    [ARTIFACT_SLOTS.CIRCLET]: StatsCrit,
    additional: [...StatsCrit, STATS.ATK_PERCENTAGE, STATS.ENERGY_RECHARGE],
  })
  .setVideoSourceIds([VideoSourceIds.AllAboutAllArtifactSets]);
