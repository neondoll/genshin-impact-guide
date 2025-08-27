import { CharacterIds } from "../../characters/enums";
import {
  CharacterRecommendationsClass,
  CharacterTalentLevelingRecommendationClass,
  CharacterWeaponRecommendationClass,
} from "../classes";
import { CharacterRecommendationsVideoSources } from "../enums";
import { TalentKeys } from "@/database/talents/enums";
import { WeaponKeys } from "@/database/weapons/enums";

export default new CharacterRecommendationsClass(CharacterIds.Freminet)
  .setTalentLeveling([
    CharacterTalentLevelingRecommendationClass.init([TalentKeys.NormalAttack, "Во вторую очередь\n(8)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentKeys.ElementalSkill, "В первую очередь\n(8)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentKeys.ElementalBurst, "По необходимости\n(8)"]),
  ])
  .setVideoSources([
    CharacterRecommendationsVideoSources.BestWeaponsForEveryCharacter,
    CharacterRecommendationsVideoSources.AllAboutAllTalents,
  ])
  .setWeapons([new CharacterWeaponRecommendationClass(WeaponKeys.SongOfBrokenPines).setIsBetter().setRefinement(1)]);
