import { CharacterIds } from "../../characters/enums";
import {
  CharacterRecommendationsClass,
  CharacterTalentLevelingRecommendationClass,
  CharacterWeaponRecommendationClass,
} from "../classes";
import { CharacterRecommendationsVideoSources } from "../enums";
import { TalentIds } from "../../talents/enums";
import { WeaponIds } from "../../weapons/enums";

export default new CharacterRecommendationsClass(CharacterIds.KamisatoAyaka)
  .setFirstConstellationOrSignatureWeapon("Сигна")
  .setTalentLeveling([
    CharacterTalentLevelingRecommendationClass.init([TalentIds.NormalAttack, "Во вторую очередь\n(10)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentIds.ElementalSkill, "По необходимости\n(8)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentIds.ElementalBurst, "В первую очередь\n(10)"]),
  ])
  .setVideoSources([
    CharacterRecommendationsVideoSources.FirstConstellationOrSignatureWeapon,
    CharacterRecommendationsVideoSources.BestWeaponsForEveryCharacter,
    CharacterRecommendationsVideoSources.AllAboutAllTalents,
  ])
  .setWeapons([
    new CharacterWeaponRecommendationClass(WeaponIds.MistsplitterReforged).setIsBetter().setRefinement(1),
    new CharacterWeaponRecommendationClass(WeaponIds.FinaleOfTheDeep).setRefinement(5),
    new CharacterWeaponRecommendationClass(WeaponIds.AmenomaKageuchi).setRefinement(5),
  ]);
