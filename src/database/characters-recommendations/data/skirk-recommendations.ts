import type { ICharacterRecommendations } from "../types";
import { ArtifactSetKeys } from "../../artifact-sets/enums";
import { ArtifactSlotKeys } from "../../artifact-slots/enums";
import { CharacterKeys } from "../../characters/enums";
import { ElementKeys } from "../../elements/enums";
import { StatKeys } from "../../stats/enums";
import { TalentKeys } from "../../talents/enums";
import { WeaponKeys } from "../../weapons/enums";
import artifactSets from "../../artifact-sets/data";
import weapons from "../../weapons/data";

type GameVariantkey = typeof GameVariantEnum[keyof typeof GameVariantEnum];

const GameVariantEnum = {
  WhenPlayingThroughElementalBurst: `when_playing_through_${TalentKeys.ElementalBurst}`,
  WhenPlayingThroughNormalAttack: `when_playing_through_${TalentKeys.NormalAttack}`,
} as const;

const gameVariants: Record<GameVariantkey, string> = {
  [GameVariantEnum.WhenPlayingThroughElementalBurst]: "При игре через взрыв стихии Хаос: Разрушение",
  [GameVariantEnum.WhenPlayingThroughNormalAttack]: "При игре через обычные атаки",
};

export default {
  artifacts: {
    sets: [
      {
        key: ArtifactSetKeys.MarechausseeHunter,
        description: "Лучше при игре от обычных атак",
        notes: [
          "Если в команде с Скирк есть персонажи, периодически изменяющие HP отряда (например, Фурина), она сможет использовать бонус 4 предметов.",
          "Увеличивает урон обычной атаки и повышает шанс крит. попадания в сумме на 36%, позволяя сконцентрироваться на крит. уроне и силе атаки в артефактах.",
          "Не рекомендуется использовать оружие на шанс крит. попадания, так как он может выйти за 100%.",
          "Подойдёт при игре через обычные атаки.",
        ],
      },
      {
        key: ArtifactSetKeys.FinaleOfTheDeepGalleries,
        description: "Лучше при игре от взрыва стихии",
        notes: [
          "Лучший комплект для Скирк, так как повышает Крио урон, а также урон обычных атаки и взрыва стихии.",
          "Поскольку у Скирк нет энергии, а при её различных стилях игры она не наносит урон взрывом стихии и обычной атакой одновременно, все условия выполняются.",
          "Подойдёт как при игре через обычные атаки, так и через взрыв стихии.",
        ],
      },
    ],
    stats: {
      [ArtifactSlotKeys.Sands]: [{ key: StatKeys.AtkPercentage }],
      [ArtifactSlotKeys.Goblet]: [
        { key: StatKeys.CryoDmgBonus, notes: ["Лучше"] },
        { key: StatKeys.AtkPercentage, notes: ["Можно поставить, если в отряде Фурина"] },
      ],
      [ArtifactSlotKeys.Circlet]: [{ key: StatKeys.CritRate }, { key: StatKeys.CritDMG }],
      additional: [
        {
          key: StatKeys.CritRate,
          notes: [
            "В обычной ситуации от 65% до 85%",
            "При использовании полного комплекта Охотник Сумеречного двора не должно быть больше 64%, но так как Скирк играет минимум с 2 крио персонажами, то не должно быть больше 39%",
          ],
        },
        { key: StatKeys.CritDMG, notes: ["от 160%"] },
        { key: StatKeys.AtkPercentage, notes: ["от 2000"] },
      ],
    },
  },
  character_key: CharacterKeys.Skirk,
  first_constellation_or_signature_weapon: "Сигна > C1,\nC2 > Сигна",
  key_constellations: [1, 2, 5, 6],
  reference_point: {
    [`${artifactSets[ArtifactSetKeys.MarechausseeHunter].name}\n+\n${weapons[WeaponKeys.FinaleOfTheDeep].name}`]: [
      ["Макс. HP", "22 041"],
      ["Сила атаки", "2 136"],
      ["Защита", "946"],
      ["МС", "40"],
      ["Крит. шанс", "44.7%"],
      ["Крит. урон", "216.8%"],
      ["Восст. энергии", "111.0%"],
    ],
    [`${artifactSets[ArtifactSetKeys.FinaleOfTheDeepGalleries].name}\n+\n${weapons[WeaponKeys.CalamityOfEshu].name}`]: [
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
      { type: "character", key: CharacterKeys.Skirk },
      { type: "element", key: ElementKeys.Hydro },
      { type: "element", key: ElementKeys.Cryo },
      [{ type: "element", key: ElementKeys.Cryo }, { type: "element", key: ElementKeys.Hydro }],
    ],
    best_teammates: [
      { type: "character", key: CharacterKeys.Escoffier },
      { type: "character", key: CharacterKeys.Furina },
    ],
  },
  talent_leveling: {
    [gameVariants[GameVariantEnum.WhenPlayingThroughNormalAttack]]: [
      { key: TalentKeys.NormalAttack, priority: "Не качаем\n(1)" },
      { key: TalentKeys.ElementalSkill, priority: "В первую очередь\n(10)" },
      { key: TalentKeys.ElementalBurst, priority: "Во вторую очередь\n(10)" },
    ],
    [gameVariants[GameVariantEnum.WhenPlayingThroughElementalBurst]]: [
      { key: TalentKeys.NormalAttack, priority: "Не качаем\n(1)" },
      { key: TalentKeys.ElementalSkill, priority: "Не качаем\n(1)" },
      { key: TalentKeys.ElementalBurst, priority: "В первую очередь\n(10)" },
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
    { key: WeaponKeys.Azurelight, percent: 1.4256 },
    { key: WeaponKeys.HaranGeppakuFutsu, percent: 1.2239 },
    { key: WeaponKeys.PrimordialJadeCutter, percent: 1.2238 },
    { key: WeaponKeys.CalamityOfEshu, postfix: "(щит)", percent: 1.1844 },
    { key: WeaponKeys.MistsplitterReforged, percent: 1.1639 },
    { key: WeaponKeys.SummitShaper, postfix: "(щит)", percent: 1.1500 },
    { key: WeaponKeys.Absolution, percent: 1.1291 },
    { key: WeaponKeys.UrakuMisugiri, percent: 1.1264 },
    { key: WeaponKeys.LightOfFoliarIncision, percent: 1.1176 },
    { key: WeaponKeys.SplendorOfTranquilWaters, percent: 1.1023 },
    { key: WeaponKeys.TheBlackSword, percent: 1.0728 },
    { key: WeaponKeys.FinaleOfTheDeep, percent: 1 },
    { key: WeaponKeys.BlackcliffLongsword, percent: 0.9451 },
  ],
} as ICharacterRecommendations;
