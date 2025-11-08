import { ARTIFACT_SETS } from "@/features/artifact-sets";
import { ARTIFACT_SLOTS } from "@/features/artifact-slots";
import { CHARACTER_ROLES } from "@/constants/character-roles";
import {
  CharacterArtifactRecommendations,
  CharacterArtifactSetRecommendationWithId,
  CharacterArtifactStatRecommendation,
  CharacterRecommendations,
  CharacterSquadCharacterRecommendation,
  CharacterSquadRecommendations,
  CharacterTalentLevelingRecommendation,
  CharacterWeaponRecommendation,
} from "@/classes/character-recommendations";
import { CharacterIds } from "@/enums/character";
import { elementalReactionById } from "@/features/elemental-reactions/help";
import { ElementalReactionIds } from "@/enums/elemental-reaction";
import { STATS } from "@/constants/stats";
import { TalentIds } from "@/enums/talent";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";
import characters from "../characters";

type GameVariantkey = typeof GameVariantEnum[keyof typeof GameVariantEnum];

const GameVariantEnum = { Dps: CHARACTER_ROLES.DPS, Support: CHARACTER_ROLES.SUPPORT } as const;

const gameVariants: Record<GameVariantkey, string> = {
  [GameVariantEnum.Dps]: "Основной урон",
  [GameVariantEnum.Support]: "Поддержка",
};

