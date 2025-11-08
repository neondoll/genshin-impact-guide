import { ARTIFACT_SETS } from "@/features/artifact-sets";
import { artifactSetById, StatsCrit, StatsElementDamageBonus } from "./_help";
import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ARTIFACT_SLOTS } from "@/features/artifact-slots";
import { CharacterIds } from "@/enums/character";
import { STATS } from "@/constants/stats";
import { VideoSourceIds } from "@/enums/video-source";

export default new ArtifactSetRecommendations(ARTIFACT_SETS.BLIZZARD_STRAYER)
  .setCharacters([
    new ArtifactSetCharacterRecommendation(CharacterIds.Ganyu).setNotes([
      "Является персонажем, наносящим основной Крио урон в команде, поэтому ей подойдут бонусы как 2 предметов, так и "
      + "полного комплекта. Полный комплект лучше всего подходят для игры через Заморозку, а 2 предмета комплекта "
      + "можно использовать в других случаях и сочетать с 2 предметами "
      + artifactSetById(ARTIFACT_SETS.GLADIATORS_FINALE) + " или аналогами.",
    ]),
    new ArtifactSetCharacterRecommendation(CharacterIds.KamisatoAyaka).setIsBetter().setNotes([
      "Является персонажем, наносящим основной Крио урон в команде, поэтому ей подойдут бонусы как 2 предметов, так и "
      + "полного комплекта. Полный комплект лучше всего подходит для игры через Заморозку, а 2 предмета комплекта "
      + "можно использовать в любом другом случае и сочетать с 2 предметами "
      + artifactSetById(ARTIFACT_SETS.GLADIATORS_FINALE) + " или аналогами.",
    ]),
    new ArtifactSetCharacterRecommendation(CharacterIds.Wriothesley),
  ])
  .setPreferredStats({
    [ARTIFACT_SLOTS.SANDS]: [STATS.ATK_PERCENTAGE],
    [ARTIFACT_SLOTS.GOBLET]: [...StatsElementDamageBonus, STATS.ATK_PERCENTAGE],
    [ARTIFACT_SLOTS.CIRCLET]: StatsCrit,
    additional: [...StatsCrit, STATS.ATK_PERCENTAGE, STATS.ENERGY_RECHARGE],
  })
  .setVideoSourceIds([VideoSourceIds.AllAboutAllArtifactSets]);
