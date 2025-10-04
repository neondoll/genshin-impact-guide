import { CharacterIds } from "@/enums/character";
import {
  CharacterRecommendations,
  CharacterTalentLevelingRecommendation,
  CharacterWeaponRecommendation,
} from "@/classes/character-recommendations";
import { CharacterRecommendationsVideoSources } from "@/enums/character-recommendations";
import { TalentIds } from "@/enums/talent";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.Dori)
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "По необходимости\n(8)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "Во вторую очередь\n(6)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "В первую очередь\n(8)"]),
  ])
  .setVideoSources([
    CharacterRecommendationsVideoSources.BestWeaponsForEveryCharacter,
    CharacterRecommendationsVideoSources.AllAboutAllTalents,
  ])
  .setWeapons([new CharacterWeaponRecommendation(WeaponIds.FavoniusGreatsword).setIsBetter().setRefinement(5)]);
