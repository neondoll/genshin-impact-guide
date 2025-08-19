import type { ICharacterRecommendations } from "../types";
import { ArtifactSetKeys } from "../../artifact-sets/enums";
import { ArtifactSlotKeys } from "../../artifact-slots/enums";
import { CharacterKeys } from "../../characters/enums";
import { CharacterRoleKeys } from "../../character-roles/enums";
import { StatKeys } from "../../stats/enums";
import { TalentKeys } from "../../talents/enums";
import { WeaponKeys } from "../../weapons/enums";
import characters from "../../characters/data";

type GameVariantkey = typeof GameVariantEnum[keyof typeof GameVariantEnum];

const GameVariantEnum = { "🗡️": CharacterRoleKeys["🗡️"], "🤝": CharacterRoleKeys["🤝"] } as const;

const gameVariants: Record<GameVariantkey, string> = {
  [GameVariantEnum["🗡️"]]: "Основной урон",
  [GameVariantEnum["🤝"]]: "Поддержка",
};

export default {
  artifacts: {
    sets: [
      {
        key: ArtifactSetKeys.ObsidianCodex,
        is_better: true,
        notes: [
          "Лучший комплект для Мавуики, поскольку увеличивает её урон и повышает шанс крит. попадания в сумме до 40%, позволяя сосредоточиться на крит. уроне в артефактах.",
          "Так как Мавуика обладает Благословением Ночного духа, она полностью реализует условия комплекта.",
        ],
      },
      {
        key: ArtifactSetKeys.ScrollOfTheHeroOfCinderCity,
        notes: [
          "Бонус 2 предметов является неважным для Мавуики, но бонус 4 предметов значительно повысит бонус элементального урона всему отряду.",
          "Стоит учитывать, что лучше всего комплект работает в команде с персонажами из Натлана.",
        ],
      },
    ],
    stats: {
      [ArtifactSlotKeys.Sands]: [
        {
          key: StatKeys.AtkPercentage,
          notes: [
            "Гиперкерри\\Перегрузка - Всегда",
            `Вейп\\Мелт - Лучше, если в отряде есть инструктор и отсутствует ${characters[CharacterKeys.Bennett].name} или ${characters[CharacterKeys.Iansan].name}`,
            `${gameVariants[GameVariantEnum["🤝"]]} - Всегда`,
          ],
        },
        {
          key: StatKeys.ElementalMastery,
          notes: [
            `Вейп\\Мелт - Всегда, если есть в команде ${characters[CharacterKeys.Bennett].name} или ${characters[CharacterKeys.Iansan].name} и мало МС в доп. статах`,
          ],
        },
      ],
      [ArtifactSlotKeys.Goblet]: [{ key: StatKeys.PyroDmgBonus, notes: ["Всегда"] }],
      [ArtifactSlotKeys.Circlet]: [{ key: StatKeys.CritRate }, { key: StatKeys.CritDMG }],
      additional: [
        { key: StatKeys.AtkPercentage },
        { key: StatKeys.CritRate },
        { key: StatKeys.CritDMG },
        { key: StatKeys.ElementalMastery, notes: ["Если играем в Вейпе\\Мелте"] },
      ],
    },
  },
  character_key: CharacterKeys.Mavuika,
  first_constellation_or_signature_weapon: "C1 < Сигна < C2",
  key_constellations: [2, 4],
  reference_point: {
    "Гиперкерри\\Перегрузка": [
      ["Макс. HP", "19 085"],
      ["Сила атаки", "2 179"],
      ["Защита", "929"],
      ["МС", "40"],
      ["Крит. шанс", "59.0%"],
      ["Крит. урон", "216.8%"],
      ["Восст. энергии", "111.0%"],
    ],
    "Вейп\\Мелт": [
      ["Макс. HP", "19 085"],
      ["Сила атаки", "1 526"],
      ["Защита", "929"],
      ["МС", "346"],
      ["Крит. шанс", "59.0%"],
      ["Крит. урон", "216.8%"],
      ["Восст. энергии", "111.0%"],
    ],
  },
  rotation: {
    [`${gameVariants[GameVariantEnum["🗡️"]]}: База`]: "Взрыв стихии (Q) > 7 секунд заряженные атаки (на взрыве стихий останется 9 секунд перезарядки)",
    [`${gameVariants[GameVariantEnum["🗡️"]]}: H1C`]: "Взрыв стихии (Q) > 6 раз (1 тик заряженной атаки > рывок), на последний раз делается не рывок, а просто отпускается заряженная атака",
    [`${gameVariants[GameVariantEnum["🗡️"]]}: Мелт (1 уровень)`]: "Взрыв стихии (Q) [Мелт] > ждем > Заряженная атака (1 [Мелт], 2, 3, 4 [Мелт], 5, 6, 7, 8 тиков) > финальный удар",
    [`${gameVariants[GameVariantEnum["🗡️"]]}: Мелт (2 уровень)`]: "Взрыв стихии (Q) [Мелт] > ждем > Заряженная атака (1 [Мелт], 2, 3, 4 [Мелт] тика) > прыжок > Заряженная атака (1 [Мелт], 2, 3, (взрыв стихии закончился) 4 [Мелт] тика)",
    [`${gameVariants[GameVariantEnum["🗡️"]]}: Мелт (3 уровень)`]: "Взрыв стихии (Q) [Мелт] > ждем > Заряженная атака (1 [Мелт], 2, 3, 4 [Мелт] тика) > прыжок > Заряженная атака (1 [Мелт], 2, 3, 4 [Мелт] тика) (взрыв стихии закончился)",
    [`${gameVariants[GameVariantEnum["🗡️"]]}: Мелт (4 уровень)`]: "Взрыв стихии (Q) [Мелт] > ждем > Заряженная атака (1 [Мелт], 2, 3 тика, финальный удар [Мелт]) > рывок > Заряженная атака (1, 2 [Мелт], 3 тика, финальный удар [Мелт])",
    [gameVariants[GameVariantEnum["🤝"]]]: "Взрыв стихии (Q)",
  },
  squads: {
    general_template: [],
    best_teammates: {
      [`В целом (${gameVariants[GameVariantEnum["🗡️"]]})`]: [
        { type: "character", key: CharacterKeys.Xilonen },
        { type: "character", key: CharacterKeys.Bennett },
        { type: "character", key: CharacterKeys.Iansan },
      ],
      [`В мелте (${gameVariants[GameVariantEnum["🗡️"]]})`]: [
        { type: "character", key: CharacterKeys.Citlali },
        { type: "character", key: CharacterKeys.Escoffier },
        { type: "character", key: CharacterKeys.Rosaria },
      ],
      [`В вейпе (${gameVariants[GameVariantEnum["🗡️"]]})`]: [
        { type: "character", key: CharacterKeys.Furina },
        { type: "character", key: CharacterKeys.Yelan },
      ],
      [`В перегрузе (${gameVariants[GameVariantEnum["🗡️"]]})`]: [
        { type: "character", key: CharacterKeys.Chevreuse },
        { type: "character", key: CharacterKeys.Ororon },
      ],
    },
  },
  talent_leveling: [
    { key: TalentKeys.NormalAttack, priority: "Не качаем\n(1)" },
    { key: TalentKeys.ElementalSkill, priority: "Во вторую очередь\n(10)" },
    { key: TalentKeys.ElementalBurst, priority: "В первую очередь\n(10)" },
  ],
  video_sources: [
    {
      title: "Miron MinMax: Подробный и Актуальный | Гайд на Мавуику",
      vk_url: "https://vkvideo.ru/video-227044935_456239238",
      youtube_url: "https://youtu.be/bGkCi_aBNrI",
    },
  ],
  weapons: {
    "Вейп\\Мелт": [
      { key: WeaponKeys.AThousandBlazingSuns, refinement: 1, percent: 1.3504 },
      { key: WeaponKeys.SerpentSpine, refinement: 5, percent: 1.1990 },
      { key: WeaponKeys.BeaconOfTheReedSea, refinement: 1, percent: 1.1761 },
      { key: WeaponKeys.RedhornStonethresher, refinement: 1, percent: 1.1582 },
      { key: WeaponKeys.Verdict, refinement: 1, percent: 1.1546 },
      { key: WeaponKeys.SerpentSpine, refinement: 1, percent: 1.1255 },
      { key: WeaponKeys.WolfsGravestone, refinement: 1, percent: 1.0832 },
      { key: WeaponKeys.TheUnforged, refinement: 1, percent: 1.0785 },
      { key: WeaponKeys.FangOfTheMountainKing, refinement: 1, percent: 1.0487 },
      { key: WeaponKeys.SongOfBrokenPines, refinement: 1, percent: 1.0404 },
      { key: WeaponKeys.MakhairaAquamarine, refinement: 5, percent: 1.0012 },
      { key: WeaponKeys.MailedFlower, refinement: 5, percent: 1.0000 },
      { key: WeaponKeys.Akuoumaru, refinement: 5, percent: 0.9980 },
      { key: WeaponKeys.UltimateOverlordsMegaMagicSword, refinement: 5, percent: 0.9970 },
      { key: WeaponKeys.TalkingStick, refinement: 5, percent: 0.9928 },
      { key: WeaponKeys.BlackcliffSlasher, refinement: 5, percent: 0.9881 },
      { key: WeaponKeys.SkywardPride, refinement: 1, percent: 0.9833 },
      { key: WeaponKeys.LuxuriousSeaLord, refinement: 5, percent: 0.9780 },
      { key: WeaponKeys.PrototypeArchaic, refinement: 5, percent: 0.9621 },
      { key: WeaponKeys.TidalShadow, refinement: 5, percent: 0.9413 },
    ],
    "Гиперкерри\\Перегрузка": [
      { key: WeaponKeys.AThousandBlazingSuns, refinement: 1, percent: 1.3218 },
      { key: WeaponKeys.SerpentSpine, refinement: 5, percent: 1.1805 },
      { key: WeaponKeys.BeaconOfTheReedSea, refinement: 1, percent: 1.1546 },
      { key: WeaponKeys.RedhornStonethresher, refinement: 1, percent: 1.1541 },
      { key: WeaponKeys.Verdict, refinement: 1, percent: 1.1437 },
      { key: WeaponKeys.SerpentSpine, refinement: 1, percent: 1.1083 },
      { key: WeaponKeys.FangOfTheMountainKing, refinement: 1, percent: 1.0624 },
      { key: WeaponKeys.SongOfBrokenPines, refinement: 1, percent: 1.0426 },
      { key: WeaponKeys.WolfsGravestone, refinement: 1, percent: 1.0418 },
      { key: WeaponKeys.SkywardPride, refinement: 1, percent: 1.0088 },
      { key: WeaponKeys.TidalShadow, refinement: 5, percent: 1.0000 },
      { key: WeaponKeys.BlackcliffSlasher, refinement: 5, percent: 0.9997 },
      { key: WeaponKeys.TalkingStick, refinement: 5, percent: 0.9879 },
      { key: WeaponKeys.UltimateOverlordsMegaMagicSword, refinement: 5, percent: 0.9642 },
      { key: WeaponKeys.PrototypeArchaic, refinement: 5, percent: 0.9508 },
      { key: WeaponKeys.LuxuriousSeaLord, refinement: 5, percent: 0.9195 },
    ],
  },
} as ICharacterRecommendations;
