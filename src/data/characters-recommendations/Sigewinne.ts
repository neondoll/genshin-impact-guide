import { CharacterIds } from "@/enums/character";
import { CharacterRecommendations, CharacterWeaponRecommendation } from "@/classes/character-recommendations";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.Sigewinne)
  .setVideoSourceIds([VideoSourceIds.TheBestWeaponsForEveryCharacter])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.SacrificialBow).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.SilvershowerHeartstrings).setIsBetter("Лучшее сигнатурное оружие").setRefinement(1),
  ]);
