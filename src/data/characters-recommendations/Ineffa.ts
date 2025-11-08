import { ARTIFACT_SETS } from "@/constants/artifact-sets";
import { ARTIFACT_SLOTS } from "@/constants/artifact-slots";
import { CharacterIds } from "@/enums/character";
import {
  CharacterArtifactRecommendations,
  CharacterArtifactSetRecommendationWithId,
  CharacterArtifactSetRecommendationWithIds,
  CharacterArtifactStatRecommendation,
  CharacterRecommendations,
  CharacterSquadCharacterRecommendation,
  CharacterSquadElementRecommendation,
  CharacterSquadRecommendations,
  CharacterTalentLevelingRecommendation,
  CharacterWeaponRecommendation,
} from "@/classes/character-recommendations";
import { ELEMENTS } from "@/constants/elements";
import { STATS } from "@/constants/stats";
import { TalentIds } from "@/enums/talent";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";

const weaponBalladOfTheFjords = new CharacterWeaponRecommendation(WeaponIds.BalladOfTheFjords).setNotes([
  "Даёт важный <span class='text-primary'>шанс крит. попадания</span> и "
  + "<span class='text-primary'>мастерство стихий</span>, которое необходимо для реакции "
  + "<span class='text-primary'>Лунный заряд</span>.",
  "Для реализации пассивной способности стоит иметь как минимум 3 персонажа разных элементов.",
  "В артефактах стоит сосредоточиться на <span class='text-primary'>силе атаки</span> и "
  + "<span class='text-primary'>крит. уроне</span>.",
]);
const weaponDeathmatch = new CharacterWeaponRecommendation(WeaponIds.Deathmatch).setNotes([
  "Копьё повышает <span class='text-primary'>шанс крит. попадания</span> и "
  + "<span class='text-primary'>силу атаки</span>.",
  "В таком случае стоит сосредоточиться на <span class='text-primary'>силе атаки</span>, "
  + "<span class='text-primary'>крит. уроне</span> и <span class='text-primary'>мастерстве стихий</span> в артефактах.",
]);

