import { CharacterIds } from "../../characters/enums";
import { CharacterRecommendationsClass, CharacterWeaponRecommendationClass } from "../classes";
import { CharacterRecommendationsVideoSources } from "../enums";
import { WeaponKeys } from "@/database/weapons/enums";

export default new CharacterRecommendationsClass(CharacterIds.Sigewinne)
  .setVideoSources([CharacterRecommendationsVideoSources.BestWeaponsForEveryCharacter])
  .setWeapons([
    new CharacterWeaponRecommendationClass(WeaponKeys.SilvershowerHeartstrings).setIsBetter().setRefinement(1),
    new CharacterWeaponRecommendationClass(WeaponKeys.SacrificialBow).setRefinement(5),
  ]);
