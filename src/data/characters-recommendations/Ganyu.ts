import { CharacterIds } from "@/enums/character";
import {
  CharacterRecommendations,
  CharacterTalentLevelingRecommendation,
  CharacterWeaponRecommendation,
} from "@/classes/character-recommendations";
import { TalentIds } from "@/enums/talent";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.Ganyu)
  .setFirstConstellationOrSignatureWeapon("С1")
  .setTalentLeveling({
    Мелт: [
      CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "В первую очередь\n(10)"]),
      CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "Во вторую очередь\n(8)"]),
      CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "Не качаем\n(1)"]),
    ],
    Фриз: [
      CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "В первую очередь\n(10)"]),
      CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "Во вторую очередь\n(8)"]),
      CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "По необходимости\n(6)"]),
    ],
    Саппорт: [
      CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "Не качаем\n(1)"]),
      CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "Во вторую очередь\n(6)"]),
      CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "В первую очередь\n(8)"]),
    ],
  })
  .setVideoSourceIds([
    VideoSourceIds.AllAboutAllTalents,
    VideoSourceIds.TheBestWeaponsForEveryCharacter,
    VideoSourceIds.FirstConstellationOrSignatureWeapon,
  ])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.AstralVulturesCrimsonPlumage).setIsBetter().setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.AmosBow).setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.ElegyForTheEnd).setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.SongOfStillness).setRefinement(5),
  ]);
