import { ARTIFACT_SETS } from "@/features/artifact-sets";
import { ARTIFACT_SLOTS } from "@/features/artifact-slots";
import { CharacterIds } from "@/enums/character";
import {
  CharacterArtifactRecommendations,
  CharacterArtifactSetRecommendationWithId,
  CharacterArtifactStatRecommendation,
  CharacterRecommendations,
  CharacterSquadCharacterRecommendation,
  CharacterSquadElementRecommendation,
  CharacterSquadOtherRecommendation,
  CharacterSquadRecommendations,
  CharacterTalentLevelingRecommendation,
  CharacterWeaponRecommendation,
} from "@/classes/character-recommendations";
import { ELEMENTS } from "@/constants/elements";
import { STATS } from "@/constants/stats";
import { TalentIds } from "@/enums/talent";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.KyryllChudomirovichFlins)
  .setArtifacts(CharacterArtifactRecommendations.init([
    [
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.NIGHT_OF_THE_SKYS_UNVEILING).setIsBetter().setNotes([
        "Увеличивает мастерство стихий, от которого зависит урон Лунного заряда, шанс крит. попадания в сумме до 30%, "
        + "а также урон Лунного заряда.",
      ]),
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.MARECHAUSSEE_HUNTER),
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.THUNDERING_FURY).setNotes([
        "Уменьшение времени отката элементального навыка позволяет использовать его чаще и наносить больше урона.",
        "Так как Флинс играет через реакцию Лунный заряд, ему подойдёт бонус от 4 предметов.",
      ]),
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.GILDED_DREAMS).setNotes([
        "Урон навыков Флинса и реакции Лунный заряд зависит и от силы атаки, и от мастерства стихий, поэтому данный "
        + "комплект будет ему очень полезен.",
      ]),
    ],
    {
      [ARTIFACT_SLOTS.SANDS]: [
        new CharacterArtifactStatRecommendation(STATS.ATK_PERCENTAGE),
        new CharacterArtifactStatRecommendation(STATS.ELEMENTAL_MASTERY),
        new CharacterArtifactStatRecommendation(STATS.ENERGY_RECHARGE),
      ],
      [ARTIFACT_SLOTS.GOBLET]: [
        new CharacterArtifactStatRecommendation(STATS.ATK_PERCENTAGE),
        new CharacterArtifactStatRecommendation(STATS.ELEMENTAL_MASTERY),
      ],
      [ARTIFACT_SLOTS.CIRCLET]: [
        new CharacterArtifactStatRecommendation(STATS.CRIT_RATE),
        new CharacterArtifactStatRecommendation(STATS.CRIT_DMG),
      ],
      additional: [
        new CharacterArtifactStatRecommendation(STATS.ATK_PERCENTAGE).setNotes(["от 2000"]),
        new CharacterArtifactStatRecommendation(STATS.ELEMENTAL_MASTERY).setNotes(["от 150"]),
        new CharacterArtifactStatRecommendation(STATS.ENERGY_RECHARGE),
        new CharacterArtifactStatRecommendation(STATS.CRIT_RATE).setNotes(["Приоритетно", "от 60%"]),
        new CharacterArtifactStatRecommendation(STATS.CRIT_DMG).setNotes(["Приоритетно", "от 120%"]),
      ],
    },
  ]))
  .setFirstConstellationOrSignatureWeapon("C1 > Сигна")
  .setKeyConstellations([1, 2])
  .setRequiredLevel("80/90")
  .setRotation({
    "Базовая": ["E -> 1 удар -> E -> Q -> Бьём -> E -> Q -> Бьём(ситуативно)", "~120% Восст. энергии"],
    "С большим взрывом стихий": ["E -> 1 удар -> Q -> 1 удар -> E -> Бьём -> Q -> Бьём -> E -> Q -> Бьём(ситуативно)", "~170% Восст. энергии"],
    "Промежуточная": ["E -> 1 удар -> Q -> 1 удар -> E -> Бьём -> E -> Q -> Бьём(ситуативно)", "~135% Восст. энергии"],
    "Отряд": "Батарейка -> Гидро перс -> Саппорт -> Флинс",
  })
  .setSquads(CharacterSquadRecommendations.init([
    [
      new CharacterSquadOtherRecommendation("Персонаж Нод-Края"),
      new CharacterSquadElementRecommendation(ELEMENTS.ELECTRO),
      new CharacterSquadElementRecommendation(ELEMENTS.HYDRO),
    ],
    [
      new CharacterSquadCharacterRecommendation(CharacterIds.Aino),
      new CharacterSquadCharacterRecommendation(CharacterIds.Ineffa),
      new CharacterSquadCharacterRecommendation(CharacterIds.Sucrose),
    ],
  ]))
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "Во вторую очередь\n(8)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "В первую очередь\n(10)"]),
  ])
  .setVideoSourceIds([
    VideoSourceIds.GuideToKyryllChudomirovichFlins_AnimeCool,
    VideoSourceIds.GuideToKyryllChudomirovichFlins_MironMinMax,
    VideoSourceIds.GuideToKyryllChudomirovichFlins_xPandaChannelx,
  ])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.BloodsoakedRuins).setIsBetter().setPercent(1.30),
    new CharacterWeaponRecommendation(WeaponIds.StaffOfTheScarletSands).setPercent(1.19),
    new CharacterWeaponRecommendation(WeaponIds.FracturedHalo).setPercent(1.16),
    new CharacterWeaponRecommendation(WeaponIds.StaffOfHoma).setPercent(1.14),
    new CharacterWeaponRecommendation(WeaponIds.LumidouceElegy).setPercent(1.13),
    new CharacterWeaponRecommendation(WeaponIds.EngulfingLightning).setPercent(1.13).setPostfix("с полн.ультой"),
    new CharacterWeaponRecommendation(WeaponIds.PrimordialJadeWingedSpear).setPercent(1.13),
    new CharacterWeaponRecommendation(WeaponIds.SymphonistOfScents).setPercent(1.12),
    new CharacterWeaponRecommendation(WeaponIds.Deathmatch).setPercent(1.11).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.VortexVanquisher).setPercent(1.09).setPostfix("щит"),
    new CharacterWeaponRecommendation(WeaponIds.CrimsonMoonsSemblance).setPercent(1.08),
    new CharacterWeaponRecommendation(WeaponIds.CalamityQueller).setPercent(1.06),
    new CharacterWeaponRecommendation(WeaponIds.SkywardSpine).setPercent(1.05).setPostfix("с полн.ультой"),
    new CharacterWeaponRecommendation(WeaponIds.BalladOfTheFjords).setPercent(1.05).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.Deathmatch).setPercent(1.05).setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.BalladOfTheFjords).setPercent(1.01).setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.FavoniusLance).setPercent(1.01).setPostfix("с полн.ультой"),
    new CharacterWeaponRecommendation(WeaponIds.ProspectorsShovel).setPercent(1.00),
    new CharacterWeaponRecommendation(WeaponIds.MissiveWindspear).setPercent(0.98),
    new CharacterWeaponRecommendation(WeaponIds.KitainCrossSpear).setPercent(0.94),
    new CharacterWeaponRecommendation(WeaponIds.FavoniusLance).setPercent(0.84).setPostfix("с обыч. ротацией"),
  ]);
