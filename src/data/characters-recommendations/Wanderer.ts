import { CharacterIds } from "@/enums/character";
import {
  CharacterRecommendations,
  CharacterTalentLevelingRecommendation,
  CharacterWeaponRecommendation,
} from "@/classes/character-recommendations";
import { TalentIds } from "@/enums/talent";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";
import weapons from "../weapons";

export default new CharacterRecommendations(CharacterIds.Wanderer)
  .setFirstConstellationOrSignatureWeapon(`С1 если ${weapons[WeaponIds.TheWidsith].title} R5 | Сигна если ${weapons[WeaponIds.TheWidsith].title} не R5`)
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "В первую очередь\n(10)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "Во вторую очередь\n(10)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "По необходимости\n(8)"]),
  ])
  .setVideoSourceIds([
    VideoSourceIds.AllAboutAllTalents,
    VideoSourceIds.BestWeaponsForEveryCharacter,
    VideoSourceIds.FirstConstellationOrSignatureWeapon,
  ])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.TulaytullahsRemembrance).setIsBetter().setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.TheWidsith).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.FlowingPurity).setRefinement(5),
  ]);
