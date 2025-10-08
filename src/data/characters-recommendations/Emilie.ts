import { CharacterIds } from "@/enums/character";
import { CharacterRecommendations, CharacterWeaponRecommendation } from "@/classes/character-recommendations";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.Emilie)
  .setFirstConstellationOrSignatureWeapon("Сигна")
  .setVideoSourceIds([
    VideoSourceIds.FirstConstellationOrSignatureWeapon,
    VideoSourceIds.TheBestAvailableWeaponsForEveryCharacter,
    VideoSourceIds.TheBestWeaponsForEveryCharacter,
  ])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.LumidouceElegy).setIsBetter("Лучшее оружие (высокая зависимость)").setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.BlackcliffPole).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.FavoniusLance).setIsBetter("Лучшее доступное оружие").setRefinement(5),
  ]);
