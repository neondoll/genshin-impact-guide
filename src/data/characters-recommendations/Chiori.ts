import { CharacterIds } from "@/enums/character";
import { CharacterRecommendations, CharacterWeaponRecommendation } from "@/classes/character-recommendations";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.Chiori)
  .setVideoSourceIds([
    VideoSourceIds.TheBestAvailableWeaponsForEveryCharacter,
    VideoSourceIds.TheBestWeaponsForEveryCharacter,
  ])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.UrakuMisugiri).setIsBetter("Лучшее оружие (средняя зависимость)").setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.CinnabarSpindle).setIsBetter("Лучшее эвентовое оружие").setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.FesteringDesire).setIsBetter("Лучшее эвентовое оружие").setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.FluteOfEzpitzal).setIsBetter("Лучшее доступное оружие").setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.HarbingerOfDawn).setRefinement(5),
  ]);
