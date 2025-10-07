import { CharacterIds } from "@/enums/character";
import {
  CharacterRecommendations,
  CharacterTalentLevelingRecommendation,
  CharacterWeaponRecommendation,
} from "@/classes/character-recommendations";
import { TalentIds } from "@/enums/talent";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.Razor)
  .setRequiredLevel("90/90")
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "Не качаем\n(1)"]),
  ])
  .setVideoSourceIds([
    VideoSourceIds.AllAboutAllTalents,
    VideoSourceIds.TheBestAvailableWeaponsForEveryCharacter,
    VideoSourceIds.TheBestWeaponsForEveryCharacter,
    VideoSourceIds.WhoNeedsLevelingPart1,
  ])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.BloodtaintedGreatsword).setIsBetter("Лучшее оружие").setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.Rainslasher).setIsBetter("Лучшее оружие").setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.MakhairaAquamarine).setIsBetter("Лучшее оружие").setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.MailedFlower).setIsBetter("Лучшее доступное оружие").setRefinement(5),
  ]);
