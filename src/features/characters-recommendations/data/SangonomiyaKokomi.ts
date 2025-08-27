import { CharacterIds } from "../../characters/enums";
import {
  CharacterRecommendationsClass,
  CharacterTalentLevelingRecommendationClass,
  CharacterWeaponRecommendationClass,
} from "../classes";
import { CharacterRecommendationsVideoSources } from "../enums";
import { TalentKeys } from "@/database/talents/enums";
import { WeaponKeys } from "@/database/weapons/enums";

export default new CharacterRecommendationsClass(CharacterIds.SangonomiyaKokomi)
  .setFirstConstellationOrSignatureWeapon("Сигна")
  .setTalentLeveling([
    CharacterTalentLevelingRecommendationClass.init([TalentKeys.NormalAttack, "По необходимости\n(6)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentKeys.ElementalSkill, "В первую очередь\n(8)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentKeys.ElementalBurst, "Во вторую очередь\n(8)"]),
  ])
  .setVideoSources([
    CharacterRecommendationsVideoSources.FirstConstellationOrSignatureWeapon,
    CharacterRecommendationsVideoSources.BestWeaponsForEveryCharacter,
    CharacterRecommendationsVideoSources.AllAboutAllTalents,
  ])
  .setWeapons([
    new CharacterWeaponRecommendationClass(WeaponKeys.ThrillingTalesOfDragonSlayers).setIsBetter().setRefinement(5),
    new CharacterWeaponRecommendationClass(WeaponKeys.EverlastingMoonglow).setRefinement(1),
    new CharacterWeaponRecommendationClass(WeaponKeys.PrototypeAmber).setRefinement(5),
    new CharacterWeaponRecommendationClass(WeaponKeys.FlowingPurity).setRefinement(5),
  ]);
