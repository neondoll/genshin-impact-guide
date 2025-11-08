import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ARTIFACT_SETS } from "@/features/artifact-sets";
import { ARTIFACT_SLOTS } from "@/features/artifact-slots";
import { CharacterIds } from "@/enums/character";
import { STATS } from "@/constants/stats";
import { StatsCrit } from "./_help";
import { VideoSourceIds } from "@/enums/video-source";

export default new ArtifactSetRecommendations(ARTIFACT_SETS.NIGHTTIME_WHISPERS_IN_THE_ECHOING_WOODS)
  .setCharacters([
    new ArtifactSetCharacterRecommendation(CharacterIds.Navia).setIsBetter().setNotes([
      "Является одним из лучших комплектов для Навии, так как увеличивает силу атаки и бонус Гео урона в сумме до 50% "
      + "при выполнении всех условий 4 предметов. Для реализации условий в команде необходимо иметь Пиро/Крио/Гидро "
      + "и/или Электро персонажей.",
    ]),
  ])
  .setPreferredStats({
    [ARTIFACT_SLOTS.SANDS]: [STATS.ATK_PERCENTAGE],
    [ARTIFACT_SLOTS.GOBLET]: [STATS.ATK_PERCENTAGE, STATS.GEO_DMG_BONUS],
    [ARTIFACT_SLOTS.CIRCLET]: StatsCrit,
    additional: [...StatsCrit, STATS.ATK_PERCENTAGE, STATS.ENERGY_RECHARGE],
  })
  .setVideoSourceIds([VideoSourceIds.AllAboutAllArtifactSets]);
