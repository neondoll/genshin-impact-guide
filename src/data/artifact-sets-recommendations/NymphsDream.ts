import { artifactSetById, StatsCrit, StatsElementDamageBonus } from "./_help";
import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ARTIFACT_SETS } from "@/features/artifact-sets";
import { ARTIFACT_SLOTS } from "@/features/artifact-slots";
import { CharacterIds } from "@/enums/character";
import { STATS } from "@/constants/stats";
import { VideoSourceIds } from "@/enums/video-source";

export default new ArtifactSetRecommendations(ARTIFACT_SETS.NYMPHS_DREAM)
  .setCharacters([
    new ArtifactSetCharacterRecommendation(CharacterIds.KamisatoAyato).setIsBetter().setNotes([
      "Хороший комплект для Аято, так как значительно увеличивает Гидро урон и силу атаки.\nМожет использовать как "
      + "полный набор, так и 2 предмета, сочетая с " + artifactSetById(ARTIFACT_SETS.GLADIATORS_FINALE) + ", "
      + artifactSetById(ARTIFACT_SETS.SHIMENAWAS_REMINISCENCE) + ", "
      + artifactSetById(ARTIFACT_SETS.ECHOES_OF_AN_OFFERING) + ", " + artifactSetById(ARTIFACT_SETS.VERMILLION_HEREAFTER)
      + ". В таком случае " + artifactSetById(ARTIFACT_SETS.NYMPHS_DREAM) + " может быть заменён "
      + artifactSetById(ARTIFACT_SETS.HEART_OF_DEPTH) + ".",
    ]),
    new ArtifactSetCharacterRecommendation(CharacterIds.Tartaglia).setIsBetter().setNotes([
      "Один из лучших комплектов для Тартальи, так как значительно увеличивает Гидро урон и силу атаки.\nМожет "
      + "использовать как полный набор, так и 2 предмета, сочетая с " + artifactSetById(ARTIFACT_SETS.GLADIATORS_FINALE)
      + ", " + artifactSetById(ARTIFACT_SETS.NOBLESSE_OBLIGE) + ", "
      + artifactSetById(ARTIFACT_SETS.SHIMENAWAS_REMINISCENCE) + ", "
      + artifactSetById(ARTIFACT_SETS.ECHOES_OF_AN_OFFERING) + ", " + artifactSetById(ARTIFACT_SETS.VERMILLION_HEREAFTER)
      + ". В таком случае " + artifactSetById(ARTIFACT_SETS.NYMPHS_DREAM) + " может быть заменён "
      + artifactSetById(ARTIFACT_SETS.HEART_OF_DEPTH) + ".",
    ]),
    new ArtifactSetCharacterRecommendation(CharacterIds.Xingqiu).setNotes([
      "Син Цю будет полезен бонус 2 предметов, так как ему важен Гидро урон. Можно сочетать с "
      + artifactSetById(ARTIFACT_SETS.EMBLEM_OF_SEVERED_FATE) + " или " + artifactSetById(ARTIFACT_SETS.NOBLESSE_OBLIGE)
      + ". В таком случае " + artifactSetById(ARTIFACT_SETS.NYMPHS_DREAM) + " может быть заменён "
      + artifactSetById(ARTIFACT_SETS.HEART_OF_DEPTH) + ".",
    ]),
  ])
  .setPreferredStats({
    [ARTIFACT_SLOTS.SANDS]: [STATS.ATK_PERCENTAGE],
    [ARTIFACT_SLOTS.GOBLET]: [...StatsElementDamageBonus, STATS.ATK_PERCENTAGE],
    [ARTIFACT_SLOTS.CIRCLET]: StatsCrit,
    additional: [...StatsCrit, STATS.ATK_PERCENTAGE],
  })
  .setVideoSourceIds([VideoSourceIds.AllAboutAllArtifactSets]);