export default new CharacterRecommendations(CharacterIds.Ineffa)
  .setArtifacts(CharacterArtifactRecommendations.init([
    [
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.GILDED_DREAMS).setIsBetter().setNotes([
        "Урон навыков Инеффы и реакции Лунный заряд зависит и от силы атаки, и от мастерства стихий, поэтому данный комплект будет одним из лучших вариантов.",
      ]).setPercent(1.000),
      new CharacterArtifactSetRecommendationWithIds([
        ARTIFACT_SETS.WANDERERS_TROUPE,
        ARTIFACT_SETS.GLADIATORS_FINALE,
      ]).setPercent(0.9573),
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.WANDERERS_TROUPE).setPercent(0.9567),
      new CharacterArtifactSetRecommendationWithIds([
        ARTIFACT_SETS.SHIMENAWAS_REMINISCENCE,
        ARTIFACT_SETS.GLADIATORS_FINALE,
      ]).setPercent(0.9516),
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.THUNDERING_FURY).setNotes([
        "Уменьшение времени отката элементального навыка позволяет использовать его чаще и наносить больше урона.",
        "Так как Инеффа играет через реакцию Лунный заряд, ей подойдёт бонус от 4 предметов.",
      ]).setPercent(0.9245),
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.TENACITY_OF_THE_MILLELITH).setPercent(0.9051),
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.GOLDEN_TROUPE).setPercent(0.8997),
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.EMBLEM_OF_SEVERED_FATE).setPercent(0.8785),
    ],
    {
      [ARTIFACT_SLOTS.SANDS]: [
        new CharacterArtifactStatRecommendation(STATS.ELEMENTAL_MASTERY),
        new CharacterArtifactStatRecommendation(STATS.ATK_PERCENTAGE),
      ],
      [ARTIFACT_SLOTS.GOBLET]: [
        new CharacterArtifactStatRecommendation(STATS.ELEMENTAL_MASTERY),
        new CharacterArtifactStatRecommendation(STATS.ATK_PERCENTAGE),
      ],
      [ARTIFACT_SLOTS.CIRCLET]: [
        new CharacterArtifactStatRecommendation(STATS.CRIT_RATE),
        new CharacterArtifactStatRecommendation(STATS.CRIT_DMG),
      ],
      additional: [
        new CharacterArtifactStatRecommendation(STATS.CRIT_RATE).setNotes(["от 60%"]),
        new CharacterArtifactStatRecommendation(STATS.CRIT_DMG).setNotes(["от 120%"]),
        new CharacterArtifactStatRecommendation(STATS.ATK_PERCENTAGE).setNotes(["от 2000"]),
        new CharacterArtifactStatRecommendation(STATS.ELEMENTAL_MASTERY).setNotes(["от 150"]),
      ],
    },
  ]))
  .setFirstConstellationOrSignatureWeapon("C1 < Сигна ~ C2")
  .setKeyConstellations([2])
  .setRequiredLevel("90/90")
  .setSquads(CharacterSquadRecommendations.init([
    [
      new CharacterSquadCharacterRecommendation(CharacterIds.Ineffa),
      new CharacterSquadElementRecommendation(ELEMENTS.HYDRO),
    ],
    [],
  ]))
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "В первую очередь\n(8)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "Во вторую очередь\n(8)"]),
  ])
  .setVideoSourceIds([VideoSourceIds.GuideToIneffa])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.FracturedHalo).setIsBetter("Лучшее оружие").setNotes([
      "Лучшее оружие для Инеффы, поскольку повысит важный <span class='text-primary'>крит. урон</span> и "
      + "<span class='text-primary'>силу атаки</span>, а также увеличит урон от реакции "
      + "<span class='text-primary'>Лунный заряд</span>.",
      "Так как Инеффа может создавать щит, она полностью реализует пассивную способность копья.",
      "В артефактах стоит сосредоточиться на <span class='text-primary'>силе атаки</span>, "
      + "<span class='text-primary'>шансе крит. попадания</span> и <span class='text-primary'>мастерстве стихий</span>.",
    ]).setPercent(1.3130),
    new CharacterWeaponRecommendation(WeaponIds.StaffOfTheScarletSands).setNotes([
      "Повысит важный <span class='text-primary'>шанс крит. попадания</span> и увеличит наносимый "
      + "<span class='text-primary'>урон</span>.",
      "В артефактах стоит сосредоточиться на <span class='text-primary'>крит. уроне</span>, "
      + "<span class='text-primary'>силе атаки</span> и <span class='text-primary'>мастерстве стихий</span>.",
    ]).setPercent(1.2416),
    new CharacterWeaponRecommendation(WeaponIds.SymphonistOfScents).setNotes([
      "Оружие повысит важный <span class='text-primary'>крит. урон</span> и "
      + "<span class='text-primary'>силу атаки</span>.",
      "Стоит учитывать, что Инеффа не может лечить, поэтому она не выполняет последнюю часть пассивной способности.",
      "В артефактах стоит сосредоточиться на <span class='text-primary'>силе атаки</span>, "
      + "<span class='text-primary'>шансе крит. попадания</span> и <span class='text-primary'>мастерстве стихий</span>.",
    ]).setPercent(1.1403),
    CharacterWeaponRecommendation.copy(weaponBalladOfTheFjords).setPercent(1.1307).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.CalamityQueller).setNotes([
      "Оружие даёт очень большой бонус к <span class='text-primary'>силе атаки</span>, имеет "
      + "<span class='text-primary'>высокую базовую атаку</span> и увеличивает "
      + "<span class='text-primary'>элементальный урон</span>.",
      "В артефактах стоит сосредоточиться на <span class='text-primary'>шансе крит. попадания</span>, "
      + "<span class='text-primary'>крит. уроне</span> и <span class='text-primary'>мастерстве стихий</span>.",
    ]).setPercent(1.1286),
    new CharacterWeaponRecommendation(WeaponIds.StaffOfHoma).setNotes([
      "Первая часть пассивной способности увеличит <span class='text-primary'>силу атаки</span>.",
      "Последняя часть Безрассудной бабочки почти не реализуется, но даже без неё посох увеличивает важный "
      + "<span class='text-primary'>крит. урон</span>.",
      "В артефактах стоит сосредоточиться на <span class='text-primary'>шансе крит. попадания</span>, "
      + "<span class='text-primary'>силе атаки</span> и <span class='text-primary'>мастерстве стихий</span>.",
    ]).setPercent(1.1194),
    new CharacterWeaponRecommendation(WeaponIds.LumidouceElegy).setNotes([
      "Оружие повысит важный <span class='text-primary'>шанс крит. попадания</span> и "
      + "<span class='text-primary'>силу атаки</span>.",
      "Стоит учитывать, что Инеффа не играет в командах с <span class='text-primary'>Горением</span>, поэтому "
      + "пассивная способность реализуется не полностью.",
      "В артефактах стоит сосредоточиться на <span class='text-primary'>силе атаки</span>, "
      + "<span class='text-primary'>крит. уроне</span> и <span class='text-primary'>мастерстве стихий</span>.",
    ]).setPercent(1.1068),
    CharacterWeaponRecommendation.copy(weaponDeathmatch).setPercent(1.1004).setRefinement(5),
    CharacterWeaponRecommendation.copy(weaponBalladOfTheFjords).setPercent(1.0341).setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.PrimordialJadeWingedSpear).setNotes([
      "<span class='text-primary'>Шанс крит. попадания</span> и бонус к <span class='text-primary'>силе атаки</span> "
      + "позволяют сконцентрироваться на <span class='text-primary'>крит. уроне</span> и "
      + "<span class='text-primary'>восст. энергии</span> в артефактах.",
      "Стоит учитывать, что пассивная способность реализуется, только когда Инеффа находится на поле.",
    ]).setPercent(1.0334),
    new CharacterWeaponRecommendation(WeaponIds.CrimsonMoonsSemblance).setPercent(1.0334),
    CharacterWeaponRecommendation.copy(weaponDeathmatch).setPercent(1.0230).setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.MissiveWindspear).setIsBetter("Лучшее эвентовое оружие").setNotes([
      "Повысит важные <span class='text-primary'>мастерство стихий</span> и "
      + "<span class='text-primary'>силу атаки</span>, от которых зависит урон реакции "
      + "<span class='text-primary'>Лунный заряд</span>.",
      "В артефактах стоит сосредоточиться на <span class='text-primary'>шансе крит. попадания</span>, "
      + "<span class='text-primary'>силе атаки</span> и <span class='text-primary'>крит. уроне</span>.",
    ]).setPercent(1.0000).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.VortexVanquisher).setPercent(0.9735),
    new CharacterWeaponRecommendation(WeaponIds.SkywardSpine).setPercent(0.9482),
    new CharacterWeaponRecommendation(WeaponIds.BlackcliffPole).setNotes([
      "Копьё даст необходимый Инеффе <span class='text-primary'>крит. урон</span>, поэтому позволит сконцентрироваться "
      + "на <span class='text-primary'>шансе крит. попадания</span>, <span class='text-primary'>силе атаки</span> и "
      + "<span class='text-primary'>мастерстве стихий</span> в артефактах.",
      "Лучше всего пассивная способность реализуется при нескольких врагах, а не боссах.",
    ]).setPercent(0.9361),
    new CharacterWeaponRecommendation(WeaponIds.TamayurateiNoOhanashi).setNotes([
      "Даёт важную <span class='text-primary'>силу атаки</span> и позволяет чаще активировать "
      + "<span class='text-primary'>взрыв стихии</span>.",
      "В артефактах стоит сосредоточиться на <span class='text-primary'>шансе крит. попадания</span>, "
      + "<span class='text-primary'>крит. уроне</span>, <span class='text-primary'>мастерстве стихий</span> и "
      + "<span class='text-primary'>мастерстве стихий</span>.",
    ]).setPercent(0.9249).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.WavebreakersFin).setNotes([
      "Даёт как <span class='text-primary'>бонус к силе атаки</span>, так и повышает "
      + "<span class='text-primary'>урон от взрыва стихии</span>.",
      "Рекомендуется иметь в команде персонажей со стоимостью <span class='text-primary'>взрыва стихии</span> от 80 ед.",
      "В артефактах стоит сосредоточиться на <span class='text-primary'>шансе крит. попадания</span>, "
      + "<span class='text-primary'>крит. уроне</span> и <span class='text-primary'>мастерстве стихий</span>.",
    ]).setPercent(0.9090).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.EngulfingLightning).setPercent(0.9085),
    new CharacterWeaponRecommendation(WeaponIds.KitainCrossSpear).setIsBetter("Лучшее доступное оружие").setNotes([
      "Копьё даст необходимое <span class='text-primary'>мастерство стихий</span>, увеличит урон "
      + "<span class='text-primary'>элементального навыка</span> и "
      + "<span class='text-primary'>восстановит энергию</span>.",
      "В артефактах стоит сосредоточиться на <span class='text-primary'>шансе крит. попадания</span>, "
      + "<span class='text-primary'>крит. уроне</span> и <span class='text-primary'>силе атаки</span>.",
    ]).setPercent(0.8866).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.DragonsBane).setNotes([
      "<span class='text-primary'>Мастерство стихий</span> увеличит урон от реакции "
      + "<span class='text-primary'>Лунный заряд</span>.",
      "Пассивная способность полностью реализуется в отрядах с <span class='text-primary'>Гидро</span> персонажами.",
      "В артефактах стоит сосредоточиться на <span class='text-primary'>шансе крит. попадания</span>, "
      + "<span class='text-primary'>крит. уроне</span> и <span class='text-primary'>силе атаки</span>.",
    ]).setPercent(0.8649).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.WhiteTassel).setPercent(0.8233).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.FavoniusLance).setNotes([
      "Дружественный бриз помогает создать <span class='text-primary'>элементальные частицы</span> как для Инеффы, так "
      + "и для других членов отряда, но для полной реализации способности требуется от 50% "
      + "<span class='text-primary'>шанса крит. попадания</span>.",
      "Рекомендуется, если команде не хватает <span class='text-primary'>энергии</span>.",
      "В артефактах стоит сосредоточиться на <span class='text-primary'>силе атаки</span>, "
      + "<span class='text-primary'>шансе крит. попадания</span> и <span class='text-primary'>крит. уроне</span>.",
    ]).setPercent(0.8104).setRefinement(5),
  ]);
