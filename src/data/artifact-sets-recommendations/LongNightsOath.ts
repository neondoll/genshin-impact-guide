import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ARTIFACT_SETS } from "@/constants/artifact-sets";
import { CharacterIds } from "@/enums/character";

export default new ArtifactSetRecommendations(ARTIFACT_SETS.LONG_NIGHTS_OATH)
  .setCharacters([
    new ArtifactSetCharacterRecommendation(CharacterIds.Varesa).setNotes([
      "Варесе будет очень полезно увеличение урона атак в падении, которые она использует. Поскольку она часто "
      + "активирует элементальный навык, а также заряженную атаку и атаку в падении после навыка, она может получить "
      + "максимальный бонус урона.",
    ]),
  ]);
