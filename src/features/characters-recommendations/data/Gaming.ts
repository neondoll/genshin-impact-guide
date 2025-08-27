import { CharacterIds } from "../../characters/enums";
import { CharacterRecommendationsClass, CharacterWeaponRecommendationClass } from "../classes";
import { CharacterRecommendationsVideoSources } from "../enums";
import { WeaponKeys } from "@/database/weapons/enums";

export default new CharacterRecommendationsClass(CharacterIds.Gaming)
  .setVideoSources([CharacterRecommendationsVideoSources.BestWeaponsForEveryCharacter])
  .setWeapons([
    new CharacterWeaponRecommendationClass(WeaponKeys.SerpentSpine).setIsBetter().setRefinement(5),
    new CharacterWeaponRecommendationClass(WeaponKeys.RedhornStonethresher).setRefinement(1),
    new CharacterWeaponRecommendationClass(WeaponKeys.WolfsGravestone).setRefinement(1),
  ]);
