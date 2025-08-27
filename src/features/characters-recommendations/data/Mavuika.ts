import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSlotIds } from "../../artifact-slots/enums";
import { CVideoSource } from "@/database/video-sources/classes";
import {
  CharacterArtifactRecommendationsClass,
  CharacterArtifactSetRecommendationWithIdClass,
  CharacterArtifactStatRecommendationClass,
  CharacterRecommendationsClass,
  CharacterSquadCharacterRecommendationClass,
  CharacterSquadRecommendationsClass,
  CharacterTalentLevelingRecommendationClass,
  CharacterWeaponRecommendationClass,
} from "../classes";
import { CharacterIds } from "../../characters/enums";
import { CharacterRoleIds } from "@/features/character-roles/enums";
import { StatIds } from "../../stats/enums";
import { TalentKeys } from "@/database/talents/enums";
import { WeaponKeys } from "@/database/weapons/enums";
import characters from "../../characters/data";

type GameVariantkey = typeof GameVariantEnum[keyof typeof GameVariantEnum];

const GameVariantEnum = { Dps: CharacterRoleIds.Dps, Support: CharacterRoleIds.Support } as const;

const gameVariants: Record<GameVariantkey, string> = {
  [GameVariantEnum.Dps]: "Основной урон",
  [GameVariantEnum.Support]: "Поддержка",
};

