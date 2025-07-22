import dungeons from "./dungeons";
import { ArtifactPieceUidEnum } from "./enums/artifact-piece";
import { ArtifactSetUidEnum } from "./enums/artifact-set";
import { CharacterUidEnum } from "./enums/character";
import { DungeonUidEnum } from "./enums/dungeon";
import { publicImageSrc } from "@/lib/utils";
import type { ArtifactSet, ArtifactSetUid } from "./types/artifact-set";
import type { DungeonUid } from "./types/dungeon";

const alchemy = "Мистическое подношение (Алхимия)";

const dungeonByUid = (uid: DungeonUid) => `Подземелье «${dungeons[uid].name}»`;

const imageSrc: typeof publicImageSrc = src => publicImageSrc(`artifact-sets/${src}`);

export default {
  [ArtifactSetUidEnum.ArchaicPetra]: {
    uid: ArtifactSetUidEnum.ArchaicPetra,
    name: "Архаичный камень",
    qualities: [4, 5],
    source: [dungeonByUid(DungeonUidEnum.DomainOfGuyun), alchemy],
    item_bonuses: {
      2: "Увеличивает бонус Гео урона на 15%.",
      4: "Подобранный элементальный осколок, образованный реакцией Кристалл, увеличивает бонус элементального урона соответствующего элемента всех членов отряда на 35% в течение 10 сек. Одновременно можно иметь бонус урона только одного элемента.",
    },
    [ArtifactPieceUidEnum.FlowerOfLife]: {
      name: "Цветок скальных трещин",
      image_src: imageSrc(`${ArtifactSetUidEnum.ArchaicPetra}/${ArtifactPieceUidEnum.FlowerOfLife}_icon.webp`),
    },
    [ArtifactPieceUidEnum.PlumeOfDeath]: {
      name: "Перо зубчатых пиков",
      image_src: imageSrc(`${ArtifactSetUidEnum.ArchaicPetra}/${ArtifactPieceUidEnum.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactPieceUidEnum.SandsOfEon]: {
      name: "Часы из прочного нефрита",
      image_src: imageSrc(`${ArtifactSetUidEnum.ArchaicPetra}/${ArtifactPieceUidEnum.SandsOfEon}_icon.webp`),
    },
    [ArtifactPieceUidEnum.GobletOfEonothem]: {
      name: "Кубок из резного камня",
      image_src: imageSrc(`${ArtifactSetUidEnum.ArchaicPetra}/${ArtifactPieceUidEnum.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactPieceUidEnum.CircletOfLogos]: {
      name: "Маска из одинокого базальта",
      image_src: imageSrc(`${ArtifactSetUidEnum.ArchaicPetra}/${ArtifactPieceUidEnum.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetUidEnum.BlizzardStrayer]: {
    uid: ArtifactSetUidEnum.BlizzardStrayer,
    name: "Заблудший в метели",
    qualities: [4, 5],
    source: [dungeonByUid(DungeonUidEnum.PeakOfVindagnyr), alchemy],
    item_bonuses: {
      2: "Увеличивает бонус Крио урона на 15%.",
      4: "Атаки по противникам с эффектом Крио увеличивают шанс крит. попадания на 20%. Если противник имеет статус Заморозка, то дополнительно увеличивает шанс крит. попадания на 20%.",
    },
    [ArtifactPieceUidEnum.FlowerOfLife]: {
      name: "Занесённая снегом память",
      image_src: imageSrc(`${ArtifactSetUidEnum.BlizzardStrayer}/${ArtifactPieceUidEnum.FlowerOfLife}_icon.webp`),
    },
    [ArtifactPieceUidEnum.PlumeOfDeath]: {
      name: "Решимость крушителя льда",
      image_src: imageSrc(`${ArtifactSetUidEnum.BlizzardStrayer}/${ArtifactPieceUidEnum.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactPieceUidEnum.SandsOfEon]: {
      name: "Гибель замёрзшей родины",
      image_src: imageSrc(`${ArtifactSetUidEnum.BlizzardStrayer}/${ArtifactPieceUidEnum.SandsOfEon}_icon.webp`),
    },
    [ArtifactPieceUidEnum.GobletOfEonothem]: {
      name: "Морозная гордость",
      image_src: imageSrc(`${ArtifactSetUidEnum.BlizzardStrayer}/${ArtifactPieceUidEnum.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactPieceUidEnum.CircletOfLogos]: {
      name: "Эхо осколков инея",
      image_src: imageSrc(`${ArtifactSetUidEnum.BlizzardStrayer}/${ArtifactPieceUidEnum.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetUidEnum.BloodstainedChivalry]: {
    uid: ArtifactSetUidEnum.BloodstainedChivalry,
    name: "Рыцарь крови",
    qualities: [4, 5],
    source: [dungeonByUid(DungeonUidEnum.ClearPoolAndMountainCavern), alchemy],
    item_bonuses: {
      2: "Увеличивает физ. урон на 25%.",
      4: "После победы над противником увеличивает урон заряженной атаки на 50% и обнуляет стоимость выносливости заряженной атаки на 10 сек.",
    },
    [ArtifactPieceUidEnum.FlowerOfLife]: {
      name: "Железное сердце рыцаря крови",
      image_src: imageSrc(`${ArtifactSetUidEnum.BloodstainedChivalry}/${ArtifactPieceUidEnum.FlowerOfLife}_icon.webp`),
    },
    [ArtifactPieceUidEnum.PlumeOfDeath]: {
      name: "Перо рыцаря крови",
      image_src: imageSrc(`${ArtifactSetUidEnum.BloodstainedChivalry}/${ArtifactPieceUidEnum.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactPieceUidEnum.SandsOfEon]: {
      name: "Час долга рыцаря крови",
      image_src: imageSrc(`${ArtifactSetUidEnum.BloodstainedChivalry}/${ArtifactPieceUidEnum.SandsOfEon}_icon.webp`),
    },
    [ArtifactPieceUidEnum.GobletOfEonothem]: {
      name: "Кубок рыцаря крови",
      image_src: imageSrc(`${ArtifactSetUidEnum.BloodstainedChivalry}/${ArtifactPieceUidEnum.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactPieceUidEnum.CircletOfLogos]: {
      name: "Железная маска рыцаря крови",
      image_src: imageSrc(`${ArtifactSetUidEnum.BloodstainedChivalry}/${ArtifactPieceUidEnum.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetUidEnum.CrimsonWitchOfFlames]: {
    uid: ArtifactSetUidEnum.CrimsonWitchOfFlames,
    name: "Горящая алая ведьма",
    qualities: [4, 5],
    source: [dungeonByUid(DungeonUidEnum.HiddenPalaceOfZhouFormula), alchemy],
    item_bonuses: {
      2: "Увеличивает бонус Пиро урона на 15%.",
      4: "Увеличивает урон статусов Перегрузка, Горение и Цветение на 40%, а урон статусов Пар и Таяние - на 15%. Использование элементального навыка увеличивает эффекты набора из двух вещей на 50% в течение 10 сек. Может складываться до 3 раз.",
    },
    [ArtifactPieceUidEnum.FlowerOfLife]: {
      name: "Ведьмин огненный цветок",
      image_src: imageSrc(`${ArtifactSetUidEnum.CrimsonWitchOfFlames}/${ArtifactPieceUidEnum.FlowerOfLife}_icon.webp`),
    },
    [ArtifactPieceUidEnum.PlumeOfDeath]: {
      name: "Пылающее ведьмино перо",
      image_src: imageSrc(`${ArtifactSetUidEnum.CrimsonWitchOfFlames}/${ArtifactPieceUidEnum.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactPieceUidEnum.SandsOfEon]: {
      name: "Ведьмин последний час",
      image_src: imageSrc(`${ArtifactSetUidEnum.CrimsonWitchOfFlames}/${ArtifactPieceUidEnum.SandsOfEon}_icon.webp`),
    },
    [ArtifactPieceUidEnum.GobletOfEonothem]: {
      name: "Пламя ведьминого сердца",
      image_src: imageSrc(`${ArtifactSetUidEnum.CrimsonWitchOfFlames}/${ArtifactPieceUidEnum.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactPieceUidEnum.CircletOfLogos]: {
      name: "Тлеющая ведьмина шляпа",
      image_src: imageSrc(`${ArtifactSetUidEnum.CrimsonWitchOfFlames}/${ArtifactPieceUidEnum.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetUidEnum.DeepwoodMemories]: {
    uid: ArtifactSetUidEnum.DeepwoodMemories,
    name: "Воспоминания дремучего леса",
    qualities: [4, 5],
    source: [dungeonByUid(DungeonUidEnum.SpireOfSolitaryEnlightenment), alchemy],
    item_bonuses: {
      2: "Увеличивает бонус Дендро урона на 15%.",
      4: "Попадание элементальным навыком или взрывом стихии снижает Дендро сопротивление врага на 30% на 8 сек. Этот эффект срабатывает, даже если экипированный этими артефактами персонаж не на поле боя.",
    },
    [ArtifactPieceUidEnum.FlowerOfLife]: {
      name: "Странник лабиринта",
      image_src: imageSrc(`${ArtifactSetUidEnum.DeepwoodMemories}/${ArtifactPieceUidEnum.FlowerOfLife}_icon.webp`),
    },
    [ArtifactPieceUidEnum.PlumeOfDeath]: {
      name: "Мудрец лозы",
      image_src: imageSrc(`${ArtifactSetUidEnum.DeepwoodMemories}/${ArtifactPieceUidEnum.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactPieceUidEnum.SandsOfEon]: {
      name: "Час осмысления",
      image_src: imageSrc(`${ArtifactSetUidEnum.DeepwoodMemories}/${ArtifactPieceUidEnum.SandsOfEon}_icon.webp`),
    },
    [ArtifactPieceUidEnum.GobletOfEonothem]: {
      name: "Лампа заблудших",
      image_src: imageSrc(`${ArtifactSetUidEnum.DeepwoodMemories}/${ArtifactPieceUidEnum.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactPieceUidEnum.CircletOfLogos]: {
      name: "Лавровый венец",
      image_src: imageSrc(`${ArtifactSetUidEnum.DeepwoodMemories}/${ArtifactPieceUidEnum.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetUidEnum.DesertPavilionChronicle]: {
    uid: ArtifactSetUidEnum.DesertPavilionChronicle,
    name: "Хроники Чертогов в пустыне",
    qualities: [4, 5],
    source: [dungeonByUid(DungeonUidEnum.CityOfGold), alchemy],
    item_bonuses: {
      2: "Увеличивает бонус Анемо урона на 15%.",
      4: "Попадание заряженной атакой на 15 сек. повышает скорость обычной атаки на 10%, а урон обычной атаки, заряженной атаки и атаки в падении — на 40%.",
    },
    [ArtifactPieceUidEnum.FlowerOfLife]: {
      name: "Рождение города королей",
      image_src: imageSrc(`${ArtifactSetUidEnum.DesertPavilionChronicle}/${ArtifactPieceUidEnum.FlowerOfLife}_icon.webp`),
    },
    [ArtifactPieceUidEnum.PlumeOfDeath]: {
      name: "Конец золотого царства",
      image_src: imageSrc(`${ArtifactSetUidEnum.DesertPavilionChronicle}/${ArtifactPieceUidEnum.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactPieceUidEnum.SandsOfEon]: {
      name: "Часы потерянного пути",
      image_src: imageSrc(`${ArtifactSetUidEnum.DesertPavilionChronicle}/${ArtifactPieceUidEnum.SandsOfEon}_icon.webp`),
    },
    [ArtifactPieceUidEnum.GobletOfEonothem]: {
      name: "Хранитель дивной мечты",
      image_src: imageSrc(`${ArtifactSetUidEnum.DesertPavilionChronicle}/${ArtifactPieceUidEnum.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactPieceUidEnum.CircletOfLogos]: {
      name: "Наследие пустынной знати",
      image_src: imageSrc(`${ArtifactSetUidEnum.DesertPavilionChronicle}/${ArtifactPieceUidEnum.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetUidEnum.EchoesOfAnOffering]: {
    uid: ArtifactSetUidEnum.EchoesOfAnOffering,
    name: "Отголоски подношения",
    qualities: [4, 5],
    source: [dungeonByUid(DungeonUidEnum.TheLostValley), alchemy],
    item_bonuses: {
      2: "Увеличивает силу атаки на 18%.",
      4: "Попадания обычной атакой с 36% шансом активируют Ритуал долины: урон обычной атаки повышается на 70% от силы атаки. Через 0,05 сек. после нанесения урона обычной атакой эффект исчезает. Если обычной атаке не удалось активировать этот эффект, шанс его активации следующим попаданием возрастает на 20%. Шанс активации возникает не чаще одного раза в 0,2 сек.",
    },
    [ArtifactPieceUidEnum.FlowerOfLife]: {
      name: "Цветок призрачного аромата",
      image_src: imageSrc(`${ArtifactSetUidEnum.EchoesOfAnOffering}/${ArtifactPieceUidEnum.FlowerOfLife}_icon.webp`),
    },
    [ArtifactPieceUidEnum.PlumeOfDeath]: {
      name: "Нефритовый листок",
      image_src: imageSrc(`${ArtifactSetUidEnum.EchoesOfAnOffering}/${ArtifactPieceUidEnum.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactPieceUidEnum.SandsOfEon]: {
      name: "Символ подношения",
      image_src: imageSrc(`${ArtifactSetUidEnum.EchoesOfAnOffering}/${ArtifactPieceUidEnum.SandsOfEon}_icon.webp`),
    },
    [ArtifactPieceUidEnum.GobletOfEonothem]: {
      name: "Чаша истока",
      image_src: imageSrc(`${ArtifactSetUidEnum.EchoesOfAnOffering}/${ArtifactPieceUidEnum.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactPieceUidEnum.CircletOfLogos]: {
      name: "Серьги текучести",
      image_src: imageSrc(`${ArtifactSetUidEnum.EchoesOfAnOffering}/${ArtifactPieceUidEnum.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetUidEnum.EmblemOfSeveredFate]: {
    uid: ArtifactSetUidEnum.EmblemOfSeveredFate,
    name: "Эмблема рассечённой судьбы",
    qualities: [4, 5],
    source: [dungeonByUid(DungeonUidEnum.MomijiDyedCourt), alchemy],
    item_bonuses: {
      2: "Увеличивает скорость восстановления энергии на 20%.",
      4: "Увеличивает урон взрыва стихий на величину, равную 25% от значения восстановления энергии. Эффект можно увеличить максимум до 75%.",
    },
    [ArtifactPieceUidEnum.FlowerOfLife]: {
      name: "Великолепная цуба",
      image_src: imageSrc(`${ArtifactSetUidEnum.EmblemOfSeveredFate}/${ArtifactPieceUidEnum.FlowerOfLife}_icon.webp`),
    },
    [ArtifactPieceUidEnum.PlumeOfDeath]: {
      name: "Обрезанное перо",
      image_src: imageSrc(`${ArtifactSetUidEnum.EmblemOfSeveredFate}/${ArtifactPieceUidEnum.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactPieceUidEnum.SandsOfEon]: {
      name: "Клетка грозовых облаков",
      image_src: imageSrc(`${ArtifactSetUidEnum.EmblemOfSeveredFate}/${ArtifactPieceUidEnum.SandsOfEon}_icon.webp`),
    },
    [ArtifactPieceUidEnum.GobletOfEonothem]: {
      name: "Алый сосуд",
      image_src: imageSrc(`${ArtifactSetUidEnum.EmblemOfSeveredFate}/${ArtifactPieceUidEnum.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactPieceUidEnum.CircletOfLogos]: {
      name: "Украшенный кабуто",
      image_src: imageSrc(`${ArtifactSetUidEnum.EmblemOfSeveredFate}/${ArtifactPieceUidEnum.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetUidEnum.FinaleOfTheDeepGalleries]: {
    uid: ArtifactSetUidEnum.FinaleOfTheDeepGalleries,
    name: "Финал галерей глубин",
    qualities: [4, 5],
    source: "Подземелье «Заброшенный причал»",
    item_bonuses: {
      2: "Даёт 15% бонус Крио урона.",
      4: "Когда энергия экипированного персонажа равна 0, урон обычной атаки и взрыва стихии повышается на 60%. После того как экипированный персонаж наносит урон обычной атакой, данный эффект на 6 сек. перестаёт применяться для взрыва стихии. После того как экипированный персонаж наносит урон взрывом стихии, данный эффект на 6 сек. перестаёт применяться для обычной атаки. Этот эффект может возникнуть, даже если экипированный персонаж вне поля боя.",
    },
    [ArtifactPieceUidEnum.FlowerOfLife]: {
      name: "Отголоски песни галерей глубин",
      image_src: imageSrc(`${ArtifactSetUidEnum.FinaleOfTheDeepGalleries}/${ArtifactPieceUidEnum.FlowerOfLife}_icon.webp`),
    },
    [ArtifactPieceUidEnum.PlumeOfDeath]: {
      name: "Дальние странствия галерей глубин",
      image_src: imageSrc(`${ArtifactSetUidEnum.FinaleOfTheDeepGalleries}/${ArtifactPieceUidEnum.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactPieceUidEnum.SandsOfEon]: {
      name: "Часы забвения галерей глубин",
      image_src: imageSrc(`${ArtifactSetUidEnum.FinaleOfTheDeepGalleries}/${ArtifactPieceUidEnum.SandsOfEon}_icon.webp`),
    },
    [ArtifactPieceUidEnum.GobletOfEonothem]: {
      name: "Ниспосланный пир галерей глубин",
      image_src: imageSrc(`${ArtifactSetUidEnum.FinaleOfTheDeepGalleries}/${ArtifactPieceUidEnum.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactPieceUidEnum.CircletOfLogos]: {
      name: "Утраченная корона галерей глубин",
      image_src: imageSrc(`${ArtifactSetUidEnum.FinaleOfTheDeepGalleries}/${ArtifactPieceUidEnum.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetUidEnum.FlowerOfParadiseLost]: {
    uid: ArtifactSetUidEnum.FlowerOfParadiseLost,
    name: "Цветок потерянного рая",
    qualities: [4, 5],
    source: [dungeonByUid(DungeonUidEnum.CityOfGold), alchemy],
    item_bonuses: {
      2: "Увеличивает мастерство стихий на 80 ед.",
      4: "Увеличивает урон реакций Бутонизация, Вегетация и Цветение экипированного этим набором персонажа на 40%. Кроме того, активация реакций Бутонизация, Вегетация и Цветение экипированным этим набором персонажем усилит этот эффект на 25%. Каждое суммирование длится 10 сек. Эффект складывается до 4 раз, может возникнуть раз в 1 сек. и активируется, даже если экипированный этим набором персонаж не активен.",
    },
    [ArtifactPieceUidEnum.FlowerOfLife]: {
      name: "Великолепие Ай-Ханум",
      image_src: imageSrc(`${ArtifactSetUidEnum.FlowerOfParadiseLost}/${ArtifactPieceUidEnum.FlowerOfLife}_icon.webp`),
    },
    [ArtifactPieceUidEnum.PlumeOfDeath]: {
      name: "Угасающий пир",
      image_src: imageSrc(`${ArtifactSetUidEnum.FlowerOfParadiseLost}/${ArtifactPieceUidEnum.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactPieceUidEnum.SandsOfEon]: {
      name: "Застывшее мгновение",
      image_src: imageSrc(`${ArtifactSetUidEnum.FlowerOfParadiseLost}/${ArtifactPieceUidEnum.SandsOfEon}_icon.webp`),
    },
    [ArtifactPieceUidEnum.GobletOfEonothem]: {
      name: "Магический сосуд хранителя тайн",
      image_src: imageSrc(`${ArtifactSetUidEnum.FlowerOfParadiseLost}/${ArtifactPieceUidEnum.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactPieceUidEnum.CircletOfLogos]: {
      name: "Аметистовый венец",
      image_src: imageSrc(`${ArtifactSetUidEnum.FlowerOfParadiseLost}/${ArtifactPieceUidEnum.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetUidEnum.FragmentOfHarmonicWhimsy]: {
    uid: ArtifactSetUidEnum.FragmentOfHarmonicWhimsy,
    name: "Фрагмент гармонической фантазии",
    qualities: [4, 5],
    source: "Подземелье «Обветшалый театр»",
    item_bonuses: {
      2: "Увеличивает силу атаки на 18%.",
      4: "Когда значение Долга жизни увеличивается или уменьшается, наносимый персонажем урон увеличивается на 18% на 6 сек. Эффект может складываться до 3 раз.",
    },
    [ArtifactPieceUidEnum.FlowerOfLife]: {
      name: "Увертюра стройной симфонии",
      image_src: imageSrc(`${ArtifactSetUidEnum.FragmentOfHarmonicWhimsy}/harmonious_symphony_prelude-256x256.png`),
    },
    [ArtifactPieceUidEnum.PlumeOfDeath]: {
      name: "Ночные раздумья древнего моря",
      image_src: imageSrc(`${ArtifactSetUidEnum.FragmentOfHarmonicWhimsy}/ancient_seas_nocturnal_musing-256x256.png`),
    },
    [ArtifactPieceUidEnum.SandsOfEon]: {
      name: "Скерцо поворотов судьбы",
      image_src: imageSrc(`${ArtifactSetUidEnum.FragmentOfHarmonicWhimsy}/the_grand_jape_of_the_turning_of_fate-256x256.png`),
    },
    [ArtifactPieceUidEnum.GobletOfEonothem]: {
      name: "Неистовая рапсодия ихора",
      image_src: imageSrc(`${ArtifactSetUidEnum.FragmentOfHarmonicWhimsy}/ichor_shower_rhapsody-256x256.png`),
    },
    [ArtifactPieceUidEnum.CircletOfLogos]: {
      name: "Вальс увядших фантазий",
      image_src: imageSrc(`${ArtifactSetUidEnum.FragmentOfHarmonicWhimsy}/whimsical_dance_of_the_withered-256x256.png`),
    },
    character_recommendations: [{
      uid: CharacterUidEnum.Arlecchino,
      notes: "Один из лучших комплектов для Арлекино, так как повышает важную силу атаки и увеличивает наносимый урон. Так как Арлекино сама накладывает на себя Долг жизни, она выполняет условие 4 предметов.",
    }],
  },
  [ArtifactSetUidEnum.GildedDreams]: {
    uid: ArtifactSetUidEnum.GildedDreams,
    name: "Позолоченные сны",
    qualities: [4, 5],
    source: [dungeonByUid(DungeonUidEnum.SpireOfSolitaryEnlightenment), alchemy],
    item_bonuses: {
      2: "Увеличивает мастерство стихий на 80 ед.",
      4: "На 8 сек. после вызова элементальной реакции согласно элементам других персонажей в отряде экипированный этими артефактами персонаж получает следующие усиления: сила атаки повышается на 14% за каждого персонажа с таким же элементом, как и у экипированного персонажа; мастерство стихий повышается на 50 ед. за каждого персонажа с иным элементом. Каждое из этих усилений при подсчёте включает до 3 персонажей. Эффект может возникнуть один раз в 8 сек. Срабатывает, даже если экипированный этими артефактами персонаж не на поле боя.",
    },
    [ArtifactPieceUidEnum.FlowerOfLife]: {
      name: "Сон железного цветка",
      image_src: imageSrc(`${ArtifactSetUidEnum.GildedDreams}/${ArtifactPieceUidEnum.FlowerOfLife}_icon.webp`),
    },
    [ArtifactPieceUidEnum.PlumeOfDeath]: {
      name: "Перо суждения",
      image_src: imageSrc(`${ArtifactSetUidEnum.GildedDreams}/${ArtifactPieceUidEnum.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactPieceUidEnum.SandsOfEon]: {
      name: "Золотые годы",
      image_src: imageSrc(`${ArtifactSetUidEnum.GildedDreams}/${ArtifactPieceUidEnum.SandsOfEon}_icon.webp`),
    },
    [ArtifactPieceUidEnum.GobletOfEonothem]: {
      name: "Последний медовый пир",
      image_src: imageSrc(`${ArtifactSetUidEnum.GildedDreams}/${ArtifactPieceUidEnum.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactPieceUidEnum.CircletOfLogos]: {
      name: "Тень Короля песков",
      image_src: imageSrc(`${ArtifactSetUidEnum.GildedDreams}/${ArtifactPieceUidEnum.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetUidEnum.GladiatorsFinale]: {
    uid: ArtifactSetUidEnum.GladiatorsFinale,
    name: "Конец гладиатора",
    qualities: [4, 5],
    source: ["Награды с босса в мире за 40 первородной смолы", "Награды за выполнение заданий во вкладке Опыта (главы 8 и 9)", "Подземелья наказания (еженедельные боссы)", "Мистическое подношение (Алхимия)"],
    item_bonuses: {
      2: "Увеличивает силу атаки на 18%.",
      4: "Увеличивает урон обычной атаки на 35%, если персонаж использует одноручное, двуручное или древковое оружие.",
    },
    [ArtifactPieceUidEnum.FlowerOfLife]: {
      name: "Ностальгия гладиатора",
      image_src: imageSrc(`${ArtifactSetUidEnum.GladiatorsFinale}/${ArtifactPieceUidEnum.FlowerOfLife}_icon.webp`),
    },
    [ArtifactPieceUidEnum.PlumeOfDeath]: {
      name: "Судьба гладиатора",
      image_src: imageSrc(`${ArtifactSetUidEnum.GladiatorsFinale}/${ArtifactPieceUidEnum.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactPieceUidEnum.SandsOfEon]: {
      name: "Стремление гладиатора",
      image_src: imageSrc(`${ArtifactSetUidEnum.GladiatorsFinale}/${ArtifactPieceUidEnum.SandsOfEon}_icon.webp`),
    },
    [ArtifactPieceUidEnum.GobletOfEonothem]: {
      name: "Пьянство гладиатора",
      image_src: imageSrc(`${ArtifactSetUidEnum.GladiatorsFinale}/${ArtifactPieceUidEnum.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactPieceUidEnum.CircletOfLogos]: {
      name: "Триумф гладиатора",
      image_src: imageSrc(`${ArtifactSetUidEnum.GladiatorsFinale}/${ArtifactPieceUidEnum.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetUidEnum.GoldenTroupe]: {
    uid: ArtifactSetUidEnum.GoldenTroupe,
    name: "Золотая труппа",
    qualities: [4, 5],
    source: ["Подземелье «Конец греха»", "Мистическое подношение (Алхимия)"],
    item_bonuses: {
      2: "Увеличивает урон элементального навыка на 20%.",
      4: "Увеличивает урон элементального навыка на 25%. Кроме того, когда персонаж не на поле боя, урон элементального навыка дополнительно увеличивается на 25%. Через 2 сек. после вступления в бой эффект исчезает.",
    },
    [ArtifactPieceUidEnum.FlowerOfLife]: {
      name: "Вариация золотой песни",
      image_src: imageSrc(`${ArtifactSetUidEnum.GoldenTroupe}/golden_songs_variation-256x256.png`),
    },
    [ArtifactPieceUidEnum.PlumeOfDeath]: {
      name: "Перо золотой птицы",
      image_src: imageSrc(`${ArtifactSetUidEnum.GoldenTroupe}/golden_birds_shedding-256x256.png`),
    },
    [ArtifactPieceUidEnum.SandsOfEon]: {
      name: "Предзнаменование золотой эпохи",
      image_src: imageSrc(`${ArtifactSetUidEnum.GoldenTroupe}/golden_eras_prelude-256x256.png`),
    },
    [ArtifactPieceUidEnum.GobletOfEonothem]: {
      name: "Суета золотой ночи",
      image_src: imageSrc(`${ArtifactSetUidEnum.GoldenTroupe}/golden_nights_bustle-256x256.png`),
    },
    [ArtifactPieceUidEnum.CircletOfLogos]: {
      name: "Награда Золотой труппы",
      image_src: imageSrc(`${ArtifactSetUidEnum.GoldenTroupe}/golden_troupes_reward-256x256.png`),
    },
    character_recommendations: [
      {
        uid: CharacterUidEnum.Escoffier,
        notes: "Лучший комплект для Эскофье, так как её элементальный навык является основным талантом, при этом Эскофье наносит урон, не находясь на поле.",
      },
      {
        uid: CharacterUidEnum.Fischl,
        notes: "Лучший комплект для Фишль в роли дополнительного урона, так как её элементальный навык наносит основной урон и действует, даже когда Фишль не находится на поле.",
      },
      {
        uid: CharacterUidEnum.Furina,
        notes: "Лучший комплект для Фурины, так как её элементальный навык является основным талантом, при этом Фурина наносит урон, не находясь на поле.",
      },
    ],
  },
  [ArtifactSetUidEnum.HeartOfDepth]: {
    uid: ArtifactSetUidEnum.HeartOfDepth,
    name: "Сердце глубин",
    qualities: [4, 5],
    source: [dungeonByUid(DungeonUidEnum.PeakOfVindagnyr), alchemy],
    item_bonuses: {
      2: "Увеличивает бонус Гидро урона на 15%.",
      4: "Увеличивает урон обычной и заряженной атаки на 30% в течение 15 сек. после использования элементального навыка.",
    },
    [ArtifactPieceUidEnum.FlowerOfLife]: {
      name: "Позолоченная брошь",
      image_src: imageSrc(`${ArtifactSetUidEnum.HeartOfDepth}/${ArtifactPieceUidEnum.FlowerOfLife}_icon.webp`),
    },
    [ArtifactPieceUidEnum.PlumeOfDeath]: {
      name: "Порыв ностальгии",
      image_src: imageSrc(`${ArtifactSetUidEnum.HeartOfDepth}/${ArtifactPieceUidEnum.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactPieceUidEnum.SandsOfEon]: {
      name: "Медный компас",
      image_src: imageSrc(`${ArtifactSetUidEnum.HeartOfDepth}/${ArtifactPieceUidEnum.SandsOfEon}_icon.webp`),
    },
    [ArtifactPieceUidEnum.GobletOfEonothem]: {
      name: "Кубок оглушающих глубин",
      image_src: imageSrc(`${ArtifactSetUidEnum.HeartOfDepth}/${ArtifactPieceUidEnum.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactPieceUidEnum.CircletOfLogos]: {
      name: "Треуголка в пятнах вина",
      image_src: imageSrc(`${ArtifactSetUidEnum.HeartOfDepth}/${ArtifactPieceUidEnum.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetUidEnum.HuskOfOpulentDreams]: {
    uid: ArtifactSetUidEnum.HuskOfOpulentDreams,
    name: "Кокон сладких грёз",
    qualities: [4, 5],
    source: [dungeonByUid(DungeonUidEnum.SlumberingCourt), alchemy],
    item_bonuses: {
      2: "Увеличивает защиту на 30%.",
      4: "Персонаж, экипированный этим набором артефактов, получает эффект Любопытства в следующих ситуациях: 1 уровень Любопытства даётся активному персонажу после попадания по противнику атакой Гео (не чаще чем раз в 0,3 сек.); когда персонаж находится вне поля боя, он получает 1 ур. Любопытства каждые 3 сек. Любопытство может складываться до 4 ур., каждый ур. прибавляет 6% к защите и 6% к Гео урону. Если персонаж не получает Любопытство в течение 6 сек., то он теряет 1 накопленный уровень Любопытства.",
    },
    [ArtifactPieceUidEnum.FlowerOfLife]: {
      name: "Пора расцвета",
      image_src: imageSrc(`${ArtifactSetUidEnum.HuskOfOpulentDreams}/${ArtifactPieceUidEnum.FlowerOfLife}_icon.webp`),
    },
    [ArtifactPieceUidEnum.PlumeOfDeath]: {
      name: "Перо чертога",
      image_src: imageSrc(`${ArtifactSetUidEnum.HuskOfOpulentDreams}/${ArtifactPieceUidEnum.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactPieceUidEnum.SandsOfEon]: {
      name: "Песнь жизни",
      image_src: imageSrc(`${ArtifactSetUidEnum.HuskOfOpulentDreams}/${ArtifactPieceUidEnum.SandsOfEon}_icon.webp`),
    },
    [ArtifactPieceUidEnum.GobletOfEonothem]: {
      name: "Тыква пробуждения",
      image_src: imageSrc(`${ArtifactSetUidEnum.HuskOfOpulentDreams}/${ArtifactPieceUidEnum.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactPieceUidEnum.CircletOfLogos]: {
      name: "Шляпа телесности",
      image_src: imageSrc(`${ArtifactSetUidEnum.HuskOfOpulentDreams}/${ArtifactPieceUidEnum.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetUidEnum.Instructor]: {
    uid: ArtifactSetUidEnum.Instructor,
    name: "Инструктор",
    qualities: [3, 4],
    source: ["Боссы", "Подземелья наказания (еженедельные боссы)", "Подземелья", "Сундуки", "Элитные враги"],
    item_bonuses: {
      2: "Увеличивает мастерство стихий на 80 ед.",
      4: "Вызов элементальной реакции увеличивает мастерство стихий всех членов отряда на 120 ед. в течение 8 сек.",
    },
    [ArtifactPieceUidEnum.FlowerOfLife]: {
      name: "Брошь инструктора",
      image_src: imageSrc(`${ArtifactSetUidEnum.Instructor}/${ArtifactPieceUidEnum.FlowerOfLife}_icon.webp`),
    },
    [ArtifactPieceUidEnum.PlumeOfDeath]: {
      name: "Перо инструктора",
      image_src: imageSrc(`${ArtifactSetUidEnum.Instructor}/${ArtifactPieceUidEnum.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactPieceUidEnum.SandsOfEon]: {
      name: "Карманные часы инструктора",
      image_src: imageSrc(`${ArtifactSetUidEnum.Instructor}/${ArtifactPieceUidEnum.SandsOfEon}_icon.webp`),
    },
    [ArtifactPieceUidEnum.GobletOfEonothem]: {
      name: "Чайная кружка инструктора",
      image_src: imageSrc(`${ArtifactSetUidEnum.Instructor}/${ArtifactPieceUidEnum.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactPieceUidEnum.CircletOfLogos]: {
      name: "Кепка инструктора",
      image_src: imageSrc(`${ArtifactSetUidEnum.Instructor}/${ArtifactPieceUidEnum.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetUidEnum.Lavawalker]: {
    uid: ArtifactSetUidEnum.Lavawalker,
    name: "Ступающий по лаве",
    qualities: [4, 5],
    source: [dungeonByUid(DungeonUidEnum.HiddenPalaceOfZhouFormula), alchemy],
    item_bonuses: {
      2: "Пиро сопротивление: +40%",
      4: "Увеличивает урон против врагов, находящихся под действием Пиро, на 35%.",
    },
    [ArtifactPieceUidEnum.FlowerOfLife]: {
      name: "Решительность ступающего по лаве",
      image_src: imageSrc(`${ArtifactSetUidEnum.Lavawalker}/${ArtifactPieceUidEnum.FlowerOfLife}_icon.webp`),
    },
    [ArtifactPieceUidEnum.PlumeOfDeath]: {
      name: "Спасение ступающего по лаве",
      image_src: imageSrc(`${ArtifactSetUidEnum.Lavawalker}/${ArtifactPieceUidEnum.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactPieceUidEnum.SandsOfEon]: {
      name: "Муки ступающего по лаве",
      image_src: imageSrc(`${ArtifactSetUidEnum.Lavawalker}/${ArtifactPieceUidEnum.SandsOfEon}_icon.webp`),
    },
    [ArtifactPieceUidEnum.GobletOfEonothem]: {
      name: "Просветление ступающего по лаве",
      image_src: imageSrc(`${ArtifactSetUidEnum.Lavawalker}/${ArtifactPieceUidEnum.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactPieceUidEnum.CircletOfLogos]: {
      name: "Мудрость ступающего по лаве",
      image_src: imageSrc(`${ArtifactSetUidEnum.Lavawalker}/${ArtifactPieceUidEnum.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetUidEnum.LongNightsOath]: {
    uid: ArtifactSetUidEnum.LongNightsOath,
    name: "Клятва долгой ночи",
    qualities: [4, 5],
    source: "Подземелье «Заброшенный причал»",
    item_bonuses: {
      2: "Урон атак в падении увеличивается на 25%.",
      4: "После того как атака в падении, заряженная атака или элементальный навык экипированного персонажа поражают противника, экипированный персонаж получает 1/2/2 уровня Вечного сияния. Атаки в падении, заряженные атаки и элементальные навыки могут по отдельности вызывать этот эффект один раз в 1 сек. Вечное сияние: урон атаки в падении повышается на 15%. Эффект длится 6 сек. и складывается до 5 раз. Длительность каждого уровня рассчитывается отдельно.",
    },
    [ArtifactPieceUidEnum.FlowerOfLife]: {
      name: "Клятва светоносца",
      image_src: imageSrc(`${ArtifactSetUidEnum.LongNightsOath}/lightkeepers_pledge-256x256.png`),
    },
    [ArtifactPieceUidEnum.PlumeOfDeath]: {
      name: "Соловьиное перо",
      image_src: imageSrc(`${ArtifactSetUidEnum.LongNightsOath}/nightingales_tail_feather-256x256.png`),
    },
    [ArtifactPieceUidEnum.SandsOfEon]: {
      name: "Скорбный колокольчик бессмертного",
      image_src: imageSrc(`${ArtifactSetUidEnum.LongNightsOath}/undying_ones_mourning_bell-256x256.png`),
    },
    [ArtifactPieceUidEnum.GobletOfEonothem]: {
      name: "Умолкнувший рог",
      image_src: imageSrc(`${ArtifactSetUidEnum.LongNightsOath}/a_horn_unwinded-256x256.png`),
    },
    [ArtifactPieceUidEnum.CircletOfLogos]: {
      name: "Окрашенный шлем",
      image_src: imageSrc(`${ArtifactSetUidEnum.LongNightsOath}/dyed_tassel-256x256.png`),
    },
    character_recommendations: [{
      uid: CharacterUidEnum.Varesa,
      notes: "Варесе будет очень полезно увеличение урона атак в падении, которые она использует. Поскольку она часто активирует элементальный навык, а также заряженную атаку и атаку в падении после навыка, она может получить максимальный бонус урона.",
    }],
  },
  [ArtifactSetUidEnum.MaidenBeloved]: {
    uid: ArtifactSetUidEnum.MaidenBeloved,
    name: "Возлюбленная юная дева",
    qualities: [4, 5],
    source: [dungeonByUid(DungeonUidEnum.ValleyOfRemembrance), alchemy],
    item_bonuses: {
      2: "Увеличивает эффективность лечения на 15%.",
      4: "Увеличивает получаемое лечение всех членов отряда на 20% в течение 10 сек. после использования элементального навыка или взрыва стихии.",
    },
    [ArtifactPieceUidEnum.FlowerOfLife]: {
      name: "Далёкая душа юной девы",
      image_src: imageSrc(`${ArtifactSetUidEnum.MaidenBeloved}/${ArtifactPieceUidEnum.FlowerOfLife}_icon.webp`),
    },
    [ArtifactPieceUidEnum.PlumeOfDeath]: {
      name: "Тоска юной девы",
      image_src: imageSrc(`${ArtifactSetUidEnum.MaidenBeloved}/${ArtifactPieceUidEnum.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactPieceUidEnum.SandsOfEon]: {
      name: "Уходящая молодость юной девы",
      image_src: imageSrc(`${ArtifactSetUidEnum.MaidenBeloved}/${ArtifactPieceUidEnum.SandsOfEon}_icon.webp`),
    },
    [ArtifactPieceUidEnum.GobletOfEonothem]: {
      name: "Досуг юной девы",
      image_src: imageSrc(`${ArtifactSetUidEnum.MaidenBeloved}/${ArtifactPieceUidEnum.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactPieceUidEnum.CircletOfLogos]: {
      name: "Увядающая красота юной девы",
      image_src: imageSrc(`${ArtifactSetUidEnum.MaidenBeloved}/${ArtifactPieceUidEnum.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetUidEnum.MarechausseeHunter]: {
    uid: ArtifactSetUidEnum.MarechausseeHunter,
    name: "Охотник Сумеречного двора",
    qualities: [4, 5],
    source: ["Подземелье «Конец греха»", "Мистическое подношение (Алхимия)"],
    item_bonuses: {
      2: "Увеличивает урон обычной и заряженной атаки на 15%.",
      4: "Увеличивает шанс крит. попадания на 12% на 5 сек., когда текущее HP увеличивается или снижается. Эффект может складываться до 3 раз.",
    },
    [ArtifactPieceUidEnum.FlowerOfLife]: {
      name: "Брошь охотника",
      image_src: imageSrc(`${ArtifactSetUidEnum.MarechausseeHunter}/hunters_brooch-256x256.png`),
    },
    [ArtifactPieceUidEnum.PlumeOfDeath]: {
      name: "Увертюра шедевра",
      image_src: imageSrc(`${ArtifactSetUidEnum.MarechausseeHunter}/masterpieces_overture-256x256.png`),
    },
    [ArtifactPieceUidEnum.SandsOfEon]: {
      name: "Мгновение правосудия",
      image_src: imageSrc(`${ArtifactSetUidEnum.MarechausseeHunter}/moment_of_judgment-256x256.png`),
    },
    [ArtifactPieceUidEnum.GobletOfEonothem]: {
      name: "Забытый сосуд",
      image_src: imageSrc(`${ArtifactSetUidEnum.MarechausseeHunter}/forgotten_vessel-256x256.png`),
    },
    [ArtifactPieceUidEnum.CircletOfLogos]: {
      name: "Лик старого солдата",
      image_src: imageSrc(`${ArtifactSetUidEnum.MarechausseeHunter}/veterans_visage-256x256.png`),
    },
    character_recommendations: [
      { uid: CharacterUidEnum.Neuvillette, notes: "" },
      { uid: CharacterUidEnum.Skirk, notes: "" },
    ],
  },
  [ArtifactSetUidEnum.NoblesseOblige]: {
    uid: ArtifactSetUidEnum.NoblesseOblige,
    name: "Церемония древней знати",
    qualities: [4, 5],
    source: [dungeonByUid(DungeonUidEnum.ClearPoolAndMountainCavern), alchemy],
    item_bonuses: {
      2: "Увеличивает урон взрыва стихии на 20%.",
      4: "Активация взрыва стихии увеличивает силу атаки всех членов отряда на 20% в течение 12 сек. Эффект не складывается.",
    },
    [ArtifactPieceUidEnum.FlowerOfLife]: {
      name: "Королевский цветок",
      image_src: imageSrc(`${ArtifactSetUidEnum.NoblesseOblige}/${ArtifactPieceUidEnum.FlowerOfLife}_icon.webp`),
    },
    [ArtifactPieceUidEnum.PlumeOfDeath]: {
      name: "Королевское перо",
      image_src: imageSrc(`${ArtifactSetUidEnum.NoblesseOblige}/${ArtifactPieceUidEnum.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactPieceUidEnum.SandsOfEon]: {
      name: "Королевские карманные часы",
      image_src: imageSrc(`${ArtifactSetUidEnum.NoblesseOblige}/${ArtifactPieceUidEnum.SandsOfEon}_icon.webp`),
    },
    [ArtifactPieceUidEnum.GobletOfEonothem]: {
      name: "Королевская серебряная фляжка",
      image_src: imageSrc(`${ArtifactSetUidEnum.NoblesseOblige}/${ArtifactPieceUidEnum.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactPieceUidEnum.CircletOfLogos]: {
      name: "Королевская маска",
      image_src: imageSrc(`${ArtifactSetUidEnum.NoblesseOblige}/${ArtifactPieceUidEnum.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetUidEnum.NymphsDream]: {
    uid: ArtifactSetUidEnum.NymphsDream,
    name: "Сон нимфы",
    qualities: [4, 5],
    source: [dungeonByUid(DungeonUidEnum.MoltenIronFortress), alchemy],
    item_bonuses: {
      2: "Даёт 15% бонус Гидро урона.",
      4: "Попадания обычной атакой, заряженной атакой, атакой в падении, элементальным навыком и взрывом стихий по противнику на 8 сек. создаёт 1 уровень Отражения нимфы. Когда действуют 1/2/3 и более уровня Отражения нимфы, сила атаки повышается на 7%/16%/25%, а бонус Гидро урона на 4%/9%/15%. Уровни Отражения нимфы, созданные обычными атаками, заряженными атаками, атаками в падении, элементальными навыками и взрывами стихий, существуют независимо друг от друга.",
    },
    [ArtifactPieceUidEnum.FlowerOfLife]: {
      name: "Цветок странствий",
      image_src: imageSrc(`${ArtifactSetUidEnum.NymphsDream}/${ArtifactPieceUidEnum.FlowerOfLife}_icon.webp`),
    },
    [ArtifactPieceUidEnum.PlumeOfDeath]: {
      name: "Перо злого мага",
      image_src: imageSrc(`${ArtifactSetUidEnum.NymphsDream}/${ArtifactPieceUidEnum.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactPieceUidEnum.SandsOfEon]: {
      name: "Постоянство нимфы",
      image_src: imageSrc(`${ArtifactSetUidEnum.NymphsDream}/${ArtifactPieceUidEnum.SandsOfEon}_icon.webp`),
    },
    [ArtifactPieceUidEnum.GobletOfEonothem]: {
      name: "Чаепитие героев",
      image_src: imageSrc(`${ArtifactSetUidEnum.NymphsDream}/${ArtifactPieceUidEnum.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactPieceUidEnum.CircletOfLogos]: {
      name: "Монокль свирепого дракона",
      image_src: imageSrc(`${ArtifactSetUidEnum.NymphsDream}/${ArtifactPieceUidEnum.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetUidEnum.ObsidianCodex]: {
    uid: ArtifactSetUidEnum.ObsidianCodex,
    name: "Обсидиановый фолиант",
    qualities: [4, 5],
    source: "Подземелье «Святилище мириад духов»",
    item_bonuses: {
      2: "Урон экипированного персонажа на поле в состоянии Благословения Ночного духа увеличивается на 15%.",
      4: "После того как экипированный персонаж, будучи на поле боя, расходует 1 очко Ночного духа, шанс крит. попадания увеличивается на 40% на 6 сек. Этот эффект может возникнуть один раз в 1 сек.",
    },
    [ArtifactPieceUidEnum.FlowerOfLife]: {
      name: "Ожидания инородцев",
      image_src: imageSrc(`${ArtifactSetUidEnum.ObsidianCodex}/reckoning_of_the_xenogenic-256x256.png`),
    },
    [ArtifactPieceUidEnum.PlumeOfDeath]: {
      name: "Корень костного мозга души",
      image_src: imageSrc(`${ArtifactSetUidEnum.ObsidianCodex}/root_of_the_spirit_marrow-256x256.png`),
    },
    [ArtifactPieceUidEnum.SandsOfEon]: {
      name: "Мифы владений ночи",
      image_src: imageSrc(`${ArtifactSetUidEnum.ObsidianCodex}/myths_of_the_night_realm-256x256.png`),
    },
    [ArtifactPieceUidEnum.GobletOfEonothem]: {
      name: "Банкет перед состязанием",
      image_src: imageSrc(`${ArtifactSetUidEnum.ObsidianCodex}/pre_banquet_of_the_contenders-256x256.png`),
    },
    [ArtifactPieceUidEnum.CircletOfLogos]: {
      name: "Корона святых",
      image_src: imageSrc(`${ArtifactSetUidEnum.ObsidianCodex}/crown_of_the_saints-256x256.png`),
    },
    character_recommendations: [{ uid: CharacterUidEnum.Varesa, notes: "" }],
  },
  [ArtifactSetUidEnum.OceanHuedClam]: {
    uid: ArtifactSetUidEnum.OceanHuedClam,
    name: "Моллюск морских красок",
    qualities: [4, 5],
    source: [dungeonByUid(DungeonUidEnum.SlumberingCourt), alchemy],
    item_bonuses: {
      2: "Повышает бонус лечения на 15%.",
      4: "Экипированный этим набором артефактов персонаж при лечении соратников создаёт на 3 сек. Пузырь морских красок. Пузырь регистрирует восстановленное при лечении HP (в том числе избыточное, когда лечение превышает максимум здоровья). После окончания действия Пузырь взрывается и наносит окружающим врагам урон в размере 90% учтённого объёма лечения (урон рассчитывается так же, как для эффектов Заряжен и Сверхпроводник, но на него не действуют бонусы мастерства стихий, уровня и реакций). Пузырь морских красок можно создавать не чаще чем раз в 3,5 сек. Пузырь может записать до 30 000 восстановленного HP, в том числе HP избыточного лечения. Для отряда не может существовать больше одного Пузыря морских красок одновременно. Этот эффект действует, даже если персонаж, экипированный набором артефактов, не находится на поле боя.",
    },
    [ArtifactPieceUidEnum.FlowerOfLife]: {
      name: "Цветок морских красок",
      image_src: imageSrc(`${ArtifactSetUidEnum.OceanHuedClam}/${ArtifactPieceUidEnum.FlowerOfLife}_icon.webp`),
    },
    [ArtifactPieceUidEnum.PlumeOfDeath]: {
      name: "Перо глубинного дворца",
      image_src: imageSrc(`${ArtifactSetUidEnum.OceanHuedClam}/${ArtifactPieceUidEnum.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactPieceUidEnum.SandsOfEon]: {
      name: "Раковина разлуки",
      image_src: imageSrc(`${ArtifactSetUidEnum.OceanHuedClam}/${ArtifactPieceUidEnum.SandsOfEon}_icon.webp`),
    },
    [ArtifactPieceUidEnum.GobletOfEonothem]: {
      name: "Жемчужная клетка",
      image_src: imageSrc(`${ArtifactSetUidEnum.OceanHuedClam}/${ArtifactPieceUidEnum.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactPieceUidEnum.CircletOfLogos]: {
      name: "Корона Ватацуми",
      image_src: imageSrc(`${ArtifactSetUidEnum.OceanHuedClam}/${ArtifactPieceUidEnum.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetUidEnum.PaleFlame]: {
    uid: ArtifactSetUidEnum.PaleFlame,
    name: "Бледный огонь",
    qualities: [4, 5],
    source: [dungeonByUid(DungeonUidEnum.RidgeWatch), alchemy],
    item_bonuses: {
      2: "Увеличивает физ. урон на 25%.",
      4: "Когда элементальный навык попадает по врагам, атака увеличивается на 9% в течение 7 сек. Эффект может складываться до 2 раз и возникнуть не чаще 1 раза за 0,3 сек. На 2 уровне складывания эффект набора из 2 вещей увеличивается на 100%.",
    },
    [ArtifactPieceUidEnum.FlowerOfLife]: {
      name: "Незапятнанный цветок",
      image_src: imageSrc(`${ArtifactSetUidEnum.PaleFlame}/${ArtifactPieceUidEnum.FlowerOfLife}_icon.webp`),
    },
    [ArtifactPieceUidEnum.PlumeOfDeath]: {
      name: "Перо мудрого лекаря",
      image_src: imageSrc(`${ArtifactSetUidEnum.PaleFlame}/${ArtifactPieceUidEnum.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactPieceUidEnum.SandsOfEon]: {
      name: "Замершее мгновение",
      image_src: imageSrc(`${ArtifactSetUidEnum.PaleFlame}/${ArtifactPieceUidEnum.SandsOfEon}_icon.webp`),
    },
    [ArtifactPieceUidEnum.GobletOfEonothem]: {
      name: "Превосходящая чаша",
      image_src: imageSrc(`${ArtifactSetUidEnum.PaleFlame}/${ArtifactPieceUidEnum.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactPieceUidEnum.CircletOfLogos]: {
      name: "Смеющаяся маска",
      image_src: imageSrc(`${ArtifactSetUidEnum.PaleFlame}/${ArtifactPieceUidEnum.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetUidEnum.RetracingBolide]: {
    uid: ArtifactSetUidEnum.RetracingBolide,
    name: "Встречная комета",
    qualities: [4, 5],
    source: [dungeonByUid(DungeonUidEnum.DomainOfGuyun), alchemy],
    item_bonuses: {
      2: "Увеличивает прочность щита на 35%.",
      4: "Под защитой щита увеличивает урон обычной и заряженной атаки на 40%.",
    },
    [ArtifactPieceUidEnum.FlowerOfLife]: {
      name: "Цветок равноденствия",
      image_src: imageSrc(`${ArtifactSetUidEnum.RetracingBolide}/${ArtifactPieceUidEnum.FlowerOfLife}_icon.webp`),
    },
    [ArtifactPieceUidEnum.PlumeOfDeath]: {
      name: "Конец равноденствия",
      image_src: imageSrc(`${ArtifactSetUidEnum.RetracingBolide}/${ArtifactPieceUidEnum.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactPieceUidEnum.SandsOfEon]: {
      name: "Час равноденствия",
      image_src: imageSrc(`${ArtifactSetUidEnum.RetracingBolide}/${ArtifactPieceUidEnum.SandsOfEon}_icon.webp`),
    },
    [ArtifactPieceUidEnum.GobletOfEonothem]: {
      name: "Шар равноденствия",
      image_src: imageSrc(`${ArtifactSetUidEnum.RetracingBolide}/${ArtifactPieceUidEnum.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactPieceUidEnum.CircletOfLogos]: {
      name: "Маска равноденствия",
      image_src: imageSrc(`${ArtifactSetUidEnum.RetracingBolide}/${ArtifactPieceUidEnum.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetUidEnum.ScrollOfTheHeroOfCinderCity]: {
    uid: ArtifactSetUidEnum.ScrollOfTheHeroOfCinderCity,
    name: "Свиток героя сожжённого города",
    qualities: [4, 5],
    source: "Подземелье «Святилище мириадов духов»",
    item_bonuses: {
      2: "Когда член отряда поблизости активирует Вспышку Ночного духа, экипированный персонаж восстанавливает 6 ед. энергии.",
      4: "После того как экипированный персонаж активирует реакцию, связанную с его элементом, все члены отряда поблизости получают 12% бонус урона элементами, связанными с этой реакцией, на 15 сек. Если экипированный персонаж, активируя данный эффект, находится в состоянии Благословение Ночного духа, все персонажи отряда поблизости дополнительно получают 28% бонус урона элементами, связанными с этой реакцией, на 20 сек. Такой эффект может возникнуть, даже если персонаж не находится на поле боя. Бонусы одноимённых наборов артефактов не суммируются.",
    },
    [ArtifactPieceUidEnum.FlowerOfLife]: {
      name: "Талисман укротителя зверей",
      image_src: imageSrc(`${ArtifactSetUidEnum.ScrollOfTheHeroOfCinderCity}/beast_tamers_talisman-256x256.png`),
    },
    [ArtifactPieceUidEnum.PlumeOfDeath]: {
      name: "Маячок горного патрульного",
      image_src: imageSrc(`${ArtifactSetUidEnum.ScrollOfTheHeroOfCinderCity}/mountain_rangers_marker-256x256.png`),
    },
    [ArtifactPieceUidEnum.SandsOfEon]: {
      name: "Золотые часы мистика",
      image_src: imageSrc(`${ArtifactSetUidEnum.ScrollOfTheHeroOfCinderCity}/mystics_gold_dial-256x256.png`),
    },
    [ArtifactPieceUidEnum.GobletOfEonothem]: {
      name: "Кубок бродячего исследователя",
      image_src: imageSrc(`${ArtifactSetUidEnum.ScrollOfTheHeroOfCinderCity}/wandering_scholars_claw_cup-256x256.png`),
    },
    [ArtifactPieceUidEnum.CircletOfLogos]: {
      name: "Перьевая маска воина-демона",
      image_src: imageSrc(`${ArtifactSetUidEnum.ScrollOfTheHeroOfCinderCity}/demon_warriors_feather_mask-256x256.png`),
    },
    character_recommendations: [
      { uid: CharacterUidEnum.Chevreuse, notes: "" },
      { uid: CharacterUidEnum.Iansan, notes: "" },
      { uid: CharacterUidEnum.Xilonen, notes: "" },
    ],
  },
  [ArtifactSetUidEnum.ShimenawasReminiscence]: {
    uid: ArtifactSetUidEnum.ShimenawasReminiscence,
    name: "Воспоминания Симэнавы",
    qualities: [4, 5],
    source: [dungeonByUid(DungeonUidEnum.MomijiDyedCourt), alchemy],
    item_bonuses: {
      2: "Увеличивает силу атаки на 18%.",
      4: "При использовании элементального навыка, если у персонажа 15 или более единиц энергии, он теряет 15 единиц энергии, а урон обычной атаки, заряженной атаки и атаки в падении увеличивается на 50% в течение 10 сек. Эффект нельзя активировать повторно в течение этого времени.",
    },
    [ArtifactPieceUidEnum.FlowerOfLife]: {
      name: "Опутывающий цветок",
      image_src: imageSrc(`${ArtifactSetUidEnum.ShimenawasReminiscence}/${ArtifactPieceUidEnum.FlowerOfLife}_icon.webp`),
    },
    [ArtifactPieceUidEnum.PlumeOfDeath]: {
      name: "Стрела воспоминаний",
      image_src: imageSrc(`${ArtifactSetUidEnum.ShimenawasReminiscence}/${ArtifactPieceUidEnum.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactPieceUidEnum.SandsOfEon]: {
      name: "Мгновение росы",
      image_src: imageSrc(`${ArtifactSetUidEnum.ShimenawasReminiscence}/${ArtifactPieceUidEnum.SandsOfEon}_icon.webp`),
    },
    [ArtifactPieceUidEnum.GobletOfEonothem]: {
      name: "Полное надежд сердце",
      image_src: imageSrc(`${ArtifactSetUidEnum.ShimenawasReminiscence}/${ArtifactPieceUidEnum.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactPieceUidEnum.CircletOfLogos]: {
      name: "Непостоянный лик",
      image_src: imageSrc(`${ArtifactSetUidEnum.ShimenawasReminiscence}/${ArtifactPieceUidEnum.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetUidEnum.SongOfDaysPast]: {
    uid: ArtifactSetUidEnum.SongOfDaysPast,
    name: "Песнь былых времён",
    qualities: [4, 5],
    source: "Подземелье «Город гроз»",
    item_bonuses: {
      2: "Повышает бонус лечения на 15%.",
      4: "Экипированный персонаж при лечении членов отряда на 6 сек. создаёт эффект Стремления, который регистрирует осуществлённое лечение (в том числе избыточное). С завершением длительности Стремление превращается в Волны былых времён: при попадании обычной атаки, заряженной атаки, атаки в падении, элементального навыка или взрыва стихии вашего активного персонажа по противнику наносимый урон увеличивается на 8% от общего количества лечения, зарегистрированного Стремлением. После 5 активаций или через 10 сек. эффект Волн былых времён исчезает. Однократный эффект Стремления регистрирует до 15 000 ед. HP. Одновременно может существовать только одно Стремление, но оно регистрирует лечение, предоставляемое несколькими экипированными персонажами сразу. Этот эффект активируется, даже если экипированный персонаж не на поле боя.",
    },
    [ArtifactPieceUidEnum.FlowerOfLife]: {
      name: "Забытая клятва былых времён",
      image_src: imageSrc(`${ArtifactSetUidEnum.SongOfDaysPast}/forgotten_oath_of_days_past-256x256.png`),
    },
    [ArtifactPieceUidEnum.PlumeOfDeath]: {
      name: "Воспоминания о былых временах",
      image_src: imageSrc(`${ArtifactSetUidEnum.SongOfDaysPast}/recollection_of_days_past-256x256.png`),
    },
    [ArtifactPieceUidEnum.SandsOfEon]: {
      name: "Отзвуки былых времён",
      image_src: imageSrc(`${ArtifactSetUidEnum.SongOfDaysPast}/echoing_sound_from_days_past-256x256.png`),
    },
    [ArtifactPieceUidEnum.GobletOfEonothem]: {
      name: "Обещанный сон былых времён",
      image_src: imageSrc(`${ArtifactSetUidEnum.SongOfDaysPast}/promised_dream_of_days_past-256x256.png`),
    },
    [ArtifactPieceUidEnum.CircletOfLogos]: {
      name: "Поэзия былых времён",
      image_src: imageSrc(`${ArtifactSetUidEnum.SongOfDaysPast}/poetry_of_days_past-256x256.png`),
    },
  },
  [ArtifactSetUidEnum.TenacityOfTheMillelith]: {
    uid: ArtifactSetUidEnum.TenacityOfTheMillelith,
    name: "Стойкость Миллелита",
    qualities: [4, 5],
    source: [dungeonByUid(DungeonUidEnum.RidgeWatch), alchemy],
    item_bonuses: {
      2: "Увеличивает НР на 20%",
      4: "Когда элементальный навык попадает по врагам, атака всех находящихся поблизости персонажей в отряде, увеличивается на 20%, а прочность их щита увеличивается на 30%. Эффект длится 3 сек. и может возникнуть 1 раз в 0,5 сек. Этот эффект может быть активирован, даже если персонаж, экипированный этим набором артефактов, не находится на поле боя.",
    },
    [ArtifactPieceUidEnum.FlowerOfLife]: {
      name: "Цветок почестей",
      image_src: imageSrc(`${ArtifactSetUidEnum.TenacityOfTheMillelith}/${ArtifactPieceUidEnum.FlowerOfLife}_icon.webp`),
    },
    [ArtifactPieceUidEnum.PlumeOfDeath]: {
      name: "Боевое перо командира",
      image_src: imageSrc(`${ArtifactSetUidEnum.TenacityOfTheMillelith}/${ArtifactPieceUidEnum.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactPieceUidEnum.SandsOfEon]: {
      name: "Золотые часы",
      image_src: imageSrc(`${ArtifactSetUidEnum.TenacityOfTheMillelith}/${ArtifactPieceUidEnum.SandsOfEon}_icon.webp`),
    },
    [ArtifactPieceUidEnum.GobletOfEonothem]: {
      name: "Золотой кубок клятвы",
      image_src: imageSrc(`${ArtifactSetUidEnum.TenacityOfTheMillelith}/${ArtifactPieceUidEnum.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactPieceUidEnum.CircletOfLogos]: {
      name: "Древний шлем генерала",
      image_src: imageSrc(`${ArtifactSetUidEnum.TenacityOfTheMillelith}/${ArtifactPieceUidEnum.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetUidEnum.ThunderingFury]: {
    uid: ArtifactSetUidEnum.ThunderingFury,
    name: "Громогласный рёв ярости",
    qualities: [4, 5],
    source: [dungeonByUid(DungeonUidEnum.MidsummerCourtyard), alchemy],
    item_bonuses: {
      2: "Увеличивает бонус Электро урона на 15%.",
      4: "Увеличивает урон реакций Перегрузка, Заряжен, Сверхпроводник и Вегетация на 40%. Урон от реакции Обострение увеличивается на 20%. При активации этих реакций, а также реакции Стимуляция, время отката элементального навыка уменьшается на 1 сек. Эффект может возникнуть не чаще 1 раза в 0,8 сек.",
    },
    [ArtifactPieceUidEnum.FlowerOfLife]: {
      name: "Милосердие Громовой птицы",
      image_src: imageSrc(`${ArtifactSetUidEnum.ThunderingFury}/${ArtifactPieceUidEnum.FlowerOfLife}_icon.webp`),
    },
    [ArtifactPieceUidEnum.PlumeOfDeath]: {
      name: "Переживший катастрофу",
      image_src: imageSrc(`${ArtifactSetUidEnum.ThunderingFury}/${ArtifactPieceUidEnum.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactPieceUidEnum.SandsOfEon]: {
      name: "Песочные часы грома",
      image_src: imageSrc(`${ArtifactSetUidEnum.ThunderingFury}/${ArtifactPieceUidEnum.SandsOfEon}_icon.webp`),
    },
    [ArtifactPieceUidEnum.GobletOfEonothem]: {
      name: "Предвестник бури",
      image_src: imageSrc(`${ArtifactSetUidEnum.ThunderingFury}/${ArtifactPieceUidEnum.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactPieceUidEnum.CircletOfLogos]: {
      name: "Корона призывателя грома",
      image_src: imageSrc(`${ArtifactSetUidEnum.ThunderingFury}/${ArtifactPieceUidEnum.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetUidEnum.Thundersoother]: {
    uid: ArtifactSetUidEnum.Thundersoother,
    name: "Усмиряющий гром",
    qualities: [4, 5],
    source: [dungeonByUid(DungeonUidEnum.MidsummerCourtyard), alchemy],
    item_bonuses: {
      2: "Повышает Электро сопротивление на +40%.",
      4: "Увеличивает урон против врагов, находящихся под действием Электро, на 35%.",
    },
    [ArtifactPieceUidEnum.FlowerOfLife]: {
      name: "Сердце усмиряющего гром",
      image_src: imageSrc(`${ArtifactSetUidEnum.Thundersoother}/${ArtifactPieceUidEnum.FlowerOfLife}_icon.webp`),
    },
    [ArtifactPieceUidEnum.PlumeOfDeath]: {
      name: "Перо усмиряющего гром",
      image_src: imageSrc(`${ArtifactSetUidEnum.Thundersoother}/${ArtifactPieceUidEnum.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactPieceUidEnum.SandsOfEon]: {
      name: "Время усмиряющего гром",
      image_src: imageSrc(`${ArtifactSetUidEnum.Thundersoother}/${ArtifactPieceUidEnum.SandsOfEon}_icon.webp`),
    },
    [ArtifactPieceUidEnum.GobletOfEonothem]: {
      name: "Бокал усмиряющего гром",
      image_src: imageSrc(`${ArtifactSetUidEnum.Thundersoother}/${ArtifactPieceUidEnum.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactPieceUidEnum.CircletOfLogos]: {
      name: "Корона усмиряющего гром",
      image_src: imageSrc(`${ArtifactSetUidEnum.Thundersoother}/${ArtifactPieceUidEnum.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetUidEnum.VermillionHereafter]: {
    uid: ArtifactSetUidEnum.VermillionHereafter,
    name: "Киноварное загробье",
    qualities: [4, 5],
    source: [dungeonByUid(DungeonUidEnum.TheLostValley), alchemy],
    item_bonuses: {
      2: "Увеличивает силу атаки на 18%.",
      4: "После активации взрыва стихии на 16 сек. создаёт Скрытое сияние, которое повышает силу атаки на 8%. Сила атаки персонажа увеличивается ещё на 10%, когда он теряет HP. Этот эффект может возникнуть максимум 4 раза и не чаще, чем раз в 0,8 сек. Скрытое сияние исчезает, когда персонаж покидает поле боя. При повторной активации взрыва стихии существующее Скрытое сияние снимается.",
    },
    [ArtifactPieceUidEnum.FlowerOfLife]: {
      name: "Цветение жизни",
      image_src: imageSrc(`${ArtifactSetUidEnum.VermillionHereafter}/${ArtifactPieceUidEnum.FlowerOfLife}_icon.webp`),
    },
    [ArtifactPieceUidEnum.PlumeOfDeath]: {
      name: "Перо скрытого сияния",
      image_src: imageSrc(`${ArtifactSetUidEnum.VermillionHereafter}/${ArtifactPieceUidEnum.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactPieceUidEnum.SandsOfEon]: {
      name: "Солнечная реликвия",
      image_src: imageSrc(`${ArtifactSetUidEnum.VermillionHereafter}/${ArtifactPieceUidEnum.SandsOfEon}_icon.webp`),
    },
    [ArtifactPieceUidEnum.GobletOfEonothem]: {
      name: "Мгновение договора",
      image_src: imageSrc(`${ArtifactSetUidEnum.VermillionHereafter}/${ArtifactPieceUidEnum.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactPieceUidEnum.CircletOfLogos]: {
      name: "Громогласный облик",
      image_src: imageSrc(`${ArtifactSetUidEnum.VermillionHereafter}/${ArtifactPieceUidEnum.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetUidEnum.ViridescentVenerer]: {
    uid: ArtifactSetUidEnum.ViridescentVenerer,
    name: "Изумрудная тень",
    qualities: [4, 5],
    source: [dungeonByUid(DungeonUidEnum.ValleyOfRemembrance), alchemy],
    item_bonuses: {
      2: "Увеличивает бонус Анемо урона на 15%.",
      4: "Увеличивает урон Рассеивания на 60%. При взаимодействии Рассеивания с другим элементом, также понижает сопротивление противника к соответствующему элементу на 40% в течение 10 сек.",
    },
    [ArtifactPieceUidEnum.FlowerOfLife]: {
      name: "Воспоминания об изумрудных лугах",
      image_src: imageSrc(`${ArtifactSetUidEnum.ViridescentVenerer}/${ArtifactPieceUidEnum.FlowerOfLife}_icon.webp`),
    },
    [ArtifactPieceUidEnum.PlumeOfDeath]: {
      name: "Оперение стрелы изумрудного охотника",
      image_src: imageSrc(`${ArtifactSetUidEnum.ViridescentVenerer}/${ArtifactPieceUidEnum.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactPieceUidEnum.SandsOfEon]: {
      name: "Решимость изумрудного охотника",
      image_src: imageSrc(`${ArtifactSetUidEnum.ViridescentVenerer}/${ArtifactPieceUidEnum.SandsOfEon}_icon.webp`),
    },
    [ArtifactPieceUidEnum.GobletOfEonothem]: {
      name: "Сосуд изумрудного охотника",
      image_src: imageSrc(`${ArtifactSetUidEnum.ViridescentVenerer}/${ArtifactPieceUidEnum.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactPieceUidEnum.CircletOfLogos]: {
      name: "Венок изумрудного охотника",
      image_src: imageSrc(`${ArtifactSetUidEnum.ViridescentVenerer}/${ArtifactPieceUidEnum.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetUidEnum.WanderersTroupe]: {
    uid: ArtifactSetUidEnum.WanderersTroupe,
    name: "Странствующий ансамбль",
    qualities: [4, 5],
    source: ["Награды с босса в мире за 40 первородной смолы", "Подземелья наказания (еженедельные боссы)", "Мистическое подношение (Алхимия)"],
    item_bonuses: {
      2: "Увеличивает мастерство стихий на 80 ед.",
      4: "Увеличивает урон заряженной атаки на 35%, если персонаж использует катализатор или стрелковое оружие.",
    },
    [ArtifactPieceUidEnum.FlowerOfLife]: {
      name: "Рассвет ансамбля",
      image_src: imageSrc(`${ArtifactSetUidEnum.WanderersTroupe}/${ArtifactPieceUidEnum.FlowerOfLife}_icon.webp`),
    },
    [ArtifactPieceUidEnum.PlumeOfDeath]: {
      name: "Оперение стрелы барда",
      image_src: imageSrc(`${ArtifactSetUidEnum.WanderersTroupe}/${ArtifactPieceUidEnum.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactPieceUidEnum.SandsOfEon]: {
      name: "Окончание концерта",
      image_src: imageSrc(`${ArtifactSetUidEnum.WanderersTroupe}/${ArtifactPieceUidEnum.SandsOfEon}_icon.webp`),
    },
    [ArtifactPieceUidEnum.GobletOfEonothem]: {
      name: "Фляжка странника",
      image_src: imageSrc(`${ArtifactSetUidEnum.WanderersTroupe}/${ArtifactPieceUidEnum.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactPieceUidEnum.CircletOfLogos]: {
      name: "Цилиндр дирижёра",
      image_src: imageSrc(`${ArtifactSetUidEnum.WanderersTroupe}/${ArtifactPieceUidEnum.CircletOfLogos}_icon.webp`),
    },
  },
} as Record<ArtifactSetUid, ArtifactSet>;
