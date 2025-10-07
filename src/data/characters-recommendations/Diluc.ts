import { CharacterIds } from "@/enums/character";
import {
  CharacterRecommendations,
  CharacterTalentLevelingRecommendation,
  CharacterWeaponRecommendation,
} from "@/classes/character-recommendations";
import { TalentIds } from "@/enums/talent";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.Diluc)
  .setRequiredLevel("90/90")
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "В первую очередь\n(8)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "Во вторую очередь\n(8)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "По необходимости\n(8)"]),
  ])
  .setVideoSourceIds([
    VideoSourceIds.AllAboutAllTalents,
    VideoSourceIds.TheBestAvailableWeaponsForEveryCharacter,
    VideoSourceIds.TheBestWeaponsForEveryCharacter,
    VideoSourceIds.WhoNeedsLevelingPart1,
  ])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.RedhornStonethresher).setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.SerpentSpine).setIsBetter("Лучшее оружие (высокая зависимость)").setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.WolfsGravestone).setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.BlackcliffSlasher).setIsBetter("Лучшее доступное оружие (когда работает на полную)").setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.EarthShaker).setIsBetter("Лучшее доступное оружие").setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.Rainslasher).setIsBetter("Лучшее доступное оружие").setRefinement(5),
  ]);
