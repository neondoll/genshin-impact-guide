import { CharacterIds } from "@/enums/character";
import {
  CharacterRecommendations,
  CharacterTalentLevelingRecommendation,
  CharacterWeaponRecommendation,
} from "@/classes/character-recommendations";
import { TalentIds } from "@/enums/talent";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.Kaeya)
  .setRequiredLevel("70/80")
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "Во вторую очередь\n(6)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "В первую очередь\n(6)"]),
  ])
  .setVideoSourceIds([
    VideoSourceIds.AllAboutAllTalents,
    VideoSourceIds.TheBestAvailableWeaponsForEveryCharacter,
    VideoSourceIds.TheBestWeaponsForEveryCharacter,
    VideoSourceIds.WhoNeedsLevelingPart1,
  ])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.MistsplitterReforged).setIsBetter("Лучшее сигнатурное оружие").setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.FinaleOfTheDeep).setIsBetter("Лучшее доступное оружие (средняя зависимость от сигнатурного оружия)").setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.BlackcliffLongsword).setIsBetter("Лучшее доступное оружие (средняя зависимость от сигнатурного оружия)").setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.FavoniusSword).setIsBetter("Лучшее доступное оружие (средняя зависимость от сигнатурного оружия)").setRefinement(5),
  ]);
