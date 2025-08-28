import { CharacterIds } from "../../characters/enums";
import { CharacterRecommendationsClass, CharacterWeaponRecommendationClass } from "../classes";
import { CharacterRecommendationsVideoSources } from "../enums";
import { WeaponIds } from "../../weapons/enums";

export default new CharacterRecommendationsClass(CharacterIds.Sigewinne)
  .setVideoSources([CharacterRecommendationsVideoSources.BestWeaponsForEveryCharacter])
  .setWeapons([
    new CharacterWeaponRecommendationClass(WeaponIds.SilvershowerHeartstrings).setIsBetter().setRefinement(1),
    new CharacterWeaponRecommendationClass(WeaponIds.SacrificialBow).setRefinement(5),
  ]);