export default new CharacterRecommendationsClass(CharacterIds.Mavuika)
  .setArtifacts(CharacterArtifactRecommendationsClass.init([
    [
      new CharacterArtifactSetRecommendationWithIdClass(ArtifactSetIds.ObsidianCodex).setIsBetter().setNotes([
        "Лучший комплект для Мавуики, поскольку увеличивает её урон и повышает шанс крит. попадания в сумме до 40%, позволяя сосредоточиться на крит. уроне в артефактах.",
        "Так как Мавуика обладает Благословением Ночного духа, она полностью реализует условия комплекта.",
      ]),
      new CharacterArtifactSetRecommendationWithIdClass(ArtifactSetIds.ScrollOfTheHeroOfCinderCity).setNotes([
        "Бонус 2 предметов является неважным для Мавуики, но бонус 4 предметов значительно повысит бонус элементального урона всему отряду.",
        "Стоит учитывать, что лучше всего комплект работает в команде с персонажами из Натлана.",
      ]),
    ],
    {
      [ArtifactSlotIds.Sands]: [
        new CharacterArtifactStatRecommendationClass(StatIds.AtkPercentage).setNotes([
          "Гиперкерри\\Перегрузка - Всегда",
          `Вейп\\Мелт - Лучше, если в отряде есть инструктор и отсутствует ${characters[CharacterIds.Bennett].name} или ${characters[CharacterIds.Iansan].name}`,
          `${gameVariants[GameVariantEnum.Support]} - Всегда`,
        ]),
        new CharacterArtifactStatRecommendationClass(StatIds.ElementalMastery).setNotes([
          `Вейп\\Мелт - Всегда, если есть в команде ${characters[CharacterIds.Bennett].name} или ${characters[CharacterIds.Iansan].name} и мало МС в доп. статах`,
        ]),
      ],
      [ArtifactSlotIds.Goblet]: [
        new CharacterArtifactStatRecommendationClass(StatIds.PyroDmgBonus).setNotes(["Всегда"]),
      ],
      [ArtifactSlotIds.Circlet]: [
        new CharacterArtifactStatRecommendationClass(StatIds.CritRate),
        new CharacterArtifactStatRecommendationClass(StatIds.CritDMG),
      ],
      additional: [
        new CharacterArtifactStatRecommendationClass(StatIds.AtkPercentage),
        new CharacterArtifactStatRecommendationClass(StatIds.CritRate),
        new CharacterArtifactStatRecommendationClass(StatIds.CritDMG),
        new CharacterArtifactStatRecommendationClass(StatIds.ElementalMastery).setNotes(["Если играем в Вейпе\\Мелте"]),
      ],
    },
  ]))
  .setFirstConstellationOrSignatureWeapon("C1 < Сигна < C2")
  .setKeyConstellations([2, 4])
  .setReferencePoint({
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
  })
  .setRotation({
    [`${gameVariants[GameVariantEnum.Dps]}: База`]: "Взрыв стихии (Q) > 7 секунд заряженные атаки (на взрыве стихий останется 9 секунд перезарядки)",
    [`${gameVariants[GameVariantEnum.Dps]}: H1C`]: "Взрыв стихии (Q) > 6 раз (1 тик заряженной атаки > рывок), на последний раз делается не рывок, а просто отпускается заряженная атака",
    [`${gameVariants[GameVariantEnum.Dps]}: Мелт (1 уровень)`]: "Взрыв стихии (Q) [Мелт] > ждем > Заряженная атака (1 [Мелт], 2, 3, 4 [Мелт], 5, 6, 7, 8 тиков) > финальный удар",
    [`${gameVariants[GameVariantEnum.Dps]}: Мелт (2 уровень)`]: "Взрыв стихии (Q) [Мелт] > ждем > Заряженная атака (1 [Мелт], 2, 3, 4 [Мелт] тика) > прыжок > Заряженная атака (1 [Мелт], 2, 3, (взрыв стихии закончился) 4 [Мелт] тика)",
    [`${gameVariants[GameVariantEnum.Dps]}: Мелт (3 уровень)`]: "Взрыв стихии (Q) [Мелт] > ждем > Заряженная атака (1 [Мелт], 2, 3, 4 [Мелт] тика) > прыжок > Заряженная атака (1 [Мелт], 2, 3, 4 [Мелт] тика) (взрыв стихии закончился)",
    [`${gameVariants[GameVariantEnum.Dps]}: Мелт (4 уровень)`]: "Взрыв стихии (Q) [Мелт] > ждем > Заряженная атака (1 [Мелт], 2, 3 тика, финальный удар [Мелт]) > рывок > Заряженная атака (1, 2 [Мелт], 3 тика, финальный удар [Мелт])",
    [gameVariants[GameVariantEnum.Support]]: "Взрыв стихии (Q)",
  })
  .setSquads(CharacterSquadRecommendationsClass.init([
    [],
    {
      [`В целом (${gameVariants[GameVariantEnum.Dps]})`]: [
        new CharacterSquadCharacterRecommendationClass(CharacterIds.Xilonen),
        new CharacterSquadCharacterRecommendationClass(CharacterIds.Bennett),
        new CharacterSquadCharacterRecommendationClass(CharacterIds.Iansan),
      ],
      [`В мелте (${gameVariants[GameVariantEnum.Dps]})`]: [
        new CharacterSquadCharacterRecommendationClass(CharacterIds.Citlali),
        new CharacterSquadCharacterRecommendationClass(CharacterIds.Escoffier),
        new CharacterSquadCharacterRecommendationClass(CharacterIds.Rosaria),
      ],
      [`В вейпе (${gameVariants[GameVariantEnum.Dps]})`]: [
        new CharacterSquadCharacterRecommendationClass(CharacterIds.Furina),
        new CharacterSquadCharacterRecommendationClass(CharacterIds.Yelan),
      ],
      [`В перегрузе (${gameVariants[GameVariantEnum.Dps]})`]: [
        new CharacterSquadCharacterRecommendationClass(CharacterIds.Chevreuse),
        new CharacterSquadCharacterRecommendationClass(CharacterIds.Ororon),
      ],
    },
  ]))
  .setTalentLeveling([
    CharacterTalentLevelingRecommendationClass.init([TalentKeys.NormalAttack, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentKeys.ElementalSkill, "Во вторую очередь\n(10)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentKeys.ElementalBurst, "В первую очередь\n(10)"]),
  ])
  .setVideoSources([
    new CVideoSource("Miron MinMax: Подробный и Актуальный | Гайд на Мавуику").setVkUrl("https://vkvideo.ru/video-227044935_456239238").setYoutubeUrl("https://youtu.be/bGkCi_aBNrI"),
  ])
  .setWeapons({
    "Вейп\\Мелт": [
      new CharacterWeaponRecommendationClass(WeaponKeys.AThousandBlazingSuns).setPercent(1.3504).setRefinement(1),
      new CharacterWeaponRecommendationClass(WeaponKeys.SerpentSpine).setPercent(1.1990).setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponKeys.BeaconOfTheReedSea).setPercent(1.1761).setRefinement(1),
      new CharacterWeaponRecommendationClass(WeaponKeys.RedhornStonethresher).setPercent(1.1582).setRefinement(1),
      new CharacterWeaponRecommendationClass(WeaponKeys.Verdict).setPercent(1.1546).setRefinement(1),
      new CharacterWeaponRecommendationClass(WeaponKeys.SerpentSpine).setPercent(1.1255).setRefinement(1),
      new CharacterWeaponRecommendationClass(WeaponKeys.WolfsGravestone).setPercent(1.0832).setRefinement(1),
      new CharacterWeaponRecommendationClass(WeaponKeys.TheUnforged).setPercent(1.0785).setRefinement(1),
      new CharacterWeaponRecommendationClass(WeaponKeys.FangOfTheMountainKing).setPercent(1.0487).setRefinement(1),
      new CharacterWeaponRecommendationClass(WeaponKeys.SongOfBrokenPines).setPercent(1.0404).setRefinement(1),
      new CharacterWeaponRecommendationClass(WeaponKeys.MakhairaAquamarine).setPercent(1.0012).setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponKeys.MailedFlower).setPercent(1.0000).setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponKeys.Akuoumaru).setPercent(0.9980).setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponKeys.UltimateOverlordsMegaMagicSword).setPercent(0.9970).setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponKeys.TalkingStick).setPercent(0.9928).setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponKeys.BlackcliffSlasher).setPercent(0.9881).setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponKeys.SkywardPride).setPercent(0.9833).setRefinement(1),
      new CharacterWeaponRecommendationClass(WeaponKeys.LuxuriousSeaLord).setPercent(0.9780).setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponKeys.PrototypeArchaic).setPercent(0.9621).setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponKeys.TidalShadow).setPercent(0.9413).setRefinement(5),
    ],
    "Гиперкерри\\Перегрузка": [
      new CharacterWeaponRecommendationClass(WeaponKeys.AThousandBlazingSuns).setPercent(1.3218).setRefinement(1),
      new CharacterWeaponRecommendationClass(WeaponKeys.SerpentSpine).setPercent(1.1805).setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponKeys.BeaconOfTheReedSea).setPercent(1.1546).setRefinement(1),
      new CharacterWeaponRecommendationClass(WeaponKeys.RedhornStonethresher).setPercent(1.1541).setRefinement(1),
      new CharacterWeaponRecommendationClass(WeaponKeys.Verdict).setPercent(1.1437).setRefinement(1),
      new CharacterWeaponRecommendationClass(WeaponKeys.SerpentSpine).setPercent(1.1083).setRefinement(1),
      new CharacterWeaponRecommendationClass(WeaponKeys.FangOfTheMountainKing).setPercent(1.0624).setRefinement(1),
      new CharacterWeaponRecommendationClass(WeaponKeys.SongOfBrokenPines).setPercent(1.0426).setRefinement(1),
      new CharacterWeaponRecommendationClass(WeaponKeys.WolfsGravestone).setPercent(1.0418).setRefinement(1),
      new CharacterWeaponRecommendationClass(WeaponKeys.SkywardPride).setPercent(1.0088).setRefinement(1),
      new CharacterWeaponRecommendationClass(WeaponKeys.TidalShadow).setPercent(1.0000).setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponKeys.BlackcliffSlasher).setPercent(0.9997).setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponKeys.TalkingStick).setPercent(0.9879).setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponKeys.UltimateOverlordsMegaMagicSword).setPercent(0.9642).setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponKeys.PrototypeArchaic).setPercent(0.9508).setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponKeys.LuxuriousSeaLord).setPercent(0.9195).setRefinement(5),
    ],
  });
