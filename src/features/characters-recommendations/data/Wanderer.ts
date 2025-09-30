import { CharacterIds } from "../../characters/enums";
import {
  CharacterRecommendationsClass,
  CharacterTalentLevelingRecommendationClass,
  CharacterWeaponRecommendationClass,
} from "../classes";
import { CharacterRecommendationsVideoSources } from "../enums";
import { TalentIds } from "../../talents/enums";
import { WeaponIds } from "../../weapons/enums";
import weapons from "../../weapons/data";

export default new CharacterRecommendationsClass(CharacterIds.Wanderer)
  .setFirstConstellationOrSignatureWeapon(`С1 если ${weapons[WeaponIds.TheWidsith].title} R5 | Сигна если ${weapons[WeaponIds.TheWidsith].title} не R5`)
  .setTalentLeveling([
    CharacterTalentLevelingRecommendationClass.init([TalentIds.NormalAttack, "В первую очередь\n(10)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentIds.ElementalSkill, "Во вторую очередь\n(10)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentIds.ElementalBurst, "По необходимости\n(8)"]),
  ])
  .setVideoSources([
    CharacterRecommendationsVideoSources.FirstConstellationOrSignatureWeapon,
    CharacterRecommendationsVideoSources.BestWeaponsForEveryCharacter,
    CharacterRecommendationsVideoSources.AllAboutAllTalents,
  ])
  .setWeapons([
    new CharacterWeaponRecommendationClass(WeaponIds.TulaytullahsRemembrance).setIsBetter().setRefinement(1),
    new CharacterWeaponRecommendationClass(WeaponIds.TheWidsith).setRefinement(5),
    new CharacterWeaponRecommendationClass(WeaponIds.FlowingPurity).setRefinement(5),
  ]);
