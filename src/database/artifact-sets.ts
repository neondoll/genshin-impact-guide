import dungeons from "./dungeons";
import { ArtifactSetKeys } from "./enums/artifact-set";
import { ArtifactSlotKeys } from "./enums/artifact-slot";
import { CharacterKeys } from "./enums/character";
import { DungeonKeys } from "./enums/dungeon";
import { publicImageSrc } from "@/lib/utils";
import type { ArtifactSet, ArtifactSetSlot } from "./types/artifact-set";

const alchemy = "Мистическое подношение (Алхимия)";

const dungeonByKey = (key: keyof typeof DungeonKeys) => `Подземелье «${dungeons[DungeonKeys[key]].name}»`;

const IconWeb = (setKey: keyof typeof ArtifactSetKeys, slotKey: keyof typeof ArtifactSlotKeys) => {
  return `${ArtifactSetKeys[setKey]}/${ArtifactSlotKeys[slotKey]}_icon.webp`;
};

class _ArtifactSet implements ArtifactSet {
  readonly key: ArtifactSet["key"];
  readonly name: ArtifactSet["name"];
  readonly rarities: ArtifactSet["rarities"];
  readonly source: ArtifactSet["source"];
  readonly item_bonuses: ArtifactSet["item_bonuses"];
  readonly slots: ArtifactSet["slots"];
  readonly character_recommendations: ArtifactSet["character_recommendations"];

  constructor(
    key: keyof typeof ArtifactSetKeys,
    name: ArtifactSet["name"],
    rarities: ArtifactSet["rarities"],
    source: ArtifactSet["source"],
    itemBonuses: ArtifactSet["item_bonuses"],
    slots: ArtifactSet["slots"],
    characterRecommendations: ArtifactSet["character_recommendations"] = undefined,
  ) {
    this.key = ArtifactSetKeys[key];
    this.name = name;
    this.rarities = rarities;
    this.source = source;
    this.item_bonuses = itemBonuses;
    this.slots = slots;
    this.character_recommendations = characterRecommendations;
  }

  imageSrc() {
    return this.slots[ArtifactSlotKeys.Flower]?.image_src
      || this.slots[ArtifactSlotKeys.Plume]?.image_src
      || this.slots[ArtifactSlotKeys.Sands]?.image_src
      || this.slots[ArtifactSlotKeys.Goblet]?.image_src
      || this.slots[ArtifactSlotKeys.Circlet]?.image_src;
  }
}

class _ArtifactSetSlot implements ArtifactSetSlot {
  readonly name: ArtifactSetSlot["name"];
  readonly image_src: ArtifactSetSlot["image_src"];

  constructor(name: ArtifactSetSlot["name"], imageName: string) {
    this.name = name;
    this.image_src = publicImageSrc(`artifact-sets/${imageName}`);
  }
}

