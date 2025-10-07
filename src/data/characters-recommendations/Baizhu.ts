import { CharacterIds } from "@/enums/character";
import {
  CharacterRecommendations,
  CharacterTalentLevelingRecommendation,
  CharacterWeaponRecommendation,
} from "@/classes/character-recommendations";
import { TalentIds } from "@/enums/talent";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.Baizhu)
  .setRequiredLevel("80/90")
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "Во вторую очередь\n(8)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "В первую очередь\n(8)"]),
  ])
  .setVideoSourceIds([
    VideoSourceIds.AllAboutAllTalents,
    VideoSourceIds.TheBestAvailableWeaponsForEveryCharacter,
    VideoSourceIds.TheBestWeaponsForEveryCharacter,
    VideoSourceIds.WhoNeedsLevelingPart2,
  ])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.JadefallsSplendor).setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.ThrillingTalesOfDragonSlayers).setIsBetter("Лучшее доступное оружие").setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.HakushinRing).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.FavoniusCodex).setIsBetter("Лучшее сигнатурное оружие").setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.PrototypeAmber).setRefinement(5),
  ]);
