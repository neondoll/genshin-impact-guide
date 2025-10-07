import { CharacterIds } from "@/enums/character";
import {
  CharacterRecommendations,
  CharacterTalentLevelingRecommendation,
  CharacterWeaponRecommendation,
} from "@/classes/character-recommendations";
import { TalentIds } from "@/enums/talent";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.Lisa)
  .setRequiredLevel("80/90")
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
    new CharacterWeaponRecommendation(WeaponIds.AThousandFloatingDreams).setIsBetter("Лучшее сигнатурное оружие").setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.TheWidsith).setIsBetter("Лучшее доступное оружие (не самая высокая зависимость от сигнатурного оружия)").setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.SacrificialFragments).setIsBetter("Лучшее доступное оружие (не самая высокая зависимость от сигнатурного оружия)").setRefinement(5),
  ]);
