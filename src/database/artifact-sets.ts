import dungeons from "./dungeons";
import { ArtifactSetKeys } from "./enums/artifact-set";
import { ArtifactSlotKeys } from "./enums/artifact-slot";
import { CharacterKeys } from "./enums/character";
import { DungeonKeys } from "./enums/dungeon";
import { publicImageSrc } from "@/lib/utils";
import type { ArtifactSet, ArtifactSetKey, ArtifactSetSlot } from "./types/artifact-set";
import type { ArtifactSlotKey } from "./types/artifact-slot";
import type { DungeonKey } from "./types/dungeon";

const alchemy = "Мистическое подношение (Алхимия)";

const dungeonByKey = (key: DungeonKey) => `Подземелье «${dungeons[key].name}»`;

const imageSrc: typeof publicImageSrc = src => publicImageSrc(`artifact-sets/${src}`);
const IconWebSrc = (setKey: keyof typeof ArtifactSetKeys, slotKey: keyof typeof ArtifactSlotKeys) => {
  return imageSrc(`${ArtifactSetKeys[setKey]}/${ArtifactSlotKeys[slotKey]}_icon.webp`);
};

class _ArtifactSet implements ArtifactSet {
  readonly key: ArtifactSet["key"];
  readonly name: ArtifactSet["name"];
  readonly rarities: ArtifactSet["rarities"];
  readonly source: ArtifactSet["source"];
  readonly item_bonuses: ArtifactSet["item_bonuses"];
  readonly [ArtifactSlotKeys.Flower]: ArtifactSet[typeof ArtifactSlotKeys.Flower];
  readonly [ArtifactSlotKeys.Plume]: ArtifactSet[typeof ArtifactSlotKeys.Plume];
  readonly [ArtifactSlotKeys.Sands]: ArtifactSet[typeof ArtifactSlotKeys.Sands];
  readonly [ArtifactSlotKeys.Goblet]: ArtifactSet[typeof ArtifactSlotKeys.Goblet];
  readonly [ArtifactSlotKeys.Circlet]: ArtifactSet[typeof ArtifactSlotKeys.Circlet];

  constructor(
    key: keyof typeof ArtifactSetKeys,
    name: ArtifactSet["name"],
    rarities: ArtifactSet["rarities"],
    source: ArtifactSet["source"],
    item_bonuses: ArtifactSet["item_bonuses"],
    slots: Record<ArtifactSlotKey, ArtifactSetSlot["name"]>,
  ) {
    this.key = ArtifactSetKeys[key];
    this.name = name;
    this.rarities = rarities;
    this.source = source;
    this.item_bonuses = item_bonuses;
    this[ArtifactSlotKeys.Flower] = { name: slots[ArtifactSlotKeys.Flower], image_src: IconWebSrc(key, "Flower") };
    this[ArtifactSlotKeys.Plume] = { name: slots[ArtifactSlotKeys.Plume], image_src: IconWebSrc(key, "Plume") };
    this[ArtifactSlotKeys.Sands] = { name: slots[ArtifactSlotKeys.Sands], image_src: IconWebSrc(key, "Sands") };
    this[ArtifactSlotKeys.Goblet] = { name: slots[ArtifactSlotKeys.Goblet], image_src: IconWebSrc(key, "Goblet") };
    this[ArtifactSlotKeys.Circlet] = { name: slots[ArtifactSlotKeys.Circlet], image_src: IconWebSrc(key, "Circlet") };
  }
}

