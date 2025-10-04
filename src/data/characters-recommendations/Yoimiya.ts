import { CharacterIds } from "@/enums/character";
import {
  CharacterRecommendations,
  CharacterTalentLevelingRecommendation,
  CharacterWeaponRecommendation,
} from "@/classes/character-recommendations";
import { CharacterRecommendationsVideoSources } from "@/enums/character-recommendations";
import { TalentIds } from "@/enums/talent";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.Yoimiya)
  .setFirstConstellationOrSignatureWeapon("Сигна")
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "В первую очередь\n(10)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "Во вторую очередь\n(10)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "Не качаем\n(1)"]),
  ])
  .setVideoSources([
    CharacterRecommendationsVideoSources.FirstConstellationOrSignatureWeapon,
    CharacterRecommendationsVideoSources.BestWeaponsForEveryCharacter,
    CharacterRecommendationsVideoSources.AllAboutAllTalents,
  ])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.ThunderingPulse).setIsBetter().setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.Rust).setRefinement(5),
  ]);
