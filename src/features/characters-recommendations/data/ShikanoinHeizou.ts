import { CharacterIds } from "../../characters/enums";
import {
  CharacterRecommendationsClass,
  CharacterTalentLevelingRecommendationClass,
  CharacterWeaponRecommendationClass,
} from "../classes";
import { CharacterRecommendationsVideoSources } from "../enums";
import { TalentIds } from "../../talents/enums";
import { WeaponIds } from "../../weapons/enums";

export default new CharacterRecommendationsClass(CharacterIds.ShikanoinHeizou)
  .setTalentLeveling([
    CharacterTalentLevelingRecommendationClass.init([TalentIds.NormalAttack, "По необходимости\n(6)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentIds.ElementalSkill, "В первую очередь\n(8)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentIds.ElementalBurst, "Во вторую очередь\n(8)"]),
  ])
  .setVideoSources([
    CharacterRecommendationsVideoSources.BestWeaponsForEveryCharacter,
    CharacterRecommendationsVideoSources.AllAboutAllTalents,
  ])
  .setWeapons([
    new CharacterWeaponRecommendationClass(WeaponIds.ThrillingTalesOfDragonSlayers).setIsBetter().setRefinement(5),
    new CharacterWeaponRecommendationClass(WeaponIds.HakushinRing).setIsBetter().setRefinement(5),
    new CharacterWeaponRecommendationClass(WeaponIds.FavoniusCodex).setIsBetter().setRefinement(5),
    new CharacterWeaponRecommendationClass(WeaponIds.PrototypeAmber).setIsBetter().setRefinement(5),
  ]);
