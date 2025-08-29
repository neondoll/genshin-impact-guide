import { CharacterIds } from "../../characters/enums";
import {
  CharacterRecommendationsClass,
  CharacterTalentLevelingRecommendationClass,
  CharacterWeaponRecommendationClass,
} from "../classes";
import { CharacterRecommendationsVideoSources } from "../enums";
import { TalentIds } from "../../talents/enums";
import { WeaponIds } from "../../weapons/enums";

export default new CharacterRecommendationsClass(CharacterIds.SangonomiyaKokomi)
  .setFirstConstellationOrSignatureWeapon("Сигна")
  .setTalentLeveling([
    CharacterTalentLevelingRecommendationClass.init([TalentIds.NormalAttack, "По необходимости\n(6)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentIds.ElementalSkill, "В первую очередь\n(8)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentIds.ElementalBurst, "Во вторую очередь\n(8)"]),
  ])
  .setVideoSources([
    CharacterRecommendationsVideoSources.FirstConstellationOrSignatureWeapon,
    CharacterRecommendationsVideoSources.BestWeaponsForEveryCharacter,
    CharacterRecommendationsVideoSources.AllAboutAllTalents,
  ])
  .setWeapons([
    new CharacterWeaponRecommendationClass(WeaponIds.ThrillingTalesOfDragonSlayers).setIsBetter().setRefinement(5),
    new CharacterWeaponRecommendationClass(WeaponIds.EverlastingMoonglow).setRefinement(1),
    new CharacterWeaponRecommendationClass(WeaponIds.PrototypeAmber).setRefinement(5),
    new CharacterWeaponRecommendationClass(WeaponIds.FlowingPurity).setRefinement(5),
  ]);
