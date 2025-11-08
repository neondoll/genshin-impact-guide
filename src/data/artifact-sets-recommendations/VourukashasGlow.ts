import { artifactSetById, StatsCrit, StatsElementDamageBonus } from "./_help";
import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ARTIFACT_SETS } from "@/features/artifact-sets";
import { ARTIFACT_SLOTS } from "@/features/artifact-slots";
import { CharacterIds } from "@/enums/character";
import { STATS } from "@/constants/stats";
import { VideoSourceIds } from "@/enums/video-source";

export default new ArtifactSetRecommendations(ARTIFACT_SETS.VOURUKASHAS_GLOW)
  .setCharacters([
    new ArtifactSetCharacterRecommendation(CharacterIds.Dehya).setIsBetter().setNotes([
      `Сияние Вурукаши - один из лучших комплектов для позиции основного урона и поддержки. Бонус 4 предметов увеличит урон Дэхьи, так как она получает урон, даже если не находится на поле.\nМожет использовать как полный комплект, так и 2 предмета, сочетая их с ${artifactSetById(ARTIFACT_SETS.CRIMSON_WITCH_OF_FLAMES)}, ${artifactSetById(ARTIFACT_SETS.WANDERERS_TROUPE)}, ${artifactSetById(ARTIFACT_SETS.GILDED_DREAMS)}, ${artifactSetById(ARTIFACT_SETS.FLOWER_OF_PARADISE_LOST)} или ${artifactSetById(ARTIFACT_SETS.TENACITY_OF_THE_MILLELITH)} в зависимости от позиции. В данных случаях ${artifactSetById(ARTIFACT_SETS.VOURUKASHAS_GLOW)} может быть заменён ${artifactSetById(ARTIFACT_SETS.TENACITY_OF_THE_MILLELITH)}, если не используются оба комплекта.`,
    ]),
  ])
  .setPreferredStats({
    [ARTIFACT_SLOTS.SANDS]: [STATS.ATK_PERCENTAGE, STATS.ELEMENTAL_MASTERY, STATS.HP_PERCENTAGE],
    [ARTIFACT_SLOTS.GOBLET]: [...StatsElementDamageBonus, STATS.ATK_PERCENTAGE],
    [ARTIFACT_SLOTS.CIRCLET]: StatsCrit,
    additional: [
      ...StatsCrit, STATS.ATK_PERCENTAGE, STATS.ELEMENTAL_MASTERY, STATS.ENERGY_RECHARGE, STATS.HP_PERCENTAGE,
    ],
  })
  .setVideoSourceIds([VideoSourceIds.AllAboutAllArtifactSets]);
