import { CharacterIds } from "@/enums/character";
import {
  CharacterRecommendations,
  CharacterTalentLevelingRecommendation,
  CharacterWeaponRecommendation,
} from "@/classes/character-recommendations";
import { TalentIds } from "@/enums/talent";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.HuTao)
  .setFirstConstellationOrSignatureWeapon("С1")
  .setRequiredLevel("90/90")
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "В первую очередь\n(10)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "Во вторую очередь\n(10)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "По необходимости\n(10)"]),
  ])
  .setVideoSourceIds([
    VideoSourceIds.AllAboutAllTalents,
    VideoSourceIds.FirstConstellationOrSignatureWeapon,
    VideoSourceIds.TheBestAvailableWeaponsForEveryCharacter,
    VideoSourceIds.TheBestWeaponsForEveryCharacter,
    VideoSourceIds.WhoNeedsLevelingPart1,
  ])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.StaffOfHoma).setIsBetter("Лучшее оружие (высокая зависимость)").setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.StaffOfTheScarletSands).setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.DragonsBane).setIsBetter("Лучшее доступное оружие").setRefinement(5),
  ]);