export default {
  [ArtifactSetKeys.ArchaicPetra]: new _ArtifactSet(
    "ArchaicPetra",
    "Архаичный камень",
    [4, 5],
    [dungeonByKey("DomainOfGuyun"), alchemy],
    {
      2: "Увеличивает бонус Гео урона на 15%.",
      4: "Подобранный элементальный осколок, образованный реакцией Кристалл, увеличивает бонус элементального урона соответствующего элемента всех членов отряда на 35% в течение 10 сек. Одновременно можно иметь бонус урона только одного элемента.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot("Цветок скальных трещин", IconWeb("ArchaicPetra", "Flower")),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot("Перо зубчатых пиков", IconWeb("ArchaicPetra", "Plume")),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot("Часы из прочного нефрита", IconWeb("ArchaicPetra", "Sands")),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot("Кубок из резного камня", IconWeb("ArchaicPetra", "Goblet")),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot("Маска из одинокого базальта", IconWeb("ArchaicPetra", "Circlet")),
    },
  ),
  [ArtifactSetKeys.BlizzardStrayer]: new _ArtifactSet(
    "BlizzardStrayer",
    "Заблудший в метели",
    [4, 5],
    [dungeonByKey("PeakOfVindagnyr"), alchemy],
    {
      2: "Увеличивает бонус Крио урона на 15%.",
      4: "Атаки по противникам с эффектом Крио увеличивают шанс крит. попадания на 20%. Если противник имеет статус Заморозка, то дополнительно увеличивает шанс крит. попадания на 20%.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot("Занесённая снегом память", IconWeb("BlizzardStrayer", "Flower")),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot("Решимость крушителя льда", IconWeb("BlizzardStrayer", "Plume")),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot("Гибель замёрзшей родины", IconWeb("BlizzardStrayer", "Sands")),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot("Морозная гордость", IconWeb("BlizzardStrayer", "Goblet")),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot("Эхо осколков инея", IconWeb("BlizzardStrayer", "Circlet")),
    },
  ),
  [ArtifactSetKeys.BloodstainedChivalry]: new _ArtifactSet(
    "BloodstainedChivalry",
    "Рыцарь крови",
    [4, 5],
    [dungeonByKey("ClearPoolAndMountainCavern"), alchemy],
    {
      2: "Увеличивает физ. урон на 25%.",
      4: "После победы над противником увеличивает урон заряженной атаки на 50% и обнуляет стоимость выносливости заряженной атаки на 10 сек.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot("Железное сердце рыцаря крови", IconWeb("BloodstainedChivalry", "Flower")),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot("Перо рыцаря крови", IconWeb("BloodstainedChivalry", "Plume")),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot("Час долга рыцаря крови", IconWeb("BloodstainedChivalry", "Sands")),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot("Кубок рыцаря крови", IconWeb("BloodstainedChivalry", "Goblet")),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot("Железная маска рыцаря крови", IconWeb("BloodstainedChivalry", "Circlet")),
    },
  ),
  [ArtifactSetKeys.CrimsonWitchOfFlames]: new _ArtifactSet(
    "CrimsonWitchOfFlames",
    "Горящая алая ведьма",
    [4, 5],
    [dungeonByKey("HiddenPalaceOfZhouFormula"), alchemy],
    {
      2: "Увеличивает бонус Пиро урона на 15%.",
      4: "Увеличивает урон статусов Перегрузка, Горение и Цветение на 40%, а урон статусов Пар и Таяние - на 15%. Использование элементального навыка увеличивает эффекты набора из двух вещей на 50% в течение 10 сек. Может складываться до 3 раз.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot("Ведьмин огненный цветок", IconWeb("CrimsonWitchOfFlames", "Flower")),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot("Пылающее ведьмино перо", IconWeb("CrimsonWitchOfFlames", "Plume")),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot("Ведьмин последний час", IconWeb("CrimsonWitchOfFlames", "Sands")),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot("Пламя ведьминого сердца", IconWeb("CrimsonWitchOfFlames", "Goblet")),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot("Тлеющая ведьмина шляпа", IconWeb("CrimsonWitchOfFlames", "Circlet")),
    },
  ),
  [ArtifactSetKeys.DeepwoodMemories]: new _ArtifactSet(
    "DeepwoodMemories",
    "Воспоминания дремучего леса",
    [4, 5],
    [dungeonByKey("SpireOfSolitaryEnlightenment"), alchemy],
    {
      2: "Увеличивает бонус Дендро урона на 15%.",
      4: "Попадание элементальным навыком или взрывом стихии снижает Дендро сопротивление врага на 30% на 8 сек. Этот эффект срабатывает, даже если экипированный этими артефактами персонаж не на поле боя.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot("Странник лабиринта", IconWeb("DeepwoodMemories", "Flower")),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot("Мудрец лозы", IconWeb("DeepwoodMemories", "Plume")),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot("Час осмысления", IconWeb("DeepwoodMemories", "Sands")),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot("Лампа заблудших", IconWeb("DeepwoodMemories", "Goblet")),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot("Лавровый венец", IconWeb("DeepwoodMemories", "Circlet")),
    },
  ),
  [ArtifactSetKeys.DesertPavilionChronicle]: new _ArtifactSet(
    "DesertPavilionChronicle",
    "Хроники Чертогов в пустыне",
    [4, 5],
    [dungeonByKey("CityOfGold"), alchemy],
    {
      2: "Увеличивает бонус Анемо урона на 15%.",
      4: "Попадание заряженной атакой на 15 сек. повышает скорость обычной атаки на 10%, а урон обычной атаки, заряженной атаки и атаки в падении — на 40%.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot("Рождение города королей", IconWeb("DesertPavilionChronicle", "Flower")),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot("Конец золотого царства", IconWeb("DesertPavilionChronicle", "Plume")),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot("Часы потерянного пути", IconWeb("DesertPavilionChronicle", "Sands")),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot("Хранитель дивной мечты", IconWeb("DesertPavilionChronicle", "Goblet")),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot("Наследие пустынной знати", IconWeb("DesertPavilionChronicle", "Circlet")),
    },
  ),
  [ArtifactSetKeys.EchoesOfAnOffering]: new _ArtifactSet(
    "EchoesOfAnOffering",
    "Отголоски подношения",
    [4, 5],
    [dungeonByKey("TheLostValley"), alchemy],
    {
      2: "Увеличивает силу атаки на 18%.",
      4: "Попадания обычной атакой с 36% шансом активируют Ритуал долины: урон обычной атаки повышается на 70% от силы атаки. Через 0,05 сек. после нанесения урона обычной атакой эффект исчезает. Если обычной атаке не удалось активировать этот эффект, шанс его активации следующим попаданием возрастает на 20%. Шанс активации возникает не чаще одного раза в 0,2 сек.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot("Цветок призрачного аромата", IconWeb("EchoesOfAnOffering", "Flower")),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot("Нефритовый листок", IconWeb("EchoesOfAnOffering", "Plume")),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot("Символ подношения", IconWeb("EchoesOfAnOffering", "Sands")),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot("Чаша истока", IconWeb("EchoesOfAnOffering", "Goblet")),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot("Серьги текучести", IconWeb("EchoesOfAnOffering", "Circlet")),
    },
  ),
  [ArtifactSetKeys.EmblemOfSeveredFate]: new _ArtifactSet(
    "EmblemOfSeveredFate",
    "Эмблема рассечённой судьбы",
    [4, 5],
    [dungeonByKey("MomijiDyedCourt"), alchemy],
    {
      2: "Увеличивает скорость восстановления энергии на 20%.",
      4: "Увеличивает урон взрыва стихий на величину, равную 25% от значения восстановления энергии. Эффект можно увеличить максимум до 75%.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot("Великолепная цуба", IconWeb("EmblemOfSeveredFate", "Flower")),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot("Обрезанное перо", IconWeb("EmblemOfSeveredFate", "Plume")),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot("Клетка грозовых облаков", IconWeb("EmblemOfSeveredFate", "Sands")),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot("Алый сосуд", IconWeb("EmblemOfSeveredFate", "Goblet")),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot("Украшенный кабуто", IconWeb("EmblemOfSeveredFate", "Circlet")),
    },
  ),
  [ArtifactSetKeys.FinaleOfTheDeepGalleries]: new _ArtifactSet(
    "FinaleOfTheDeepGalleries",
    "Финал галерей глубин",
    [4, 5],
    "Подземелье «Заброшенный причал»",
    {
      2: "Даёт 15% бонус Крио урона.",
      4: "Когда энергия экипированного персонажа равна 0, урон обычной атаки и взрыва стихии повышается на 60%. После того как экипированный персонаж наносит урон обычной атакой, данный эффект на 6 сек. перестаёт применяться для взрыва стихии. После того как экипированный персонаж наносит урон взрывом стихии, данный эффект на 6 сек. перестаёт применяться для обычной атаки. Этот эффект может возникнуть, даже если экипированный персонаж вне поля боя.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot("Отголоски песни галерей глубин", IconWeb("FinaleOfTheDeepGalleries", "Flower")),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot("Дальние странствия галерей глубин", IconWeb("FinaleOfTheDeepGalleries", "Plume")),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot("Часы забвения галерей глубин", IconWeb("FinaleOfTheDeepGalleries", "Sands")),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot("Ниспосланный пир галерей глубин", IconWeb("FinaleOfTheDeepGalleries", "Goblet")),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot("Утраченная корона галерей глубин", IconWeb("FinaleOfTheDeepGalleries", "Circlet")),
    },
  ),
  [ArtifactSetKeys.FlowerOfParadiseLost]: new _ArtifactSet(
    "FlowerOfParadiseLost",
    "Цветок потерянного рая",
    [4, 5],
    [dungeonByKey("CityOfGold"), alchemy],
    {
      2: "Увеличивает мастерство стихий на 80 ед.",
      4: "Увеличивает урон реакций Бутонизация, Вегетация и Цветение экипированного этим набором персонажа на 40%. Кроме того, активация реакций Бутонизация, Вегетация и Цветение экипированным этим набором персонажем усилит этот эффект на 25%. Каждое суммирование длится 10 сек. Эффект складывается до 4 раз, может возникнуть раз в 1 сек. и активируется, даже если экипированный этим набором персонаж не активен.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot("Великолепие Ай-Ханум", IconWeb("FlowerOfParadiseLost", "Flower")),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot("Угасающий пир", IconWeb("FlowerOfParadiseLost", "Plume")),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot("Застывшее мгновение", IconWeb("FlowerOfParadiseLost", "Sands")),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot("Магический сосуд хранителя тайн", IconWeb("FlowerOfParadiseLost", "Goblet")),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot("Аметистовый венец", IconWeb("FlowerOfParadiseLost", "Circlet")),
    },
  ),
  [ArtifactSetKeys.FragmentOfHarmonicWhimsy]: new _ArtifactSet(
    "FragmentOfHarmonicWhimsy",
    "Фрагмент гармонической фантазии",
    [4, 5],
    "Подземелье «Обветшалый театр»",
    {
      2: "Увеличивает силу атаки на 18%.",
      4: "Когда значение Долга жизни увеличивается или уменьшается, наносимый персонажем урон увеличивается на 18% на 6 сек. Эффект может складываться до 3 раз.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot("Увертюра стройной симфонии", `${ArtifactSetKeys.FragmentOfHarmonicWhimsy}/harmonious_symphony_prelude-256x256.png`),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot("Ночные раздумья древнего моря", `${ArtifactSetKeys.FragmentOfHarmonicWhimsy}/ancient_seas_nocturnal_musing-256x256.png`),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot("Скерцо поворотов судьбы", `${ArtifactSetKeys.FragmentOfHarmonicWhimsy}/the_grand_jape_of_the_turning_of_fate-256x256.png`),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot("Неистовая рапсодия ихора", `${ArtifactSetKeys.FragmentOfHarmonicWhimsy}/ichor_shower_rhapsody-256x256.png`),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot("Вальс увядших фантазий", `${ArtifactSetKeys.FragmentOfHarmonicWhimsy}/whimsical_dance_of_the_withered-256x256.png`),
    },
    [{
      key: CharacterKeys.Arlecchino,
      notes: "Один из лучших комплектов для Арлекино, так как повышает важную силу атаки и увеличивает наносимый урон. Так как Арлекино сама накладывает на себя Долг жизни, она выполняет условие 4 предметов.",
    }],
  ),
  [ArtifactSetKeys.GildedDreams]: new _ArtifactSet(
    "GildedDreams",
    "Позолоченные сны",
    [4, 5],
    [dungeonByKey("SpireOfSolitaryEnlightenment"), alchemy],
    {
      2: "Увеличивает мастерство стихий на 80 ед.",
      4: "На 8 сек. после вызова элементальной реакции согласно элементам других персонажей в отряде экипированный этими артефактами персонаж получает следующие усиления: сила атаки повышается на 14% за каждого персонажа с таким же элементом, как и у экипированного персонажа; мастерство стихий повышается на 50 ед. за каждого персонажа с иным элементом. Каждое из этих усилений при подсчёте включает до 3 персонажей. Эффект может возникнуть один раз в 8 сек. Срабатывает, даже если экипированный этими артефактами персонаж не на поле боя.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot("Сон железного цветка", IconWeb("GildedDreams", "Flower")),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot("Перо суждения", IconWeb("GildedDreams", "Plume")),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot("Золотые годы", IconWeb("GildedDreams", "Sands")),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot("Последний медовый пир", IconWeb("GildedDreams", "Goblet")),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot("Тень Короля песков", IconWeb("GildedDreams", "Circlet")),
    },
  ),
  [ArtifactSetKeys.GladiatorsFinale]: new _ArtifactSet(
    "GladiatorsFinale",
    "Конец гладиатора",
    [4, 5],
    [
      "Награды с босса в мире за 40 первородной смолы",
      "Награды за выполнение заданий во вкладке Опыта (главы 8 и 9)",
      "Подземелья наказания (еженедельные боссы)", "Мистическое подношение (Алхимия)",
    ],
    {
      2: "Увеличивает силу атаки на 18%.",
      4: "Увеличивает урон обычной атаки на 35%, если персонаж использует одноручное, двуручное или древковое оружие.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot("Ностальгия гладиатора", IconWeb("GladiatorsFinale", "Flower")),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot("Судьба гладиатора", IconWeb("GladiatorsFinale", "Plume")),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot("Стремление гладиатора", IconWeb("GladiatorsFinale", "Sands")),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot("Пьянство гладиатора", IconWeb("GladiatorsFinale", "Goblet")),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot("Триумф гладиатора", IconWeb("GladiatorsFinale", "Circlet")),
    },
  ),
  [ArtifactSetKeys.GoldenTroupe]: new _ArtifactSet(
    "GoldenTroupe",
    "Золотая труппа",
    [4, 5],
    [dungeonByKey("DenouementOfSin"), alchemy],
    {
      2: "Увеличивает урон элементального навыка на 20%.",
      4: "Увеличивает урон элементального навыка на 25%. Кроме того, когда персонаж не на поле боя, урон элементального навыка дополнительно увеличивается на 25%. Через 2 сек. после вступления в бой эффект исчезает.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot("Вариация золотой песни", IconWeb("GoldenTroupe", "Flower")),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot("Перо золотой птицы", IconWeb("GoldenTroupe", "Plume")),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot("Предзнаменование золотой эпохи", IconWeb("GoldenTroupe", "Sands")),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot("Суета золотой ночи", IconWeb("GoldenTroupe", "Goblet")),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot("Награда Золотой труппы", IconWeb("GoldenTroupe", "Circlet")),
    },
  ),
  [ArtifactSetKeys.HeartOfDepth]: new _ArtifactSet(
    "HeartOfDepth",
    "Сердце глубин",
    [4, 5],
    [dungeonByKey("PeakOfVindagnyr"), alchemy],
    {
      2: "Увеличивает бонус Гидро урона на 15%.",
      4: "Увеличивает урон обычной и заряженной атаки на 30% в течение 15 сек. после использования элементального навыка.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot("Позолоченная брошь", IconWeb("HeartOfDepth", "Flower")),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot("Порыв ностальгии", IconWeb("HeartOfDepth", "Plume")),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot("Медный компас", IconWeb("HeartOfDepth", "Sands")),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot("Кубок оглушающих глубин", IconWeb("HeartOfDepth", "Goblet")),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot("Треуголка в пятнах вина", IconWeb("HeartOfDepth", "Circlet")),
    },
  ),
  [ArtifactSetKeys.HuskOfOpulentDreams]: new _ArtifactSet(
    "HuskOfOpulentDreams",
    "Кокон сладких грёз",
    [4, 5],
    [dungeonByKey("SlumberingCourt"), alchemy],
    {
      2: "Увеличивает защиту на 30%.",
      4: "Персонаж, экипированный этим набором артефактов, получает эффект Любопытства в следующих ситуациях: 1 уровень Любопытства даётся активному персонажу после попадания по противнику атакой Гео (не чаще чем раз в 0,3 сек.); когда персонаж находится вне поля боя, он получает 1 ур. Любопытства каждые 3 сек. Любопытство может складываться до 4 ур., каждый ур. прибавляет 6% к защите и 6% к Гео урону. Если персонаж не получает Любопытство в течение 6 сек., то он теряет 1 накопленный уровень Любопытства.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot("Пора расцвета", IconWeb("HuskOfOpulentDreams", "Flower")),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot("Перо чертога", IconWeb("HuskOfOpulentDreams", "Plume")),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot("Песнь жизни", IconWeb("HuskOfOpulentDreams", "Sands")),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot("Тыква пробуждения", IconWeb("HuskOfOpulentDreams", "Goblet")),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot("Шляпа телесности", IconWeb("HuskOfOpulentDreams", "Circlet")),
    },
  ),
  [ArtifactSetKeys.Instructor]: new _ArtifactSet(
    "Instructor",
    "Инструктор",
    [3, 4],
    ["Боссы", "Подземелья наказания (еженедельные боссы)", "Подземелья", "Сундуки", "Элитные враги"],
    {
      2: "Увеличивает мастерство стихий на 80 ед.",
      4: "Вызов элементальной реакции увеличивает мастерство стихий всех членов отряда на 120 ед. в течение 8 сек.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot("Брошь инструктора", IconWeb("Instructor", "Flower")),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot("Перо инструктора", IconWeb("Instructor", "Plume")),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot("Карманные часы инструктора", IconWeb("Instructor", "Sands")),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot("Чайная кружка инструктора", IconWeb("Instructor", "Goblet")),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot("Кепка инструктора", IconWeb("Instructor", "Circlet")),
    },
  ),
  [ArtifactSetKeys.Lavawalker]: new _ArtifactSet(
    "Lavawalker",
    "Ступающий по лаве",
    [4, 5],
    [dungeonByKey("HiddenPalaceOfZhouFormula"), alchemy],
    {
      2: "Пиро сопротивление: +40%",
      4: "Увеличивает урон против врагов, находящихся под действием Пиро, на 35%.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot("Решительность ступающего по лаве", IconWeb("Lavawalker", "Flower")),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot("Спасение ступающего по лаве", IconWeb("Lavawalker", "Plume")),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot("Муки ступающего по лаве", IconWeb("Lavawalker", "Sands")),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot("Просветление ступающего по лаве", IconWeb("Lavawalker", "Goblet")),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot("Мудрость ступающего по лаве", IconWeb("Lavawalker", "Circlet")),
    },
  ),
  [ArtifactSetKeys.LongNightsOath]: new _ArtifactSet(
    "LongNightsOath",
    "Клятва долгой ночи",
    [4, 5],
    "Подземелье «Заброшенный причал»",
    {
      2: "Урон атак в падении увеличивается на 25%.",
      4: "После того как атака в падении, заряженная атака или элементальный навык экипированного персонажа поражают противника, экипированный персонаж получает 1/2/2 уровня Вечного сияния. Атаки в падении, заряженные атаки и элементальные навыки могут по отдельности вызывать этот эффект один раз в 1 сек. Вечное сияние: урон атаки в падении повышается на 15%. Эффект длится 6 сек. и складывается до 5 раз. Длительность каждого уровня рассчитывается отдельно.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot("Клятва светоносца", `${ArtifactSetKeys.LongNightsOath}/lightkeepers_pledge-256x256.png`),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot("Соловьиное перо", `${ArtifactSetKeys.LongNightsOath}/nightingales_tail_feather-256x256.png`),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot("Скорбный колокольчик бессмертного", `${ArtifactSetKeys.LongNightsOath}/undying_ones_mourning_bell-256x256.png`),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot("Умолкнувший рог", `${ArtifactSetKeys.LongNightsOath}/a_horn_unwinded-256x256.png`),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot("Окрашенный шлем", `${ArtifactSetKeys.LongNightsOath}/dyed_tassel-256x256.png`),
    },
    [{
      key: CharacterKeys.Varesa,
      notes: "Варесе будет очень полезно увеличение урона атак в падении, которые она использует. Поскольку она часто активирует элементальный навык, а также заряженную атаку и атаку в падении после навыка, она может получить максимальный бонус урона.",
    }],
  ),
  [ArtifactSetKeys.MaidenBeloved]: new _ArtifactSet(
    "MaidenBeloved",
    "Возлюбленная юная дева",
    [4, 5],
    [dungeonByKey("ValleyOfRemembrance"), alchemy],
    {
      2: "Увеличивает эффективность лечения на 15%.",
      4: "Увеличивает получаемое лечение всех членов отряда на 20% в течение 10 сек. после использования элементального навыка или взрыва стихии.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot("Далёкая душа юной девы", IconWeb("MaidenBeloved", "Flower")),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot("Тоска юной девы", IconWeb("MaidenBeloved", "Plume")),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot("Уходящая молодость юной девы", IconWeb("MaidenBeloved", "Sands")),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot("Досуг юной девы", IconWeb("MaidenBeloved", "Goblet")),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot("Увядающая красота юной девы", IconWeb("MaidenBeloved", "Circlet")),
    },
  ),
  [ArtifactSetKeys.MarechausseeHunter]: new _ArtifactSet(
    "MarechausseeHunter",
    "Охотник Сумеречного двора",
    [4, 5],
    [dungeonByKey("DenouementOfSin"), alchemy],
    {
      2: "Увеличивает урон обычной и заряженной атаки на 15%.",
      4: "Увеличивает шанс крит. попадания на 12% на 5 сек., когда текущее HP увеличивается или снижается. Эффект может складываться до 3 раз.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot("Брошь охотника", IconWeb("MarechausseeHunter", "Flower")),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot("Увертюра шедевра", IconWeb("MarechausseeHunter", "Plume")),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot("Мгновение правосудия", IconWeb("MarechausseeHunter", "Sands")),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot("Забытый сосуд", IconWeb("MarechausseeHunter", "Goblet")),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot("Лик старого солдата", IconWeb("MarechausseeHunter", "Circlet")),
    },
  ),
  [ArtifactSetKeys.NighttimeWhispersInTheEchoingWoods]: new _ArtifactSet(
    "NighttimeWhispersInTheEchoingWoods",
    "Ночной шёпот в Лесу откликающегося эха",
    [4, 5],
    dungeonByKey("WaterfallWen"),
    {
      2: "Увеличивает силу атаки на 18%.",
      4: "После использования элементального навыка бонус Гео урона на 10 сек. увеличивается на 20%. Если персонаж находится под защитой щита, созданного реакцией Кристалл, этот эффект увеличивается на 150%. Через 1 сек. после потери щита это дополнительное увеличение исчезает.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot("Бескорыстный цветок", IconWeb("NighttimeWhispersInTheEchoingWoods", "Flower")),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot("Искреннее перо", IconWeb("NighttimeWhispersInTheEchoingWoods", "Plume")),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot("Верные песочные часы", IconWeb("NighttimeWhispersInTheEchoingWoods", "Sands")),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot("Великодушная чернильница", IconWeb("NighttimeWhispersInTheEchoingWoods", "Goblet")),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot("Милостивая шляпка", IconWeb("NighttimeWhispersInTheEchoingWoods", "Circlet")),
    },
  ),
  [ArtifactSetKeys.NoblesseOblige]: new _ArtifactSet(
    "NoblesseOblige",
    "Церемония древней знати",
    [4, 5],
    [dungeonByKey("ClearPoolAndMountainCavern"), alchemy],
    {
      2: "Увеличивает урон взрыва стихии на 20%.",
      4: "Активация взрыва стихии увеличивает силу атаки всех членов отряда на 20% в течение 12 сек. Эффект не складывается.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot("Королевский цветок", IconWeb("NoblesseOblige", "Flower")),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot("Королевское перо", IconWeb("NoblesseOblige", "Plume")),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot("Королевские карманные часы", IconWeb("NoblesseOblige", "Sands")),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot("Королевская серебряная фляжка", IconWeb("NoblesseOblige", "Goblet")),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot("Королевская маска", IconWeb("NoblesseOblige", "Circlet")),
    },
  ),
  [ArtifactSetKeys.NymphsDream]: new _ArtifactSet(
    "NymphsDream",
    "Сон нимфы",
    [4, 5],
    [dungeonByKey("MoltenIronFortress"), alchemy],
    {
      2: "Даёт 15% бонус Гидро урона.",
      4: "Попадания обычной атакой, заряженной атакой, атакой в падении, элементальным навыком и взрывом стихий по противнику на 8 сек. создаёт 1 уровень Отражения нимфы. Когда действуют 1/2/3 и более уровня Отражения нимфы, сила атаки повышается на 7%/16%/25%, а бонус Гидро урона на 4%/9%/15%. Уровни Отражения нимфы, созданные обычными атаками, заряженными атаками, атаками в падении, элементальными навыками и взрывами стихий, существуют независимо друг от друга.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot("Цветок странствий", IconWeb("NymphsDream", "Flower")),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot("Перо злого мага", IconWeb("NymphsDream", "Plume")),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot("Постоянство нимфы", IconWeb("NymphsDream", "Sands")),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot("Чаепитие героев", IconWeb("NymphsDream", "Goblet")),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot("Монокль свирепого дракона", IconWeb("NymphsDream", "Circlet")),
    },
  ),
  [ArtifactSetKeys.ObsidianCodex]: new _ArtifactSet(
    "ObsidianCodex",
    "Обсидиановый фолиант",
    [4, 5],
    "Подземелье «Святилище мириад духов»",
    {
      2: "Урон экипированного персонажа на поле в состоянии Благословения Ночного духа увеличивается на 15%.",
      4: "После того как экипированный персонаж, будучи на поле боя, расходует 1 очко Ночного духа, шанс крит. попадания увеличивается на 40% на 6 сек. Этот эффект может возникнуть один раз в 1 сек.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot("Ожидания инородцев", `${ArtifactSetKeys.ObsidianCodex}/reckoning_of_the_xenogenic-256x256.png`),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot("Корень костного мозга души", `${ArtifactSetKeys.ObsidianCodex}/root_of_the_spirit_marrow-256x256.png`),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot("Мифы владений ночи", `${ArtifactSetKeys.ObsidianCodex}/myths_of_the_night_realm-256x256.png`),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot("Банкет перед состязанием", `${ArtifactSetKeys.ObsidianCodex}/pre_banquet_of_the_contenders-256x256.png`),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot("Корона святых", `${ArtifactSetKeys.ObsidianCodex}/crown_of_the_saints-256x256.png`),
    },
    [{ key: CharacterKeys.Varesa, notes: "" }],
  ),
  [ArtifactSetKeys.OceanHuedClam]: new _ArtifactSet(
    "OceanHuedClam",
    "Моллюск морских красок",
    [4, 5],
    [dungeonByKey("SlumberingCourt"), alchemy],
    {
      2: "Повышает бонус лечения на 15%.",
      4: "Экипированный этим набором артефактов персонаж при лечении соратников создаёт на 3 сек. Пузырь морских красок. Пузырь регистрирует восстановленное при лечении HP (в том числе избыточное, когда лечение превышает максимум здоровья). После окончания действия Пузырь взрывается и наносит окружающим врагам урон в размере 90% учтённого объёма лечения (урон рассчитывается так же, как для эффектов Заряжен и Сверхпроводник, но на него не действуют бонусы мастерства стихий, уровня и реакций). Пузырь морских красок можно создавать не чаще чем раз в 3,5 сек. Пузырь может записать до 30 000 восстановленного HP, в том числе HP избыточного лечения. Для отряда не может существовать больше одного Пузыря морских красок одновременно. Этот эффект действует, даже если персонаж, экипированный набором артефактов, не находится на поле боя.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot("Цветок морских красок", IconWeb("OceanHuedClam", "Flower")),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot("Перо глубинного дворца", IconWeb("OceanHuedClam", "Plume")),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot("Раковина разлуки", IconWeb("OceanHuedClam", "Sands")),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot("Жемчужная клетка", IconWeb("OceanHuedClam", "Goblet")),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot("Корона Ватацуми", IconWeb("OceanHuedClam", "Circlet")),
    },
  ),
  [ArtifactSetKeys.PaleFlame]: new _ArtifactSet(
    "PaleFlame",
    "Бледный огонь",
    [4, 5],
    [dungeonByKey("RidgeWatch"), alchemy],
    {
      2: "Увеличивает физ. урон на 25%.",
      4: "Когда элементальный навык попадает по врагам, атака увеличивается на 9% в течение 7 сек. Эффект может складываться до 2 раз и возникнуть не чаще 1 раза за 0,3 сек. На 2 уровне складывания эффект набора из 2 вещей увеличивается на 100%.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot("Незапятнанный цветок", IconWeb("PaleFlame", "Flower")),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot("Перо мудрого лекаря", IconWeb("PaleFlame", "Plume")),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot("Замершее мгновение", IconWeb("PaleFlame", "Sands")),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot("Превосходящая чаша", IconWeb("PaleFlame", "Goblet")),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot("Смеющаяся маска", IconWeb("PaleFlame", "Circlet")),
    },
  ),
  [ArtifactSetKeys.RetracingBolide]: new _ArtifactSet(
    "RetracingBolide",
    "Встречная комета",
    [4, 5],
    [dungeonByKey("DomainOfGuyun"), alchemy],
    {
      2: "Увеличивает прочность щита на 35%.",
      4: "Под защитой щита увеличивает урон обычной и заряженной атаки на 40%.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot("Цветок равноденствия", IconWeb("RetracingBolide", "Flower")),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot("Конец равноденствия", IconWeb("RetracingBolide", "Plume")),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot("Час равноденствия", IconWeb("RetracingBolide", "Sands")),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot("Шар равноденствия", IconWeb("RetracingBolide", "Goblet")),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot("Маска равноденствия", IconWeb("RetracingBolide", "Circlet")),
    },
  ),
  [ArtifactSetKeys.ScrollOfTheHeroOfCinderCity]: new _ArtifactSet(
    "ScrollOfTheHeroOfCinderCity",
    "Свиток героя сожжённого города",
    [4, 5],
    "Подземелье «Святилище мириадов духов»",
    {
      2: "Когда член отряда поблизости активирует Вспышку Ночного духа, экипированный персонаж восстанавливает 6 ед. энергии.",
      4: "После того как экипированный персонаж активирует реакцию, связанную с его элементом, все члены отряда поблизости получают 12% бонус урона элементами, связанными с этой реакцией, на 15 сек. Если экипированный персонаж, активируя данный эффект, находится в состоянии Благословение Ночного духа, все персонажи отряда поблизости дополнительно получают 28% бонус урона элементами, связанными с этой реакцией, на 20 сек. Такой эффект может возникнуть, даже если персонаж не находится на поле боя. Бонусы одноимённых наборов артефактов не суммируются.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot("Талисман укротителя зверей", `${ArtifactSetKeys.ScrollOfTheHeroOfCinderCity}/beast_tamers_talisman-256x256.png`),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot("Маячок горного патрульного", `${ArtifactSetKeys.ScrollOfTheHeroOfCinderCity}/mountain_rangers_marker-256x256.png`),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot("Золотые часы мистика", `${ArtifactSetKeys.ScrollOfTheHeroOfCinderCity}/mystics_gold_dial-256x256.png`),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot("Кубок бродячего исследователя", `${ArtifactSetKeys.ScrollOfTheHeroOfCinderCity}/wandering_scholars_claw_cup-256x256.png`),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot("Перьевая маска воина-демона", `${ArtifactSetKeys.ScrollOfTheHeroOfCinderCity}/demon_warriors_feather_mask-256x256.png`),
    },
    [
      { key: CharacterKeys.Chevreuse, notes: "" },
      { key: CharacterKeys.Iansan, notes: "" },
      { key: CharacterKeys.Xilonen, notes: "" },
    ],
  ),
  [ArtifactSetKeys.ShimenawasReminiscence]: new _ArtifactSet(
    "ShimenawasReminiscence",
    "Воспоминания Симэнавы",
    [4, 5],
    [dungeonByKey("MomijiDyedCourt"), alchemy],
    {
      2: "Увеличивает силу атаки на 18%.",
      4: "При использовании элементального навыка, если у персонажа 15 или более единиц энергии, он теряет 15 единиц энергии, а урон обычной атаки, заряженной атаки и атаки в падении увеличивается на 50% в течение 10 сек. Эффект нельзя активировать повторно в течение этого времени.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot("Опутывающий цветок", IconWeb("ShimenawasReminiscence", "Flower")),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot("Стрела воспоминаний", IconWeb("ShimenawasReminiscence", "Plume")),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot("Мгновение росы", IconWeb("ShimenawasReminiscence", "Sands")),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot("Полное надежд сердце", IconWeb("ShimenawasReminiscence", "Goblet")),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot("Непостоянный лик", IconWeb("ShimenawasReminiscence", "Circlet")),
    },
  ),
  [ArtifactSetKeys.SongOfDaysPast]: new _ArtifactSet(
    "SongOfDaysPast",
    "Песнь былых времён",
    [4, 5],
    dungeonByKey("WaterfallWen"),
    {
      2: "Повышает бонус лечения на 15%.",
      4: "Экипированный персонаж при лечении членов отряда на 6 сек. создаёт эффект Стремления, который регистрирует осуществлённое лечение (в том числе избыточное). С завершением длительности Стремление превращается в Волны былых времён: при попадании обычной атаки, заряженной атаки, атаки в падении, элементального навыка или взрыва стихии вашего активного персонажа по противнику наносимый урон увеличивается на 8% от общего количества лечения, зарегистрированного Стремлением. После 5 активаций или через 10 сек. эффект Волн былых времён исчезает. Однократный эффект Стремления регистрирует до 15 000 ед. HP. Одновременно может существовать только одно Стремление, но оно регистрирует лечение, предоставляемое несколькими экипированными персонажами сразу. Этот эффект активируется, даже если экипированный персонаж не на поле боя.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot("Забытая клятва былых времён", IconWeb("SongOfDaysPast", "Flower")),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot("Воспоминания о былых временах", IconWeb("SongOfDaysPast", "Plume")),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot("Отзвуки былых времён", IconWeb("SongOfDaysPast", "Sands")),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot("Обещанный сон былых времён", IconWeb("SongOfDaysPast", "Goblet")),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot("Поэзия былых времён", IconWeb("SongOfDaysPast", "Circlet")),
    },
  ),
  [ArtifactSetKeys.TenacityOfTheMillelith]: new _ArtifactSet(
    "TenacityOfTheMillelith",
    "Стойкость Миллелита",
    [4, 5],
    [dungeonByKey("RidgeWatch"), alchemy],
    {
      2: "Увеличивает НР на 20%",
      4: "Когда элементальный навык попадает по врагам, атака всех находящихся поблизости персонажей в отряде, увеличивается на 20%, а прочность их щита увеличивается на 30%. Эффект длится 3 сек. и может возникнуть 1 раз в 0,5 сек. Этот эффект может быть активирован, даже если персонаж, экипированный этим набором артефактов, не находится на поле боя.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot("Цветок почестей", IconWeb("TenacityOfTheMillelith", "Flower")),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot("Боевое перо командира", IconWeb("TenacityOfTheMillelith", "Plume")),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot("Золотые часы", IconWeb("TenacityOfTheMillelith", "Sands")),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot("Золотой кубок клятвы", IconWeb("TenacityOfTheMillelith", "Goblet")),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot("Древний шлем генерала", IconWeb("TenacityOfTheMillelith", "Circlet")),
    },
  ),
  [ArtifactSetKeys.ThunderingFury]: new _ArtifactSet(
    "ThunderingFury",
    "Громогласный рёв ярости",
    [4, 5],
    [dungeonByKey("MidsummerCourtyard"), alchemy],
    {
      2: "Увеличивает бонус Электро урона на 15%.",
      4: "Увеличивает урон реакций Перегрузка, Заряжен, Сверхпроводник и Вегетация на 40%. Урон от реакции Обострение увеличивается на 20%. При активации этих реакций, а также реакции Стимуляция, время отката элементального навыка уменьшается на 1 сек. Эффект может возникнуть не чаще 1 раза в 0,8 сек.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot("Милосердие Громовой птицы", IconWeb("ThunderingFury", "Flower")),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot("Переживший катастрофу", IconWeb("ThunderingFury", "Plume")),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot("Песочные часы грома", IconWeb("ThunderingFury", "Sands")),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot("Предвестник бури", IconWeb("ThunderingFury", "Goblet")),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot("Корона призывателя грома", IconWeb("ThunderingFury", "Circlet")),
    },
  ),
  [ArtifactSetKeys.Thundersoother]: new _ArtifactSet(
    "Thundersoother",
    "Усмиряющий гром",
    [4, 5],
    [dungeonByKey("MidsummerCourtyard"), alchemy],
    {
      2: "Повышает Электро сопротивление на +40%.",
      4: "Увеличивает урон против врагов, находящихся под действием Электро, на 35%.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot("Сердце усмиряющего гром", IconWeb("Thundersoother", "Flower")),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot("Перо усмиряющего гром", IconWeb("Thundersoother", "Plume")),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot("Время усмиряющего гром", IconWeb("Thundersoother", "Sands")),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot("Бокал усмиряющего гром", IconWeb("Thundersoother", "Goblet")),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot("Корона усмиряющего гром", IconWeb("Thundersoother", "Circlet")),
    },
  ),
  [ArtifactSetKeys.VermillionHereafter]: new _ArtifactSet(
    "VermillionHereafter",
    "Киноварное загробье",
    [4, 5],
    [dungeonByKey("TheLostValley"), alchemy],
    {
      2: "Увеличивает силу атаки на 18%.",
      4: "После активации взрыва стихии на 16 сек. создаёт Скрытое сияние, которое повышает силу атаки на 8%. Сила атаки персонажа увеличивается ещё на 10%, когда он теряет HP. Этот эффект может возникнуть максимум 4 раза и не чаще, чем раз в 0,8 сек. Скрытое сияние исчезает, когда персонаж покидает поле боя. При повторной активации взрыва стихии существующее Скрытое сияние снимается.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot("Цветение жизни", IconWeb("VermillionHereafter", "Flower")),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot("Перо скрытого сияния", IconWeb("VermillionHereafter", "Plume")),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot("Солнечная реликвия", IconWeb("VermillionHereafter", "Sands")),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot("Мгновение договора", IconWeb("VermillionHereafter", "Goblet")),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot("Громогласный облик", IconWeb("VermillionHereafter", "Circlet")),
    },
  ),
  [ArtifactSetKeys.ViridescentVenerer]: new _ArtifactSet(
    "ViridescentVenerer",
    "Изумрудная тень",
    [4, 5],
    [dungeonByKey("ValleyOfRemembrance"), alchemy],
    {
      2: "Увеличивает бонус Анемо урона на 15%.",
      4: "Увеличивает урон Рассеивания на 60%. При взаимодействии Рассеивания с другим элементом, также понижает сопротивление противника к соответствующему элементу на 40% в течение 10 сек.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot("Воспоминания об изумрудных лугах", IconWeb("ViridescentVenerer", "Flower")),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot("Оперение стрелы изумрудного охотника", IconWeb("ViridescentVenerer", "Plume")),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot("Решимость изумрудного охотника", IconWeb("ViridescentVenerer", "Sands")),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot("Сосуд изумрудного охотника", IconWeb("ViridescentVenerer", "Goblet")),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot("Венок изумрудного охотника", IconWeb("ViridescentVenerer", "Circlet")),
    },
  ),
  [ArtifactSetKeys.VourukashasGlow]: new _ArtifactSet(
    "VourukashasGlow",
    "Сияние Вурукаши",
    [4, 5],
    [dungeonByKey("MoltenIronFortress"), alchemy],
    {
      2: "Увеличивает HP на 20%.",
      4: "Увеличивает урон элементального навыка и взрыва стихии на 10%. Если экипированный персонаж получает урон, этот эффект повышения урона увеличивается на 80% на 5 сек. Эффект может складываться до 5 раз. Отсчёт времени каждого уровня происходит отдельно. Эти эффекты активируются, даже если экипированный персонаж не на поле боя.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot("Тычинка истока Хварны", IconWeb("VourukashasGlow", "Flower")),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot("Самоцветное перо", IconWeb("VourukashasGlow", "Plume")),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot("Древнее увядание", IconWeb("VourukashasGlow", "Sands")),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot("Пир необузданного веселья", IconWeb("VourukashasGlow", "Goblet")),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot("Сердце светозарности Хварны", IconWeb("VourukashasGlow", "Circlet")),
    },
  ),
  [ArtifactSetKeys.WanderersTroupe]: new _ArtifactSet(
    "WanderersTroupe",
    "Странствующий ансамбль",
    [4, 5],
    [
      "Награды с босса в мире за 40 первородной смолы",
      "Подземелья наказания (еженедельные боссы)",
      "Мистическое подношение (Алхимия)",
    ],
    {
      2: "Увеличивает мастерство стихий на 80 ед.",
      4: "Увеличивает урон заряженной атаки на 35%, если персонаж использует катализатор или стрелковое оружие.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot("Рассвет ансамбля", IconWeb("WanderersTroupe", "Flower")),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot("Оперение стрелы барда", IconWeb("WanderersTroupe", "Plume")),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot("Окончание концерта", IconWeb("WanderersTroupe", "Sands")),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot("Фляжка странника", IconWeb("WanderersTroupe", "Goblet")),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot("Цилиндр дирижёра", IconWeb("WanderersTroupe", "Circlet")),
    },
  ),
} as Record<ArtifactSet["key"], ArtifactSet>;
