import artifactSets from "../artifact-sets";
import weapons from "../weapons";
import { ArtifactPieceUidEnum } from "../enums/artifact-piece.ts";
import { ArtifactSetUidEnum } from "../enums/artifact-set.ts";
import { AttributeUidEnum } from "../enums/attribute.ts";
import { CharacterUidEnum } from "../enums/character";
import { ElementUidEnum } from "../enums/element.ts";
import { TalentUidEnum } from "../enums/talent";
import { WeaponUidEnum } from "../enums/weapon.ts";
import type { CharacterRecommendations } from "../types/character-recommendations";

type GameVariantUid = typeof GameVariantEnum[keyof typeof GameVariantEnum];

const GameVariantEnum = {
  WhenPlayingThroughElementalBurst: `when_playing_through_${TalentUidEnum.ElementalBurst}`,
  WhenPlayingThroughNormalAttack: `when_playing_through_${TalentUidEnum.NormalAttack}`,
} as const;

const gameVariants: Record<GameVariantUid, string> = {
  [GameVariantEnum.WhenPlayingThroughElementalBurst]: "При игре через взрыв стихии Хаос: Разрушение",
  [GameVariantEnum.WhenPlayingThroughNormalAttack]: "При игре через обычные атаки",
};

export default {
  artifacts: {
    sets: [
      {
        uid: ArtifactSetUidEnum.MarechausseeHunter,
        description: "Лучше при игре от обычных атак",
        notes: [
          "Если в команде с Скирк есть персонажи, периодически изменяющие HP отряда (например, Фурина), она сможет использовать бонус 4 предметов.",
          "Увеличивает урон обычной атаки и повышает шанс крит. попадания в сумме на 36%, позволяя сконцентрироваться на крит. уроне и силе атаки в артефактах.",
          "Не рекомендуется использовать оружие на шанс крит. попадания, так как он может выйти за 100%.",
          "Подойдёт при игре через обычные атаки.",
        ],
      },
      {
        uid: ArtifactSetUidEnum.FinaleOfTheDeepGalleries,
        description: "Лучше при игре от взрыва стихии",
        notes: [
          "Лучший комплект для Скирк, так как повышает Крио урон, а также урон обычных атаки и взрыва стихии.",
          "Поскольку у Скирк нет энергии, а при её различных стилях игры она не наносит урон взрывом стихии и обычной атакой одновременно, все условия выполняются.",
          "Подойдёт как при игре через обычные атаки, так и через взрыв стихии.",
        ],
      },
    ],
    attributes: {
      [ArtifactPieceUidEnum.SandsOfEon]: [{ uid: AttributeUidEnum.ATKPercentage }],
      [ArtifactPieceUidEnum.GobletOfEonothem]: [
        { uid: AttributeUidEnum.CryoDMGBonus, notes: ["Лучше"] },
        { uid: AttributeUidEnum.ATKPercentage, notes: ["Можно поставить, если в отряде Фурина"] },
      ],
      [ArtifactPieceUidEnum.CircletOfLogos]: [{ uid: AttributeUidEnum.CRITRate }, { uid: AttributeUidEnum.CRITDMG }],
      additional: [
        {
          uid: AttributeUidEnum.CRITRate,
          notes: [
            "В обычной ситуации от 65% до 85%",
            "При использовании полного комплекта Охотник Сумеречного двора не должно быть больше 64%, но так как Скирк играет минимум с 2 крио персонажами, то не должно быть больше 39%",
          ],
        },
        { uid: AttributeUidEnum.CRITDMG, notes: ["от 160%"] },
        { uid: AttributeUidEnum.ATKPercentage, notes: ["от 2000"] },
      ],
    },
  },
  character_uid: CharacterUidEnum.Skirk,
  first_constellation_or_signature_weapon: "Сигна > C1,\nC2 > Сигна",
  key_constellations: [1, 2, 5, 6],
  reference_point: {
    [`${artifactSets[ArtifactSetUidEnum.MarechausseeHunter].name}\n+\n${weapons[WeaponUidEnum.FinaleOfTheDeep].name}`]: [
      ["Макс. HP", "22 041"],
      ["Сила атаки", "2 136"],
      ["Защита", "946"],
      ["МС", "40"],
      ["Крит. шанс", "44.7%"],
      ["Крит. урон", "216.8%"],
      ["Восст. энергии", "111.0%"],
    ],
    [`${artifactSets[ArtifactSetUidEnum.FinaleOfTheDeepGalleries].name}\n+\n${weapons[WeaponUidEnum.CalamityOfEshu].name}`]: [
      ["Макс. HP", "22 041"],
      ["Сила атаки", "2 136"],
      ["Защита", "946"],
      ["МС", "40"],
      ["Крит. шанс", "69.2%"],
      ["Крит. урон", "167.8%"],
      ["Восст. энергии", "111.0%"],
    ],
  },
  required_level: 90,
  rotation: {
    [gameVariants[GameVariantEnum.WhenPlayingThroughNormalAttack]]: "Отряд > Обычный элементальный навык (E) > Взрыв стихии (Q) > 10 обычных атак > Заряженная атака > 8 обычных атак",
    [gameVariants[GameVariantEnum.WhenPlayingThroughElementalBurst]]: "Отряд > Заряженный элементальный навык (hold E) > Взрыв стихии (Q)",
  },
  squads: {
    general_template: [
      { type: "character", uid: CharacterUidEnum.Skirk },
      { type: "element", uid: ElementUidEnum.Hydro },
      { type: "element", uid: ElementUidEnum.Cryo },
      [{ type: "element", uid: ElementUidEnum.Cryo }, { type: "element", uid: ElementUidEnum.Hydro }],
    ],
    best_teammates: [
      { type: "character", uid: CharacterUidEnum.Escoffier },
      { type: "character", uid: CharacterUidEnum.Furina },
    ],
  },
  talent_leveling: {
    [gameVariants[GameVariantEnum.WhenPlayingThroughNormalAttack]]: [
      { uid: TalentUidEnum.NormalAttack, priority: "Не качаем\n(1)" },
      { uid: TalentUidEnum.ElementalSkill, priority: "В первую очередь\n(10)" },
      { uid: TalentUidEnum.ElementalBurst, priority: "Во вторую очередь\n(10)" },
    ],
    [gameVariants[GameVariantEnum.WhenPlayingThroughElementalBurst]]: [
      { uid: TalentUidEnum.NormalAttack, priority: "Не качаем\n(1)" },
      { uid: TalentUidEnum.ElementalSkill, priority: "Не качаем\n(1)" },
      { uid: TalentUidEnum.ElementalBurst, priority: "В первую очередь\n(10)" },
    ],
  },
  video_sources: [
    {
      title: "Анимекул: Скирк – заложник Эскофье или имба? | Подробный гайд на Скирк",
      youtube_url: "https://youtu.be/5ZoCR8bsSYM",
    },
    {
      title: "Miron MinMax: Скирк - Сильнейший Крио (но есть нюанс)",
      vk_url: "https://vkvideo.ru/video-227044935_456239232",
      youtube_url: "https://youtu.be/jpAMI38M-LI",
    },
    {
      title: "xPandaChannelx: Скирк Гайд | Ротации/Шмотки/Группы/F2P | Skirk Как Играть Геншин Импакт 5.7",
      youtube_url: "https://youtu.be/Rr26SHvbmXE",
    },
  ],
  weapons: [
    { uid: WeaponUidEnum.Azurelight, percent: 1.4256 },
    { uid: WeaponUidEnum.HaranGeppakuFutsu, percent: 1.2239 },
    { uid: WeaponUidEnum.PrimordialJadeCutter, percent: 1.2238 },
    { uid: WeaponUidEnum.CalamityOfEshu, postfix: "(щит)", percent: 1.1844 },
    { uid: WeaponUidEnum.MistsplitterReforged, percent: 1.1639 },
    { uid: WeaponUidEnum.SummitShaper, postfix: "(щит)", percent: 1.1500 },
    { uid: WeaponUidEnum.Absolution, percent: 1.1291 },
    { uid: WeaponUidEnum.UrakuMisugiri, percent: 1.1264 },
    { uid: WeaponUidEnum.LightOfFoliarIncision, percent: 1.1176 },
    { uid: WeaponUidEnum.SplendorOfTranquilWaters, percent: 1.1023 },
    { uid: WeaponUidEnum.TheBlackSword, percent: 1.0728 },
    { uid: WeaponUidEnum.FinaleOfTheDeep, percent: 1 },
    { uid: WeaponUidEnum.BlackcliffLongsword, percent: 0.9451 },
  ],
} as CharacterRecommendations;
