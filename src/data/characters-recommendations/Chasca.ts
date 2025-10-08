import { CharacterIds } from "@/enums/character";
import { CharacterRecommendations, CharacterWeaponRecommendation } from "@/classes/character-recommendations";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.Chasca)
  .setFirstConstellationOrSignatureWeapon("Сигна")
  .setVideoSourceIds([VideoSourceIds.FirstConstellationOrSignatureWeapon, VideoSourceIds.GuideToChasca])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.AstralVulturesCrimsonPlumage).setIsBetter("Лучшее оружие").setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.ChainBreaker).setIsBetter("Лучшее доступное оружие").setRefinement(5),
  ]);
