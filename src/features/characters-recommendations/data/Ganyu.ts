import { CharacterIds } from "../../characters/enums";
import {
  CharacterRecommendationsClass,
  CharacterTalentLevelingRecommendationClass,
  CharacterWeaponRecommendationClass,
} from "../classes";
import { CharacterRecommendationsVideoSources } from "../enums";
import { TalentKeys } from "@/database/talents/enums";
import { WeaponKeys } from "@/database/weapons/enums";

export default new CharacterRecommendationsClass(CharacterIds.Ganyu)
  .setFirstConstellationOrSignatureWeapon("С1")
  .setTalentLeveling({
    Мелт: [
      CharacterTalentLevelingRecommendationClass.init([TalentKeys.NormalAttack, "В первую очередь\n(10)"]),
      CharacterTalentLevelingRecommendationClass.init([TalentKeys.ElementalSkill, "Во вторую очередь\n(8)"]),
      CharacterTalentLevelingRecommendationClass.init([TalentKeys.ElementalBurst, "Не качаем\n(1)"]),
    ],
    Фриз: [
      CharacterTalentLevelingRecommendationClass.init([TalentKeys.NormalAttack, "В первую очередь\n(10)"]),
      CharacterTalentLevelingRecommendationClass.init([TalentKeys.ElementalSkill, "Во вторую очередь\n(8)"]),
      CharacterTalentLevelingRecommendationClass.init([TalentKeys.ElementalBurst, "По необходимости\n(6)"]),
    ],
    Саппорт: [
      CharacterTalentLevelingRecommendationClass.init([TalentKeys.NormalAttack, "Не качаем\n(1)"]),
      CharacterTalentLevelingRecommendationClass.init([TalentKeys.ElementalSkill, "Во вторую очередь\n(6)"]),
      CharacterTalentLevelingRecommendationClass.init([TalentKeys.ElementalBurst, "В первую очередь\n(8)"]),
    ],
  })
  .setVideoSources([
    CharacterRecommendationsVideoSources.FirstConstellationOrSignatureWeapon,
    CharacterRecommendationsVideoSources.BestWeaponsForEveryCharacter,
    CharacterRecommendationsVideoSources.AllAboutAllTalents,
  ])
  .setWeapons([
    new CharacterWeaponRecommendationClass(WeaponKeys.AstralVulturesCrimsonPlumage).setIsBetter().setRefinement(1),
    new CharacterWeaponRecommendationClass(WeaponKeys.AmosBow).setRefinement(1),
    new CharacterWeaponRecommendationClass(WeaponKeys.ElegyForTheEnd).setRefinement(1),
    new CharacterWeaponRecommendationClass(WeaponKeys.SongOfStillness).setRefinement(5),
  ]);
