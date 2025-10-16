import { CharacterIds } from "@/enums/character";
import {
  CharacterRecommendations,
  CharacterTalentLevelingRecommendation,
  CharacterWeaponRecommendation,
} from "@/classes/character-recommendations";
import { TalentIds } from "@/enums/talent";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.Alhaitham)
  .setFirstConstellationOrSignatureWeapon("Сигна")
  .setRequiredLevel("90/90")
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "Во вторую очередь", 6]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "В первую очередь", 10]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "По необходимости", 8]),
  ])
  .setVideoSourceIds([
    VideoSourceIds.AllAboutAllTalents,
    VideoSourceIds.FirstConstellationOrSignatureWeapon,
    VideoSourceIds.TheBestAvailableWeaponsForEveryCharacter,
    VideoSourceIds.TheBestWeaponsForEveryCharacter,
    VideoSourceIds.WhoNeedsLevelingPart2,
  ])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.LightOfFoliarIncision).setIsBetter("Лучшее оружие").setNotes([
      "Лучшее оружие для аль-Хайтама, так как значительно повысит <span class='text-info'>крит. урон</span>, повысит <span class='text-info'>шанс крит. попадания</span> и увеличит наносимый <span class='text-info'>урон</span>.",
      "Так как <span class='text-info'>обычные атаки</span> аль-Хайтама получают <span class='text-dendro'>Дендро инфузию</span>, он полность реализует пассивную способность меча.",
      "В артефактах стоит сосредоточиться на <span class='text-info'>мастерстве стихий</span>, <span class='text-info'>шансе крит. попадания</span> и <span class='text-info'>силе атаки</span>.",
    ]).setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.IronSting).setIsBetter("Лучшее доступное оружие").setNotes([
      "<span class='text-info'>Урон</span> аль-Хайтама частично зависит от <span class='text-info'>мастерства стихий</span>.",
      "Так как он постоянно наносит <span class='text-dendro'>Дендро урон</span> с помощью навыков и инфузии, он полностью реализует пассивную способность меча.",
      "В артефактах стоит сосредоточиться на <span class='text-info'>шансе крит. попаданий</span>, <span class='text-info'>крит. уроне</span> и <span class='text-info'>силе атаки</span>.",
      "Меч легко получить.",
    ]).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.HarbingerOfDawn).setNotes([
      "Даёт достаточно высокий показатель <span class='text-info'>крит. урона</span> и <span class='text-info'>шанса крит. попадания</span>, но имеет <span class='text-info'>низкую базовую атаку</span>.",
      "Для реализации пассивной способности стоит иметь в отряде персонажа, накладывающего <span class='text-info'>щит</span>.",
      "В артефактах стоит сосредоточиться на <span class='text-info'>мастерстве стихий</span> и <span class='text-info'>силе атаки</span>.",
      "Отличный выбор для новичков",
    ]).setRefinement(5),
  ]);
