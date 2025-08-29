import { CharacterIds } from "../../characters/enums";
import {
  CharacterRecommendationsClass,
  CharacterTalentLevelingRecommendationClass,
  CharacterWeaponRecommendationClass,
} from "../classes";
import { CharacterRecommendationsVideoSources } from "../enums";
import { TalentIds } from "../../talents/enums";
import { WeaponIds } from "../../weapons/enums";

export default new CharacterRecommendationsClass(CharacterIds.Albedo)
  .setTalentLeveling([
    CharacterTalentLevelingRecommendationClass.init([TalentIds.NormalAttack, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentIds.ElementalSkill, "В первую очередь\n(10)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentIds.ElementalBurst, "Во вторую очередь\n(6)"]),
  ])
  .setVideoSources([
    CharacterRecommendationsVideoSources.FirstConstellationOrSignatureWeapon,
    CharacterRecommendationsVideoSources.BestWeaponsForEveryCharacter,
    CharacterRecommendationsVideoSources.AllAboutAllTalents,
  ])
  .setWeapons([
    new CharacterWeaponRecommendationClass(WeaponIds.PrimordialJadeCutter).setIsBetter().setRefinement(1),
    new CharacterWeaponRecommendationClass(WeaponIds.UrakuMisugiri).setPercent(1.241).setRefinement(1),
    new CharacterWeaponRecommendationClass(WeaponIds.CinnabarSpindle).setPercent(1.229).setRefinement(5),
    new CharacterWeaponRecommendationClass(WeaponIds.HarbingerOfDawn).setPercent(1.000).setRefinement(5),
  ]);
