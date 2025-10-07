import { CharacterIds } from "@/enums/character";
import { CharacterRecommendations, CharacterWeaponRecommendation } from "@/classes/character-recommendations";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.Kachina)
  .setVideoSourceIds([
    VideoSourceIds.TheBestAvailableWeaponsForEveryCharacter,
    VideoSourceIds.TheBestWeaponsForEveryCharacter,
  ])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.FavoniusLance).setIsBetter("Лучшее сигнатурное/доступное оружие").setRefinement(5),
  ]);
