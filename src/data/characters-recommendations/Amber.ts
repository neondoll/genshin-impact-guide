import { CharacterIds } from "@/enums/character";
import {
  CharacterRecommendations,
  CharacterTalentLevelingRecommendation,
  CharacterWeaponRecommendation,
} from "@/classes/character-recommendations";
import { TalentIds } from "@/enums/talent";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.Amber)
  .setRequiredLevel("70/80")
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "Не качаем", 1]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "Не качаем", 1]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "Не качаем", 1]),
  ])
  .setVideoSourceIds([
    VideoSourceIds.AllAboutAllTalents,
    VideoSourceIds.TheBestAvailableWeaponsForEveryCharacter,
    VideoSourceIds.TheBestWeaponsForEveryCharacter,
    VideoSourceIds.WhoNeedsLevelingPart1,
  ])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.ElegyForTheEnd).setIsBetter("Лучшее оружие").setNotes([
      "Лучший вариант для позиции поддержки и игры через реакции, так как характеристики позволяют чаще использовать <span class='text-info'>взрыв стихий</span>, увеличивают <span class='text-info'>мастерство стихий</span> самой Эмбер и отряду и увеличивают <span class='text-info'>силу атаки</span> другим членам отряда.",
    ]).setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.FavoniusWarbow).setIsBetter("Лучшее доступное оружие").setNotes([
      "<span class='text-info'>Восстановление энергии</span> позволяет постоянно использовать <span class='text-info'>взрыв стихий</span>. Пассивная способность позволяет <span class='text-info'>восстанавливать энергию</span> другим членам отряда, но требует от 50% <span class='text-info'>шанса крит. попадания</span> у Эмбер.",
      "Подойдет во все отряды.",
    ]).setRefinement(5),
  ]);
