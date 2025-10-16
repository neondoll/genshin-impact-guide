import { artifactSetById } from "./_help";
import { ArtifactSetIds } from "@/enums/artifact-set";
import { ArtifactSlotIds } from "@/enums/artifact-slot";
import {
  CharacterArtifactRecommendations,
  CharacterArtifactSetRecommendationWithId,
  CharacterArtifactSetRecommendationWithIds,
  CharacterArtifactStatRecommendation,
  CharacterRecommendations,
  CharacterTalentLevelingRecommendation,
  CharacterWeaponRecommendation,
} from "@/classes/character-recommendations";
import { CharacterIds } from "@/enums/character";
import { elementalReactionLink } from "@/features/elemental-reactions/help";
import { ElementalReactionIds } from "@/enums/elemental-reaction";
import { StatIds } from "@/enums/stat";
import { TalentIds } from "@/enums/talent";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";

const weaponCrimsonMoonsSemblance = new CharacterWeaponRecommendation(WeaponIds.CrimsonMoonsSemblance).setNotes([
  "Так как для Арлекино важно иметь постоянный <span class='text-info'>Долг жизни</span>, копьё является лучшим оружием для неё.",
  "Оружие увеличит <span class='text-info'>шанс крит. попадания</span> и увеличит наносимый <span class='text-info'>урон</span>.",
  "В артефактах стоит сосредоточиться на <span class='text-info'>силе атаки</span>, <span class='text-info'>крит. уроне</span> и <span class='text-info'>мастерстве стихий</span>.",
]);
const weaponDeathmatch = new CharacterWeaponRecommendation(WeaponIds.Deathmatch).setNotes([
  "Копьё повышает <span class='text-info'>шанс крит. попадания</span> и <span class='text-info'>силу атаки</span>.",
  "В таком случае стоит сосредоточиться на <span class='text-info'>силе атаки</span>, <span class='text-info'>мастерстве стихий</span> и <span class='text-info'>крит. уроне</span> в артефактах.",
]);
const weaponLumidouceElegy = new CharacterWeaponRecommendation(WeaponIds.LumidouceElegy);
const weaponPrimordialJadeWingedSpear = new CharacterWeaponRecommendation(WeaponIds.PrimordialJadeWingedSpear).setNotes([
  "Увеличит важный <span class='text-info'>шанс крит. попадания</span> и <span class='text-info'>силу атаки</span>.",
  "В артефактах стоит сосредоточиться на <span class='text-info'>крит. уроне</span>, <span class='text-info'>силе атаки</span> и <span class='text-info'>мастерстве стихий</span>.",
]);
const weaponStaffOfHoma = new CharacterWeaponRecommendation(WeaponIds.StaffOfHoma).setNotes([
  "Дополнительная характеристика повысит важный <span class='text-info'>крит. урон</span>.",
  "Пассивная способность незначительно увеличит <span class='text-info'>силу атаки</span>, но стоит учитывать, что вторая часть способности редко выполняется.",
  "В артефактах стоит сосредоточиться на <span class='text-info'>силе атаки</span>, <span class='text-info'>шансе крит. попадания</span> и <span class='text-info'>мастерстве стихий</span>.",
]);
const weaponStaffOfTheScarletSands = new CharacterWeaponRecommendation(WeaponIds.StaffOfTheScarletSands).setNotes([
  "Повысит важный <span class='text-info'>шанс крит. попадания</span> и увеличит наносимый <span class='text-info'>урон</span>.",
  "Рекомендуется в отрядах, где Арлекино вызывает реакции, когда у неё есть достаточно <span class='text-info'>мастерства стихий</span>.",
  "В артефактах стоит сосредоточиться на <span class='text-info'>мастерстве стихий</span>, <span class='text-info'>крит. уроне</span> и <span class='text-info'>силе атаки</span>.",
]);

