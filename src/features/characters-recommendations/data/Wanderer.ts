import { CharacterIds } from "../../characters/enums";
import {
  CharacterRecommendationsClass,
  CharacterTalentLevelingRecommendationClass,
  CharacterWeaponRecommendationClass,
} from "../classes";
import { CharacterRecommendationsVideoSources } from "../enums";
import { TalentKeys } from "@/database/talents/enums";
import { WeaponKeys } from "@/database/weapons/enums";
import weapons from "@/database/weapons/data";

export default new CharacterRecommendationsClass(CharacterIds.Wanderer)
  .setFirstConstellationOrSignatureWeapon(`С1 если ${weapons[WeaponKeys.TheWidsith].name} R5 | Сигна если ${weapons[WeaponKeys.TheWidsith].name} не R5`)
  .setTalentLeveling([
    CharacterTalentLevelingRecommendationClass.init([TalentKeys.NormalAttack, "В первую очередь\n(10)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentKeys.ElementalSkill, "Во вторую очередь\n(10)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentKeys.ElementalBurst, "По необходимости\n(8)"]),
  ])
  .setVideoSources([
    CharacterRecommendationsVideoSources.FirstConstellationOrSignatureWeapon,
    CharacterRecommendationsVideoSources.BestWeaponsForEveryCharacter,
    CharacterRecommendationsVideoSources.AllAboutAllTalents,
  ])
  .setWeapons([
    new CharacterWeaponRecommendationClass(WeaponKeys.TulaytullahsRemembrance).setIsBetter().setRefinement(1),
    new CharacterWeaponRecommendationClass(WeaponKeys.TheWidsith).setRefinement(5),
    new CharacterWeaponRecommendationClass(WeaponKeys.FlowingPurity).setRefinement(5),
  ]);
