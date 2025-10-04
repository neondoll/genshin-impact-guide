import { CharacterIds } from "@/enums/character";
import {
  CharacterRecommendations,
  CharacterTalentLevelingRecommendation,
  CharacterWeaponRecommendation,
} from "@/classes/character-recommendations";
import { CharacterRecommendationsVideoSources } from "@/enums/character-recommendations";
import { TalentIds } from "@/enums/talent";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.SangonomiyaKokomi)
  .setFirstConstellationOrSignatureWeapon("Сигна")
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "По необходимости\n(6)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "В первую очередь\n(8)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "Во вторую очередь\n(8)"]),
  ])
  .setVideoSources([
    CharacterRecommendationsVideoSources.FirstConstellationOrSignatureWeapon,
    CharacterRecommendationsVideoSources.BestWeaponsForEveryCharacter,
    CharacterRecommendationsVideoSources.AllAboutAllTalents,
  ])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.ThrillingTalesOfDragonSlayers).setIsBetter().setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.EverlastingMoonglow).setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.PrototypeAmber).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.FlowingPurity).setRefinement(5),
  ]);
