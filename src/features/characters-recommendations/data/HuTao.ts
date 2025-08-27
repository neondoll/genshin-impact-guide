import { CharacterIds } from "../../characters/enums";
import {
  CharacterRecommendationsClass,
  CharacterTalentLevelingRecommendationClass,
  CharacterWeaponRecommendationClass,
} from "../classes";
import { CharacterRecommendationsVideoSources } from "../enums";
import { TalentKeys } from "@/database/talents/enums";
import { WeaponKeys } from "@/database/weapons/enums";

export default new CharacterRecommendationsClass(CharacterIds.HuTao)
  .setFirstConstellationOrSignatureWeapon("С1")
  .setTalentLeveling([
    CharacterTalentLevelingRecommendationClass.init([TalentKeys.NormalAttack, "В первую очередь\n(10)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentKeys.ElementalSkill, "Во вторую очередь\n(10)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentKeys.ElementalBurst, "По необходимости\n(10)"]),
  ])
  .setVideoSources([
    CharacterRecommendationsVideoSources.FirstConstellationOrSignatureWeapon,
    CharacterRecommendationsVideoSources.BestWeaponsForEveryCharacter,
    CharacterRecommendationsVideoSources.AllAboutAllTalents,
  ])
  .setWeapons([
    new CharacterWeaponRecommendationClass(WeaponKeys.StaffOfHoma).setIsBetter().setRefinement(1),
    new CharacterWeaponRecommendationClass(WeaponKeys.StaffOfTheScarletSands).setRefinement(1),
    new CharacterWeaponRecommendationClass(WeaponKeys.DragonsBane).setRefinement(5),
  ]);
