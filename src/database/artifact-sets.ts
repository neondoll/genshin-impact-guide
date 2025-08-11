import dungeons from "./dungeons";
import { ArtifactSetKeys } from "./enums/artifact-set";
import { ArtifactSlotKeys } from "./enums/artifact-slot";
import { CharacterKeys } from "./enums/character";
import { DungeonKeys } from "./enums/dungeon";
import { publicImageSrc } from "@/lib/utils";
import type { ArtifactSet, ArtifactSetKey } from "./types/artifact-set";
import type { DungeonKey } from "./types/dungeon";

const alchemy = "Мистическое подношение (Алхимия)";

const dungeonByKey = (key: DungeonKey) => `Подземелье «${dungeons[key].name}»`;

const imageSrc: typeof publicImageSrc = src => publicImageSrc(`artifact-sets/${src}`);

export default {
  [ArtifactSetKeys.ArchaicPetra]: {
    key: ArtifactSetKeys.ArchaicPetra,
    name: "Архаичный камень",
    rarities: [4, 5],
    source: [dungeonByKey(DungeonKeys.DomainOfGuyun), alchemy],
    item_bonuses: {
      2: "Увеличивает бонус Гео урона на 15%.",
      4: "Подобранный элементальный осколок, образованный реакцией Кристалл, увеличивает бонус элементального урона соответствующего элемента всех членов отряда на 35% в течение 10 сек. Одновременно можно иметь бонус урона только одного элемента.",
    },
    [ArtifactSlotKeys.Flower]: {
      name: "Цветок скальных трещин",
      image_src: imageSrc(`${ArtifactSetKeys.ArchaicPetra}/${ArtifactSlotKeys.Flower}_icon.webp`),
    },
    [ArtifactSlotKeys.PlumeOfDeath]: {
      name: "Перо зубчатых пиков",
      image_src: imageSrc(`${ArtifactSetKeys.ArchaicPetra}/${ArtifactSlotKeys.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactSlotKeys.SandsOfEon]: {
      name: "Часы из прочного нефрита",
      image_src: imageSrc(`${ArtifactSetKeys.ArchaicPetra}/${ArtifactSlotKeys.SandsOfEon}_icon.webp`),
    },
    [ArtifactSlotKeys.GobletOfEonothem]: {
      name: "Кубок из резного камня",
      image_src: imageSrc(`${ArtifactSetKeys.ArchaicPetra}/${ArtifactSlotKeys.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactSlotKeys.CircletOfLogos]: {
      name: "Маска из одинокого базальта",
      image_src: imageSrc(`${ArtifactSetKeys.ArchaicPetra}/${ArtifactSlotKeys.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetKeys.BlizzardStrayer]: {
    key: ArtifactSetKeys.BlizzardStrayer,
    name: "Заблудший в метели",
    rarities: [4, 5],
    source: [dungeonByKey(DungeonKeys.PeakOfVindagnyr), alchemy],
    item_bonuses: {
      2: "Увеличивает бонус Крио урона на 15%.",
      4: "Атаки по противникам с эффектом Крио увеличивают шанс крит. попадания на 20%. Если противник имеет статус Заморозка, то дополнительно увеличивает шанс крит. попадания на 20%.",
    },
    [ArtifactSlotKeys.Flower]: {
      name: "Занесённая снегом память",
      image_src: imageSrc(`${ArtifactSetKeys.BlizzardStrayer}/${ArtifactSlotKeys.Flower}_icon.webp`),
    },
    [ArtifactSlotKeys.PlumeOfDeath]: {
      name: "Решимость крушителя льда",
      image_src: imageSrc(`${ArtifactSetKeys.BlizzardStrayer}/${ArtifactSlotKeys.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactSlotKeys.SandsOfEon]: {
      name: "Гибель замёрзшей родины",
      image_src: imageSrc(`${ArtifactSetKeys.BlizzardStrayer}/${ArtifactSlotKeys.SandsOfEon}_icon.webp`),
    },
    [ArtifactSlotKeys.GobletOfEonothem]: {
      name: "Морозная гордость",
      image_src: imageSrc(`${ArtifactSetKeys.BlizzardStrayer}/${ArtifactSlotKeys.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactSlotKeys.CircletOfLogos]: {
      name: "Эхо осколков инея",
      image_src: imageSrc(`${ArtifactSetKeys.BlizzardStrayer}/${ArtifactSlotKeys.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetKeys.BloodstainedChivalry]: {
    key: ArtifactSetKeys.BloodstainedChivalry,
    name: "Рыцарь крови",
    rarities: [4, 5],
    source: [dungeonByKey(DungeonKeys.ClearPoolAndMountainCavern), alchemy],
    item_bonuses: {
      2: "Увеличивает физ. урон на 25%.",
      4: "После победы над противником увеличивает урон заряженной атаки на 50% и обнуляет стоимость выносливости заряженной атаки на 10 сек.",
    },
    [ArtifactSlotKeys.Flower]: {
      name: "Железное сердце рыцаря крови",
      image_src: imageSrc(`${ArtifactSetKeys.BloodstainedChivalry}/${ArtifactSlotKeys.Flower}_icon.webp`),
    },
    [ArtifactSlotKeys.PlumeOfDeath]: {
      name: "Перо рыцаря крови",
      image_src: imageSrc(`${ArtifactSetKeys.BloodstainedChivalry}/${ArtifactSlotKeys.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactSlotKeys.SandsOfEon]: {
      name: "Час долга рыцаря крови",
      image_src: imageSrc(`${ArtifactSetKeys.BloodstainedChivalry}/${ArtifactSlotKeys.SandsOfEon}_icon.webp`),
    },
    [ArtifactSlotKeys.GobletOfEonothem]: {
      name: "Кубок рыцаря крови",
      image_src: imageSrc(`${ArtifactSetKeys.BloodstainedChivalry}/${ArtifactSlotKeys.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactSlotKeys.CircletOfLogos]: {
      name: "Железная маска рыцаря крови",
      image_src: imageSrc(`${ArtifactSetKeys.BloodstainedChivalry}/${ArtifactSlotKeys.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetKeys.CrimsonWitchOfFlames]: {
    key: ArtifactSetKeys.CrimsonWitchOfFlames,
    name: "Горящая алая ведьма",
    rarities: [4, 5],
    source: [dungeonByKey(DungeonKeys.HiddenPalaceOfZhouFormula), alchemy],
    item_bonuses: {
      2: "Увеличивает бонус Пиро урона на 15%.",
      4: "Увеличивает урон статусов Перегрузка, Горение и Цветение на 40%, а урон статусов Пар и Таяние - на 15%. Использование элементального навыка увеличивает эффекты набора из двух вещей на 50% в течение 10 сек. Может складываться до 3 раз.",
    },
    [ArtifactSlotKeys.Flower]: {
      name: "Ведьмин огненный цветок",
      image_src: imageSrc(`${ArtifactSetKeys.CrimsonWitchOfFlames}/${ArtifactSlotKeys.Flower}_icon.webp`),
    },
    [ArtifactSlotKeys.PlumeOfDeath]: {
      name: "Пылающее ведьмино перо",
      image_src: imageSrc(`${ArtifactSetKeys.CrimsonWitchOfFlames}/${ArtifactSlotKeys.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactSlotKeys.SandsOfEon]: {
      name: "Ведьмин последний час",
      image_src: imageSrc(`${ArtifactSetKeys.CrimsonWitchOfFlames}/${ArtifactSlotKeys.SandsOfEon}_icon.webp`),
    },
    [ArtifactSlotKeys.GobletOfEonothem]: {
      name: "Пламя ведьминого сердца",
      image_src: imageSrc(`${ArtifactSetKeys.CrimsonWitchOfFlames}/${ArtifactSlotKeys.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactSlotKeys.CircletOfLogos]: {
      name: "Тлеющая ведьмина шляпа",
      image_src: imageSrc(`${ArtifactSetKeys.CrimsonWitchOfFlames}/${ArtifactSlotKeys.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetKeys.DeepwoodMemories]: {
    key: ArtifactSetKeys.DeepwoodMemories,
    name: "Воспоминания дремучего леса",
    rarities: [4, 5],
    source: [dungeonByKey(DungeonKeys.SpireOfSolitaryEnlightenment), alchemy],
    item_bonuses: {
      2: "Увеличивает бонус Дендро урона на 15%.",
      4: "Попадание элементальным навыком или взрывом стихии снижает Дендро сопротивление врага на 30% на 8 сек. Этот эффект срабатывает, даже если экипированный этими артефактами персонаж не на поле боя.",
    },
    [ArtifactSlotKeys.Flower]: {
      name: "Странник лабиринта",
      image_src: imageSrc(`${ArtifactSetKeys.DeepwoodMemories}/${ArtifactSlotKeys.Flower}_icon.webp`),
    },
    [ArtifactSlotKeys.PlumeOfDeath]: {
      name: "Мудрец лозы",
      image_src: imageSrc(`${ArtifactSetKeys.DeepwoodMemories}/${ArtifactSlotKeys.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactSlotKeys.SandsOfEon]: {
      name: "Час осмысления",
      image_src: imageSrc(`${ArtifactSetKeys.DeepwoodMemories}/${ArtifactSlotKeys.SandsOfEon}_icon.webp`),
    },
    [ArtifactSlotKeys.GobletOfEonothem]: {
      name: "Лампа заблудших",
      image_src: imageSrc(`${ArtifactSetKeys.DeepwoodMemories}/${ArtifactSlotKeys.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactSlotKeys.CircletOfLogos]: {
      name: "Лавровый венец",
      image_src: imageSrc(`${ArtifactSetKeys.DeepwoodMemories}/${ArtifactSlotKeys.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetKeys.DesertPavilionChronicle]: {
    key: ArtifactSetKeys.DesertPavilionChronicle,
    name: "Хроники Чертогов в пустыне",
    rarities: [4, 5],
    source: [dungeonByKey(DungeonKeys.CityOfGold), alchemy],
    item_bonuses: {
      2: "Увеличивает бонус Анемо урона на 15%.",
      4: "Попадание заряженной атакой на 15 сек. повышает скорость обычной атаки на 10%, а урон обычной атаки, заряженной атаки и атаки в падении — на 40%.",
    },
    [ArtifactSlotKeys.Flower]: {
      name: "Рождение города королей",
      image_src: imageSrc(`${ArtifactSetKeys.DesertPavilionChronicle}/${ArtifactSlotKeys.Flower}_icon.webp`),
    },
    [ArtifactSlotKeys.PlumeOfDeath]: {
      name: "Конец золотого царства",
      image_src: imageSrc(`${ArtifactSetKeys.DesertPavilionChronicle}/${ArtifactSlotKeys.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactSlotKeys.SandsOfEon]: {
      name: "Часы потерянного пути",
      image_src: imageSrc(`${ArtifactSetKeys.DesertPavilionChronicle}/${ArtifactSlotKeys.SandsOfEon}_icon.webp`),
    },
    [ArtifactSlotKeys.GobletOfEonothem]: {
      name: "Хранитель дивной мечты",
      image_src: imageSrc(`${ArtifactSetKeys.DesertPavilionChronicle}/${ArtifactSlotKeys.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactSlotKeys.CircletOfLogos]: {
      name: "Наследие пустынной знати",
      image_src: imageSrc(`${ArtifactSetKeys.DesertPavilionChronicle}/${ArtifactSlotKeys.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetKeys.EchoesOfAnOffering]: {
    key: ArtifactSetKeys.EchoesOfAnOffering,
    name: "Отголоски подношения",
    rarities: [4, 5],
    source: [dungeonByKey(DungeonKeys.TheLostValley), alchemy],
    item_bonuses: {
      2: "Увеличивает силу атаки на 18%.",
      4: "Попадания обычной атакой с 36% шансом активируют Ритуал долины: урон обычной атаки повышается на 70% от силы атаки. Через 0,05 сек. после нанесения урона обычной атакой эффект исчезает. Если обычной атаке не удалось активировать этот эффект, шанс его активации следующим попаданием возрастает на 20%. Шанс активации возникает не чаще одного раза в 0,2 сек.",
    },
    [ArtifactSlotKeys.Flower]: {
      name: "Цветок призрачного аромата",
      image_src: imageSrc(`${ArtifactSetKeys.EchoesOfAnOffering}/${ArtifactSlotKeys.Flower}_icon.webp`),
    },
    [ArtifactSlotKeys.PlumeOfDeath]: {
      name: "Нефритовый листок",
      image_src: imageSrc(`${ArtifactSetKeys.EchoesOfAnOffering}/${ArtifactSlotKeys.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactSlotKeys.SandsOfEon]: {
      name: "Символ подношения",
      image_src: imageSrc(`${ArtifactSetKeys.EchoesOfAnOffering}/${ArtifactSlotKeys.SandsOfEon}_icon.webp`),
    },
    [ArtifactSlotKeys.GobletOfEonothem]: {
      name: "Чаша истока",
      image_src: imageSrc(`${ArtifactSetKeys.EchoesOfAnOffering}/${ArtifactSlotKeys.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactSlotKeys.CircletOfLogos]: {
      name: "Серьги текучести",
      image_src: imageSrc(`${ArtifactSetKeys.EchoesOfAnOffering}/${ArtifactSlotKeys.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetKeys.EmblemOfSeveredFate]: {
    key: ArtifactSetKeys.EmblemOfSeveredFate,
    name: "Эмблема рассечённой судьбы",
    rarities: [4, 5],
    source: [dungeonByKey(DungeonKeys.MomijiDyedCourt), alchemy],
    item_bonuses: {
      2: "Увеличивает скорость восстановления энергии на 20%.",
      4: "Увеличивает урон взрыва стихий на величину, равную 25% от значения восстановления энергии. Эффект можно увеличить максимум до 75%.",
    },
    [ArtifactSlotKeys.Flower]: {
      name: "Великолепная цуба",
      image_src: imageSrc(`${ArtifactSetKeys.EmblemOfSeveredFate}/${ArtifactSlotKeys.Flower}_icon.webp`),
    },
    [ArtifactSlotKeys.PlumeOfDeath]: {
      name: "Обрезанное перо",
      image_src: imageSrc(`${ArtifactSetKeys.EmblemOfSeveredFate}/${ArtifactSlotKeys.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactSlotKeys.SandsOfEon]: {
      name: "Клетка грозовых облаков",
      image_src: imageSrc(`${ArtifactSetKeys.EmblemOfSeveredFate}/${ArtifactSlotKeys.SandsOfEon}_icon.webp`),
    },
    [ArtifactSlotKeys.GobletOfEonothem]: {
      name: "Алый сосуд",
      image_src: imageSrc(`${ArtifactSetKeys.EmblemOfSeveredFate}/${ArtifactSlotKeys.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactSlotKeys.CircletOfLogos]: {
      name: "Украшенный кабуто",
      image_src: imageSrc(`${ArtifactSetKeys.EmblemOfSeveredFate}/${ArtifactSlotKeys.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetKeys.FinaleOfTheDeepGalleries]: {
    key: ArtifactSetKeys.FinaleOfTheDeepGalleries,
    name: "Финал галерей глубин",
    rarities: [4, 5],
    source: "Подземелье «Заброшенный причал»",
    item_bonuses: {
      2: "Даёт 15% бонус Крио урона.",
      4: "Когда энергия экипированного персонажа равна 0, урон обычной атаки и взрыва стихии повышается на 60%. После того как экипированный персонаж наносит урон обычной атакой, данный эффект на 6 сек. перестаёт применяться для взрыва стихии. После того как экипированный персонаж наносит урон взрывом стихии, данный эффект на 6 сек. перестаёт применяться для обычной атаки. Этот эффект может возникнуть, даже если экипированный персонаж вне поля боя.",
    },
    [ArtifactSlotKeys.Flower]: {
      name: "Отголоски песни галерей глубин",
      image_src: imageSrc(`${ArtifactSetKeys.FinaleOfTheDeepGalleries}/${ArtifactSlotKeys.Flower}_icon.webp`),
    },
    [ArtifactSlotKeys.PlumeOfDeath]: {
      name: "Дальние странствия галерей глубин",
      image_src: imageSrc(`${ArtifactSetKeys.FinaleOfTheDeepGalleries}/${ArtifactSlotKeys.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactSlotKeys.SandsOfEon]: {
      name: "Часы забвения галерей глубин",
      image_src: imageSrc(`${ArtifactSetKeys.FinaleOfTheDeepGalleries}/${ArtifactSlotKeys.SandsOfEon}_icon.webp`),
    },
    [ArtifactSlotKeys.GobletOfEonothem]: {
      name: "Ниспосланный пир галерей глубин",
      image_src: imageSrc(`${ArtifactSetKeys.FinaleOfTheDeepGalleries}/${ArtifactSlotKeys.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactSlotKeys.CircletOfLogos]: {
      name: "Утраченная корона галерей глубин",
      image_src: imageSrc(`${ArtifactSetKeys.FinaleOfTheDeepGalleries}/${ArtifactSlotKeys.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetKeys.FlowerOfParadiseLost]: {
    key: ArtifactSetKeys.FlowerOfParadiseLost,
    name: "Цветок потерянного рая",
    rarities: [4, 5],
    source: [dungeonByKey(DungeonKeys.CityOfGold), alchemy],
    item_bonuses: {
      2: "Увеличивает мастерство стихий на 80 ед.",
      4: "Увеличивает урон реакций Бутонизация, Вегетация и Цветение экипированного этим набором персонажа на 40%. Кроме того, активация реакций Бутонизация, Вегетация и Цветение экипированным этим набором персонажем усилит этот эффект на 25%. Каждое суммирование длится 10 сек. Эффект складывается до 4 раз, может возникнуть раз в 1 сек. и активируется, даже если экипированный этим набором персонаж не активен.",
    },
    [ArtifactSlotKeys.Flower]: {
      name: "Великолепие Ай-Ханум",
      image_src: imageSrc(`${ArtifactSetKeys.FlowerOfParadiseLost}/${ArtifactSlotKeys.Flower}_icon.webp`),
    },
    [ArtifactSlotKeys.PlumeOfDeath]: {
      name: "Угасающий пир",
      image_src: imageSrc(`${ArtifactSetKeys.FlowerOfParadiseLost}/${ArtifactSlotKeys.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactSlotKeys.SandsOfEon]: {
      name: "Застывшее мгновение",
      image_src: imageSrc(`${ArtifactSetKeys.FlowerOfParadiseLost}/${ArtifactSlotKeys.SandsOfEon}_icon.webp`),
    },
    [ArtifactSlotKeys.GobletOfEonothem]: {
      name: "Магический сосуд хранителя тайн",
      image_src: imageSrc(`${ArtifactSetKeys.FlowerOfParadiseLost}/${ArtifactSlotKeys.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactSlotKeys.CircletOfLogos]: {
      name: "Аметистовый венец",
      image_src: imageSrc(`${ArtifactSetKeys.FlowerOfParadiseLost}/${ArtifactSlotKeys.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetKeys.FragmentOfHarmonicWhimsy]: {
    key: ArtifactSetKeys.FragmentOfHarmonicWhimsy,
    name: "Фрагмент гармонической фантазии",
    rarities: [4, 5],
    source: "Подземелье «Обветшалый театр»",
    item_bonuses: {
      2: "Увеличивает силу атаки на 18%.",
      4: "Когда значение Долга жизни увеличивается или уменьшается, наносимый персонажем урон увеличивается на 18% на 6 сек. Эффект может складываться до 3 раз.",
    },
    [ArtifactSlotKeys.Flower]: {
      name: "Увертюра стройной симфонии",
      image_src: imageSrc(`${ArtifactSetKeys.FragmentOfHarmonicWhimsy}/harmonious_symphony_prelude-256x256.png`),
    },
    [ArtifactSlotKeys.PlumeOfDeath]: {
      name: "Ночные раздумья древнего моря",
      image_src: imageSrc(`${ArtifactSetKeys.FragmentOfHarmonicWhimsy}/ancient_seas_nocturnal_musing-256x256.png`),
    },
    [ArtifactSlotKeys.SandsOfEon]: {
      name: "Скерцо поворотов судьбы",
      image_src: imageSrc(`${ArtifactSetKeys.FragmentOfHarmonicWhimsy}/the_grand_jape_of_the_turning_of_fate-256x256.png`),
    },
    [ArtifactSlotKeys.GobletOfEonothem]: {
      name: "Неистовая рапсодия ихора",
      image_src: imageSrc(`${ArtifactSetKeys.FragmentOfHarmonicWhimsy}/ichor_shower_rhapsody-256x256.png`),
    },
    [ArtifactSlotKeys.CircletOfLogos]: {
      name: "Вальс увядших фантазий",
      image_src: imageSrc(`${ArtifactSetKeys.FragmentOfHarmonicWhimsy}/whimsical_dance_of_the_withered-256x256.png`),
    },
    character_recommendations: [{
      key: CharacterKeys.Arlecchino,
      notes: "Один из лучших комплектов для Арлекино, так как повышает важную силу атаки и увеличивает наносимый урон. Так как Арлекино сама накладывает на себя Долг жизни, она выполняет условие 4 предметов.",
    }],
  },
  [ArtifactSetKeys.GildedDreams]: {
    key: ArtifactSetKeys.GildedDreams,
    name: "Позолоченные сны",
    rarities: [4, 5],
    source: [dungeonByKey(DungeonKeys.SpireOfSolitaryEnlightenment), alchemy],
    item_bonuses: {
      2: "Увеличивает мастерство стихий на 80 ед.",
      4: "На 8 сек. после вызова элементальной реакции согласно элементам других персонажей в отряде экипированный этими артефактами персонаж получает следующие усиления: сила атаки повышается на 14% за каждого персонажа с таким же элементом, как и у экипированного персонажа; мастерство стихий повышается на 50 ед. за каждого персонажа с иным элементом. Каждое из этих усилений при подсчёте включает до 3 персонажей. Эффект может возникнуть один раз в 8 сек. Срабатывает, даже если экипированный этими артефактами персонаж не на поле боя.",
    },
    [ArtifactSlotKeys.Flower]: {
      name: "Сон железного цветка",
      image_src: imageSrc(`${ArtifactSetKeys.GildedDreams}/${ArtifactSlotKeys.Flower}_icon.webp`),
    },
    [ArtifactSlotKeys.PlumeOfDeath]: {
      name: "Перо суждения",
      image_src: imageSrc(`${ArtifactSetKeys.GildedDreams}/${ArtifactSlotKeys.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactSlotKeys.SandsOfEon]: {
      name: "Золотые годы",
      image_src: imageSrc(`${ArtifactSetKeys.GildedDreams}/${ArtifactSlotKeys.SandsOfEon}_icon.webp`),
    },
    [ArtifactSlotKeys.GobletOfEonothem]: {
      name: "Последний медовый пир",
      image_src: imageSrc(`${ArtifactSetKeys.GildedDreams}/${ArtifactSlotKeys.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactSlotKeys.CircletOfLogos]: {
      name: "Тень Короля песков",
      image_src: imageSrc(`${ArtifactSetKeys.GildedDreams}/${ArtifactSlotKeys.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetKeys.GladiatorsFinale]: {
    key: ArtifactSetKeys.GladiatorsFinale,
    name: "Конец гладиатора",
    rarities: [4, 5],
    source: ["Награды с босса в мире за 40 первородной смолы",
      "Награды за выполнение заданий во вкладке Опыта (главы 8 и 9)",
      "Подземелья наказания (еженедельные боссы)", "Мистическое подношение (Алхимия)"],
    item_bonuses: {
      2: "Увеличивает силу атаки на 18%.",
      4: "Увеличивает урон обычной атаки на 35%, если персонаж использует одноручное, двуручное или древковое оружие.",
    },
    [ArtifactSlotKeys.Flower]: {
      name: "Ностальгия гладиатора",
      image_src: imageSrc(`${ArtifactSetKeys.GladiatorsFinale}/${ArtifactSlotKeys.Flower}_icon.webp`),
    },
    [ArtifactSlotKeys.PlumeOfDeath]: {
      name: "Судьба гладиатора",
      image_src: imageSrc(`${ArtifactSetKeys.GladiatorsFinale}/${ArtifactSlotKeys.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactSlotKeys.SandsOfEon]: {
      name: "Стремление гладиатора",
      image_src: imageSrc(`${ArtifactSetKeys.GladiatorsFinale}/${ArtifactSlotKeys.SandsOfEon}_icon.webp`),
    },
    [ArtifactSlotKeys.GobletOfEonothem]: {
      name: "Пьянство гладиатора",
      image_src: imageSrc(`${ArtifactSetKeys.GladiatorsFinale}/${ArtifactSlotKeys.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactSlotKeys.CircletOfLogos]: {
      name: "Триумф гладиатора",
      image_src: imageSrc(`${ArtifactSetKeys.GladiatorsFinale}/${ArtifactSlotKeys.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetKeys.GoldenTroupe]: {
    key: ArtifactSetKeys.GoldenTroupe,
    name: "Золотая труппа",
    rarities: [4, 5],
    source: [dungeonByKey(DungeonKeys.DenouementOfSin), alchemy],
    item_bonuses: {
      2: "Увеличивает урон элементального навыка на 20%.",
      4: "Увеличивает урон элементального навыка на 25%. Кроме того, когда персонаж не на поле боя, урон элементального навыка дополнительно увеличивается на 25%. Через 2 сек. после вступления в бой эффект исчезает.",
    },
    [ArtifactSlotKeys.Flower]: {
      name: "Вариация золотой песни",
      image_src: imageSrc(`${ArtifactSetKeys.GoldenTroupe}/${ArtifactSlotKeys.Flower}_icon.webp`),
    },
    [ArtifactSlotKeys.PlumeOfDeath]: {
      name: "Перо золотой птицы",
      image_src: imageSrc(`${ArtifactSetKeys.GoldenTroupe}/${ArtifactSlotKeys.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactSlotKeys.SandsOfEon]: {
      name: "Предзнаменование золотой эпохи",
      image_src: imageSrc(`${ArtifactSetKeys.GoldenTroupe}/${ArtifactSlotKeys.SandsOfEon}_icon.webp`),
    },
    [ArtifactSlotKeys.GobletOfEonothem]: {
      name: "Суета золотой ночи",
      image_src: imageSrc(`${ArtifactSetKeys.GoldenTroupe}/${ArtifactSlotKeys.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactSlotKeys.CircletOfLogos]: {
      name: "Награда Золотой труппы",
      image_src: imageSrc(`${ArtifactSetKeys.GoldenTroupe}/${ArtifactSlotKeys.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetKeys.HeartOfDepth]: {
    key: ArtifactSetKeys.HeartOfDepth,
    name: "Сердце глубин",
    rarities: [4, 5],
    source: [dungeonByKey(DungeonKeys.PeakOfVindagnyr), alchemy],
    item_bonuses: {
      2: "Увеличивает бонус Гидро урона на 15%.",
      4: "Увеличивает урон обычной и заряженной атаки на 30% в течение 15 сек. после использования элементального навыка.",
    },
    [ArtifactSlotKeys.Flower]: {
      name: "Позолоченная брошь",
      image_src: imageSrc(`${ArtifactSetKeys.HeartOfDepth}/${ArtifactSlotKeys.Flower}_icon.webp`),
    },
    [ArtifactSlotKeys.PlumeOfDeath]: {
      name: "Порыв ностальгии",
      image_src: imageSrc(`${ArtifactSetKeys.HeartOfDepth}/${ArtifactSlotKeys.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactSlotKeys.SandsOfEon]: {
      name: "Медный компас",
      image_src: imageSrc(`${ArtifactSetKeys.HeartOfDepth}/${ArtifactSlotKeys.SandsOfEon}_icon.webp`),
    },
    [ArtifactSlotKeys.GobletOfEonothem]: {
      name: "Кубок оглушающих глубин",
      image_src: imageSrc(`${ArtifactSetKeys.HeartOfDepth}/${ArtifactSlotKeys.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactSlotKeys.CircletOfLogos]: {
      name: "Треуголка в пятнах вина",
      image_src: imageSrc(`${ArtifactSetKeys.HeartOfDepth}/${ArtifactSlotKeys.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetKeys.HuskOfOpulentDreams]: {
    key: ArtifactSetKeys.HuskOfOpulentDreams,
    name: "Кокон сладких грёз",
    rarities: [4, 5],
    source: [dungeonByKey(DungeonKeys.SlumberingCourt), alchemy],
    item_bonuses: {
      2: "Увеличивает защиту на 30%.",
      4: "Персонаж, экипированный этим набором артефактов, получает эффект Любопытства в следующих ситуациях: 1 уровень Любопытства даётся активному персонажу после попадания по противнику атакой Гео (не чаще чем раз в 0,3 сек.); когда персонаж находится вне поля боя, он получает 1 ур. Любопытства каждые 3 сек. Любопытство может складываться до 4 ур., каждый ур. прибавляет 6% к защите и 6% к Гео урону. Если персонаж не получает Любопытство в течение 6 сек., то он теряет 1 накопленный уровень Любопытства.",
    },
    [ArtifactSlotKeys.Flower]: {
      name: "Пора расцвета",
      image_src: imageSrc(`${ArtifactSetKeys.HuskOfOpulentDreams}/${ArtifactSlotKeys.Flower}_icon.webp`),
    },
    [ArtifactSlotKeys.PlumeOfDeath]: {
      name: "Перо чертога",
      image_src: imageSrc(`${ArtifactSetKeys.HuskOfOpulentDreams}/${ArtifactSlotKeys.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactSlotKeys.SandsOfEon]: {
      name: "Песнь жизни",
      image_src: imageSrc(`${ArtifactSetKeys.HuskOfOpulentDreams}/${ArtifactSlotKeys.SandsOfEon}_icon.webp`),
    },
    [ArtifactSlotKeys.GobletOfEonothem]: {
      name: "Тыква пробуждения",
      image_src: imageSrc(`${ArtifactSetKeys.HuskOfOpulentDreams}/${ArtifactSlotKeys.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactSlotKeys.CircletOfLogos]: {
      name: "Шляпа телесности",
      image_src: imageSrc(`${ArtifactSetKeys.HuskOfOpulentDreams}/${ArtifactSlotKeys.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetKeys.Instructor]: {
    key: ArtifactSetKeys.Instructor,
    name: "Инструктор",
    rarities: [3, 4],
    source: ["Боссы", "Подземелья наказания (еженедельные боссы)", "Подземелья", "Сундуки", "Элитные враги"],
    item_bonuses: {
      2: "Увеличивает мастерство стихий на 80 ед.",
      4: "Вызов элементальной реакции увеличивает мастерство стихий всех членов отряда на 120 ед. в течение 8 сек.",
    },
    [ArtifactSlotKeys.Flower]: {
      name: "Брошь инструктора",
      image_src: imageSrc(`${ArtifactSetKeys.Instructor}/${ArtifactSlotKeys.Flower}_icon.webp`),
    },
    [ArtifactSlotKeys.PlumeOfDeath]: {
      name: "Перо инструктора",
      image_src: imageSrc(`${ArtifactSetKeys.Instructor}/${ArtifactSlotKeys.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactSlotKeys.SandsOfEon]: {
      name: "Карманные часы инструктора",
      image_src: imageSrc(`${ArtifactSetKeys.Instructor}/${ArtifactSlotKeys.SandsOfEon}_icon.webp`),
    },
    [ArtifactSlotKeys.GobletOfEonothem]: {
      name: "Чайная кружка инструктора",
      image_src: imageSrc(`${ArtifactSetKeys.Instructor}/${ArtifactSlotKeys.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactSlotKeys.CircletOfLogos]: {
      name: "Кепка инструктора",
      image_src: imageSrc(`${ArtifactSetKeys.Instructor}/${ArtifactSlotKeys.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetKeys.Lavawalker]: {
    key: ArtifactSetKeys.Lavawalker,
    name: "Ступающий по лаве",
    rarities: [4, 5],
    source: [dungeonByKey(DungeonKeys.HiddenPalaceOfZhouFormula), alchemy],
    item_bonuses: {
      2: "Пиро сопротивление: +40%",
      4: "Увеличивает урон против врагов, находящихся под действием Пиро, на 35%.",
    },
    [ArtifactSlotKeys.Flower]: {
      name: "Решительность ступающего по лаве",
      image_src: imageSrc(`${ArtifactSetKeys.Lavawalker}/${ArtifactSlotKeys.Flower}_icon.webp`),
    },
    [ArtifactSlotKeys.PlumeOfDeath]: {
      name: "Спасение ступающего по лаве",
      image_src: imageSrc(`${ArtifactSetKeys.Lavawalker}/${ArtifactSlotKeys.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactSlotKeys.SandsOfEon]: {
      name: "Муки ступающего по лаве",
      image_src: imageSrc(`${ArtifactSetKeys.Lavawalker}/${ArtifactSlotKeys.SandsOfEon}_icon.webp`),
    },
    [ArtifactSlotKeys.GobletOfEonothem]: {
      name: "Просветление ступающего по лаве",
      image_src: imageSrc(`${ArtifactSetKeys.Lavawalker}/${ArtifactSlotKeys.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactSlotKeys.CircletOfLogos]: {
      name: "Мудрость ступающего по лаве",
      image_src: imageSrc(`${ArtifactSetKeys.Lavawalker}/${ArtifactSlotKeys.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetKeys.LongNightsOath]: {
    key: ArtifactSetKeys.LongNightsOath,
    name: "Клятва долгой ночи",
    rarities: [4, 5],
    source: "Подземелье «Заброшенный причал»",
    item_bonuses: {
      2: "Урон атак в падении увеличивается на 25%.",
      4: "После того как атака в падении, заряженная атака или элементальный навык экипированного персонажа поражают противника, экипированный персонаж получает 1/2/2 уровня Вечного сияния. Атаки в падении, заряженные атаки и элементальные навыки могут по отдельности вызывать этот эффект один раз в 1 сек. Вечное сияние: урон атаки в падении повышается на 15%. Эффект длится 6 сек. и складывается до 5 раз. Длительность каждого уровня рассчитывается отдельно.",
    },
    [ArtifactSlotKeys.Flower]: {
      name: "Клятва светоносца",
      image_src: imageSrc(`${ArtifactSetKeys.LongNightsOath}/lightkeepers_pledge-256x256.png`),
    },
    [ArtifactSlotKeys.PlumeOfDeath]: {
      name: "Соловьиное перо",
      image_src: imageSrc(`${ArtifactSetKeys.LongNightsOath}/nightingales_tail_feather-256x256.png`),
    },
    [ArtifactSlotKeys.SandsOfEon]: {
      name: "Скорбный колокольчик бессмертного",
      image_src: imageSrc(`${ArtifactSetKeys.LongNightsOath}/undying_ones_mourning_bell-256x256.png`),
    },
    [ArtifactSlotKeys.GobletOfEonothem]: {
      name: "Умолкнувший рог",
      image_src: imageSrc(`${ArtifactSetKeys.LongNightsOath}/a_horn_unwinded-256x256.png`),
    },
    [ArtifactSlotKeys.CircletOfLogos]: {
      name: "Окрашенный шлем",
      image_src: imageSrc(`${ArtifactSetKeys.LongNightsOath}/dyed_tassel-256x256.png`),
    },
    character_recommendations: [{
      key: CharacterKeys.Varesa,
      notes: "Варесе будет очень полезно увеличение урона атак в падении, которые она использует. Поскольку она часто активирует элементальный навык, а также заряженную атаку и атаку в падении после навыка, она может получить максимальный бонус урона.",
    }],
  },
  [ArtifactSetKeys.MaidenBeloved]: {
    key: ArtifactSetKeys.MaidenBeloved,
    name: "Возлюбленная юная дева",
    rarities: [4, 5],
    source: [dungeonByKey(DungeonKeys.ValleyOfRemembrance), alchemy],
    item_bonuses: {
      2: "Увеличивает эффективность лечения на 15%.",
      4: "Увеличивает получаемое лечение всех членов отряда на 20% в течение 10 сек. после использования элементального навыка или взрыва стихии.",
    },
    [ArtifactSlotKeys.Flower]: {
      name: "Далёкая душа юной девы",
      image_src: imageSrc(`${ArtifactSetKeys.MaidenBeloved}/${ArtifactSlotKeys.Flower}_icon.webp`),
    },
    [ArtifactSlotKeys.PlumeOfDeath]: {
      name: "Тоска юной девы",
      image_src: imageSrc(`${ArtifactSetKeys.MaidenBeloved}/${ArtifactSlotKeys.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactSlotKeys.SandsOfEon]: {
      name: "Уходящая молодость юной девы",
      image_src: imageSrc(`${ArtifactSetKeys.MaidenBeloved}/${ArtifactSlotKeys.SandsOfEon}_icon.webp`),
    },
    [ArtifactSlotKeys.GobletOfEonothem]: {
      name: "Досуг юной девы",
      image_src: imageSrc(`${ArtifactSetKeys.MaidenBeloved}/${ArtifactSlotKeys.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactSlotKeys.CircletOfLogos]: {
      name: "Увядающая красота юной девы",
      image_src: imageSrc(`${ArtifactSetKeys.MaidenBeloved}/${ArtifactSlotKeys.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetKeys.MarechausseeHunter]: {
    key: ArtifactSetKeys.MarechausseeHunter,
    name: "Охотник Сумеречного двора",
    rarities: [4, 5],
    source: [dungeonByKey(DungeonKeys.DenouementOfSin), alchemy],
    item_bonuses: {
      2: "Увеличивает урон обычной и заряженной атаки на 15%.",
      4: "Увеличивает шанс крит. попадания на 12% на 5 сек., когда текущее HP увеличивается или снижается. Эффект может складываться до 3 раз.",
    },
    [ArtifactSlotKeys.Flower]: {
      name: "Брошь охотника",
      image_src: imageSrc(`${ArtifactSetKeys.MarechausseeHunter}/${ArtifactSlotKeys.Flower}_icon.webp`),
    },
    [ArtifactSlotKeys.PlumeOfDeath]: {
      name: "Увертюра шедевра",
      image_src: imageSrc(`${ArtifactSetKeys.MarechausseeHunter}/${ArtifactSlotKeys.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactSlotKeys.SandsOfEon]: {
      name: "Мгновение правосудия",
      image_src: imageSrc(`${ArtifactSetKeys.MarechausseeHunter}/${ArtifactSlotKeys.SandsOfEon}_icon.webp`),
    },
    [ArtifactSlotKeys.GobletOfEonothem]: {
      name: "Забытый сосуд",
      image_src: imageSrc(`${ArtifactSetKeys.MarechausseeHunter}/${ArtifactSlotKeys.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactSlotKeys.CircletOfLogos]: {
      name: "Лик старого солдата",
      image_src: imageSrc(`${ArtifactSetKeys.MarechausseeHunter}/${ArtifactSlotKeys.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetKeys.NighttimeWhispersInTheEchoingWoods]: {
    key: ArtifactSetKeys.NighttimeWhispersInTheEchoingWoods,
    name: "Ночной шёпот в Лесу откликающегося эха",
    rarities: [4, 5],
    source: dungeonByKey(DungeonKeys.WaterfallWen),
    item_bonuses: {
      2: "Увеличивает силу атаки на 18%.",
      4: "После использования элементального навыка бонус Гео урона на 10 сек. увеличивается на 20%. Если персонаж находится под защитой щита, созданного реакцией Кристалл, этот эффект увеличивается на 150%. Через 1 сек. после потери щита это дополнительное увеличение исчезает.",
    },
    [ArtifactSlotKeys.Flower]: {
      name: "Бескорыстный цветок",
      image_src: imageSrc(`${ArtifactSetKeys.NighttimeWhispersInTheEchoingWoods}/${ArtifactSlotKeys.Flower}_icon.webp`),
    },
    [ArtifactSlotKeys.PlumeOfDeath]: {
      name: "Искреннее перо",
      image_src: imageSrc(`${ArtifactSetKeys.NighttimeWhispersInTheEchoingWoods}/${ArtifactSlotKeys.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactSlotKeys.SandsOfEon]: {
      name: "Верные песочные часы",
      image_src: imageSrc(`${ArtifactSetKeys.NighttimeWhispersInTheEchoingWoods}/${ArtifactSlotKeys.SandsOfEon}_icon.webp`),
    },
    [ArtifactSlotKeys.GobletOfEonothem]: {
      name: "Великодушная чернильница",
      image_src: imageSrc(`${ArtifactSetKeys.NighttimeWhispersInTheEchoingWoods}/${ArtifactSlotKeys.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactSlotKeys.CircletOfLogos]: {
      name: "Милостивая шляпка",
      image_src: imageSrc(`${ArtifactSetKeys.NighttimeWhispersInTheEchoingWoods}/${ArtifactSlotKeys.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetKeys.NoblesseOblige]: {
    key: ArtifactSetKeys.NoblesseOblige,
    name: "Церемония древней знати",
    rarities: [4, 5],
    source: [dungeonByKey(DungeonKeys.ClearPoolAndMountainCavern), alchemy],
    item_bonuses: {
      2: "Увеличивает урон взрыва стихии на 20%.",
      4: "Активация взрыва стихии увеличивает силу атаки всех членов отряда на 20% в течение 12 сек. Эффект не складывается.",
    },
    [ArtifactSlotKeys.Flower]: {
      name: "Королевский цветок",
      image_src: imageSrc(`${ArtifactSetKeys.NoblesseOblige}/${ArtifactSlotKeys.Flower}_icon.webp`),
    },
    [ArtifactSlotKeys.PlumeOfDeath]: {
      name: "Королевское перо",
      image_src: imageSrc(`${ArtifactSetKeys.NoblesseOblige}/${ArtifactSlotKeys.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactSlotKeys.SandsOfEon]: {
      name: "Королевские карманные часы",
      image_src: imageSrc(`${ArtifactSetKeys.NoblesseOblige}/${ArtifactSlotKeys.SandsOfEon}_icon.webp`),
    },
    [ArtifactSlotKeys.GobletOfEonothem]: {
      name: "Королевская серебряная фляжка",
      image_src: imageSrc(`${ArtifactSetKeys.NoblesseOblige}/${ArtifactSlotKeys.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactSlotKeys.CircletOfLogos]: {
      name: "Королевская маска",
      image_src: imageSrc(`${ArtifactSetKeys.NoblesseOblige}/${ArtifactSlotKeys.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetKeys.NymphsDream]: {
    key: ArtifactSetKeys.NymphsDream,
    name: "Сон нимфы",
    rarities: [4, 5],
    source: [dungeonByKey(DungeonKeys.MoltenIronFortress), alchemy],
    item_bonuses: {
      2: "Даёт 15% бонус Гидро урона.",
      4: "Попадания обычной атакой, заряженной атакой, атакой в падении, элементальным навыком и взрывом стихий по противнику на 8 сек. создаёт 1 уровень Отражения нимфы. Когда действуют 1/2/3 и более уровня Отражения нимфы, сила атаки повышается на 7%/16%/25%, а бонус Гидро урона на 4%/9%/15%. Уровни Отражения нимфы, созданные обычными атаками, заряженными атаками, атаками в падении, элементальными навыками и взрывами стихий, существуют независимо друг от друга.",
    },
    [ArtifactSlotKeys.Flower]: {
      name: "Цветок странствий",
      image_src: imageSrc(`${ArtifactSetKeys.NymphsDream}/${ArtifactSlotKeys.Flower}_icon.webp`),
    },
    [ArtifactSlotKeys.PlumeOfDeath]: {
      name: "Перо злого мага",
      image_src: imageSrc(`${ArtifactSetKeys.NymphsDream}/${ArtifactSlotKeys.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactSlotKeys.SandsOfEon]: {
      name: "Постоянство нимфы",
      image_src: imageSrc(`${ArtifactSetKeys.NymphsDream}/${ArtifactSlotKeys.SandsOfEon}_icon.webp`),
    },
    [ArtifactSlotKeys.GobletOfEonothem]: {
      name: "Чаепитие героев",
      image_src: imageSrc(`${ArtifactSetKeys.NymphsDream}/${ArtifactSlotKeys.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactSlotKeys.CircletOfLogos]: {
      name: "Монокль свирепого дракона",
      image_src: imageSrc(`${ArtifactSetKeys.NymphsDream}/${ArtifactSlotKeys.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetKeys.ObsidianCodex]: {
    key: ArtifactSetKeys.ObsidianCodex,
    name: "Обсидиановый фолиант",
    rarities: [4, 5],
    source: "Подземелье «Святилище мириад духов»",
    item_bonuses: {
      2: "Урон экипированного персонажа на поле в состоянии Благословения Ночного духа увеличивается на 15%.",
      4: "После того как экипированный персонаж, будучи на поле боя, расходует 1 очко Ночного духа, шанс крит. попадания увеличивается на 40% на 6 сек. Этот эффект может возникнуть один раз в 1 сек.",
    },
    [ArtifactSlotKeys.Flower]: {
      name: "Ожидания инородцев",
      image_src: imageSrc(`${ArtifactSetKeys.ObsidianCodex}/reckoning_of_the_xenogenic-256x256.png`),
    },
    [ArtifactSlotKeys.PlumeOfDeath]: {
      name: "Корень костного мозга души",
      image_src: imageSrc(`${ArtifactSetKeys.ObsidianCodex}/root_of_the_spirit_marrow-256x256.png`),
    },
    [ArtifactSlotKeys.SandsOfEon]: {
      name: "Мифы владений ночи",
      image_src: imageSrc(`${ArtifactSetKeys.ObsidianCodex}/myths_of_the_night_realm-256x256.png`),
    },
    [ArtifactSlotKeys.GobletOfEonothem]: {
      name: "Банкет перед состязанием",
      image_src: imageSrc(`${ArtifactSetKeys.ObsidianCodex}/pre_banquet_of_the_contenders-256x256.png`),
    },
    [ArtifactSlotKeys.CircletOfLogos]: {
      name: "Корона святых",
      image_src: imageSrc(`${ArtifactSetKeys.ObsidianCodex}/crown_of_the_saints-256x256.png`),
    },
    character_recommendations: [{ key: CharacterKeys.Varesa, notes: "" }],
  },
  [ArtifactSetKeys.OceanHuedClam]: {
    key: ArtifactSetKeys.OceanHuedClam,
    name: "Моллюск морских красок",
    rarities: [4, 5],
    source: [dungeonByKey(DungeonKeys.SlumberingCourt), alchemy],
    item_bonuses: {
      2: "Повышает бонус лечения на 15%.",
      4: "Экипированный этим набором артефактов персонаж при лечении соратников создаёт на 3 сек. Пузырь морских красок. Пузырь регистрирует восстановленное при лечении HP (в том числе избыточное, когда лечение превышает максимум здоровья). После окончания действия Пузырь взрывается и наносит окружающим врагам урон в размере 90% учтённого объёма лечения (урон рассчитывается так же, как для эффектов Заряжен и Сверхпроводник, но на него не действуют бонусы мастерства стихий, уровня и реакций). Пузырь морских красок можно создавать не чаще чем раз в 3,5 сек. Пузырь может записать до 30 000 восстановленного HP, в том числе HP избыточного лечения. Для отряда не может существовать больше одного Пузыря морских красок одновременно. Этот эффект действует, даже если персонаж, экипированный набором артефактов, не находится на поле боя.",
    },
    [ArtifactSlotKeys.Flower]: {
      name: "Цветок морских красок",
      image_src: imageSrc(`${ArtifactSetKeys.OceanHuedClam}/${ArtifactSlotKeys.Flower}_icon.webp`),
    },
    [ArtifactSlotKeys.PlumeOfDeath]: {
      name: "Перо глубинного дворца",
      image_src: imageSrc(`${ArtifactSetKeys.OceanHuedClam}/${ArtifactSlotKeys.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactSlotKeys.SandsOfEon]: {
      name: "Раковина разлуки",
      image_src: imageSrc(`${ArtifactSetKeys.OceanHuedClam}/${ArtifactSlotKeys.SandsOfEon}_icon.webp`),
    },
    [ArtifactSlotKeys.GobletOfEonothem]: {
      name: "Жемчужная клетка",
      image_src: imageSrc(`${ArtifactSetKeys.OceanHuedClam}/${ArtifactSlotKeys.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactSlotKeys.CircletOfLogos]: {
      name: "Корона Ватацуми",
      image_src: imageSrc(`${ArtifactSetKeys.OceanHuedClam}/${ArtifactSlotKeys.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetKeys.PaleFlame]: {
    key: ArtifactSetKeys.PaleFlame,
    name: "Бледный огонь",
    rarities: [4, 5],
    source: [dungeonByKey(DungeonKeys.RidgeWatch), alchemy],
    item_bonuses: {
      2: "Увеличивает физ. урон на 25%.",
      4: "Когда элементальный навык попадает по врагам, атака увеличивается на 9% в течение 7 сек. Эффект может складываться до 2 раз и возникнуть не чаще 1 раза за 0,3 сек. На 2 уровне складывания эффект набора из 2 вещей увеличивается на 100%.",
    },
    [ArtifactSlotKeys.Flower]: {
      name: "Незапятнанный цветок",
      image_src: imageSrc(`${ArtifactSetKeys.PaleFlame}/${ArtifactSlotKeys.Flower}_icon.webp`),
    },
    [ArtifactSlotKeys.PlumeOfDeath]: {
      name: "Перо мудрого лекаря",
      image_src: imageSrc(`${ArtifactSetKeys.PaleFlame}/${ArtifactSlotKeys.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactSlotKeys.SandsOfEon]: {
      name: "Замершее мгновение",
      image_src: imageSrc(`${ArtifactSetKeys.PaleFlame}/${ArtifactSlotKeys.SandsOfEon}_icon.webp`),
    },
    [ArtifactSlotKeys.GobletOfEonothem]: {
      name: "Превосходящая чаша",
      image_src: imageSrc(`${ArtifactSetKeys.PaleFlame}/${ArtifactSlotKeys.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactSlotKeys.CircletOfLogos]: {
      name: "Смеющаяся маска",
      image_src: imageSrc(`${ArtifactSetKeys.PaleFlame}/${ArtifactSlotKeys.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetKeys.RetracingBolide]: {
    key: ArtifactSetKeys.RetracingBolide,
    name: "Встречная комета",
    rarities: [4, 5],
    source: [dungeonByKey(DungeonKeys.DomainOfGuyun), alchemy],
    item_bonuses: {
      2: "Увеличивает прочность щита на 35%.",
      4: "Под защитой щита увеличивает урон обычной и заряженной атаки на 40%.",
    },
    [ArtifactSlotKeys.Flower]: {
      name: "Цветок равноденствия",
      image_src: imageSrc(`${ArtifactSetKeys.RetracingBolide}/${ArtifactSlotKeys.Flower}_icon.webp`),
    },
    [ArtifactSlotKeys.PlumeOfDeath]: {
      name: "Конец равноденствия",
      image_src: imageSrc(`${ArtifactSetKeys.RetracingBolide}/${ArtifactSlotKeys.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactSlotKeys.SandsOfEon]: {
      name: "Час равноденствия",
      image_src: imageSrc(`${ArtifactSetKeys.RetracingBolide}/${ArtifactSlotKeys.SandsOfEon}_icon.webp`),
    },
    [ArtifactSlotKeys.GobletOfEonothem]: {
      name: "Шар равноденствия",
      image_src: imageSrc(`${ArtifactSetKeys.RetracingBolide}/${ArtifactSlotKeys.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactSlotKeys.CircletOfLogos]: {
      name: "Маска равноденствия",
      image_src: imageSrc(`${ArtifactSetKeys.RetracingBolide}/${ArtifactSlotKeys.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetKeys.ScrollOfTheHeroOfCinderCity]: {
    key: ArtifactSetKeys.ScrollOfTheHeroOfCinderCity,
    name: "Свиток героя сожжённого города",
    rarities: [4, 5],
    source: "Подземелье «Святилище мириадов духов»",
    item_bonuses: {
      2: "Когда член отряда поблизости активирует Вспышку Ночного духа, экипированный персонаж восстанавливает 6 ед. энергии.",
      4: "После того как экипированный персонаж активирует реакцию, связанную с его элементом, все члены отряда поблизости получают 12% бонус урона элементами, связанными с этой реакцией, на 15 сек. Если экипированный персонаж, активируя данный эффект, находится в состоянии Благословение Ночного духа, все персонажи отряда поблизости дополнительно получают 28% бонус урона элементами, связанными с этой реакцией, на 20 сек. Такой эффект может возникнуть, даже если персонаж не находится на поле боя. Бонусы одноимённых наборов артефактов не суммируются.",
    },
    [ArtifactSlotKeys.Flower]: {
      name: "Талисман укротителя зверей",
      image_src: imageSrc(`${ArtifactSetKeys.ScrollOfTheHeroOfCinderCity}/beast_tamers_talisman-256x256.png`),
    },
    [ArtifactSlotKeys.PlumeOfDeath]: {
      name: "Маячок горного патрульного",
      image_src: imageSrc(`${ArtifactSetKeys.ScrollOfTheHeroOfCinderCity}/mountain_rangers_marker-256x256.png`),
    },
    [ArtifactSlotKeys.SandsOfEon]: {
      name: "Золотые часы мистика",
      image_src: imageSrc(`${ArtifactSetKeys.ScrollOfTheHeroOfCinderCity}/mystics_gold_dial-256x256.png`),
    },
    [ArtifactSlotKeys.GobletOfEonothem]: {
      name: "Кубок бродячего исследователя",
      image_src: imageSrc(`${ArtifactSetKeys.ScrollOfTheHeroOfCinderCity}/wandering_scholars_claw_cup-256x256.png`),
    },
    [ArtifactSlotKeys.CircletOfLogos]: {
      name: "Перьевая маска воина-демона",
      image_src: imageSrc(`${ArtifactSetKeys.ScrollOfTheHeroOfCinderCity}/demon_warriors_feather_mask-256x256.png`),
    },
    character_recommendations: [
      { key: CharacterKeys.Chevreuse, notes: "" },
      { key: CharacterKeys.Iansan, notes: "" },
      { key: CharacterKeys.Xilonen, notes: "" },
    ],
  },
  [ArtifactSetKeys.ShimenawasReminiscence]: {
    key: ArtifactSetKeys.ShimenawasReminiscence,
    name: "Воспоминания Симэнавы",
    rarities: [4, 5],
    source: [dungeonByKey(DungeonKeys.MomijiDyedCourt), alchemy],
    item_bonuses: {
      2: "Увеличивает силу атаки на 18%.",
      4: "При использовании элементального навыка, если у персонажа 15 или более единиц энергии, он теряет 15 единиц энергии, а урон обычной атаки, заряженной атаки и атаки в падении увеличивается на 50% в течение 10 сек. Эффект нельзя активировать повторно в течение этого времени.",
    },
    [ArtifactSlotKeys.Flower]: {
      name: "Опутывающий цветок",
      image_src: imageSrc(`${ArtifactSetKeys.ShimenawasReminiscence}/${ArtifactSlotKeys.Flower}_icon.webp`),
    },
    [ArtifactSlotKeys.PlumeOfDeath]: {
      name: "Стрела воспоминаний",
      image_src: imageSrc(`${ArtifactSetKeys.ShimenawasReminiscence}/${ArtifactSlotKeys.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactSlotKeys.SandsOfEon]: {
      name: "Мгновение росы",
      image_src: imageSrc(`${ArtifactSetKeys.ShimenawasReminiscence}/${ArtifactSlotKeys.SandsOfEon}_icon.webp`),
    },
    [ArtifactSlotKeys.GobletOfEonothem]: {
      name: "Полное надежд сердце",
      image_src: imageSrc(`${ArtifactSetKeys.ShimenawasReminiscence}/${ArtifactSlotKeys.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactSlotKeys.CircletOfLogos]: {
      name: "Непостоянный лик",
      image_src: imageSrc(`${ArtifactSetKeys.ShimenawasReminiscence}/${ArtifactSlotKeys.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetKeys.SongOfDaysPast]: {
    key: ArtifactSetKeys.SongOfDaysPast,
    name: "Песнь былых времён",
    rarities: [4, 5],
    source: dungeonByKey(DungeonKeys.WaterfallWen),
    item_bonuses: {
      2: "Повышает бонус лечения на 15%.",
      4: "Экипированный персонаж при лечении членов отряда на 6 сек. создаёт эффект Стремления, который регистрирует осуществлённое лечение (в том числе избыточное). С завершением длительности Стремление превращается в Волны былых времён: при попадании обычной атаки, заряженной атаки, атаки в падении, элементального навыка или взрыва стихии вашего активного персонажа по противнику наносимый урон увеличивается на 8% от общего количества лечения, зарегистрированного Стремлением. После 5 активаций или через 10 сек. эффект Волн былых времён исчезает. Однократный эффект Стремления регистрирует до 15 000 ед. HP. Одновременно может существовать только одно Стремление, но оно регистрирует лечение, предоставляемое несколькими экипированными персонажами сразу. Этот эффект активируется, даже если экипированный персонаж не на поле боя.",
    },
    [ArtifactSlotKeys.Flower]: {
      name: "Забытая клятва былых времён",
      image_src: imageSrc(`${ArtifactSetKeys.SongOfDaysPast}/${ArtifactSlotKeys.Flower}_icon.webp`),
    },
    [ArtifactSlotKeys.PlumeOfDeath]: {
      name: "Воспоминания о былых временах",
      image_src: imageSrc(`${ArtifactSetKeys.SongOfDaysPast}/${ArtifactSlotKeys.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactSlotKeys.SandsOfEon]: {
      name: "Отзвуки былых времён",
      image_src: imageSrc(`${ArtifactSetKeys.SongOfDaysPast}/${ArtifactSlotKeys.SandsOfEon}_icon.webp`),
    },
    [ArtifactSlotKeys.GobletOfEonothem]: {
      name: "Обещанный сон былых времён",
      image_src: imageSrc(`${ArtifactSetKeys.SongOfDaysPast}/${ArtifactSlotKeys.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactSlotKeys.CircletOfLogos]: {
      name: "Поэзия былых времён",
      image_src: imageSrc(`${ArtifactSetKeys.SongOfDaysPast}/${ArtifactSlotKeys.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetKeys.TenacityOfTheMillelith]: {
    key: ArtifactSetKeys.TenacityOfTheMillelith,
    name: "Стойкость Миллелита",
    rarities: [4, 5],
    source: [dungeonByKey(DungeonKeys.RidgeWatch), alchemy],
    item_bonuses: {
      2: "Увеличивает НР на 20%",
      4: "Когда элементальный навык попадает по врагам, атака всех находящихся поблизости персонажей в отряде, увеличивается на 20%, а прочность их щита увеличивается на 30%. Эффект длится 3 сек. и может возникнуть 1 раз в 0,5 сек. Этот эффект может быть активирован, даже если персонаж, экипированный этим набором артефактов, не находится на поле боя.",
    },
    [ArtifactSlotKeys.Flower]: {
      name: "Цветок почестей",
      image_src: imageSrc(`${ArtifactSetKeys.TenacityOfTheMillelith}/${ArtifactSlotKeys.Flower}_icon.webp`),
    },
    [ArtifactSlotKeys.PlumeOfDeath]: {
      name: "Боевое перо командира",
      image_src: imageSrc(`${ArtifactSetKeys.TenacityOfTheMillelith}/${ArtifactSlotKeys.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactSlotKeys.SandsOfEon]: {
      name: "Золотые часы",
      image_src: imageSrc(`${ArtifactSetKeys.TenacityOfTheMillelith}/${ArtifactSlotKeys.SandsOfEon}_icon.webp`),
    },
    [ArtifactSlotKeys.GobletOfEonothem]: {
      name: "Золотой кубок клятвы",
      image_src: imageSrc(`${ArtifactSetKeys.TenacityOfTheMillelith}/${ArtifactSlotKeys.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactSlotKeys.CircletOfLogos]: {
      name: "Древний шлем генерала",
      image_src: imageSrc(`${ArtifactSetKeys.TenacityOfTheMillelith}/${ArtifactSlotKeys.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetKeys.ThunderingFury]: {
    key: ArtifactSetKeys.ThunderingFury,
    name: "Громогласный рёв ярости",
    rarities: [4, 5],
    source: [dungeonByKey(DungeonKeys.MidsummerCourtyard), alchemy],
    item_bonuses: {
      2: "Увеличивает бонус Электро урона на 15%.",
      4: "Увеличивает урон реакций Перегрузка, Заряжен, Сверхпроводник и Вегетация на 40%. Урон от реакции Обострение увеличивается на 20%. При активации этих реакций, а также реакции Стимуляция, время отката элементального навыка уменьшается на 1 сек. Эффект может возникнуть не чаще 1 раза в 0,8 сек.",
    },
    [ArtifactSlotKeys.Flower]: {
      name: "Милосердие Громовой птицы",
      image_src: imageSrc(`${ArtifactSetKeys.ThunderingFury}/${ArtifactSlotKeys.Flower}_icon.webp`),
    },
    [ArtifactSlotKeys.PlumeOfDeath]: {
      name: "Переживший катастрофу",
      image_src: imageSrc(`${ArtifactSetKeys.ThunderingFury}/${ArtifactSlotKeys.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactSlotKeys.SandsOfEon]: {
      name: "Песочные часы грома",
      image_src: imageSrc(`${ArtifactSetKeys.ThunderingFury}/${ArtifactSlotKeys.SandsOfEon}_icon.webp`),
    },
    [ArtifactSlotKeys.GobletOfEonothem]: {
      name: "Предвестник бури",
      image_src: imageSrc(`${ArtifactSetKeys.ThunderingFury}/${ArtifactSlotKeys.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactSlotKeys.CircletOfLogos]: {
      name: "Корона призывателя грома",
      image_src: imageSrc(`${ArtifactSetKeys.ThunderingFury}/${ArtifactSlotKeys.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetKeys.Thundersoother]: {
    key: ArtifactSetKeys.Thundersoother,
    name: "Усмиряющий гром",
    rarities: [4, 5],
    source: [dungeonByKey(DungeonKeys.MidsummerCourtyard), alchemy],
    item_bonuses: {
      2: "Повышает Электро сопротивление на +40%.",
      4: "Увеличивает урон против врагов, находящихся под действием Электро, на 35%.",
    },
    [ArtifactSlotKeys.Flower]: {
      name: "Сердце усмиряющего гром",
      image_src: imageSrc(`${ArtifactSetKeys.Thundersoother}/${ArtifactSlotKeys.Flower}_icon.webp`),
    },
    [ArtifactSlotKeys.PlumeOfDeath]: {
      name: "Перо усмиряющего гром",
      image_src: imageSrc(`${ArtifactSetKeys.Thundersoother}/${ArtifactSlotKeys.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactSlotKeys.SandsOfEon]: {
      name: "Время усмиряющего гром",
      image_src: imageSrc(`${ArtifactSetKeys.Thundersoother}/${ArtifactSlotKeys.SandsOfEon}_icon.webp`),
    },
    [ArtifactSlotKeys.GobletOfEonothem]: {
      name: "Бокал усмиряющего гром",
      image_src: imageSrc(`${ArtifactSetKeys.Thundersoother}/${ArtifactSlotKeys.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactSlotKeys.CircletOfLogos]: {
      name: "Корона усмиряющего гром",
      image_src: imageSrc(`${ArtifactSetKeys.Thundersoother}/${ArtifactSlotKeys.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetKeys.VermillionHereafter]: {
    key: ArtifactSetKeys.VermillionHereafter,
    name: "Киноварное загробье",
    rarities: [4, 5],
    source: [dungeonByKey(DungeonKeys.TheLostValley), alchemy],
    item_bonuses: {
      2: "Увеличивает силу атаки на 18%.",
      4: "После активации взрыва стихии на 16 сек. создаёт Скрытое сияние, которое повышает силу атаки на 8%. Сила атаки персонажа увеличивается ещё на 10%, когда он теряет HP. Этот эффект может возникнуть максимум 4 раза и не чаще, чем раз в 0,8 сек. Скрытое сияние исчезает, когда персонаж покидает поле боя. При повторной активации взрыва стихии существующее Скрытое сияние снимается.",
    },
    [ArtifactSlotKeys.Flower]: {
      name: "Цветение жизни",
      image_src: imageSrc(`${ArtifactSetKeys.VermillionHereafter}/${ArtifactSlotKeys.Flower}_icon.webp`),
    },
    [ArtifactSlotKeys.PlumeOfDeath]: {
      name: "Перо скрытого сияния",
      image_src: imageSrc(`${ArtifactSetKeys.VermillionHereafter}/${ArtifactSlotKeys.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactSlotKeys.SandsOfEon]: {
      name: "Солнечная реликвия",
      image_src: imageSrc(`${ArtifactSetKeys.VermillionHereafter}/${ArtifactSlotKeys.SandsOfEon}_icon.webp`),
    },
    [ArtifactSlotKeys.GobletOfEonothem]: {
      name: "Мгновение договора",
      image_src: imageSrc(`${ArtifactSetKeys.VermillionHereafter}/${ArtifactSlotKeys.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactSlotKeys.CircletOfLogos]: {
      name: "Громогласный облик",
      image_src: imageSrc(`${ArtifactSetKeys.VermillionHereafter}/${ArtifactSlotKeys.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetKeys.ViridescentVenerer]: {
    key: ArtifactSetKeys.ViridescentVenerer,
    name: "Изумрудная тень",
    rarities: [4, 5],
    source: [dungeonByKey(DungeonKeys.ValleyOfRemembrance), alchemy],
    item_bonuses: {
      2: "Увеличивает бонус Анемо урона на 15%.",
      4: "Увеличивает урон Рассеивания на 60%. При взаимодействии Рассеивания с другим элементом, также понижает сопротивление противника к соответствующему элементу на 40% в течение 10 сек.",
    },
    [ArtifactSlotKeys.Flower]: {
      name: "Воспоминания об изумрудных лугах",
      image_src: imageSrc(`${ArtifactSetKeys.ViridescentVenerer}/${ArtifactSlotKeys.Flower}_icon.webp`),
    },
    [ArtifactSlotKeys.PlumeOfDeath]: {
      name: "Оперение стрелы изумрудного охотника",
      image_src: imageSrc(`${ArtifactSetKeys.ViridescentVenerer}/${ArtifactSlotKeys.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactSlotKeys.SandsOfEon]: {
      name: "Решимость изумрудного охотника",
      image_src: imageSrc(`${ArtifactSetKeys.ViridescentVenerer}/${ArtifactSlotKeys.SandsOfEon}_icon.webp`),
    },
    [ArtifactSlotKeys.GobletOfEonothem]: {
      name: "Сосуд изумрудного охотника",
      image_src: imageSrc(`${ArtifactSetKeys.ViridescentVenerer}/${ArtifactSlotKeys.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactSlotKeys.CircletOfLogos]: {
      name: "Венок изумрудного охотника",
      image_src: imageSrc(`${ArtifactSetKeys.ViridescentVenerer}/${ArtifactSlotKeys.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetKeys.VourukashasGlow]: {
    key: ArtifactSetKeys.VourukashasGlow,
    name: "Сияние Вурукаши",
    rarities: [4, 5],
    source: [dungeonByKey(DungeonKeys.MoltenIronFortress), alchemy],
    item_bonuses: {
      2: "Увеличивает HP на 20%.",
      4: "Увеличивает урон элементального навыка и взрыва стихии на 10%. Если экипированный персонаж получает урон, этот эффект повышения урона увеличивается на 80% на 5 сек. Эффект может складываться до 5 раз. Отсчёт времени каждого уровня происходит отдельно. Эти эффекты активируются, даже если экипированный персонаж не на поле боя.",
    },
    [ArtifactSlotKeys.Flower]: {
      name: "Тычинка истока Хварны",
      image_src: imageSrc(`${ArtifactSetKeys.VourukashasGlow}/${ArtifactSlotKeys.Flower}_icon.webp`),
    },
    [ArtifactSlotKeys.PlumeOfDeath]: {
      name: "Самоцветное перо",
      image_src: imageSrc(`${ArtifactSetKeys.VourukashasGlow}/${ArtifactSlotKeys.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactSlotKeys.SandsOfEon]: {
      name: "Древнее увядание",
      image_src: imageSrc(`${ArtifactSetKeys.VourukashasGlow}/${ArtifactSlotKeys.SandsOfEon}_icon.webp`),
    },
    [ArtifactSlotKeys.GobletOfEonothem]: {
      name: "Пир необузданного веселья",
      image_src: imageSrc(`${ArtifactSetKeys.VourukashasGlow}/${ArtifactSlotKeys.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactSlotKeys.CircletOfLogos]: {
      name: "Сердце светозарности Хварны",
      image_src: imageSrc(`${ArtifactSetKeys.VourukashasGlow}/${ArtifactSlotKeys.CircletOfLogos}_icon.webp`),
    },
  },
  [ArtifactSetKeys.WanderersTroupe]: {
    key: ArtifactSetKeys.WanderersTroupe,
    name: "Странствующий ансамбль",
    rarities: [4, 5],
    source: ["Награды с босса в мире за 40 первородной смолы", "Подземелья наказания (еженедельные боссы)",
      "Мистическое подношение (Алхимия)"],
    item_bonuses: {
      2: "Увеличивает мастерство стихий на 80 ед.",
      4: "Увеличивает урон заряженной атаки на 35%, если персонаж использует катализатор или стрелковое оружие.",
    },
    [ArtifactSlotKeys.Flower]: {
      name: "Рассвет ансамбля",
      image_src: imageSrc(`${ArtifactSetKeys.WanderersTroupe}/${ArtifactSlotKeys.Flower}_icon.webp`),
    },
    [ArtifactSlotKeys.PlumeOfDeath]: {
      name: "Оперение стрелы барда",
      image_src: imageSrc(`${ArtifactSetKeys.WanderersTroupe}/${ArtifactSlotKeys.PlumeOfDeath}_icon.webp`),
    },
    [ArtifactSlotKeys.SandsOfEon]: {
      name: "Окончание концерта",
      image_src: imageSrc(`${ArtifactSetKeys.WanderersTroupe}/${ArtifactSlotKeys.SandsOfEon}_icon.webp`),
    },
    [ArtifactSlotKeys.GobletOfEonothem]: {
      name: "Фляжка странника",
      image_src: imageSrc(`${ArtifactSetKeys.WanderersTroupe}/${ArtifactSlotKeys.GobletOfEonothem}_icon.webp`),
    },
    [ArtifactSlotKeys.CircletOfLogos]: {
      name: "Цилиндр дирижёра",
      image_src: imageSrc(`${ArtifactSetKeys.WanderersTroupe}/${ArtifactSlotKeys.CircletOfLogos}_icon.webp`),
    },
  },
} as Record<ArtifactSetKey, ArtifactSet>;
