import { CharacterIds } from "@/enums/character";
import {
  CharacterRecommendations,
  CharacterTalentLevelingRecommendation,
  CharacterWeaponRecommendation,
} from "@/classes/character-recommendations";
import { TalentIds } from "@/enums/talent";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.Eula)
  .setFirstConstellationOrSignatureWeapon("Сигна")
  .setRequiredLevel("80/90")
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "Во вторую очередь\n(10)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "По необходимости\n(6)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "В первую очередь\n(10)"]),
  ])
  .setVideoSourceIds([
    VideoSourceIds.AllAboutAllTalents,
    VideoSourceIds.FirstConstellationOrSignatureWeapon,
    VideoSourceIds.TheBestAvailableWeaponsForEveryCharacter,
    VideoSourceIds.TheBestWeaponsForEveryCharacter,
    VideoSourceIds.WhoNeedsLevelingPart1,
  ])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.SongOfBrokenPines).setIsBetter("Лучшее оружие (высокая зависимость)").setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.UltimateOverlordsMegaMagicSword).setIsBetter("Лучшее эвентовое оружие").setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.TidalShadow).setIsBetter("Лучшее доступное оружие").setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.PrototypeArchaic).setIsBetter("Лучшее доступное оружие").setRefinement(5),
  ]);
