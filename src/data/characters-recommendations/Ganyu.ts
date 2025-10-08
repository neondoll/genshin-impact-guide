import { CharacterIds } from "@/enums/character";
import {
  CharacterRecommendations,
  CharacterTalentLevelingRecommendation,
  CharacterWeaponRecommendation,
} from "@/classes/character-recommendations";
import { TalentIds } from "@/enums/talent";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";
import weapons from "@/data/weapons.ts";

export default new CharacterRecommendations(CharacterIds.Ganyu)
  .setFirstConstellationOrSignatureWeapon(`Сигна < С1 < ${weapons[WeaponIds.AstralVulturesCrimsonPlumage].title}`)
  .setRequiredLevel("80/90")
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
    VideoSourceIds.FirstConstellationOrSignatureWeapon,
    VideoSourceIds.TheBestAvailableWeaponsForEveryCharacter,
    VideoSourceIds.TheBestWeaponsForEveryCharacter,
    VideoSourceIds.WhoNeedsLevelingPart1,
  ])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.AstralVulturesCrimsonPlumage).setIsBetter("Лучшее оружие (высокая зависимость)").setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.AmosBow).setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.ElegyForTheEnd).setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.SongOfStillness).setIsBetter("Лучшее доступное оружие (когда условия выполняются)").setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.Hamayumi).setIsBetter("Лучшее доступное оружие").setRefinement(5),
  ]);
