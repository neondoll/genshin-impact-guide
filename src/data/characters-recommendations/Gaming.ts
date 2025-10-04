import { CharacterIds } from "@/enums/character";
import { CharacterRecommendations, CharacterWeaponRecommendation } from "@/classes/character-recommendations";
import { CharacterRecommendationsVideoSources } from "@/enums/character-recommendations";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.Gaming)
  .setVideoSources([CharacterRecommendationsVideoSources.BestWeaponsForEveryCharacter])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.SerpentSpine).setIsBetter().setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.RedhornStonethresher).setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.WolfsGravestone).setRefinement(1),
  ]);
