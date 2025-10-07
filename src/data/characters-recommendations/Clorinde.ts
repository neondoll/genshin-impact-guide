import { CharacterIds } from "@/enums/character";
import { CharacterRecommendations, CharacterWeaponRecommendation } from "@/classes/character-recommendations";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.Clorinde)
  .setVideoSourceIds([
    VideoSourceIds.TheBestAvailableWeaponsForEveryCharacter,
    VideoSourceIds.TheBestWeaponsForEveryCharacter,
  ])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.Absolution).setIsBetter("Лучшее оружие (средняя зависимость)").setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.FinaleOfTheDeep).setIsBetter("Лучшее доступное оружие").setRefinement(5),
  ]);
