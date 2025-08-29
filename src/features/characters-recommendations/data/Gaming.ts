import { CharacterIds } from "../../characters/enums";
import { CharacterRecommendationsClass, CharacterWeaponRecommendationClass } from "../classes";
import { CharacterRecommendationsVideoSources } from "../enums";
import { WeaponIds } from "../../weapons/enums";

export default new CharacterRecommendationsClass(CharacterIds.Gaming)
  .setVideoSources([CharacterRecommendationsVideoSources.BestWeaponsForEveryCharacter])
  .setWeapons([
    new CharacterWeaponRecommendationClass(WeaponIds.SerpentSpine).setIsBetter().setRefinement(5),
    new CharacterWeaponRecommendationClass(WeaponIds.RedhornStonethresher).setRefinement(1),
    new CharacterWeaponRecommendationClass(WeaponIds.WolfsGravestone).setRefinement(1),
  ]);
