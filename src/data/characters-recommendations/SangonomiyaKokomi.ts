import { CharacterIds } from "@/enums/character";
import {
  CharacterRecommendations,
  CharacterTalentLevelingRecommendation,
  CharacterWeaponRecommendation,
} from "@/classes/character-recommendations";
import { TalentIds } from "@/enums/talent";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.SangonomiyaKokomi)
  .setFirstConstellationOrSignatureWeapon("Сигна")
  .setRequiredLevel("80/90")
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "По необходимости\n(6)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "В первую очередь\n(8)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "Во вторую очередь\n(8)"]),
  ])
  .setVideoSourceIds([
    VideoSourceIds.AllAboutAllTalents,
    VideoSourceIds.FirstConstellationOrSignatureWeapon,
    VideoSourceIds.TheBestAvailableWeaponsForEveryCharacter,
    VideoSourceIds.TheBestWeaponsForEveryCharacter,
    VideoSourceIds.WhoNeedsLevelingPart2,
  ])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.ThrillingTalesOfDragonSlayers).setIsBetter("Лучшее оружие").setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.EverlastingMoonglow).setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.PrototypeAmber).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.SacrificialFragments).setRefinement(5),
  ]);