export default {
  [ArtifactSetKeys.ArchaicPetra]: new _ArtifactSet(
    "ArchaicPetra",
    "Архаичный камень",
    [4, 5],
    [dungeonByKey(DungeonKeys.DomainOfGuyun), alchemy],
    {
      2: "Увеличивает бонус Гео урона на 15%.",
      4: "Подобранный элементальный осколок, образованный реакцией Кристалл, увеличивает бонус элементального урона соответствующего элемента всех членов отряда на 35% в течение 10 сек. Одновременно можно иметь бонус урона только одного элемента.",
    },
    {
      [ArtifactSlotKeys.Flower]: "Цветок скальных трещин",
      [ArtifactSlotKeys.Plume]: "Перо зубчатых пиков",
      [ArtifactSlotKeys.Sands]: "Часы из прочного нефрита",
      [ArtifactSlotKeys.Goblet]: "Кубок из резного камня",
      [ArtifactSlotKeys.Circlet]: "Маска из одинокого базальта",
    },
  ),
  [ArtifactSetKeys.BlizzardStrayer]: {
    key: ArtifactSetKeys.BlizzardStrayer,
    name: "Заблудший в метели",
    rarities: [4, 5],
    source: [dungeonByKey(DungeonKeys.PeakOfVindagnyr), alchemy],
    item_bonuses: {
      2: "Увеличивает бонус Крио урона на 15%.",
      4: "Атаки по противникам с эффектом Крио увеличивают шанс крит. попадания на 20%. Если противник имеет статус Заморозка, то дополнительно увеличивает шанс крит. попадания на 20%.",
    },
    [ArtifactSlotKeys.Flower]: { name: "Занесённая снегом память", image_src: IconWebSrc("BlizzardStrayer", "Flower") },
    [ArtifactSlotKeys.Plume]: { name: "Решимость крушителя льда", image_src: IconWebSrc("BlizzardStrayer", "Plume") },
    [ArtifactSlotKeys.Sands]: { name: "Гибель замёрзшей родины", image_src: IconWebSrc("BlizzardStrayer", "Sands") },
    [ArtifactSlotKeys.Goblet]: { name: "Морозная гордость", image_src: IconWebSrc("BlizzardStrayer", "Goblet") },
    [ArtifactSlotKeys.Circlet]: { name: "Эхо осколков инея", image_src: IconWebSrc("BlizzardStrayer", "Circlet") },
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
      image_src: IconWebSrc("BloodstainedChivalry", "Flower"),
    },
    [ArtifactSlotKeys.Plume]: { name: "Перо рыцаря крови", image_src: IconWebSrc("BloodstainedChivalry", "Plume") },
    [ArtifactSlotKeys.Sands]: {
      name: "Час долга рыцаря крови",
      image_src: IconWebSrc("BloodstainedChivalry", "Sands"),
    },
    [ArtifactSlotKeys.Goblet]: {
      name: "Кубок рыцаря крови",
      image_src: imageSrc(`${ArtifactSetKeys.BloodstainedChivalry}/${ArtifactSlotKeys.Goblet}_icon.webp`),
    },
    [ArtifactSlotKeys.Circlet]: {
      name: "Железная маска рыцаря крови",
      image_src: imageSrc(`${ArtifactSetKeys.BloodstainedChivalry}/${ArtifactSlotKeys.Circlet}_icon.webp`),
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
    [ArtifactSlotKeys.Plume]: {
      name: "Пылающее ведьмино перо",
      image_src: imageSrc(`${ArtifactSetKeys.CrimsonWitchOfFlames}/${ArtifactSlotKeys.Plume}_icon.webp`),
    },
    [ArtifactSlotKeys.Sands]: {
      name: "Ведьмин последний час",
      image_src: imageSrc(`${ArtifactSetKeys.CrimsonWitchOfFlames}/${ArtifactSlotKeys.Sands}_icon.webp`),
    },
    [ArtifactSlotKeys.Goblet]: {
      name: "Пламя ведьминого сердца",
      image_src: imageSrc(`${ArtifactSetKeys.CrimsonWitchOfFlames}/${ArtifactSlotKeys.Goblet}_icon.webp`),
    },
    [ArtifactSlotKeys.Circlet]: {
      name: "Тлеющая ведьмина шляпа",
      image_src: imageSrc(`${ArtifactSetKeys.CrimsonWitchOfFlames}/${ArtifactSlotKeys.Circlet}_icon.webp`),
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
    [ArtifactSlotKeys.Plume]: {
      name: "Мудрец лозы",
      image_src: imageSrc(`${ArtifactSetKeys.DeepwoodMemories}/${ArtifactSlotKeys.Plume}_icon.webp`),
    },
    [ArtifactSlotKeys.Sands]: {
      name: "Час осмысления",
      image_src: imageSrc(`${ArtifactSetKeys.DeepwoodMemories}/${ArtifactSlotKeys.Sands}_icon.webp`),
    },
    [ArtifactSlotKeys.Goblet]: {
      name: "Лампа заблудших",
      image_src: imageSrc(`${ArtifactSetKeys.DeepwoodMemories}/${ArtifactSlotKeys.Goblet}_icon.webp`),
    },
    [ArtifactSlotKeys.Circlet]: {
      name: "Лавровый венец",
      image_src: imageSrc(`${ArtifactSetKeys.DeepwoodMemories}/${ArtifactSlotKeys.Circlet}_icon.webp`),
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
    [ArtifactSlotKeys.Plume]: {
      name: "Конец золотого царства",
      image_src: imageSrc(`${ArtifactSetKeys.DesertPavilionChronicle}/${ArtifactSlotKeys.Plume}_icon.webp`),
    },
    [ArtifactSlotKeys.Sands]: {
      name: "Часы потерянного пути",
      image_src: imageSrc(`${ArtifactSetKeys.DesertPavilionChronicle}/${ArtifactSlotKeys.Sands}_icon.webp`),
    },
    [ArtifactSlotKeys.Goblet]: {
      name: "Хранитель дивной мечты",
      image_src: imageSrc(`${ArtifactSetKeys.DesertPavilionChronicle}/${ArtifactSlotKeys.Goblet}_icon.webp`),
    },
    [ArtifactSlotKeys.Circlet]: {
      name: "Наследие пустынной знати",
      image_src: imageSrc(`${ArtifactSetKeys.DesertPavilionChronicle}/${ArtifactSlotKeys.Circlet}_icon.webp`),
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
    [ArtifactSlotKeys.Plume]: {
      name: "Нефритовый листок",
      image_src: imageSrc(`${ArtifactSetKeys.EchoesOfAnOffering}/${ArtifactSlotKeys.Plume}_icon.webp`),
    },
    [ArtifactSlotKeys.Sands]: {
      name: "Символ подношения",
      image_src: imageSrc(`${ArtifactSetKeys.EchoesOfAnOffering}/${ArtifactSlotKeys.Sands}_icon.webp`),
    },
    [ArtifactSlotKeys.Goblet]: {
      name: "Чаша истока",
      image_src: imageSrc(`${ArtifactSetKeys.EchoesOfAnOffering}/${ArtifactSlotKeys.Goblet}_icon.webp`),
    },
    [ArtifactSlotKeys.Circlet]: {
      name: "Серьги текучести",
      image_src: imageSrc(`${ArtifactSetKeys.EchoesOfAnOffering}/${ArtifactSlotKeys.Circlet}_icon.webp`),
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
    [ArtifactSlotKeys.Plume]: {
      name: "Обрезанное перо",
      image_src: imageSrc(`${ArtifactSetKeys.EmblemOfSeveredFate}/${ArtifactSlotKeys.Plume}_icon.webp`),
    },
    [ArtifactSlotKeys.Sands]: {
      name: "Клетка грозовых облаков",
      image_src: imageSrc(`${ArtifactSetKeys.EmblemOfSeveredFate}/${ArtifactSlotKeys.Sands}_icon.webp`),
    },
    [ArtifactSlotKeys.Goblet]: {
      name: "Алый сосуд",
      image_src: imageSrc(`${ArtifactSetKeys.EmblemOfSeveredFate}/${ArtifactSlotKeys.Goblet}_icon.webp`),
    },
    [ArtifactSlotKeys.Circlet]: {
      name: "Украшенный кабуто",
      image_src: imageSrc(`${ArtifactSetKeys.EmblemOfSeveredFate}/${ArtifactSlotKeys.Circlet}_icon.webp`),
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
    [ArtifactSlotKeys.Plume]: {
      name: "Дальние странствия галерей глубин",
      image_src: imageSrc(`${ArtifactSetKeys.FinaleOfTheDeepGalleries}/${ArtifactSlotKeys.Plume}_icon.webp`),
    },
    [ArtifactSlotKeys.Sands]: {
      name: "Часы забвения галерей глубин",
      image_src: imageSrc(`${ArtifactSetKeys.FinaleOfTheDeepGalleries}/${ArtifactSlotKeys.Sands}_icon.webp`),
    },
    [ArtifactSlotKeys.Goblet]: {
      name: "Ниспосланный пир галерей глубин",
      image_src: imageSrc(`${ArtifactSetKeys.FinaleOfTheDeepGalleries}/${ArtifactSlotKeys.Goblet}_icon.webp`),
    },
    [ArtifactSlotKeys.Circlet]: {
      name: "Утраченная корона галерей глубин",
      image_src: imageSrc(`${ArtifactSetKeys.FinaleOfTheDeepGalleries}/${ArtifactSlotKeys.Circlet}_icon.webp`),
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
    [ArtifactSlotKeys.Plume]: {
      name: "Угасающий пир",
      image_src: imageSrc(`${ArtifactSetKeys.FlowerOfParadiseLost}/${ArtifactSlotKeys.Plume}_icon.webp`),
    },
    [ArtifactSlotKeys.Sands]: {
      name: "Застывшее мгновение",
      image_src: imageSrc(`${ArtifactSetKeys.FlowerOfParadiseLost}/${ArtifactSlotKeys.Sands}_icon.webp`),
    },
    [ArtifactSlotKeys.Goblet]: {
      name: "Магический сосуд хранителя тайн",
      image_src: imageSrc(`${ArtifactSetKeys.FlowerOfParadiseLost}/${ArtifactSlotKeys.Goblet}_icon.webp`),
    },
    [ArtifactSlotKeys.Circlet]: {
      name: "Аметистовый венец",
      image_src: imageSrc(`${ArtifactSetKeys.FlowerOfParadiseLost}/${ArtifactSlotKeys.Circlet}_icon.webp`),
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
    [ArtifactSlotKeys.Plume]: {
      name: "Ночные раздумья древнего моря",
      image_src: imageSrc(`${ArtifactSetKeys.FragmentOfHarmonicWhimsy}/ancient_seas_nocturnal_musing-256x256.png`),
    },
    [ArtifactSlotKeys.Sands]: {
      name: "Скерцо поворотов судьбы",
      image_src: imageSrc(`${ArtifactSetKeys.FragmentOfHarmonicWhimsy}/the_grand_jape_of_the_turning_of_fate-256x256.png`),
    },
    [ArtifactSlotKeys.Goblet]: {
      name: "Неистовая рапсодия ихора",
      image_src: imageSrc(`${ArtifactSetKeys.FragmentOfHarmonicWhimsy}/ichor_shower_rhapsody-256x256.png`),
    },
    [ArtifactSlotKeys.Circlet]: {
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
    [ArtifactSlotKeys.Plume]: {
      name: "Перо суждения",
      image_src: imageSrc(`${ArtifactSetKeys.GildedDreams}/${ArtifactSlotKeys.Plume}_icon.webp`),
    },
    [ArtifactSlotKeys.Sands]: {
      name: "Золотые годы",
      image_src: imageSrc(`${ArtifactSetKeys.GildedDreams}/${ArtifactSlotKeys.Sands}_icon.webp`),
    },
    [ArtifactSlotKeys.Goblet]: {
      name: "Последний медовый пир",
      image_src: imageSrc(`${ArtifactSetKeys.GildedDreams}/${ArtifactSlotKeys.Goblet}_icon.webp`),
    },
    [ArtifactSlotKeys.Circlet]: {
      name: "Тень Короля песков",
      image_src: imageSrc(`${ArtifactSetKeys.GildedDreams}/${ArtifactSlotKeys.Circlet}_icon.webp`),
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
    [ArtifactSlotKeys.Plume]: {
      name: "Судьба гладиатора",
      image_src: imageSrc(`${ArtifactSetKeys.GladiatorsFinale}/${ArtifactSlotKeys.Plume}_icon.webp`),
    },
    [ArtifactSlotKeys.Sands]: {
      name: "Стремление гладиатора",
      image_src: imageSrc(`${ArtifactSetKeys.GladiatorsFinale}/${ArtifactSlotKeys.Sands}_icon.webp`),
    },
    [ArtifactSlotKeys.Goblet]: {
      name: "Пьянство гладиатора",
      image_src: imageSrc(`${ArtifactSetKeys.GladiatorsFinale}/${ArtifactSlotKeys.Goblet}_icon.webp`),
    },
    [ArtifactSlotKeys.Circlet]: {
      name: "Триумф гладиатора",
      image_src: imageSrc(`${ArtifactSetKeys.GladiatorsFinale}/${ArtifactSlotKeys.Circlet}_icon.webp`),
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
    [ArtifactSlotKeys.Plume]: {
      name: "Перо золотой птицы",
      image_src: imageSrc(`${ArtifactSetKeys.GoldenTroupe}/${ArtifactSlotKeys.Plume}_icon.webp`),
    },
    [ArtifactSlotKeys.Sands]: {
      name: "Предзнаменование золотой эпохи",
      image_src: imageSrc(`${ArtifactSetKeys.GoldenTroupe}/${ArtifactSlotKeys.Sands}_icon.webp`),
    },
    [ArtifactSlotKeys.Goblet]: {
      name: "Суета золотой ночи",
      image_src: imageSrc(`${ArtifactSetKeys.GoldenTroupe}/${ArtifactSlotKeys.Goblet}_icon.webp`),
    },
    [ArtifactSlotKeys.Circlet]: {
      name: "Награда Золотой труппы",
      image_src: imageSrc(`${ArtifactSetKeys.GoldenTroupe}/${ArtifactSlotKeys.Circlet}_icon.webp`),
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
    [ArtifactSlotKeys.Plume]: {
      name: "Порыв ностальгии",
      image_src: imageSrc(`${ArtifactSetKeys.HeartOfDepth}/${ArtifactSlotKeys.Plume}_icon.webp`),
    },
    [ArtifactSlotKeys.Sands]: {
      name: "Медный компас",
      image_src: imageSrc(`${ArtifactSetKeys.HeartOfDepth}/${ArtifactSlotKeys.Sands}_icon.webp`),
    },
    [ArtifactSlotKeys.Goblet]: {
      name: "Кубок оглушающих глубин",
      image_src: imageSrc(`${ArtifactSetKeys.HeartOfDepth}/${ArtifactSlotKeys.Goblet}_icon.webp`),
    },
    [ArtifactSlotKeys.Circlet]: {
      name: "Треуголка в пятнах вина",
      image_src: imageSrc(`${ArtifactSetKeys.HeartOfDepth}/${ArtifactSlotKeys.Circlet}_icon.webp`),
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
    [ArtifactSlotKeys.Plume]: {
      name: "Перо чертога",
      image_src: imageSrc(`${ArtifactSetKeys.HuskOfOpulentDreams}/${ArtifactSlotKeys.Plume}_icon.webp`),
    },
    [ArtifactSlotKeys.Sands]: {
      name: "Песнь жизни",
      image_src: imageSrc(`${ArtifactSetKeys.HuskOfOpulentDreams}/${ArtifactSlotKeys.Sands}_icon.webp`),
    },
    [ArtifactSlotKeys.Goblet]: {
      name: "Тыква пробуждения",
      image_src: imageSrc(`${ArtifactSetKeys.HuskOfOpulentDreams}/${ArtifactSlotKeys.Goblet}_icon.webp`),
    },
    [ArtifactSlotKeys.Circlet]: {
      name: "Шляпа телесности",
      image_src: imageSrc(`${ArtifactSetKeys.HuskOfOpulentDreams}/${ArtifactSlotKeys.Circlet}_icon.webp`),
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
    [ArtifactSlotKeys.Plume]: {
      name: "Перо инструктора",
      image_src: imageSrc(`${ArtifactSetKeys.Instructor}/${ArtifactSlotKeys.Plume}_icon.webp`),
    },
    [ArtifactSlotKeys.Sands]: {
      name: "Карманные часы инструктора",
      image_src: imageSrc(`${ArtifactSetKeys.Instructor}/${ArtifactSlotKeys.Sands}_icon.webp`),
    },
    [ArtifactSlotKeys.Goblet]: {
      name: "Чайная кружка инструктора",
      image_src: imageSrc(`${ArtifactSetKeys.Instructor}/${ArtifactSlotKeys.Goblet}_icon.webp`),
    },
    [ArtifactSlotKeys.Circlet]: {
      name: "Кепка инструктора",
      image_src: imageSrc(`${ArtifactSetKeys.Instructor}/${ArtifactSlotKeys.Circlet}_icon.webp`),
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
    [ArtifactSlotKeys.Plume]: {
      name: "Спасение ступающего по лаве",
      image_src: imageSrc(`${ArtifactSetKeys.Lavawalker}/${ArtifactSlotKeys.Plume}_icon.webp`),
    },
    [ArtifactSlotKeys.Sands]: {
      name: "Муки ступающего по лаве",
      image_src: imageSrc(`${ArtifactSetKeys.Lavawalker}/${ArtifactSlotKeys.Sands}_icon.webp`),
    },
    [ArtifactSlotKeys.Goblet]: {
      name: "Просветление ступающего по лаве",
      image_src: imageSrc(`${ArtifactSetKeys.Lavawalker}/${ArtifactSlotKeys.Goblet}_icon.webp`),
    },
    [ArtifactSlotKeys.Circlet]: {
      name: "Мудрость ступающего по лаве",
      image_src: imageSrc(`${ArtifactSetKeys.Lavawalker}/${ArtifactSlotKeys.Circlet}_icon.webp`),
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
    [ArtifactSlotKeys.Plume]: {
      name: "Соловьиное перо",
      image_src: imageSrc(`${ArtifactSetKeys.LongNightsOath}/nightingales_tail_feather-256x256.png`),
    },
    [ArtifactSlotKeys.Sands]: {
      name: "Скорбный колокольчик бессмертного",
      image_src: imageSrc(`${ArtifactSetKeys.LongNightsOath}/undying_ones_mourning_bell-256x256.png`),
    },
    [ArtifactSlotKeys.Goblet]: {
      name: "Умолкнувший рог",
      image_src: imageSrc(`${ArtifactSetKeys.LongNightsOath}/a_horn_unwinded-256x256.png`),
    },
    [ArtifactSlotKeys.Circlet]: {
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
    [ArtifactSlotKeys.Plume]: {
      name: "Тоска юной девы",
      image_src: imageSrc(`${ArtifactSetKeys.MaidenBeloved}/${ArtifactSlotKeys.Plume}_icon.webp`),
    },
    [ArtifactSlotKeys.Sands]: {
      name: "Уходящая молодость юной девы",
      image_src: imageSrc(`${ArtifactSetKeys.MaidenBeloved}/${ArtifactSlotKeys.Sands}_icon.webp`),
    },
    [ArtifactSlotKeys.Goblet]: {
      name: "Досуг юной девы",
      image_src: imageSrc(`${ArtifactSetKeys.MaidenBeloved}/${ArtifactSlotKeys.Goblet}_icon.webp`),
    },
    [ArtifactSlotKeys.Circlet]: {
      name: "Увядающая красота юной девы",
      image_src: imageSrc(`${ArtifactSetKeys.MaidenBeloved}/${ArtifactSlotKeys.Circlet}_icon.webp`),
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
    [ArtifactSlotKeys.Plume]: {
      name: "Увертюра шедевра",
      image_src: imageSrc(`${ArtifactSetKeys.MarechausseeHunter}/${ArtifactSlotKeys.Plume}_icon.webp`),
    },
    [ArtifactSlotKeys.Sands]: {
      name: "Мгновение правосудия",
      image_src: imageSrc(`${ArtifactSetKeys.MarechausseeHunter}/${ArtifactSlotKeys.Sands}_icon.webp`),
    },
    [ArtifactSlotKeys.Goblet]: {
      name: "Забытый сосуд",
      image_src: imageSrc(`${ArtifactSetKeys.MarechausseeHunter}/${ArtifactSlotKeys.Goblet}_icon.webp`),
    },
    [ArtifactSlotKeys.Circlet]: {
      name: "Лик старого солдата",
      image_src: imageSrc(`${ArtifactSetKeys.MarechausseeHunter}/${ArtifactSlotKeys.Circlet}_icon.webp`),
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
    [ArtifactSlotKeys.Plume]: {
      name: "Искреннее перо",
      image_src: imageSrc(`${ArtifactSetKeys.NighttimeWhispersInTheEchoingWoods}/${ArtifactSlotKeys.Plume}_icon.webp`),
    },
    [ArtifactSlotKeys.Sands]: {
      name: "Верные песочные часы",
      image_src: imageSrc(`${ArtifactSetKeys.NighttimeWhispersInTheEchoingWoods}/${ArtifactSlotKeys.Sands}_icon.webp`),
    },
    [ArtifactSlotKeys.Goblet]: {
      name: "Великодушная чернильница",
      image_src: imageSrc(`${ArtifactSetKeys.NighttimeWhispersInTheEchoingWoods}/${ArtifactSlotKeys.Goblet}_icon.webp`),
    },
    [ArtifactSlotKeys.Circlet]: {
      name: "Милостивая шляпка",
      image_src: imageSrc(`${ArtifactSetKeys.NighttimeWhispersInTheEchoingWoods}/${ArtifactSlotKeys.Circlet}_icon.webp`),
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
    [ArtifactSlotKeys.Plume]: {
      name: "Королевское перо",
      image_src: imageSrc(`${ArtifactSetKeys.NoblesseOblige}/${ArtifactSlotKeys.Plume}_icon.webp`),
    },
    [ArtifactSlotKeys.Sands]: {
      name: "Королевские карманные часы",
      image_src: imageSrc(`${ArtifactSetKeys.NoblesseOblige}/${ArtifactSlotKeys.Sands}_icon.webp`),
    },
    [ArtifactSlotKeys.Goblet]: {
      name: "Королевская серебряная фляжка",
      image_src: imageSrc(`${ArtifactSetKeys.NoblesseOblige}/${ArtifactSlotKeys.Goblet}_icon.webp`),
    },
    [ArtifactSlotKeys.Circlet]: {
      name: "Королевская маска",
      image_src: imageSrc(`${ArtifactSetKeys.NoblesseOblige}/${ArtifactSlotKeys.Circlet}_icon.webp`),
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
    [ArtifactSlotKeys.Plume]: {
      name: "Перо злого мага",
      image_src: imageSrc(`${ArtifactSetKeys.NymphsDream}/${ArtifactSlotKeys.Plume}_icon.webp`),
    },
    [ArtifactSlotKeys.Sands]: {
      name: "Постоянство нимфы",
      image_src: imageSrc(`${ArtifactSetKeys.NymphsDream}/${ArtifactSlotKeys.Sands}_icon.webp`),
    },
    [ArtifactSlotKeys.Goblet]: {
      name: "Чаепитие героев",
      image_src: imageSrc(`${ArtifactSetKeys.NymphsDream}/${ArtifactSlotKeys.Goblet}_icon.webp`),
    },
    [ArtifactSlotKeys.Circlet]: {
      name: "Монокль свирепого дракона",
      image_src: imageSrc(`${ArtifactSetKeys.NymphsDream}/${ArtifactSlotKeys.Circlet}_icon.webp`),
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
    [ArtifactSlotKeys.Plume]: {
      name: "Корень костного мозга души",
      image_src: imageSrc(`${ArtifactSetKeys.ObsidianCodex}/root_of_the_spirit_marrow-256x256.png`),
    },
    [ArtifactSlotKeys.Sands]: {
      name: "Мифы владений ночи",
      image_src: imageSrc(`${ArtifactSetKeys.ObsidianCodex}/myths_of_the_night_realm-256x256.png`),
    },
    [ArtifactSlotKeys.Goblet]: {
      name: "Банкет перед состязанием",
      image_src: imageSrc(`${ArtifactSetKeys.ObsidianCodex}/pre_banquet_of_the_contenders-256x256.png`),
    },
    [ArtifactSlotKeys.Circlet]: {
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
    [ArtifactSlotKeys.Plume]: {
      name: "Перо глубинного дворца",
      image_src: imageSrc(`${ArtifactSetKeys.OceanHuedClam}/${ArtifactSlotKeys.Plume}_icon.webp`),
    },
    [ArtifactSlotKeys.Sands]: {
      name: "Раковина разлуки",
      image_src: imageSrc(`${ArtifactSetKeys.OceanHuedClam}/${ArtifactSlotKeys.Sands}_icon.webp`),
    },
    [ArtifactSlotKeys.Goblet]: {
      name: "Жемчужная клетка",
      image_src: imageSrc(`${ArtifactSetKeys.OceanHuedClam}/${ArtifactSlotKeys.Goblet}_icon.webp`),
    },
    [ArtifactSlotKeys.Circlet]: {
      name: "Корона Ватацуми",
      image_src: imageSrc(`${ArtifactSetKeys.OceanHuedClam}/${ArtifactSlotKeys.Circlet}_icon.webp`),
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
    [ArtifactSlotKeys.Plume]: {
      name: "Перо мудрого лекаря",
      image_src: imageSrc(`${ArtifactSetKeys.PaleFlame}/${ArtifactSlotKeys.Plume}_icon.webp`),
    },
    [ArtifactSlotKeys.Sands]: {
      name: "Замершее мгновение",
      image_src: imageSrc(`${ArtifactSetKeys.PaleFlame}/${ArtifactSlotKeys.Sands}_icon.webp`),
    },
    [ArtifactSlotKeys.Goblet]: {
      name: "Превосходящая чаша",
      image_src: imageSrc(`${ArtifactSetKeys.PaleFlame}/${ArtifactSlotKeys.Goblet}_icon.webp`),
    },
    [ArtifactSlotKeys.Circlet]: {
      name: "Смеющаяся маска",
      image_src: imageSrc(`${ArtifactSetKeys.PaleFlame}/${ArtifactSlotKeys.Circlet}_icon.webp`),
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
    [ArtifactSlotKeys.Plume]: {
      name: "Конец равноденствия",
      image_src: imageSrc(`${ArtifactSetKeys.RetracingBolide}/${ArtifactSlotKeys.Plume}_icon.webp`),
    },
    [ArtifactSlotKeys.Sands]: {
      name: "Час равноденствия",
      image_src: imageSrc(`${ArtifactSetKeys.RetracingBolide}/${ArtifactSlotKeys.Sands}_icon.webp`),
    },
    [ArtifactSlotKeys.Goblet]: {
      name: "Шар равноденствия",
      image_src: imageSrc(`${ArtifactSetKeys.RetracingBolide}/${ArtifactSlotKeys.Goblet}_icon.webp`),
    },
    [ArtifactSlotKeys.Circlet]: {
      name: "Маска равноденствия",
      image_src: imageSrc(`${ArtifactSetKeys.RetracingBolide}/${ArtifactSlotKeys.Circlet}_icon.webp`),
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
    [ArtifactSlotKeys.Plume]: {
      name: "Маячок горного патрульного",
      image_src: imageSrc(`${ArtifactSetKeys.ScrollOfTheHeroOfCinderCity}/mountain_rangers_marker-256x256.png`),
    },
    [ArtifactSlotKeys.Sands]: {
      name: "Золотые часы мистика",
      image_src: imageSrc(`${ArtifactSetKeys.ScrollOfTheHeroOfCinderCity}/mystics_gold_dial-256x256.png`),
    },
    [ArtifactSlotKeys.Goblet]: {
      name: "Кубок бродячего исследователя",
      image_src: imageSrc(`${ArtifactSetKeys.ScrollOfTheHeroOfCinderCity}/wandering_scholars_claw_cup-256x256.png`),
    },
    [ArtifactSlotKeys.Circlet]: {
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
    [ArtifactSlotKeys.Plume]: {
      name: "Стрела воспоминаний",
      image_src: imageSrc(`${ArtifactSetKeys.ShimenawasReminiscence}/${ArtifactSlotKeys.Plume}_icon.webp`),
    },
    [ArtifactSlotKeys.Sands]: {
      name: "Мгновение росы",
      image_src: imageSrc(`${ArtifactSetKeys.ShimenawasReminiscence}/${ArtifactSlotKeys.Sands}_icon.webp`),
    },
    [ArtifactSlotKeys.Goblet]: {
      name: "Полное надежд сердце",
      image_src: imageSrc(`${ArtifactSetKeys.ShimenawasReminiscence}/${ArtifactSlotKeys.Goblet}_icon.webp`),
    },
    [ArtifactSlotKeys.Circlet]: {
      name: "Непостоянный лик",
      image_src: imageSrc(`${ArtifactSetKeys.ShimenawasReminiscence}/${ArtifactSlotKeys.Circlet}_icon.webp`),
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
    [ArtifactSlotKeys.Plume]: {
      name: "Воспоминания о былых временах",
      image_src: imageSrc(`${ArtifactSetKeys.SongOfDaysPast}/${ArtifactSlotKeys.Plume}_icon.webp`),
    },
    [ArtifactSlotKeys.Sands]: {
      name: "Отзвуки былых времён",
      image_src: imageSrc(`${ArtifactSetKeys.SongOfDaysPast}/${ArtifactSlotKeys.Sands}_icon.webp`),
    },
    [ArtifactSlotKeys.Goblet]: {
      name: "Обещанный сон былых времён",
      image_src: imageSrc(`${ArtifactSetKeys.SongOfDaysPast}/${ArtifactSlotKeys.Goblet}_icon.webp`),
    },
    [ArtifactSlotKeys.Circlet]: {
      name: "Поэзия былых времён",
      image_src: imageSrc(`${ArtifactSetKeys.SongOfDaysPast}/${ArtifactSlotKeys.Circlet}_icon.webp`),
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
    [ArtifactSlotKeys.Plume]: {
      name: "Боевое перо командира",
      image_src: imageSrc(`${ArtifactSetKeys.TenacityOfTheMillelith}/${ArtifactSlotKeys.Plume}_icon.webp`),
    },
    [ArtifactSlotKeys.Sands]: {
      name: "Золотые часы",
      image_src: imageSrc(`${ArtifactSetKeys.TenacityOfTheMillelith}/${ArtifactSlotKeys.Sands}_icon.webp`),
    },
    [ArtifactSlotKeys.Goblet]: {
      name: "Золотой кубок клятвы",
      image_src: imageSrc(`${ArtifactSetKeys.TenacityOfTheMillelith}/${ArtifactSlotKeys.Goblet}_icon.webp`),
    },
    [ArtifactSlotKeys.Circlet]: {
      name: "Древний шлем генерала",
      image_src: imageSrc(`${ArtifactSetKeys.TenacityOfTheMillelith}/${ArtifactSlotKeys.Circlet}_icon.webp`),
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
    [ArtifactSlotKeys.Plume]: {
      name: "Переживший катастрофу",
      image_src: imageSrc(`${ArtifactSetKeys.ThunderingFury}/${ArtifactSlotKeys.Plume}_icon.webp`),
    },
    [ArtifactSlotKeys.Sands]: {
      name: "Песочные часы грома",
      image_src: imageSrc(`${ArtifactSetKeys.ThunderingFury}/${ArtifactSlotKeys.Sands}_icon.webp`),
    },
    [ArtifactSlotKeys.Goblet]: {
      name: "Предвестник бури",
      image_src: imageSrc(`${ArtifactSetKeys.ThunderingFury}/${ArtifactSlotKeys.Goblet}_icon.webp`),
    },
    [ArtifactSlotKeys.Circlet]: {
      name: "Корона призывателя грома",
      image_src: imageSrc(`${ArtifactSetKeys.ThunderingFury}/${ArtifactSlotKeys.Circlet}_icon.webp`),
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
    [ArtifactSlotKeys.Plume]: {
      name: "Перо усмиряющего гром",
      image_src: imageSrc(`${ArtifactSetKeys.Thundersoother}/${ArtifactSlotKeys.Plume}_icon.webp`),
    },
    [ArtifactSlotKeys.Sands]: {
      name: "Время усмиряющего гром",
      image_src: imageSrc(`${ArtifactSetKeys.Thundersoother}/${ArtifactSlotKeys.Sands}_icon.webp`),
    },
    [ArtifactSlotKeys.Goblet]: {
      name: "Бокал усмиряющего гром",
      image_src: imageSrc(`${ArtifactSetKeys.Thundersoother}/${ArtifactSlotKeys.Goblet}_icon.webp`),
    },
    [ArtifactSlotKeys.Circlet]: {
      name: "Корона усмиряющего гром",
      image_src: imageSrc(`${ArtifactSetKeys.Thundersoother}/${ArtifactSlotKeys.Circlet}_icon.webp`),
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
    [ArtifactSlotKeys.Plume]: {
      name: "Перо скрытого сияния",
      image_src: imageSrc(`${ArtifactSetKeys.VermillionHereafter}/${ArtifactSlotKeys.Plume}_icon.webp`),
    },
    [ArtifactSlotKeys.Sands]: {
      name: "Солнечная реликвия",
      image_src: imageSrc(`${ArtifactSetKeys.VermillionHereafter}/${ArtifactSlotKeys.Sands}_icon.webp`),
    },
    [ArtifactSlotKeys.Goblet]: {
      name: "Мгновение договора",
      image_src: imageSrc(`${ArtifactSetKeys.VermillionHereafter}/${ArtifactSlotKeys.Goblet}_icon.webp`),
    },
    [ArtifactSlotKeys.Circlet]: {
      name: "Громогласный облик",
      image_src: imageSrc(`${ArtifactSetKeys.VermillionHereafter}/${ArtifactSlotKeys.Circlet}_icon.webp`),
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
    [ArtifactSlotKeys.Plume]: {
      name: "Оперение стрелы изумрудного охотника",
      image_src: imageSrc(`${ArtifactSetKeys.ViridescentVenerer}/${ArtifactSlotKeys.Plume}_icon.webp`),
    },
    [ArtifactSlotKeys.Sands]: {
      name: "Решимость изумрудного охотника",
      image_src: imageSrc(`${ArtifactSetKeys.ViridescentVenerer}/${ArtifactSlotKeys.Sands}_icon.webp`),
    },
    [ArtifactSlotKeys.Goblet]: {
      name: "Сосуд изумрудного охотника",
      image_src: imageSrc(`${ArtifactSetKeys.ViridescentVenerer}/${ArtifactSlotKeys.Goblet}_icon.webp`),
    },
    [ArtifactSlotKeys.Circlet]: {
      name: "Венок изумрудного охотника",
      image_src: imageSrc(`${ArtifactSetKeys.ViridescentVenerer}/${ArtifactSlotKeys.Circlet}_icon.webp`),
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
    [ArtifactSlotKeys.Plume]: {
      name: "Самоцветное перо",
      image_src: imageSrc(`${ArtifactSetKeys.VourukashasGlow}/${ArtifactSlotKeys.Plume}_icon.webp`),
    },
    [ArtifactSlotKeys.Sands]: {
      name: "Древнее увядание",
      image_src: imageSrc(`${ArtifactSetKeys.VourukashasGlow}/${ArtifactSlotKeys.Sands}_icon.webp`),
    },
    [ArtifactSlotKeys.Goblet]: {
      name: "Пир необузданного веселья",
      image_src: imageSrc(`${ArtifactSetKeys.VourukashasGlow}/${ArtifactSlotKeys.Goblet}_icon.webp`),
    },
    [ArtifactSlotKeys.Circlet]: {
      name: "Сердце светозарности Хварны",
      image_src: imageSrc(`${ArtifactSetKeys.VourukashasGlow}/${ArtifactSlotKeys.Circlet}_icon.webp`),
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
    [ArtifactSlotKeys.Plume]: {
      name: "Оперение стрелы барда",
      image_src: imageSrc(`${ArtifactSetKeys.WanderersTroupe}/${ArtifactSlotKeys.Plume}_icon.webp`),
    },
    [ArtifactSlotKeys.Sands]: {
      name: "Окончание концерта",
      image_src: imageSrc(`${ArtifactSetKeys.WanderersTroupe}/${ArtifactSlotKeys.Sands}_icon.webp`),
    },
    [ArtifactSlotKeys.Goblet]: {
      name: "Фляжка странника",
      image_src: imageSrc(`${ArtifactSetKeys.WanderersTroupe}/${ArtifactSlotKeys.Goblet}_icon.webp`),
    },
    [ArtifactSlotKeys.Circlet]: {
      name: "Цилиндр дирижёра",
      image_src: imageSrc(`${ArtifactSetKeys.WanderersTroupe}/${ArtifactSlotKeys.Circlet}_icon.webp`),
    },
  },
} as Record<ArtifactSetKey, ArtifactSet>;
