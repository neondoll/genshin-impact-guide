import { CharacterIds } from "../../characters/enums";
import { CharacterRecommendationsClass, CharacterWeaponRecommendationClass } from "../classes";
import { CharacterRecommendationsVideoSources } from "../enums";
import { WeaponKeys } from "@/database/weapons/enums";

export default new CharacterRecommendationsClass(CharacterIds.Sethos)
  .setVideoSources([CharacterRecommendationsVideoSources.BestWeaponsForEveryCharacter])
  .setWeapons([new CharacterWeaponRecommendationClass(WeaponKeys.HuntersPath).setIsBetter().setRefinement(1)]);
