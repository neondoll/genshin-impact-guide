import { CharacterIds } from "@/enums/character";
import {
  CharacterRecommendations,
  CharacterTalentLevelingRecommendation,
  CharacterWeaponRecommendation,
} from "@/classes/character-recommendations";
import { CharacterRecommendationsVideoSources } from "@/enums/character-recommendations";
import { TalentIds } from "@/enums/talent";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.Gorou)
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "В первую очередь\n(10)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "Не качаем\n(1)"]),
  ])
  .setVideoSources([
    CharacterRecommendationsVideoSources.BestWeaponsForEveryCharacter,
    CharacterRecommendationsVideoSources.AllAboutAllTalents,
  ])
  .setWeapons([new CharacterWeaponRecommendation(WeaponIds.FavoniusWarbow).setIsBetter().setRefinement(5)]);
