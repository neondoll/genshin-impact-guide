import { CharacterIds } from "@/enums/character";
import {
  CharacterRecommendations,
  CharacterTalentLevelingRecommendation,
  CharacterWeaponRecommendation,
} from "@/classes/character-recommendations";
import { CharacterRecommendationsVideoSources } from "@/enums/character-recommendations";
import { TalentIds } from "@/enums/talent";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.KamisatoAyaka)
  .setFirstConstellationOrSignatureWeapon("Сигна")
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "Во вторую очередь\n(10)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "По необходимости\n(8)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "В первую очередь\n(10)"]),
  ])
  .setVideoSources([
    CharacterRecommendationsVideoSources.FirstConstellationOrSignatureWeapon,
    CharacterRecommendationsVideoSources.BestWeaponsForEveryCharacter,
    CharacterRecommendationsVideoSources.AllAboutAllTalents,
  ])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.MistsplitterReforged).setIsBetter().setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.FinaleOfTheDeep).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.AmenomaKageuchi).setRefinement(5),
  ]);
