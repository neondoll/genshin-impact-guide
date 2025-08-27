import { CharacterIds } from "../../characters/enums";
import {
  CharacterRecommendationsClass,
  CharacterTalentLevelingRecommendationClass,
  CharacterWeaponRecommendationClass,
} from "../classes";
import { CharacterRecommendationsVideoSources } from "../enums";
import { TalentKeys } from "@/database/talents/enums";
import { WeaponKeys } from "@/database/weapons/enums";

export default new CharacterRecommendationsClass(CharacterIds.KamisatoAyaka)
  .setFirstConstellationOrSignatureWeapon("Сигна")
  .setTalentLeveling([
    CharacterTalentLevelingRecommendationClass.init([TalentKeys.NormalAttack, "Во вторую очередь\n(10)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentKeys.ElementalSkill, "По необходимости\n(8)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentKeys.ElementalBurst, "В первую очередь\n(10)"]),
  ])
  .setVideoSources([
    CharacterRecommendationsVideoSources.FirstConstellationOrSignatureWeapon,
    CharacterRecommendationsVideoSources.BestWeaponsForEveryCharacter,
    CharacterRecommendationsVideoSources.AllAboutAllTalents,
  ])
  .setWeapons([
    new CharacterWeaponRecommendationClass(WeaponKeys.MistsplitterReforged).setIsBetter().setRefinement(1),
    new CharacterWeaponRecommendationClass(WeaponKeys.FinaleOfTheDeep).setRefinement(5),
    new CharacterWeaponRecommendationClass(WeaponKeys.AmenomaKageuchi).setRefinement(5),
  ]);
