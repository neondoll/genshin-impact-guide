import { CharacterIds } from "@/enums/character";
import {
  CharacterRecommendations,
  CharacterTalentLevelingRecommendation,
  CharacterWeaponRecommendation,
} from "@/classes/character-recommendations";
import { TalentIds } from "@/enums/talent";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.AratakiItto)
  .setFirstConstellationOrSignatureWeapon("Сигна")
  .setRequiredLevel("90/90")
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "В первую очередь", 10]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "По необходимости", 8]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "Во вторую очередь", 10]),
  ])
  .setVideoSourceIds([
    VideoSourceIds.AllAboutAllTalents,
    VideoSourceIds.FirstConstellationOrSignatureWeapon,
    VideoSourceIds.TheBestAvailableWeaponsForEveryCharacter,
    VideoSourceIds.TheBestWeaponsForEveryCharacter,
    VideoSourceIds.WhoNeedsLevelingPart2,
  ])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.RedhornStonethresher).setIsBetter("Лучшее оружие").setNotes([
      "Лучшее оружие для Итто, так как повысит важный <span class='text-info'>крит. урон</span>, <span class='text-info'>защиту</span> и увеличит <span class='text-info'>урон обычных</span> и <span class='text-info'>заряженных атак</span>, которые использует Итто.",
      "В артефактах стоит сосредоточиться на <span class='text-info'>шансе крит. попадания</span>, <span class='text-info'>защите</span>, <span class='text-info'>восст. энергии</span> и <span class='text-info'>крит. уроне</span>.",
    ]).setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.Whiteblind).setIsBetter("Лучшее доступное оружие").setNotes([
      "Бонус к <span class='text-info'>защите</span> и <span class='text-info'>силе атаки</span> значительно увеличит <span class='text-info'>урон</span> Итто.",
      "В артефактах стоит сосредоточиться на <span class='text-info'>шансе крит. попадания</span>, <span class='text-info'>крит. уроне</span>, <span class='text-info'>защите</span> и <span class='text-info'>восст. энергии</span>.",
      "Легко получить.",
    ]).setRefinement(5),
  ]);
