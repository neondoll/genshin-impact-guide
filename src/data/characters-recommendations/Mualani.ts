import { CharacterIds } from "@/enums/character";
import { CharacterRecommendations, CharacterWeaponRecommendation } from "@/classes/character-recommendations";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.Mualani)
  .setVideoSourceIds([
    VideoSourceIds.TheBestAvailableWeaponsForEveryCharacter,
    VideoSourceIds.TheBestWeaponsForEveryCharacter,
    VideoSourceIds.GuideToMualani,
  ])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.SurfsUp).setIsBetter("Лучшее оружие (средняя зависимость)").setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.RingOfYaxche).setIsBetter("Лучшее доступное оружие").setRefinement(5),
  ]);
