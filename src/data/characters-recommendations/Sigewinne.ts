import { CharacterIds } from "@/enums/character";
import { CharacterRecommendations, CharacterWeaponRecommendation } from "@/classes/character-recommendations";
import { CharacterRecommendationsVideoSources } from "@/enums/character-recommendations";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.Sigewinne)
  .setVideoSources([CharacterRecommendationsVideoSources.BestWeaponsForEveryCharacter])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.SilvershowerHeartstrings).setIsBetter().setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.SacrificialBow).setRefinement(5),
  ]);
