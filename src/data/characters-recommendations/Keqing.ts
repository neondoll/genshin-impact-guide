import { CharacterIds } from "@/enums/character";
import {
  CharacterRecommendations,
  CharacterTalentLevelingRecommendation,
  CharacterWeaponRecommendation,
} from "@/classes/character-recommendations";
import { TalentIds } from "@/enums/talent";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.Keqing)
  .setRequiredLevel("90/90")
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "В первую очередь\n(10)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "По необходимости\n(10)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "Во вторую очередь\n(10)"]),
  ])
  .setVideoSourceIds([
    VideoSourceIds.AllAboutAllTalents,
    VideoSourceIds.TheBestAvailableWeaponsForEveryCharacter,
    VideoSourceIds.TheBestWeaponsForEveryCharacter,
    VideoSourceIds.WhoNeedsLevelingPart1,
  ])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.MistsplitterReforged).setIsBetter("Лучшее оружие (высокая зависимость)").setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.LightOfFoliarIncision).setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.BlackcliffLongsword).setIsBetter("Лучшее доступное оружие (когда работает на 3-х стаках)").setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.FinaleOfTheDeep).setIsBetter("Лучшее доступное оружие").setRefinement(5),
  ]);