export default new CharacterRecommendations(CharacterIds.Arlecchino)
  .setArtifacts(CharacterArtifactRecommendations.init([
    {
      [`Прожарка | ${elementalReactionLink(ElementalReactionIds.Overloaded, "Перегрузка")}`]: [
        new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.FragmentOfHarmonicWhimsy).setIsBetter().setNotes([
          "Лучший вариант для Арлекино, так как повышает важную силу атаки и наносимый урон.",
          "Арлекино сама способна накладывать Долг жизни, поэтому условие 4 предметов выполняется.",
        ]).setPercent(1.051),
        new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.GladiatorsFinale).setNotes([
          "Арлекино использует древковое оружие и наносит урон преимущественно обычными атаками, поэтому ей подходит бонус 4 предметов.",
        ]).setPercent(1.000),
        new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.DesertPavilionChronicle).setPercent(0.973),
        new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.EchoesOfAnOffering).setNotes([
          "Увеличивает силу атаки и урон обычной атаки, которые использует Арлекино.",
          "Для лучшей реализации бонуса 4 предметов стоит иметь достаточно хорошее соединение с сервером игры.",
        ]).setPercent(0.971),
        new CharacterArtifactSetRecommendationWithIds([ArtifactSetIds.CrimsonWitchOfFlames, ArtifactSetIds.MarechausseeHunter]).setNotes([
          "Увеличивает как Пиро урон, так и урон обычных и заряженных атак, которые использует Арлекино.",
        ]).setPercent(0.952),
        new CharacterArtifactSetRecommendationWithIds([ArtifactSetIds.CrimsonWitchOfFlames, ArtifactSetIds.GladiatorsFinale]).setNotes([
          "Увеличивает как Пиро урон, так и силу атаки, позволяя сконцентрироваться на других характеристиках в артефактах.",
          `Набор ${artifactSetById(ArtifactSetIds.GladiatorsFinale)} может быть заменён ${artifactSetById(ArtifactSetIds.ShimenawasReminiscence)} или другими с аналогичными бонусами.`,
        ]).setPercent(0.946),
        new CharacterArtifactSetRecommendationWithIds([ArtifactSetIds.ShimenawasReminiscence, ArtifactSetIds.GladiatorsFinale]).setPercent(0.933),
      ],
      [`${elementalReactionLink(ElementalReactionIds.Vaporize, "Пар")} | ${elementalReactionLink(ElementalReactionIds.Melt, "Таяние")}`]: [
        new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.FragmentOfHarmonicWhimsy).setIsBetter().setNotes([
          "Лучший вариант для Арлекино, так как повышает важную силу атаки и наносимый урон.",
          "Арлекино сама способна накладывать Долг жизни, поэтому условие 4 предметов выполняется.",
        ]).setPercent(1.042),
        new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.GladiatorsFinale).setNotes([
          "Арлекино использует древковое оружие и наносит урон преимущественно обычными атаками, поэтому ей подходит бонус 4 предметов.",
        ]).setPercent(1.000),
        new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.GildedDreams).setPercent(0.983),
        new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.DesertPavilionChronicle).setPercent(0.968),
        new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.EchoesOfAnOffering).setNotes([
          "Увеличивает силу атаки и урон обычной атаки, которые использует Арлекино.",
          "Для лучшей реализации бонуса 4 предметов стоит иметь достаточно хорошее соединение с сервером игры.",
        ]).setPercent(0.956),
        new CharacterArtifactSetRecommendationWithIds([ArtifactSetIds.WanderersTroupe, ArtifactSetIds.GildedDreams]).setPercent(0.953),
        new CharacterArtifactSetRecommendationWithIds([ArtifactSetIds.CrimsonWitchOfFlames, ArtifactSetIds.GildedDreams]).setPercent(0.952),
        new CharacterArtifactSetRecommendationWithIds([ArtifactSetIds.GladiatorsFinale, ArtifactSetIds.GildedDreams]).setPercent(0.949),
        new CharacterArtifactSetRecommendationWithIds([ArtifactSetIds.CrimsonWitchOfFlames, ArtifactSetIds.MarechausseeHunter]).setNotes([
          "Увеличивает как Пиро урон, так и урон обычных и заряженных атак, которые использует Арлекино.",
        ]).setPercent(0.945),
      ],
    },
    {
      [ArtifactSlotIds.Sands]: [new CharacterArtifactStatRecommendation(StatIds.AtkPercentage)],
      [ArtifactSlotIds.Goblet]: [
        new CharacterArtifactStatRecommendation(StatIds.PyroDmgBonus).setNotes(["Лучше"]),
        new CharacterArtifactStatRecommendation(StatIds.AtkPercentage),
      ],
      [ArtifactSlotIds.Circlet]: [
        new CharacterArtifactStatRecommendation(StatIds.CritDMG),
        new CharacterArtifactStatRecommendation(StatIds.CritRate),
      ],
      additional: [
        new CharacterArtifactStatRecommendation(StatIds.CritRate).setNotes(["Приоритетно", "от 65%"]),
        new CharacterArtifactStatRecommendation(StatIds.CritDMG).setNotes(["Приоритетно", "от 150%"]),
        new CharacterArtifactStatRecommendation(StatIds.AtkPercentage).setNotes(["от 2000"]),
        new CharacterArtifactStatRecommendation(StatIds.ElementalMastery).setNotes(["от 150 (если Арлекино активирует реакции)"]),
        new CharacterArtifactStatRecommendation(StatIds.EnergyRecharge).setNotes(["Специально не собирать"]),
      ],
    },
  ]))
  .setFirstConstellationOrSignatureWeapon("Сигна ~ C1. Лучше С1 и Сигна")
  .setKeyConstellations([1, 2, 3, 6])
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "В первую очередь", 10]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "По необходимости", "6 | 8"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "Во вторую очередь", "6 | 8"]),
  ])
  .setVideoSourceIds([
    VideoSourceIds.FirstConstellationOrSignatureWeapon,
    VideoSourceIds.GuideToArlecchino,
    VideoSourceIds.TheBestAvailableWeaponsForEveryCharacter,
    VideoSourceIds.TheBestWeaponsForEveryCharacter,
  ])
  .setWeapons({
    [`Гиперкери | Прожарка | ${elementalReactionLink(ElementalReactionIds.Overloaded, "Перегрузка")}`]: [
      CharacterWeaponRecommendation.copy(weaponCrimsonMoonsSemblance).setIsBetter("Лучшее оружие").setPercent(1.316),
      CharacterWeaponRecommendation.copy(weaponPrimordialJadeWingedSpear).setPercent(1.124),
      CharacterWeaponRecommendation.copy(weaponStaffOfTheScarletSands).setPercent(1.112),
      CharacterWeaponRecommendation.copy(weaponLumidouceElegy).setPercent(1.103),
      CharacterWeaponRecommendation.copy(weaponDeathmatch).setPercent(1.087).setPostfix("1 враг").setRefinement(5),
      CharacterWeaponRecommendation.copy(weaponStaffOfHoma).setPercent(1.085),
      new CharacterWeaponRecommendation(WeaponIds.CalamityQueller).setPercent(1.063),
      CharacterWeaponRecommendation.copy(weaponDeathmatch).setPercent(1.032).setPostfix("1 враг").setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.WhiteTassel).setIsBetter("Лучшее доступное оружие").setPercent(1.000),
      new CharacterWeaponRecommendation(WeaponIds.BalladOfTheFjords).setPercent(0.968),
      new CharacterWeaponRecommendation(WeaponIds.SkywardSpine).setPercent(0.948),
      new CharacterWeaponRecommendation(WeaponIds.BlackcliffPole).setPercent(0.899),
      new CharacterWeaponRecommendation(WeaponIds.MissiveWindspear).setPercent(0.875),
    ],
    [`${elementalReactionLink(ElementalReactionIds.Vaporize, "Пар")} | ${elementalReactionLink(ElementalReactionIds.Melt, "Таяние")}`]: [
      CharacterWeaponRecommendation.copy(weaponCrimsonMoonsSemblance).setIsBetter("Лучшее оружие").setPercent(1.309),
      CharacterWeaponRecommendation.copy(weaponStaffOfTheScarletSands).setPercent(1.156),
      CharacterWeaponRecommendation.copy(weaponPrimordialJadeWingedSpear).setPercent(1.114),
      CharacterWeaponRecommendation.copy(weaponDeathmatch).setPercent(1.105).setPostfix("1 враг").setRefinement(5),
      CharacterWeaponRecommendation.copy(weaponLumidouceElegy).setPercent(1.103),
      new CharacterWeaponRecommendation(WeaponIds.BalladOfTheFjords).setPercent(1.098).setRefinement(5),
      CharacterWeaponRecommendation.copy(weaponStaffOfHoma).setPercent(1.086),
      new CharacterWeaponRecommendation(WeaponIds.CalamityQueller).setPercent(1.062),
      new CharacterWeaponRecommendation(WeaponIds.VortexVanquisher).setPercent(1.044),
      CharacterWeaponRecommendation.copy(weaponDeathmatch).setPercent(1.043).setPostfix("1 враг").setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.LithicSpear).setPercent(1.043).setPostfix("2 стака").setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.BalladOfTheFjords).setPercent(1.023).setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.WhiteTassel).setIsBetter("Лучшее доступное оружие").setPercent(1.000),
      new CharacterWeaponRecommendation(WeaponIds.MissiveWindspear).setPercent(0.990),
      new CharacterWeaponRecommendation(WeaponIds.DragonsBane).setPercent(0.965),
      new CharacterWeaponRecommendation(WeaponIds.LithicSpear).setPercent(0.965).setPostfix("2 стака").setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.SkywardSpine).setPercent(0.943),
      new CharacterWeaponRecommendation(WeaponIds.BlackcliffPole).setPercent(0.938),
    ],
  });