export default new CharacterRecommendations(CharacterIds.Mavuika)
  .setArtifacts(CharacterArtifactRecommendations.init([
    [
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.OBSIDIAN_CODEX).setIsBetter().setNotes([
        "Лучший комплект для Мавуики, поскольку увеличивает её урон и повышает шанс крит. попадания в сумме до 40%, позволяя сосредоточиться на крит. уроне в артефактах.",
        "Так как Мавуика обладает Благословением Ночного духа, она полностью реализует условия комплекта.",
      ]),
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.SCROLL_OF_THE_HERO_OF_CINDER_CITY).setNotes([
        "Бонус 2 предметов является неважным для Мавуики, но бонус 4 предметов значительно повысит бонус элементального урона всему отряду.",
        "Стоит учитывать, что лучше всего комплект работает в команде с персонажами из Натлана.",
      ]),
    ],
    {
      [ARTIFACT_SLOTS.SANDS]: [
        new CharacterArtifactStatRecommendation(STATS.ATK_PERCENTAGE).setNotes([
          `Гиперкерри | ${elementalReactionById(ElementalReactionIds.Overloaded)} - Всегда`,
          `${elementalReactionById(ElementalReactionIds.Vaporize)} | ${elementalReactionById(ElementalReactionIds.Melt)} - Лучше, если в отряде есть инструктор и отсутствует ${characters[CharacterIds.Bennett].name} или ${characters[CharacterIds.Iansan].name}`,
          `${gameVariants[GameVariantEnum.Support]} - Всегда`,
        ]),
        new CharacterArtifactStatRecommendation(STATS.ELEMENTAL_MASTERY).setNotes([
          `${elementalReactionById(ElementalReactionIds.Vaporize)} | ${elementalReactionById(ElementalReactionIds.Melt)} - Всегда, если есть в команде ${characters[CharacterIds.Bennett].name} или ${characters[CharacterIds.Iansan].name} и мало МС в доп. статах`,
        ]),
      ],
      [ARTIFACT_SLOTS.GOBLET]: [
        new CharacterArtifactStatRecommendation(STATS.PYRO_DMG_BONUS).setNotes(["Всегда"]),
      ],
      [ARTIFACT_SLOTS.CIRCLET]: [
        new CharacterArtifactStatRecommendation(STATS.CRIT_RATE),
        new CharacterArtifactStatRecommendation(STATS.CRIT_DMG),
      ],
      additional: [
        new CharacterArtifactStatRecommendation(STATS.ATK_PERCENTAGE),
        new CharacterArtifactStatRecommendation(STATS.CRIT_RATE),
        new CharacterArtifactStatRecommendation(STATS.CRIT_DMG),
        new CharacterArtifactStatRecommendation(STATS.ELEMENTAL_MASTERY).setNotes([`Если играем в ${elementalReactionById(ElementalReactionIds.Vaporize)} | ${elementalReactionById(ElementalReactionIds.Melt)}`]),
      ],
    },
  ]))
  .setFirstConstellationOrSignatureWeapon("C1 < Сигна < C2")
  .setKeyConstellations([2, 4])
  .setReferencePoint({
    [`Гиперкерри | ${elementalReactionById(ElementalReactionIds.Overloaded)}`]: [
      ["Макс. HP", "19 085"],
      ["Сила атаки", "2 179"],
      ["Защита", "929"],
      ["МС", "40"],
      ["Крит. шанс", "59.0%"],
      ["Крит. урон", "216.8%"],
      ["Восст. энергии", "111.0%"],
    ],
    [`${elementalReactionById(ElementalReactionIds.Vaporize)} | ${elementalReactionById(ElementalReactionIds.Melt)}`]: [
      ["Макс. HP", "19 085"],
      ["Сила атаки", "1 526"],
      ["Защита", "929"],
      ["МС", "346"],
      ["Крит. шанс", "59.0%"],
      ["Крит. урон", "216.8%"],
      ["Восст. энергии", "111.0%"],
    ],
  })
  .setRotation({
    [`${gameVariants[GameVariantEnum.Dps]}: База`]: "Взрыв стихии (Q) > 7 секунд заряженные атаки (на взрыве стихий останется 9 секунд перезарядки)",
    [`${gameVariants[GameVariantEnum.Dps]}: H1C`]: "Взрыв стихии (Q) > 6 раз (1 тик заряженной атаки > рывок), на последний раз делается не рывок, а просто отпускается заряженная атака",
    [`${gameVariants[GameVariantEnum.Dps]}: ${elementalReactionById(ElementalReactionIds.Melt)} (1 уровень)`]: `Взрыв стихии (Q) [${elementalReactionById(ElementalReactionIds.Melt)}] > ждем > Заряженная атака (1 [${elementalReactionById(ElementalReactionIds.Melt)}], 2, 3, 4 [${elementalReactionById(ElementalReactionIds.Melt)}], 5, 6, 7, 8 тиков) > финальный удар`,
    [`${gameVariants[GameVariantEnum.Dps]}: ${elementalReactionById(ElementalReactionIds.Melt)} (2 уровень)`]: `Взрыв стихии (Q) [${elementalReactionById(ElementalReactionIds.Melt)}] > ждем > Заряженная атака (1 [${elementalReactionById(ElementalReactionIds.Melt)}], 2, 3, 4 [${elementalReactionById(ElementalReactionIds.Melt)}] тика) > прыжок > Заряженная атака (1 [${elementalReactionById(ElementalReactionIds.Melt)}], 2, 3, (взрыв стихии закончился) 4 [${elementalReactionById(ElementalReactionIds.Melt)}] тика)`,
    [`${gameVariants[GameVariantEnum.Dps]}: ${elementalReactionById(ElementalReactionIds.Melt)} (3 уровень)`]: `Взрыв стихии (Q) [${elementalReactionById(ElementalReactionIds.Melt)}] > ждем > Заряженная атака (1 [${elementalReactionById(ElementalReactionIds.Melt)}], 2, 3, 4 [${elementalReactionById(ElementalReactionIds.Melt)}] тика) > прыжок > Заряженная атака (1 [${elementalReactionById(ElementalReactionIds.Melt)}], 2, 3, 4 [${elementalReactionById(ElementalReactionIds.Melt)}] тика) (взрыв стихии закончился)`,
    [`${gameVariants[GameVariantEnum.Dps]}: ${elementalReactionById(ElementalReactionIds.Melt)} (4 уровень)`]: `Взрыв стихии (Q) [${elementalReactionById(ElementalReactionIds.Melt)}] > ждем > Заряженная атака (1 [${elementalReactionById(ElementalReactionIds.Melt)}], 2, 3 тика, финальный удар [${elementalReactionById(ElementalReactionIds.Melt)}]) > рывок > Заряженная атака (1, 2 [${elementalReactionById(ElementalReactionIds.Melt)}], 3 тика, финальный удар [${elementalReactionById(ElementalReactionIds.Melt)}])`,
    [gameVariants[GameVariantEnum.Support]]: "Взрыв стихии (Q)",
  })
  .setSquads(CharacterSquadRecommendations.init([
    [],
    {
      [`В целом (${gameVariants[GameVariantEnum.Dps]})`]: [
        new CharacterSquadCharacterRecommendation(CharacterIds.Xilonen),
        new CharacterSquadCharacterRecommendation(CharacterIds.Bennett),
        new CharacterSquadCharacterRecommendation(CharacterIds.Iansan),
      ],
      [`${elementalReactionById(ElementalReactionIds.Melt)} (${gameVariants[GameVariantEnum.Dps]})`]: [
        new CharacterSquadCharacterRecommendation(CharacterIds.Citlali),
        new CharacterSquadCharacterRecommendation(CharacterIds.Escoffier),
        new CharacterSquadCharacterRecommendation(CharacterIds.Rosaria),
      ],
      [`${elementalReactionById(ElementalReactionIds.Vaporize)} (${gameVariants[GameVariantEnum.Dps]})`]: [
        new CharacterSquadCharacterRecommendation(CharacterIds.Furina),
        new CharacterSquadCharacterRecommendation(CharacterIds.Yelan),
      ],
      [`${elementalReactionById(ElementalReactionIds.Overloaded)} (${gameVariants[GameVariantEnum.Dps]})`]: [
        new CharacterSquadCharacterRecommendation(CharacterIds.Chevreuse),
        new CharacterSquadCharacterRecommendation(CharacterIds.Ororon),
      ],
    },
  ]))
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "Во вторую очередь\n(10)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "В первую очередь\n(10)"]),
  ])
  .setVideoSourceIds([VideoSourceIds.FirstConstellationOrSignatureWeapon, VideoSourceIds.GuideToMavuika])
  .setWeapons({
    [`${elementalReactionById(ElementalReactionIds.Vaporize)} | ${elementalReactionById(ElementalReactionIds.Melt)}`]: [
      new CharacterWeaponRecommendation(WeaponIds.AThousandBlazingSuns).setIsBetter("Лучшее оружие").setPercent(1.3504).setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.SerpentSpine).setPercent(1.1990).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.BeaconOfTheReedSea).setPercent(1.1761).setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.RedhornStonethresher).setPercent(1.1582).setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.Verdict).setPercent(1.1546).setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.SerpentSpine).setPercent(1.1255).setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.WolfsGravestone).setPercent(1.0832).setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.TheUnforged).setPercent(1.0785).setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.FangOfTheMountainKing).setPercent(1.0487).setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.SongOfBrokenPines).setPercent(1.0404).setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.MakhairaAquamarine).setPercent(1.0012).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.MailedFlower).setIsBetter("Лучшее эвентовое оружие").setPercent(1.0000).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.Akuoumaru).setPercent(0.9980).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.UltimateOverlordsMegaMagicSword).setPercent(0.9970).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.TalkingStick).setPercent(0.9928).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.BlackcliffSlasher).setIsBetter("Лучшее доступное оружие").setPercent(0.9881).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.SkywardPride).setPercent(0.9833).setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.LuxuriousSeaLord).setPercent(0.9780).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.PrototypeArchaic).setPercent(0.9621).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.TidalShadow).setPercent(0.9413).setRefinement(5),
    ],
    [`Гиперкерри | ${elementalReactionById(ElementalReactionIds.Overloaded)}`]: [
      new CharacterWeaponRecommendation(WeaponIds.AThousandBlazingSuns).setIsBetter("Лучшее оружие").setPercent(1.3218).setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.SerpentSpine).setPercent(1.1805).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.BeaconOfTheReedSea).setPercent(1.1546).setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.RedhornStonethresher).setPercent(1.1541).setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.Verdict).setPercent(1.1437).setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.SerpentSpine).setPercent(1.1083).setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.FangOfTheMountainKing).setPercent(1.0624).setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.SongOfBrokenPines).setPercent(1.0426).setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.WolfsGravestone).setPercent(1.0418).setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.SkywardPride).setPercent(1.0088).setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.TidalShadow).setIsBetter("Лучшее доступное оружие").setPercent(1.0000).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.BlackcliffSlasher).setPercent(0.9997).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.TalkingStick).setPercent(0.9879).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.UltimateOverlordsMegaMagicSword).setPercent(0.9642).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.PrototypeArchaic).setPercent(0.9508).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.LuxuriousSeaLord).setPercent(0.9195).setRefinement(5),
    ],
  });
