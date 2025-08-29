import { CharacterIds } from "../../characters/enums";
import {
  CharacterRecommendationsClass,
  CharacterTalentLevelingRecommendationClass,
  CharacterWeaponRecommendationClass,
} from "../classes";
import { CharacterRecommendationsVideoSources } from "../enums";
import { TalentIds } from "../../talents/enums";
import { WeaponIds } from "../../weapons/enums";

export default new CharacterRecommendationsClass(CharacterIds.Klee)
  .setFirstConstellationOrSignatureWeapon("С1")
  .setTalentLeveling([
    CharacterTalentLevelingRecommendationClass.init([TalentIds.NormalAttack, "В первую очередь\n(10)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentIds.ElementalSkill, "По необходимости\n(10)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentIds.ElementalBurst, "Во вторую очередь\n(10)"]),
  ])
  .setVideoSources([
    CharacterRecommendationsVideoSources.FirstConstellationOrSignatureWeapon,
    CharacterRecommendationsVideoSources.BestWeaponsForEveryCharacter,
    CharacterRecommendationsVideoSources.AllAboutAllTalents,
  ])
  .setWeapons([
    new CharacterWeaponRecommendationClass(WeaponIds.LostPrayerToTheSacredWinds).setIsBetter().setRefinement(1),
    new CharacterWeaponRecommendationClass(WeaponIds.ThrillingTalesOfDragonSlayers).setIsBetter().setRefinement(5),
    new CharacterWeaponRecommendationClass(WeaponIds.TheWidsith).setRefinement(5),
  ]);
