import { CharacterIds } from "@/enums/character";
import {
  CharacterRecommendations,
  CharacterTalentLevelingRecommendation,
  CharacterWeaponRecommendation,
} from "@/classes/character-recommendations";
import { TalentIds } from "@/enums/talent";
import { VideoSourceIds } from "@/enums/video-source";
import { weaponById } from "./_help";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.Albedo)
  .setRequiredLevel("80/90")
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "Не качаем", 1]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "В первую очередь", 10]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "Во вторую очередь", 6]),
  ])
  .setVideoSourceIds([
    VideoSourceIds.AllAboutAllTalents,
    VideoSourceIds.FirstConstellationOrSignatureWeapon,
    VideoSourceIds.TheBestAvailableWeaponsForEveryCharacter,
    VideoSourceIds.TheBestWeaponsForEveryCharacter,
    VideoSourceIds.WhoNeedsLevelingPart1,
  ])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.UrakuMisugiri).setIsBetter("Лучшее оружие").setNotes([
      "Даёт очень большой бонус <span class='text-info'>крит. урона</span>, позволяя сконцентрироваться на <span class='text-info'>шансе крит. попадания</span>, <span class='text-info'>защите</span> и <span class='text-info'>силе атаки</span> в артефактах.",
      "Пассивная способность увеличивает <span class='text-info'>урон элементального навыка</span> и <span class='text-info'>защиту</span>.",
      "Так как Альбедо сам наносит <span class='text-geo'>Гео урон</span>, он может полностью реализовать пассивную способность, но необходимо нанести <span class='text-geo'>Гео урон</span>, находясь на поле.",
    ]).setPercent(1.241).setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.PrimordialJadeCutter).setNotes([
      "Даёт очень большой бонус <span class='text-info'>шанса крит. попадания</span>, позволяя сконцентрироваться на <span class='text-info'>защите</span>, <span class='text-info'>крит. уроне</span> и <span class='text-info'>силе атаки</span> в артефактах.",
      "Пассивная способность не является существенной, но даёт небольшой <span class='text-info'>бонус к силе атаки</span> и повышает выживаемость.",
    ]).setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.CinnabarSpindle).setIsBetter("Лучшее эвентовое оружие").setNotes([
      "Лучшее оружие для Альбедо, так как увеличивает <span class='text-info'>защиту</span> и <span class='text-info'>урон элементального навыка</span>, являющегося его основным талантом.",
      "В артефактах стоит сосредоточиться на <span class='text-info'>шансе крит. попадания</span>, <span class='text-info'>крит. уроне</span> и <span class='text-info'>силе атаки</span>.",
    ]).setPercent(1.229).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.FesteringDesire).setIsBetter("Лучшее эвентовое оружие").setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.HarbingerOfDawn).setIsBetter("Лучшее доступное оружие").setNotes([
      "Так как урон <span class='text-info'>элементального навыка</span>, являющегося основным талантом Альбедо, зависит в большей степени от <span class='text-info'>защиты</span>, <span class='text-info'>низкая базовая атака</span> оружия почти не влияет на его урон.",
      `Оружие является одним из лучших вариантов (при отсутствии ${weaponById(WeaponIds.CinnabarSpindle)}), так как даёт высокий бонус <span class='text-info'>крит. урона</span> и <span class='text-info'>шанса крит. попадания</span>, но стоит следить за <span class='text-info'>HP</span> Альбедо.`,
      "В артефактах стоит сосредоточиться на <span class='text-info'>защите</span>, <span class='text-info'>шансе крит. попадания</span>, <span class='text-info'>крит. уроне</span> и <span class='text-info'>силе атаки</span>.",
    ]).setPercent(1.000).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.FluteOfEzpitzal).setRefinement(5),
  ]);
