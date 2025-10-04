import { CharacterIds } from "@/enums/character";
import { CharacterRecommendations, CharacterWeaponRecommendation } from "@/classes/character-recommendations";
import { CharacterRecommendationsVideoSources } from "@/enums/character-recommendations";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.Kinich)
  .setVideoSources([CharacterRecommendationsVideoSources.BestWeaponsForEveryCharacter])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.FangOfTheMountainKing).setIsBetter().setRefinement(1),
  ]);
