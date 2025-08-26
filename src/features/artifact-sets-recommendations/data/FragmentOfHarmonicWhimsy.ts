import { ArtifactSetCharacterRecommendationClass, ArtifactSetRecommendationsClass } from "../classes";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { CharacterIds } from "../../characters/enums";

export default ArtifactSetRecommendationsClass.init([ArtifactSetIds.FragmentOfHarmonicWhimsy, [
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Arlecchino).setIsBetter()
    .setNotes("Один из лучших комплектов для Арлекино, так как повышает важную силу атаки и увеличивает наносимый урон. Так как Арлекино сама накладывает на себя Долг жизни, она выполняет условие 4 предметов."),
]]);
