import { CharacterIds } from "@/enums/character";
import {
  CharacterRecommendations,
  CharacterTalentLevelingRecommendation,
  CharacterWeaponRecommendation,
} from "@/classes/character-recommendations";
import { TalentIds } from "@/enums/talent";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.Albedo)
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "В первую очередь\n(10)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "Во вторую очередь\n(6)"]),
  ])
  .setVideoSourceIds([
    VideoSourceIds.AllAboutAllTalents,
    VideoSourceIds.TheBestWeaponsForEveryCharacter,
    VideoSourceIds.FirstConstellationOrSignatureWeapon,
  ])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.PrimordialJadeCutter).setIsBetter().setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.UrakuMisugiri).setPercent(1.241).setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.CinnabarSpindle).setPercent(1.229).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.HarbingerOfDawn).setPercent(1.000).setRefinement(5),
  ]);
