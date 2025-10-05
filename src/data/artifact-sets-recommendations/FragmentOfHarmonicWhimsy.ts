import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ArtifactSetIds } from "@/enums/artifact-set";
import { CharacterIds } from "@/enums/character";

export default new ArtifactSetRecommendations(ArtifactSetIds.FragmentOfHarmonicWhimsy)
  .setCharacters([
    new ArtifactSetCharacterRecommendation(CharacterIds.Arlecchino).setIsBetter().setNotes([
      "Один из лучших комплектов для Арлекино, так как повышает важную силу атаки и увеличивает наносимый урон. Так "
      + "как Арлекино сама накладывает на себя Долг жизни, она выполняет условие 4 предметов.",
    ]),
  ]);
