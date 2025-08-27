import { CharacterIds } from "../../characters/enums";
import {
  CharacterRecommendationsClass,
  CharacterTalentLevelingRecommendationClass,
  CharacterWeaponRecommendationClass,
} from "../classes";
import { CharacterRecommendationsVideoSources } from "../enums";
import { TalentKeys } from "@/database/talents/enums";
import { WeaponKeys } from "@/database/weapons/enums";

export default new CharacterRecommendationsClass(CharacterIds.RaidenShogun)
  .setFirstConstellationOrSignatureWeapon("С1 < Сигна < С2")
  .setTalentLeveling([
    CharacterTalentLevelingRecommendationClass.init([TalentKeys.NormalAttack, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentKeys.ElementalSkill, "Во вторую очередь\n(9)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentKeys.ElementalBurst, "В первую очередь\n(10)"]),
  ])
  .setVideoSources([
    CharacterRecommendationsVideoSources.FirstConstellationOrSignatureWeapon,
    CharacterRecommendationsVideoSources.BestWeaponsForEveryCharacter,
    CharacterRecommendationsVideoSources.AllAboutAllTalents,
  ])
  .setWeapons([
    new CharacterWeaponRecommendationClass(WeaponKeys.EngulfingLightning).setIsBetter().setRefinement(1),
    new CharacterWeaponRecommendationClass(WeaponKeys.DragonsBane).setRefinement(5),
    new CharacterWeaponRecommendationClass(WeaponKeys.TheCatch).setRefinement(5),
  ]);
