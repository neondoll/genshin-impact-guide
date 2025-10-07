import { CharacterIds } from "@/enums/character";
import { CharacterRecommendations, CharacterWeaponRecommendation } from "@/classes/character-recommendations";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.Gaming)
  .setVideoSourceIds([
    VideoSourceIds.TheBestAvailableWeaponsForEveryCharacter,
    VideoSourceIds.TheBestWeaponsForEveryCharacter,
  ])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.SerpentSpine).setIsBetter("Лучшее оружие (высокая зависимость)").setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.RedhornStonethresher).setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.WolfsGravestone).setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.EarthShaker).setIsBetter("Лучшее доступное оружие").setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.Rainslasher).setIsBetter("Лучшее доступное оружие").setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.TidalShadow).setRefinement(5),
  ]);
