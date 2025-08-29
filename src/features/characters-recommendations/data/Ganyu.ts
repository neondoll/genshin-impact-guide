import { CharacterIds } from "../../characters/enums";
import {
  CharacterRecommendationsClass,
  CharacterTalentLevelingRecommendationClass,
  CharacterWeaponRecommendationClass,
} from "../classes";
import { CharacterRecommendationsVideoSources } from "../enums";
import { TalentIds } from "../../talents/enums";
import { WeaponIds } from "../../weapons/enums";

export default new CharacterRecommendationsClass(CharacterIds.Ganyu)
  .setFirstConstellationOrSignatureWeapon("С1")
  .setTalentLeveling({
    Мелт: [
      CharacterTalentLevelingRecommendationClass.init([TalentIds.NormalAttack, "В первую очередь\n(10)"]),
      CharacterTalentLevelingRecommendationClass.init([TalentIds.ElementalSkill, "Во вторую очередь\n(8)"]),
      CharacterTalentLevelingRecommendationClass.init([TalentIds.ElementalBurst, "Не качаем\n(1)"]),
    ],
    Фриз: [
      CharacterTalentLevelingRecommendationClass.init([TalentIds.NormalAttack, "В первую очередь\n(10)"]),
      CharacterTalentLevelingRecommendationClass.init([TalentIds.ElementalSkill, "Во вторую очередь\n(8)"]),
      CharacterTalentLevelingRecommendationClass.init([TalentIds.ElementalBurst, "По необходимости\n(6)"]),
    ],
    Саппорт: [
      CharacterTalentLevelingRecommendationClass.init([TalentIds.NormalAttack, "Не качаем\n(1)"]),
      CharacterTalentLevelingRecommendationClass.init([TalentIds.ElementalSkill, "Во вторую очередь\n(6)"]),
      CharacterTalentLevelingRecommendationClass.init([TalentIds.ElementalBurst, "В первую очередь\n(8)"]),
    ],
  })
  .setVideoSources([
    CharacterRecommendationsVideoSources.FirstConstellationOrSignatureWeapon,
    CharacterRecommendationsVideoSources.BestWeaponsForEveryCharacter,
    CharacterRecommendationsVideoSources.AllAboutAllTalents,
  ])
  .setWeapons([
    new CharacterWeaponRecommendationClass(WeaponIds.AstralVulturesCrimsonPlumage).setIsBetter().setRefinement(1),
    new CharacterWeaponRecommendationClass(WeaponIds.AmosBow).setRefinement(1),
    new CharacterWeaponRecommendationClass(WeaponIds.ElegyForTheEnd).setRefinement(1),
    new CharacterWeaponRecommendationClass(WeaponIds.SongOfStillness).setRefinement(5),
  ]);
