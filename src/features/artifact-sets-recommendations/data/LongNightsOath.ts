import { ArtifactSetCharacterRecommendationClass, ArtifactSetRecommendationsClass } from "../classes";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { CharacterIds } from "../../characters/enums";

export default ArtifactSetRecommendationsClass.init([ArtifactSetIds.LongNightsOath, [
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Varesa)
    .setNotes("Варесе будет очень полезно увеличение урона атак в падении, которые она использует. Поскольку она часто активирует элементальный навык, а также заряженную атаку и атаку в падении после навыка, она может получить максимальный бонус урона."),
]]);
