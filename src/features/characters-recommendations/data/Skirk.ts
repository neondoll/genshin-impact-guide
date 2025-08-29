import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSlotIds } from "../../artifact-slots/enums";
import {
  CharacterArtifactRecommendationsClass,
  CharacterArtifactSetRecommendationWithIdClass,
  CharacterArtifactStatRecommendationClass,
  CharacterRecommendationsClass,
  CharacterSquadCharacterRecommendationClass,
  CharacterSquadElementRecommendationClass,
  CharacterSquadRecommendationsClass,
  CharacterTalentLevelingRecommendationClass,
  CharacterWeaponRecommendationClass,
} from "../classes";
import { CharacterIds } from "../../characters/enums";
import { ElementIds } from "../../elements/enums";
import { StatIds } from "../../stats/enums";
import { TalentIds } from "../../talents/enums";
import { VideoSourceClass } from "../../video-sources/classes";
import { WeaponIds } from "../../weapons/enums";
import artifactSets from "../../artifact-sets/data";
import weapons from "../../weapons/data";

type GameVariantkey = typeof GameVariantEnum[keyof typeof GameVariantEnum];

const GameVariantEnum = {
  WhenPlayingThroughElementalBurst: `when_playing_through_${TalentIds.ElementalBurst}`,
  WhenPlayingThroughNormalAttack: `when_playing_through_${TalentIds.NormalAttack}`,
} as const;

const gameVariants: Record<GameVariantkey, string> = {
  [GameVariantEnum.WhenPlayingThroughElementalBurst]: "При игре через взрыв стихии Хаос: Разрушение",
  [GameVariantEnum.WhenPlayingThroughNormalAttack]: "При игре через обычные атаки",
};

