import { CharacterIds } from "@/enums/character";
import {
  CharacterRecommendations,
  CharacterTalentLevelingRecommendation,
  CharacterWeaponRecommendation,
} from "@/classes/character-recommendations";
import { TalentIds } from "@/enums/talent";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.Yoimiya)
  .setFirstConstellationOrSignatureWeapon("Сигна")
  .setRequiredLevel("90/90")
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "В первую очередь\n(10)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "Во вторую очередь\n(10)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "Не качаем\n(1)"]),
  ])
  .setVideoSourceIds([
    VideoSourceIds.AllAboutAllTalents,
    VideoSourceIds.TheBestWeaponsForEveryCharacter,
    VideoSourceIds.FirstConstellationOrSignatureWeapon,
    VideoSourceIds.WhoNeedsLevelingPart2,
  ])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.ThunderingPulse).setIsBetter().setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.Rust).setRefinement(5),
  ]);
