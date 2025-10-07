import { CharacterIds } from "@/enums/character";
import {
  CharacterRecommendations,
  CharacterTalentLevelingRecommendation,
  CharacterWeaponRecommendation,
} from "@/classes/character-recommendations";
import { TalentIds } from "@/enums/talent";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.Klee)
  .setFirstConstellationOrSignatureWeapon("С1")
  .setRequiredLevel("90/90")
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "В первую очередь\n(10)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "По необходимости\n(10)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "Во вторую очередь\n(10)"]),
  ])
  .setVideoSourceIds([
    VideoSourceIds.AllAboutAllTalents,
    VideoSourceIds.FirstConstellationOrSignatureWeapon,
    VideoSourceIds.TheBestAvailableWeaponsForEveryCharacter,
    VideoSourceIds.TheBestWeaponsForEveryCharacter,
    VideoSourceIds.WhoNeedsLevelingPart1,
  ])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.LostPrayerToTheSacredWinds).setIsBetter("Лучшее оружие (средняя зависимость)").setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.ThrillingTalesOfDragonSlayers).setIsBetter("Лучшее оружие").setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.DodocoTales).setIsBetter("Лучшее эвентовое оружие").setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.TheWidsith).setIsBetter("Лучшее доступное оружие").setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.FlowingPurity).setIsBetter("Лучшее доступное оружие").setRefinement(5),
  ]);