export default new CharacterRecommendationsClass(CharacterIds.Skirk)
  .setArtifacts(CharacterArtifactRecommendationsClass.init([
    [
      new CharacterArtifactSetRecommendationWithIdClass(ArtifactSetIds.MarechausseeHunter).setDescription("Лучше при игре от обычных атак").setNotes([
        "Если в команде с Скирк есть персонажи, периодически изменяющие HP отряда (например, Фурина), она сможет использовать бонус 4 предметов.",
        "Увеличивает урон обычной атаки и повышает шанс крит. попадания в сумме на 36%, позволяя сконцентрироваться на крит. уроне и силе атаки в артефактах.",
        "Не рекомендуется использовать оружие на шанс крит. попадания, так как он может выйти за 100%.",
        "Подойдёт при игре через обычные атаки.",
      ]),
      new CharacterArtifactSetRecommendationWithIdClass(ArtifactSetIds.FinaleOfTheDeepGalleries).setDescription("Лучше при игре от взрыва стихии").setNotes([
        "Лучший комплект для Скирк, так как повышает Крио урон, а также урон обычных атаки и взрыва стихии.",
        "Поскольку у Скирк нет энергии, а при её различных стилях игры она не наносит урон взрывом стихии и обычной атакой одновременно, все условия выполняются.",
        "Подойдёт как при игре через обычные атаки, так и через взрыв стихии.",
      ]),
    ],
    {
      [ArtifactSlotIds.Sands]: [new CharacterArtifactStatRecommendationClass(StatIds.AtkPercentage)],
      [ArtifactSlotIds.Goblet]: [
        new CharacterArtifactStatRecommendationClass(StatIds.CryoDmgBonus).setNotes(["Лучше"]),
        new CharacterArtifactStatRecommendationClass(StatIds.AtkPercentage).setNotes([
          "Можно поставить, если в отряде Фурина",
        ]),
      ],
      [ArtifactSlotIds.Circlet]: [
        new CharacterArtifactStatRecommendationClass(StatIds.CritRate),
        new CharacterArtifactStatRecommendationClass(StatIds.CritDMG),
      ],
      additional: [
        new CharacterArtifactStatRecommendationClass(StatIds.CritRate).setNotes([
          "В обычной ситуации от 65% до 85%",
          "При использовании полного комплекта Охотник Сумеречного двора не должно быть больше 64%, но так как Скирк играет минимум с 2 крио персонажами, то не должно быть больше 39%",
        ]),
        new CharacterArtifactStatRecommendationClass(StatIds.CritDMG).setNotes(["от 160%"]),
        new CharacterArtifactStatRecommendationClass(StatIds.AtkPercentage).setNotes(["от 2000"]),
      ],
    },
  ]))
  .setFirstConstellationOrSignatureWeapon("Сигна > C1,\nC2 > Сигна")
  .setKeyConstellations([1, 2, 5, 6])
  .setReferencePoint({
    [`${artifactSets[ArtifactSetIds.MarechausseeHunter].name}\n+\n${weapons[WeaponIds.FinaleOfTheDeep].name}`]: [
      ["Макс. HP", "22 041"],
      ["Сила атаки", "2 136"],
      ["Защита", "946"],
      ["МС", "40"],
      ["Крит. шанс", "44.7%"],
      ["Крит. урон", "216.8%"],
      ["Восст. энергии", "111.0%"],
    ],
    [`${artifactSets[ArtifactSetIds.FinaleOfTheDeepGalleries].name}\n+\n${weapons[WeaponIds.CalamityOfEshu].name}`]: [
      ["Макс. HP", "22 041"],
      ["Сила атаки", "2 136"],
      ["Защита", "946"],
      ["МС", "40"],
      ["Крит. шанс", "69.2%"],
      ["Крит. урон", "167.8%"],
      ["Восст. энергии", "111.0%"],
    ],
  })
  .setRequiredLevel(90)
  .setRotation({
    [gameVariants[GameVariantEnum.WhenPlayingThroughNormalAttack]]: "Отряд > Обычный элементальный навык (E) > Взрыв стихии (Q) > 10 обычных атак > Заряженная атака > 8 обычных атак",
    [gameVariants[GameVariantEnum.WhenPlayingThroughElementalBurst]]: "Отряд > Заряженный элементальный навык (hold E) > Взрыв стихии (Q)",
  })
  .setSquads(CharacterSquadRecommendationsClass.init([
    [
      new CharacterSquadCharacterRecommendationClass(CharacterIds.Skirk),
      new CharacterSquadElementRecommendationClass(ElementIds.Hydro),
      new CharacterSquadElementRecommendationClass(ElementIds.Cryo),
      [
        new CharacterSquadElementRecommendationClass(ElementIds.Cryo),
        new CharacterSquadElementRecommendationClass(ElementIds.Hydro),
      ],
    ],
    [
      new CharacterSquadCharacterRecommendationClass(CharacterIds.Escoffier),
      new CharacterSquadCharacterRecommendationClass(CharacterIds.Furina),
    ],
  ]))
  .setTalentLeveling({
    [gameVariants[GameVariantEnum.WhenPlayingThroughNormalAttack]]: [
      CharacterTalentLevelingRecommendationClass.init([TalentIds.NormalAttack, "Не качаем\n(1)"]),
      CharacterTalentLevelingRecommendationClass.init([TalentIds.ElementalSkill, "В первую очередь\n(10)"]),
      CharacterTalentLevelingRecommendationClass.init([TalentIds.ElementalBurst, "Во вторую очередь\n(10)"]),
    ],
    [gameVariants[GameVariantEnum.WhenPlayingThroughElementalBurst]]: [
      CharacterTalentLevelingRecommendationClass.init([TalentIds.NormalAttack, "Не качаем\n(1)"]),
      CharacterTalentLevelingRecommendationClass.init([TalentIds.ElementalSkill, "Не качаем\n(1)"]),
      CharacterTalentLevelingRecommendationClass.init([TalentIds.ElementalBurst, "В первую очередь\n(10)"]),
    ],
  })
  .setVideoSources([
    new VideoSourceClass("Анимекул: Скирк – заложник Эскофье или имба? | Подробный гайд на Скирк").setYoutubeUrl("https://youtu.be/5ZoCR8bsSYM"),
    new VideoSourceClass("Miron MinMax: Скирк - Сильнейший Крио (но есть нюанс)").setVkUrl("https://vkvideo.ru/video-227044935_456239232").setYoutubeUrl("https://youtu.be/jpAMI38M-LI"),
    new VideoSourceClass("xPandaChannelx: Скирк Гайд | Ротации/Шмотки/Группы/F2P | Skirk Как Играть Геншин Импакт 5.7").setYoutubeUrl("https://youtu.be/Rr26SHvbmXE"),
  ])
  .setWeapons([
    new CharacterWeaponRecommendationClass(WeaponIds.Azurelight).setPercent(1.4256),
    new CharacterWeaponRecommendationClass(WeaponIds.HaranGeppakuFutsu).setPercent(1.2239),
    new CharacterWeaponRecommendationClass(WeaponIds.PrimordialJadeCutter).setPercent(1.2238),
    new CharacterWeaponRecommendationClass(WeaponIds.CalamityOfEshu).setPercent(1.1844).setPostfix("(щит)"),
    new CharacterWeaponRecommendationClass(WeaponIds.MistsplitterReforged).setPercent(1.1639),
    new CharacterWeaponRecommendationClass(WeaponIds.SummitShaper).setPercent(1.1500).setPostfix("(щит)"),
    new CharacterWeaponRecommendationClass(WeaponIds.Absolution).setPercent(1.1291),
    new CharacterWeaponRecommendationClass(WeaponIds.UrakuMisugiri).setPercent(1.1264),
    new CharacterWeaponRecommendationClass(WeaponIds.LightOfFoliarIncision).setPercent(1.1176),
    new CharacterWeaponRecommendationClass(WeaponIds.SplendorOfTranquilWaters).setPercent(1.1023),
    new CharacterWeaponRecommendationClass(WeaponIds.TheBlackSword).setPercent(1.0728),
    new CharacterWeaponRecommendationClass(WeaponIds.FinaleOfTheDeep).setPercent(1.0000),
    new CharacterWeaponRecommendationClass(WeaponIds.BlackcliffLongsword).setPercent(0.9451),
  ]);
