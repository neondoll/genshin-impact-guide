import { CharacterIds } from "@/enums/character";
import {
  CharacterRecommendations,
  CharacterTalentLevelingRecommendation,
  CharacterWeaponRecommendation,
} from "@/classes/character-recommendations";
import { TalentIds } from "@/enums/talent";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.Ningguang)
  .setRequiredLevel("80/80")
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "В первую очередь\n(8)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "По необходимости\n(8)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "Во вторую очередь\n(8)"]),
  ])
  .setVideoSourceIds([
    VideoSourceIds.AllAboutAllTalents,
    VideoSourceIds.TheBestAvailableWeaponsForEveryCharacter,
    VideoSourceIds.TheBestWeaponsForEveryCharacter,
    VideoSourceIds.WhoNeedsLevelingPart1,
  ])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.LostPrayerToTheSacredWinds).setIsBetter("Лучшее сигнатурное оружие").setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.ThrillingTalesOfDragonSlayers).setIsBetter("Лучшее сигнатурное/доступное оружие").setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.TheWidsith).setIsBetter("Лучшее доступное оружие (средняя зависимость от сигнатурного оружия)").setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.FlowingPurity).setIsBetter("Лучшее доступное оружие (получше) (средняя зависимость от сигнатурного оружия)").setRefinement(5),
  ]);
