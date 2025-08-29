import { CharacterIds } from "../../characters/enums";
import {
  CharacterRecommendationsClass,
  CharacterTalentLevelingRecommendationClass,
  CharacterWeaponRecommendationClass,
} from "../classes";
import { CharacterRecommendationsVideoSources } from "../enums";
import { TalentIds } from "../../talents/enums";
import { WeaponIds } from "../../weapons/enums";

export default new CharacterRecommendationsClass(CharacterIds.Amber)
  .setTalentLeveling([
    CharacterTalentLevelingRecommendationClass.init([TalentIds.NormalAttack, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentIds.ElementalSkill, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentIds.ElementalBurst, "Не качаем\n(1)"]),
  ])
  .setVideoSources([
    CharacterRecommendationsVideoSources.BestWeaponsForEveryCharacter,
    CharacterRecommendationsVideoSources.AllAboutAllTalents,
  ])
  .setWeapons([
    new CharacterWeaponRecommendationClass(WeaponIds.ElegyForTheEnd).setIsBetter().setRefinement(1),
  ]);
