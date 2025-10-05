import { CharacterIds } from "@/enums/character";
import { CharacterRecommendations, CharacterWeaponRecommendation } from "@/classes/character-recommendations";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.Sigewinne)
  .setVideoSourceIds([VideoSourceIds.BestWeaponsForEveryCharacter])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.SilvershowerHeartstrings).setIsBetter().setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.SacrificialBow).setRefinement(5),
  ]);
