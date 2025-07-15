import characters from "../characters";
import { ArtifactPieceUidEnum } from "../enums/artifact-piece.ts";
import { ArtifactSetUidEnum } from "../enums/artifact-set.ts";
import { AttributeUidEnum } from "../enums/attribute.ts";
import { CharacterRoleUidEnum } from "../enums/character-role.ts";
import { CharacterUidEnum } from "../enums/character.ts";
import { TalentUidEnum } from "../enums/talent.ts";
import { WeaponUidEnum } from "../enums/weapon.ts";
import type { CharacterRecommendations } from "../types/character-recommendations";

type GameVariantUid = typeof GameVariantEnum[keyof typeof GameVariantEnum];

const GameVariantEnum = { DPS: CharacterRoleUidEnum.DPS, Support: CharacterRoleUidEnum.Support } as const;

const gameVariants: Record<GameVariantUid, string> = {
  [GameVariantEnum.DPS]: "Основной урон",
  [GameVariantEnum.Support]: "Поддержка",
};

export default {
  artifacts: {
    sets: [
      {
        uid: ArtifactSetUidEnum.ObsidianCodex,
        is_better: true,
        notes: [
          "Лучший комплект для Мавуики, поскольку увеличивает её урон и повышает шанс крит. попадания в сумме до 40%, позволяя сосредоточиться на крит. уроне в артефактах.",
          "Так как Мавуика обладает Благословением Ночного духа, она полностью реализует условия комплекта.",
        ],
      },
      {
        uid: ArtifactSetUidEnum.ScrollOfTheHeroOfCinderCity,
        notes: [
          "Бонус 2 предметов является неважным для Мавуики, но бонус 4 предметов значительно повысит бонус элементального урона всему отряду.",
          "Стоит учитывать, что лучше всего комплект работает в команде с персонажами из Натлана.",
        ],
      },
    ],
    attributes: {
      [ArtifactPieceUidEnum.SandsOfEon]: [
        {
          uid: AttributeUidEnum.AttackPercent,
          notes: [
            "Гиперкерри\\Перегрузка - Всегда",
            `Вейп\\Мелт - Лучше, если в отряде есть инструктор и отсутствует ${characters[CharacterUidEnum.Bennett].name} или ${characters[CharacterUidEnum.Iansan].name}`,
            `${gameVariants[GameVariantEnum.Support]} - Всегда`,
          ],
        },
        {
          uid: AttributeUidEnum.ElementalMastery,
          notes: [
            `Вейп\\Мелт - Всегда, если есть в команде ${characters[CharacterUidEnum.Bennett].name} или ${characters[CharacterUidEnum.Iansan].name} и мало МС в доп. статах`,
          ],
        },
      ],
      [ArtifactPieceUidEnum.GobletOfEonothem]: [{ uid: AttributeUidEnum.PyroDamageBonus, notes: ["Всегда"] }],
      [ArtifactPieceUidEnum.CircletOfLogos]: [{ uid: AttributeUidEnum.CritRate }, { uid: AttributeUidEnum.CritDmg }],
      additional: [
        { uid: AttributeUidEnum.AttackPercent },
        { uid: AttributeUidEnum.CritRate },
        { uid: AttributeUidEnum.CritDmg },
        { uid: AttributeUidEnum.ElementalMastery, notes: ["Если играем в Вейпе\\Мелте"] },
      ],
    },
  },
  character_uid: CharacterUidEnum.Mavuika,
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
    [`${gameVariants[GameVariantEnum.DPS]}: База`]: "Взрыв стихии (Q) > 7 секунд заряженные атаки (на взрыве стихий останется 9 секунд перезарядки)",
    [`${gameVariants[GameVariantEnum.DPS]}: H1C`]: "Взрыв стихии (Q) > 6 раз (1 тик заряженной атаки > рывок), на последний раз делается не рывок, а просто отпускается заряженная атака",
    [`${gameVariants[GameVariantEnum.DPS]}: Мелт (1 уровень)`]: "Взрыв стихии (Q) [Мелт] > ждем > Заряженная атака (1 [Мелт], 2, 3, 4 [Мелт], 5, 6, 7, 8 тиков) > финальный удар",
    [`${gameVariants[GameVariantEnum.DPS]}: Мелт (2 уровень)`]: "Взрыв стихии (Q) [Мелт] > ждем > Заряженная атака (1 [Мелт], 2, 3, 4 [Мелт] тика) > прыжок > Заряженная атака (1 [Мелт], 2, 3, (взрыв стихии закончился) 4 [Мелт] тика)",
    [`${gameVariants[GameVariantEnum.DPS]}: Мелт (3 уровень)`]: "Взрыв стихии (Q) [Мелт] > ждем > Заряженная атака (1 [Мелт], 2, 3, 4 [Мелт] тика) > прыжок > Заряженная атака (1 [Мелт], 2, 3, 4 [Мелт] тика) (взрыв стихии закончился)",
    [`${gameVariants[GameVariantEnum.DPS]}: Мелт (4 уровень)`]: "Взрыв стихии (Q) [Мелт] > ждем > Заряженная атака (1 [Мелт], 2, 3 тика, финальный удар [Мелт]) > рывок > Заряженная атака (1, 2 [Мелт], 3 тика, финальный удар [Мелт])",
    [gameVariants[GameVariantEnum.Support]]: "Взрыв стихии (Q)",
  },
  squads: {
    general_template: [],
    best_teammates: {
      [`В целом (${gameVariants[GameVariantEnum.DPS]})`]: [
        { type: "character", uid: CharacterUidEnum.Xilonen },
        { type: "character", uid: CharacterUidEnum.Bennett },
        { type: "character", uid: CharacterUidEnum.Iansan },
      ],
      [`В мелте (${gameVariants[GameVariantEnum.DPS]})`]: [
        { type: "character", uid: CharacterUidEnum.Citlali },
        { type: "character", uid: CharacterUidEnum.Escoffier },
        { type: "character", uid: CharacterUidEnum.Rosaria },
      ],
      [`В вейпе (${gameVariants[GameVariantEnum.DPS]})`]: [
        { type: "character", uid: CharacterUidEnum.Furina },
        { type: "character", uid: CharacterUidEnum.Yelan },
      ],
      [`В перегрузе (${gameVariants[GameVariantEnum.DPS]})`]: [
        { type: "character", uid: CharacterUidEnum.Chevreuse },
        { type: "character", uid: CharacterUidEnum.Ororon },
      ],
    },
  },
  talent_leveling: [
    { uid: TalentUidEnum.NormalAttack, priority: "Не качаем\n(1)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "Во вторую очередь\n(10)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "В первую очередь\n(10)" },
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
      { uid: WeaponUidEnum.AThousandBlazingSuns, refinement: 1, percent: 1.3504 },
      { uid: WeaponUidEnum.SerpentSpine, refinement: 5, percent: 1.1990 },
      { uid: WeaponUidEnum.BeaconOfTheReedSea, refinement: 1, percent: 1.1761 },
      { uid: WeaponUidEnum.RedhornStonethresher, refinement: 1, percent: 1.1582 },
      { uid: WeaponUidEnum.Verdict, refinement: 1, percent: 1.1546 },
      { uid: WeaponUidEnum.SerpentSpine, refinement: 1, percent: 1.1255 },
      { uid: WeaponUidEnum.WolfsGravestone, refinement: 1, percent: 1.0832 },
      { uid: WeaponUidEnum.TheUnforged, refinement: 1, percent: 1.0785 },
      { uid: WeaponUidEnum.FangOfTheMountainKing, refinement: 1, percent: 1.0487 },
      { uid: WeaponUidEnum.SongOfBrokenPines, refinement: 1, percent: 1.0404 },
      { uid: WeaponUidEnum.MakhairaAquamarine, refinement: 5, percent: 1.0012 },
      { uid: WeaponUidEnum.MailedFlower, refinement: 5, percent: 1.0000 },
      { uid: WeaponUidEnum.Akuoumaru, refinement: 5, percent: 0.9980 },
      { uid: WeaponUidEnum.UltimateOverlordsMegaMagicSword, refinement: 5, percent: 0.9970 },
      { uid: WeaponUidEnum.TalkingStick, refinement: 5, percent: 0.9928 },
      { uid: WeaponUidEnum.BlackcliffSlasher, refinement: 5, percent: 0.9881 },
      { uid: WeaponUidEnum.SkywardPride, refinement: 1, percent: 0.9833 },
      { uid: WeaponUidEnum.LuxuriousSeaLord, refinement: 5, percent: 0.9780 },
      { uid: WeaponUidEnum.PrototypeArchaic, refinement: 5, percent: 0.9621 },
      { uid: WeaponUidEnum.TidalShadow, refinement: 5, percent: 0.9413 },
    ],
    "Гиперкерри\\Перегрузка": [
      { uid: WeaponUidEnum.AThousandBlazingSuns, refinement: 1, percent: 1.3218 },
      { uid: WeaponUidEnum.SerpentSpine, refinement: 5, percent: 1.1805 },
      { uid: WeaponUidEnum.BeaconOfTheReedSea, refinement: 1, percent: 1.1546 },
      { uid: WeaponUidEnum.RedhornStonethresher, refinement: 1, percent: 1.1541 },
      { uid: WeaponUidEnum.Verdict, refinement: 1, percent: 1.1437 },
      { uid: WeaponUidEnum.SerpentSpine, refinement: 1, percent: 1.1083 },
      { uid: WeaponUidEnum.FangOfTheMountainKing, refinement: 1, percent: 1.0624 },
      { uid: WeaponUidEnum.SongOfBrokenPines, refinement: 1, percent: 1.0426 },
      { uid: WeaponUidEnum.WolfsGravestone, refinement: 1, percent: 1.0418 },
      { uid: WeaponUidEnum.SkywardPride, refinement: 1, percent: 1.0088 },
      { uid: WeaponUidEnum.TidalShadow, refinement: 5, percent: 1.0000 },
      { uid: WeaponUidEnum.BlackcliffSlasher, refinement: 5, percent: 0.9997 },
      { uid: WeaponUidEnum.TalkingStick, refinement: 5, percent: 0.9879 },
      { uid: WeaponUidEnum.UltimateOverlordsMegaMagicSword, refinement: 5, percent: 0.9642 },
      { uid: WeaponUidEnum.PrototypeArchaic, refinement: 5, percent: 0.9508 },
      { uid: WeaponUidEnum.LuxuriousSeaLord, refinement: 5, percent: 0.9195 },
    ],
  },
} as CharacterRecommendations;
