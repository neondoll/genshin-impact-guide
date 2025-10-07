import { CharacterIds } from "@/enums/character";
import {
  CharacterRecommendations,
  CharacterTalentLevelingRecommendation,
  CharacterWeaponRecommendation,
} from "@/classes/character-recommendations";
import { TalentIds } from "@/enums/talent";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.ShikanoinHeizou)
  .setRequiredLevel("90/90")
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "По необходимости\n(6)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "В первую очередь\n(8)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "Во вторую очередь\n(8)"]),
  ])
  .setVideoSourceIds([
    VideoSourceIds.AllAboutAllTalents,
    VideoSourceIds.TheBestAvailableWeaponsForEveryCharacter,
    VideoSourceIds.TheBestWeaponsForEveryCharacter,
    VideoSourceIds.WhoNeedsLevelingPart2,
  ])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.ThrillingTalesOfDragonSlayers).setIsBetter("Лучшее сигнатурное/доступное оружие").setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.HakushinRing).setIsBetter("Лучшее сигнатурное оружие").setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.TheWidsith).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.FavoniusCodex).setIsBetter("Лучшее сигнатурное оружие").setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.PrototypeAmber).setRefinement(5),
  ]);
