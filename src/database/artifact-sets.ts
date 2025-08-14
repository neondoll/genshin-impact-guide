import dungeons from "./dungeons";
import { ArtifactSetKeys } from "./enums/artifact-set";
import { ArtifactSlotKeys } from "./enums/artifact-slot";
import { CharacterKeys } from "./enums/character";
import { DungeonKeys } from "./enums/dungeon";
import { getArtifactSetRecommendations, getArtifactSlot } from ".";
import { publicImageSrc } from "@/lib/utils";
import type { ArtifactSet, ArtifactSetSlot } from "./types/artifact-set";
import type { ArtifactSlotKey } from "./types/artifact-slot";
import type { Dungeon } from "./types/dungeon";

class _ArtifactSet implements ArtifactSet {
  readonly key: ArtifactSet["key"];
  readonly name: ArtifactSet["name"];
  readonly rarities: ArtifactSet["rarities"];
  readonly source: ArtifactSet["source"];
  readonly item_bonuses: ArtifactSet["item_bonuses"];
  readonly slots: ArtifactSet["slots"];
  private _character_recommendations: ArtifactSet["character_recommendations"];

  static PATH = "artifact-sets";

  constructor(
    key: ArtifactSet["key"],
    name: ArtifactSet["name"],
    rarities: ArtifactSet["rarities"],
    source: ArtifactSet["source"],
    itemBonuses: ArtifactSet["item_bonuses"],
    slots: ArtifactSet["slots"],
  ) {
    this.key = key;
    this.name = name;
    this.rarities = rarities;
    this.source = source;
    this.item_bonuses = itemBonuses;
    this.slots = slots;
  }

  get character_recommendations() {
    return this._character_recommendations;
  }

  get image_src() {
    return this.slots[ArtifactSlotKeys.Flower]?.image_src || this.slots[ArtifactSlotKeys.Plume]?.image_src
      || this.slots[ArtifactSlotKeys.Sands]?.image_src || this.slots[ArtifactSlotKeys.Goblet]?.image_src
      || this.slots[ArtifactSlotKeys.Circlet]?.image_src;
  }

  get recommendations() {
    return getArtifactSetRecommendations(this.key);
  }

  setCharacterRecommendations(val: NonNullable<ArtifactSet["character_recommendations"]>) {
    this._character_recommendations = val;

    return this;
  }

  static init(params: ConstructorParameters<typeof _ArtifactSet>) {
    return new _ArtifactSet(...params);
  }
}

class _ArtifactSetSlot implements ArtifactSetSlot {
  readonly key: ArtifactSetSlot["key"];
  readonly name: ArtifactSetSlot["name"];
  readonly image_src: ArtifactSetSlot["image_src"];

  constructor(
    key: ArtifactSetSlot["key"],
    name: ArtifactSetSlot["name"],
    imageSrc: ArtifactSetSlot["image_src"],
  ) {
    this.key = key;
    this.name = name;
    this.image_src = imageSrc;
  }

  get slot() {
    return getArtifactSlot(this.key);
  }

  static init(params: ConstructorParameters<typeof _ArtifactSetSlot>) {
    return new _ArtifactSetSlot(...params);
  }
}

const ArtifactSetSource = {
  Alchemy: "Мистическое подношение (Алхимия)",
  Dungeon: (key: Dungeon["key"]) => `Подземелье «${dungeons[key].name}»`,
};
const dungeonByKey = (key: keyof typeof DungeonKeys) => `Подземелье «${dungeons[DungeonKeys[key]].name}»`;
const IconWeb = (setKey: keyof typeof ArtifactSetKeys, slotKey: ArtifactSlotKey) => {
  return publicImageSrc(`${_ArtifactSet.PATH}/${ArtifactSetKeys[setKey]}/${slotKey}_icon.webp`);
};

export default {
  [ArtifactSetKeys.ArchaicPetra]: _ArtifactSet.init([
    ArtifactSetKeys.ArchaicPetra,
    "Архаичный камень",
    [4, 5],
    [ArtifactSetSource.Dungeon(DungeonKeys.DomainOfGuyun), ArtifactSetSource.Alchemy],
    {
      2: "Увеличивает бонус Гео урона на 15%.",
      4: "Подобранный элементальный осколок, образованный реакцией Кристалл, увеличивает бонус элементального урона соответствующего элемента всех членов отряда на 35% в течение 10 сек. Одновременно можно иметь бонус урона только одного элемента.",
    },
    {
      [ArtifactSlotKeys.Flower]: _ArtifactSetSlot.init([
        ArtifactSlotKeys.Flower,
        "Цветок скальных трещин",
        "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/reliquary/Archaic%2520Petra/flower_of_life_icon.png",
      ]),
      [ArtifactSlotKeys.Plume]: _ArtifactSetSlot.init([
        ArtifactSlotKeys.Plume,
        "Перо зубчатых пиков",
        "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/reliquary/Archaic%2520Petra/plume_of_death_icon.png",
      ]),
      [ArtifactSlotKeys.Sands]: _ArtifactSetSlot.init([
        ArtifactSlotKeys.Sands,
        "Часы из прочного нефрита",
        "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/reliquary/Archaic%2520Petra/sands_of_eon_icon.png",
      ]),
      [ArtifactSlotKeys.Goblet]: _ArtifactSetSlot.init([
        ArtifactSlotKeys.Goblet,
        "Кубок из резного камня",
        "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/reliquary/Archaic%2520Petra/goblet_of_eonothem_icon.png",
      ]),
      [ArtifactSlotKeys.Circlet]: _ArtifactSetSlot.init([
        ArtifactSlotKeys.Circlet,
        "Маска из одинокого базальта",
        "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/reliquary/Archaic%2520Petra/circlet_of_logos_icon.png",
      ]),
    },
  ]),
  [ArtifactSetKeys.BlizzardStrayer]: _ArtifactSet.init([
    ArtifactSetKeys.BlizzardStrayer,
    "Заблудший в метели",
    [4, 5],
    [ArtifactSetSource.Dungeon(DungeonKeys.PeakOfVindagnyr), ArtifactSetSource.Alchemy],
    {
      2: "Увеличивает бонус Крио урона на 15%.",
      4: "Атаки по противникам с эффектом Крио увеличивают шанс крит. попадания на 20%. Если противник имеет статус Заморозка, то дополнительно увеличивает шанс крит. попадания на 20%.",
    },
    {
      [ArtifactSlotKeys.Flower]: _ArtifactSetSlot.init([
        ArtifactSlotKeys.Flower,
        "Занесённая снегом память",
        "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/reliquary/Blizzard%2520Strayer/flower_of_life_icon.png",
      ]),
      [ArtifactSlotKeys.Plume]: _ArtifactSetSlot.init([
        ArtifactSlotKeys.Plume,
        "Решимость крушителя льда",
        "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/reliquary/Blizzard%2520Strayer/plume_of_death_icon.png",
      ]),
      [ArtifactSlotKeys.Sands]: _ArtifactSetSlot.init([
        ArtifactSlotKeys.Sands,
        "Гибель замёрзшей родины",
        "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/reliquary/Blizzard%2520Strayer/sands_of_eon_icon.png",
      ]),
      [ArtifactSlotKeys.Goblet]: _ArtifactSetSlot.init([
        ArtifactSlotKeys.Goblet,
        "Морозная гордость",
        "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/reliquary/Blizzard%2520Strayer/goblet_of_eonothem_icon.png",
      ]),
      [ArtifactSlotKeys.Circlet]: _ArtifactSetSlot.init([
        ArtifactSlotKeys.Circlet,
        "Эхо осколков инея",
        "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/reliquary/Blizzard%2520Strayer/circlet_of_logos_icon.png",
      ]),
    },
  ]),
  [ArtifactSetKeys.BloodstainedChivalry]: _ArtifactSet.init([
    ArtifactSetKeys.BloodstainedChivalry,
    "Рыцарь крови",
    [4, 5],
    [ArtifactSetSource.Dungeon(DungeonKeys.ClearPoolAndMountainCavern), ArtifactSetSource.Alchemy],
    {
      2: "Увеличивает физ. урон на 25%.",
      4: "После победы над противником увеличивает урон заряженной атаки на 50% и обнуляет стоимость выносливости заряженной атаки на 10 сек.",
    },
    {
      [ArtifactSlotKeys.Flower]: _ArtifactSetSlot.init([
        ArtifactSlotKeys.Flower,
        "Железное сердце рыцаря крови",
        "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/reliquary/Bloodstained%2520Chivalry/flower_of_life_icon.png",
      ]),
      [ArtifactSlotKeys.Plume]: _ArtifactSetSlot.init([
        ArtifactSlotKeys.Plume,
        "Перо рыцаря крови",
        "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/reliquary/Bloodstained%2520Chivalry/plume_of_death_icon.png",
      ]),
      [ArtifactSlotKeys.Sands]: _ArtifactSetSlot.init([
        ArtifactSlotKeys.Sands,
        "Час долга рыцаря крови",
        "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/reliquary/Bloodstained%2520Chivalry/sands_of_eon_icon.png",
      ]),
      [ArtifactSlotKeys.Goblet]: _ArtifactSetSlot.init([
        ArtifactSlotKeys.Goblet,
        "Кубок рыцаря крови",
        "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/reliquary/Bloodstained%2520Chivalry/goblet_of_eonothem_icon.png",
      ]),
      [ArtifactSlotKeys.Circlet]: _ArtifactSetSlot.init([
        ArtifactSlotKeys.Circlet,
        "Железная маска рыцаря крови",
        "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/reliquary/Bloodstained%2520Chivalry/circlet_of_logos_icon.png",
      ]),
    },
  ]),
  [ArtifactSetKeys.CrimsonWitchOfFlames]: _ArtifactSet.init([
    ArtifactSetKeys.CrimsonWitchOfFlames,
    "Горящая алая ведьма",
    [4, 5],
    [ArtifactSetSource.Dungeon(DungeonKeys.HiddenPalaceOfZhouFormula), ArtifactSetSource.Alchemy],
    {
      2: "Увеличивает бонус Пиро урона на 15%.",
      4: "Увеличивает урон статусов Перегрузка, Горение и Цветение на 40%, а урон статусов Пар и Таяние - на 15%. Использование элементального навыка увеличивает эффекты набора из двух вещей на 50% в течение 10 сек. Может складываться до 3 раз.",
    },
    {
      [ArtifactSlotKeys.Flower]: _ArtifactSetSlot.init([
        ArtifactSlotKeys.Flower,
        "Ведьмин огненный цветок",
        "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/reliquary/Crimson%2520Witch%2520of%2520Flames/flower_of_life_icon.png",
      ]),
      [ArtifactSlotKeys.Plume]: _ArtifactSetSlot.init([
        ArtifactSlotKeys.Plume,
        "Пылающее ведьмино перо",
        "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/reliquary/Crimson%2520Witch%2520of%2520Flames/plume_of_death_icon.png",
      ]),
      [ArtifactSlotKeys.Sands]: _ArtifactSetSlot.init([
        ArtifactSlotKeys.Sands,
        "Ведьмин последний час",
        "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/reliquary/Crimson%2520Witch%2520of%2520Flames/sands_of_eon_icon.png",
      ]),
      [ArtifactSlotKeys.Goblet]: _ArtifactSetSlot.init([
        ArtifactSlotKeys.Goblet,
        "Пламя ведьминого сердца",
        "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/reliquary/Crimson%2520Witch%2520of%2520Flames/goblet_of_eonothem_icon.png",
      ]),
      [ArtifactSlotKeys.Circlet]: _ArtifactSetSlot.init([
        ArtifactSlotKeys.Circlet,
        "Тлеющая ведьмина шляпа",
        "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/reliquary/Crimson%2520Witch%2520of%2520Flames/circlet_of_logos_icon.png",
      ]),
    },
  ]),
  [ArtifactSetKeys.DeepwoodMemories]: new _ArtifactSet(
    ArtifactSetKeys.DeepwoodMemories,
    "Воспоминания дремучего леса",
    [4, 5],
    [dungeonByKey("SpireOfSolitaryEnlightenment"), ArtifactSetSource.Alchemy],
    {
      2: "Увеличивает бонус Дендро урона на 15%.",
      4: "Попадание элементальным навыком или взрывом стихии снижает Дендро сопротивление врага на 30% на 8 сек. Этот эффект срабатывает, даже если экипированный этими артефактами персонаж не на поле боя.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot(ArtifactSlotKeys.Flower, "Странник лабиринта", IconWeb("DeepwoodMemories", ArtifactSlotKeys.Flower)),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot(ArtifactSlotKeys.Plume, "Мудрец лозы", IconWeb("DeepwoodMemories", ArtifactSlotKeys.Plume)),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot(ArtifactSlotKeys.Sands, "Час осмысления", IconWeb("DeepwoodMemories", ArtifactSlotKeys.Sands)),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot(ArtifactSlotKeys.Goblet, "Лампа заблудших", IconWeb("DeepwoodMemories", ArtifactSlotKeys.Goblet)),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot(ArtifactSlotKeys.Circlet, "Лавровый венец", IconWeb("DeepwoodMemories", ArtifactSlotKeys.Circlet)),
    },
  ),
  [ArtifactSetKeys.DesertPavilionChronicle]: new _ArtifactSet(
    ArtifactSetKeys.DesertPavilionChronicle,
    "Хроники Чертогов в пустыне",
    [4, 5],
    [dungeonByKey("CityOfGold"), ArtifactSetSource.Alchemy],
    {
      2: "Увеличивает бонус Анемо урона на 15%.",
      4: "Попадание заряженной атакой на 15 сек. повышает скорость обычной атаки на 10%, а урон обычной атаки, заряженной атаки и атаки в падении — на 40%.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot(ArtifactSlotKeys.Flower, "Рождение города королей", IconWeb("DesertPavilionChronicle", ArtifactSlotKeys.Flower)),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot(ArtifactSlotKeys.Plume, "Конец золотого царства", IconWeb("DesertPavilionChronicle", ArtifactSlotKeys.Plume)),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot(ArtifactSlotKeys.Sands, "Часы потерянного пути", IconWeb("DesertPavilionChronicle", ArtifactSlotKeys.Sands)),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot(ArtifactSlotKeys.Goblet, "Хранитель дивной мечты", IconWeb("DesertPavilionChronicle", ArtifactSlotKeys.Goblet)),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot(ArtifactSlotKeys.Circlet, "Наследие пустынной знати", IconWeb("DesertPavilionChronicle", ArtifactSlotKeys.Circlet)),
    },
  ),
  [ArtifactSetKeys.EchoesOfAnOffering]: new _ArtifactSet(
    ArtifactSetKeys.EchoesOfAnOffering,
    "Отголоски подношения",
    [4, 5],
    [dungeonByKey("TheLostValley"), ArtifactSetSource.Alchemy],
    {
      2: "Увеличивает силу атаки на 18%.",
      4: "Попадания обычной атакой с 36% шансом активируют Ритуал долины: урон обычной атаки повышается на 70% от силы атаки. Через 0,05 сек. после нанесения урона обычной атакой эффект исчезает. Если обычной атаке не удалось активировать этот эффект, шанс его активации следующим попаданием возрастает на 20%. Шанс активации возникает не чаще одного раза в 0,2 сек.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot(ArtifactSlotKeys.Flower, "Цветок призрачного аромата", IconWeb("EchoesOfAnOffering", ArtifactSlotKeys.Flower)),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot(ArtifactSlotKeys.Plume, "Нефритовый листок", IconWeb("EchoesOfAnOffering", ArtifactSlotKeys.Plume)),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot(ArtifactSlotKeys.Sands, "Символ подношения", IconWeb("EchoesOfAnOffering", ArtifactSlotKeys.Sands)),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot(ArtifactSlotKeys.Goblet, "Чаша истока", IconWeb("EchoesOfAnOffering", ArtifactSlotKeys.Goblet)),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot(ArtifactSlotKeys.Circlet, "Серьги текучести", IconWeb("EchoesOfAnOffering", ArtifactSlotKeys.Circlet)),
    },
  ),
  [ArtifactSetKeys.EmblemOfSeveredFate]: new _ArtifactSet(
    "EmblemOfSeveredFate",
    "Эмблема рассечённой судьбы",
    [4, 5],
    [dungeonByKey("MomijiDyedCourt"), ArtifactSetSource.Alchemy],
    {
      2: "Увеличивает скорость восстановления энергии на 20%.",
      4: "Увеличивает урон взрыва стихий на величину, равную 25% от значения восстановления энергии. Эффект можно увеличить максимум до 75%.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot(ArtifactSlotKeys.Flower, "Великолепная цуба", IconWeb("EmblemOfSeveredFate", ArtifactSlotKeys.Flower)),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot(ArtifactSlotKeys.Plume, "Обрезанное перо", IconWeb("EmblemOfSeveredFate", ArtifactSlotKeys.Plume)),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot(ArtifactSlotKeys.Sands, "Клетка грозовых облаков", IconWeb("EmblemOfSeveredFate", ArtifactSlotKeys.Sands)),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot(ArtifactSlotKeys.Goblet, "Алый сосуд", IconWeb("EmblemOfSeveredFate", ArtifactSlotKeys.Goblet)),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot(ArtifactSlotKeys.Circlet, "Украшенный кабуто", IconWeb("EmblemOfSeveredFate", ArtifactSlotKeys.Circlet)),
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
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot(ArtifactSlotKeys.Flower, "Отголоски песни галерей глубин", IconWeb("FinaleOfTheDeepGalleries", ArtifactSlotKeys.Flower)),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot(ArtifactSlotKeys.Plume, "Дальние странствия галерей глубин", IconWeb("FinaleOfTheDeepGalleries", ArtifactSlotKeys.Plume)),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot(ArtifactSlotKeys.Sands, "Часы забвения галерей глубин", IconWeb("FinaleOfTheDeepGalleries", ArtifactSlotKeys.Sands)),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot(ArtifactSlotKeys.Goblet, "Ниспосланный пир галерей глубин", IconWeb("FinaleOfTheDeepGalleries", ArtifactSlotKeys.Goblet)),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot(ArtifactSlotKeys.Circlet, "Утраченная корона галерей глубин", IconWeb("FinaleOfTheDeepGalleries", ArtifactSlotKeys.Circlet)),
    },
  ),
  [ArtifactSetKeys.FlowerOfParadiseLost]: new _ArtifactSet(
    ArtifactSetKeys.FlowerOfParadiseLost,
    "Цветок потерянного рая",
    [4, 5],
    [dungeonByKey("CityOfGold"), ArtifactSetSource.Alchemy],
    {
      2: "Увеличивает мастерство стихий на 80 ед.",
      4: "Увеличивает урон реакций Бутонизация, Вегетация и Цветение экипированного этим набором персонажа на 40%. Кроме того, активация реакций Бутонизация, Вегетация и Цветение экипированным этим набором персонажем усилит этот эффект на 25%. Каждое суммирование длится 10 сек. Эффект складывается до 4 раз, может возникнуть раз в 1 сек. и активируется, даже если экипированный этим набором персонаж не активен.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot(ArtifactSlotKeys.Flower, "Великолепие Ай-Ханум", IconWeb("FlowerOfParadiseLost", ArtifactSlotKeys.Flower)),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot(ArtifactSlotKeys.Plume, "Угасающий пир", IconWeb("FlowerOfParadiseLost", ArtifactSlotKeys.Plume)),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot(ArtifactSlotKeys.Sands, "Застывшее мгновение", IconWeb("FlowerOfParadiseLost", ArtifactSlotKeys.Sands)),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot(ArtifactSlotKeys.Goblet, "Магический сосуд хранителя тайн", IconWeb("FlowerOfParadiseLost", ArtifactSlotKeys.Goblet)),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot(ArtifactSlotKeys.Circlet, "Аметистовый венец", IconWeb("FlowerOfParadiseLost", ArtifactSlotKeys.Circlet)),
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
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot(ArtifactSlotKeys.Flower, "Увертюра стройной симфонии", `${ArtifactSetKeys.FragmentOfHarmonicWhimsy}/harmonious_symphony_prelude-256x256.png`),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot(ArtifactSlotKeys.Plume, "Ночные раздумья древнего моря", `${ArtifactSetKeys.FragmentOfHarmonicWhimsy}/ancient_seas_nocturnal_musing-256x256.png`),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot(ArtifactSlotKeys.Sands, "Скерцо поворотов судьбы", `${ArtifactSetKeys.FragmentOfHarmonicWhimsy}/the_grand_jape_of_the_turning_of_fate-256x256.png`),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot(ArtifactSlotKeys.Goblet, "Неистовая рапсодия ихора", `${ArtifactSetKeys.FragmentOfHarmonicWhimsy}/ichor_shower_rhapsody-256x256.png`),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot(ArtifactSlotKeys.Circlet, "Вальс увядших фантазий", `${ArtifactSetKeys.FragmentOfHarmonicWhimsy}/whimsical_dance_of_the_withered-256x256.png`),
    },
  ).setCharacterRecommendations([{
    key: CharacterKeys.Arlecchino,
    notes: "Один из лучших комплектов для Арлекино, так как повышает важную силу атаки и увеличивает наносимый урон. Так как Арлекино сама накладывает на себя Долг жизни, она выполняет условие 4 предметов.",
  }]),
  [ArtifactSetKeys.GildedDreams]: new _ArtifactSet(
    "GildedDreams",
    "Позолоченные сны",
    [4, 5],
    [dungeonByKey("SpireOfSolitaryEnlightenment"), ArtifactSetSource.Alchemy],
    {
      2: "Увеличивает мастерство стихий на 80 ед.",
      4: "На 8 сек. после вызова элементальной реакции согласно элементам других персонажей в отряде экипированный этими артефактами персонаж получает следующие усиления: сила атаки повышается на 14% за каждого персонажа с таким же элементом, как и у экипированного персонажа; мастерство стихий повышается на 50 ед. за каждого персонажа с иным элементом. Каждое из этих усилений при подсчёте включает до 3 персонажей. Эффект может возникнуть один раз в 8 сек. Срабатывает, даже если экипированный этими артефактами персонаж не на поле боя.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot(ArtifactSlotKeys.Flower, "Сон железного цветка", IconWeb("GildedDreams", ArtifactSlotKeys.Flower)),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot(ArtifactSlotKeys.Plume, "Перо суждения", IconWeb("GildedDreams", ArtifactSlotKeys.Plume)),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot(ArtifactSlotKeys.Sands, "Золотые годы", IconWeb("GildedDreams", ArtifactSlotKeys.Sands)),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot(ArtifactSlotKeys.Goblet, "Последний медовый пир", IconWeb("GildedDreams", ArtifactSlotKeys.Goblet)),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot(ArtifactSlotKeys.Circlet, "Тень Короля песков", IconWeb("GildedDreams", ArtifactSlotKeys.Circlet)),
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
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot(ArtifactSlotKeys.Flower, "Ностальгия гладиатора", IconWeb("GladiatorsFinale", ArtifactSlotKeys.Flower)),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot(ArtifactSlotKeys.Plume, "Судьба гладиатора", IconWeb("GladiatorsFinale", ArtifactSlotKeys.Plume)),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot(ArtifactSlotKeys.Sands, "Стремление гладиатора", IconWeb("GladiatorsFinale", ArtifactSlotKeys.Sands)),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot(ArtifactSlotKeys.Goblet, "Пьянство гладиатора", IconWeb("GladiatorsFinale", ArtifactSlotKeys.Goblet)),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot(ArtifactSlotKeys.Circlet, "Триумф гладиатора", IconWeb("GladiatorsFinale", ArtifactSlotKeys.Circlet)),
    },
  ),
  [ArtifactSetKeys.GoldenTroupe]: new _ArtifactSet(
    "GoldenTroupe",
    "Золотая труппа",
    [4, 5],
    [dungeonByKey("DenouementOfSin"), ArtifactSetSource.Alchemy],
    {
      2: "Увеличивает урон элементального навыка на 20%.",
      4: "Увеличивает урон элементального навыка на 25%. Кроме того, когда персонаж не на поле боя, урон элементального навыка дополнительно увеличивается на 25%. Через 2 сек. после вступления в бой эффект исчезает.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot(ArtifactSlotKeys.Flower, "Вариация золотой песни", IconWeb("GoldenTroupe", ArtifactSlotKeys.Flower)),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot(ArtifactSlotKeys.Plume, "Перо золотой птицы", IconWeb("GoldenTroupe", ArtifactSlotKeys.Plume)),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot(ArtifactSlotKeys.Sands, "Предзнаменование золотой эпохи", IconWeb("GoldenTroupe", ArtifactSlotKeys.Sands)),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot(ArtifactSlotKeys.Goblet, "Суета золотой ночи", IconWeb("GoldenTroupe", ArtifactSlotKeys.Goblet)),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot(ArtifactSlotKeys.Circlet, "Награда Золотой труппы", IconWeb("GoldenTroupe", ArtifactSlotKeys.Circlet)),
    },
  ),
  [ArtifactSetKeys.HeartOfDepth]: new _ArtifactSet(
    "HeartOfDepth",
    "Сердце глубин",
    [4, 5],
    [ArtifactSetSource.Dungeon(DungeonKeys.PeakOfVindagnyr), ArtifactSetSource.Alchemy],
    {
      2: "Увеличивает бонус Гидро урона на 15%.",
      4: "Увеличивает урон обычной и заряженной атаки на 30% в течение 15 сек. после использования элементального навыка.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot(ArtifactSlotKeys.Flower, "Позолоченная брошь", IconWeb("HeartOfDepth", ArtifactSlotKeys.Flower)),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot(ArtifactSlotKeys.Plume, "Порыв ностальгии", IconWeb("HeartOfDepth", ArtifactSlotKeys.Plume)),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot(ArtifactSlotKeys.Sands, "Медный компас", IconWeb("HeartOfDepth", ArtifactSlotKeys.Sands)),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot(ArtifactSlotKeys.Goblet, "Кубок оглушающих глубин", IconWeb("HeartOfDepth", ArtifactSlotKeys.Goblet)),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot(ArtifactSlotKeys.Circlet, "Треуголка в пятнах вина", IconWeb("HeartOfDepth", ArtifactSlotKeys.Circlet)),
    },
  ),
  [ArtifactSetKeys.HuskOfOpulentDreams]: new _ArtifactSet(
    ArtifactSetKeys.HuskOfOpulentDreams,
    "Кокон сладких грёз",
    [4, 5],
    [dungeonByKey("SlumberingCourt"), ArtifactSetSource.Alchemy],
    {
      2: "Увеличивает защиту на 30%.",
      4: "Персонаж, экипированный этим набором артефактов, получает эффект Любопытства в следующих ситуациях: 1 уровень Любопытства даётся активному персонажу после попадания по противнику атакой Гео (не чаще чем раз в 0,3 сек.); когда персонаж находится вне поля боя, он получает 1 ур. Любопытства каждые 3 сек. Любопытство может складываться до 4 ур., каждый ур. прибавляет 6% к защите и 6% к Гео урону. Если персонаж не получает Любопытство в течение 6 сек., то он теряет 1 накопленный уровень Любопытства.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot(ArtifactSlotKeys.Flower, "Пора расцвета", IconWeb("HuskOfOpulentDreams", ArtifactSlotKeys.Flower)),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot(ArtifactSlotKeys.Plume, "Перо чертога", IconWeb("HuskOfOpulentDreams", ArtifactSlotKeys.Plume)),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot(ArtifactSlotKeys.Sands, "Песнь жизни", IconWeb("HuskOfOpulentDreams", ArtifactSlotKeys.Sands)),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot(ArtifactSlotKeys.Goblet, "Тыква пробуждения", IconWeb("HuskOfOpulentDreams", ArtifactSlotKeys.Goblet)),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot(ArtifactSlotKeys.Circlet, "Шляпа телесности", IconWeb("HuskOfOpulentDreams", ArtifactSlotKeys.Circlet)),
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
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot(ArtifactSlotKeys.Flower, "Брошь инструктора", IconWeb("Instructor", ArtifactSlotKeys.Flower)),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot(ArtifactSlotKeys.Plume, "Перо инструктора", IconWeb("Instructor", ArtifactSlotKeys.Plume)),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot(ArtifactSlotKeys.Sands, "Карманные часы инструктора", IconWeb("Instructor", ArtifactSlotKeys.Sands)),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot(ArtifactSlotKeys.Goblet, "Чайная кружка инструктора", IconWeb("Instructor", ArtifactSlotKeys.Goblet)),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot(ArtifactSlotKeys.Circlet, "Кепка инструктора", IconWeb("Instructor", ArtifactSlotKeys.Circlet)),
    },
  ),
  [ArtifactSetKeys.Lavawalker]: new _ArtifactSet(
    ArtifactSetKeys.Lavawalker,
    "Ступающий по лаве",
    [4, 5],
    [ArtifactSetSource.Dungeon(DungeonKeys.HiddenPalaceOfZhouFormula), ArtifactSetSource.Alchemy],
    {
      2: "Пиро сопротивление: +40%",
      4: "Увеличивает урон против врагов, находящихся под действием Пиро, на 35%.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot(ArtifactSlotKeys.Flower, "Решительность ступающего по лаве", IconWeb("Lavawalker", ArtifactSlotKeys.Flower)),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot(ArtifactSlotKeys.Plume, "Спасение ступающего по лаве", IconWeb("Lavawalker", ArtifactSlotKeys.Plume)),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot(ArtifactSlotKeys.Sands, "Муки ступающего по лаве", IconWeb("Lavawalker", ArtifactSlotKeys.Sands)),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot(ArtifactSlotKeys.Goblet, "Просветление ступающего по лаве", IconWeb("Lavawalker", ArtifactSlotKeys.Goblet)),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot(ArtifactSlotKeys.Circlet, "Мудрость ступающего по лаве", IconWeb("Lavawalker", ArtifactSlotKeys.Circlet)),
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
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot(ArtifactSlotKeys.Flower, "Клятва светоносца", `${ArtifactSetKeys.LongNightsOath}/lightkeepers_pledge-256x256.png`),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot(ArtifactSlotKeys.Plume, "Соловьиное перо", `${ArtifactSetKeys.LongNightsOath}/nightingales_tail_feather-256x256.png`),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot(ArtifactSlotKeys.Sands, "Скорбный колокольчик бессмертного", `${ArtifactSetKeys.LongNightsOath}/undying_ones_mourning_bell-256x256.png`),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot(ArtifactSlotKeys.Goblet, "Умолкнувший рог", `${ArtifactSetKeys.LongNightsOath}/a_horn_unwinded-256x256.png`),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot(ArtifactSlotKeys.Circlet, "Окрашенный шлем", `${ArtifactSetKeys.LongNightsOath}/dyed_tassel-256x256.png`),
    },
  ).setCharacterRecommendations([{
    key: CharacterKeys.Varesa,
    notes: "Варесе будет очень полезно увеличение урона атак в падении, которые она использует. Поскольку она часто активирует элементальный навык, а также заряженную атаку и атаку в падении после навыка, она может получить максимальный бонус урона.",
  }]),
  [ArtifactSetKeys.MaidenBeloved]: new _ArtifactSet(
    ArtifactSetKeys.MaidenBeloved,
    "Возлюбленная юная дева",
    [4, 5],
    [dungeonByKey("ValleyOfRemembrance"), ArtifactSetSource.Alchemy],
    {
      2: "Увеличивает эффективность лечения на 15%.",
      4: "Увеличивает получаемое лечение всех членов отряда на 20% в течение 10 сек. после использования элементального навыка или взрыва стихии.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot(ArtifactSlotKeys.Flower, "Далёкая душа юной девы", IconWeb("MaidenBeloved", ArtifactSlotKeys.Flower)),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot(ArtifactSlotKeys.Plume, "Тоска юной девы", IconWeb("MaidenBeloved", ArtifactSlotKeys.Plume)),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot(ArtifactSlotKeys.Sands, "Уходящая молодость юной девы", IconWeb("MaidenBeloved", ArtifactSlotKeys.Sands)),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot(ArtifactSlotKeys.Goblet, "Досуг юной девы", IconWeb("MaidenBeloved", ArtifactSlotKeys.Goblet)),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot(ArtifactSlotKeys.Circlet, "Увядающая красота юной девы", IconWeb("MaidenBeloved", ArtifactSlotKeys.Circlet)),
    },
  ),
  [ArtifactSetKeys.MarechausseeHunter]: new _ArtifactSet(
    "MarechausseeHunter",
    "Охотник Сумеречного двора",
    [4, 5],
    [dungeonByKey("DenouementOfSin"), ArtifactSetSource.Alchemy],
    {
      2: "Увеличивает урон обычной и заряженной атаки на 15%.",
      4: "Увеличивает шанс крит. попадания на 12% на 5 сек., когда текущее HP увеличивается или снижается. Эффект может складываться до 3 раз.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot(ArtifactSlotKeys.Flower, "Брошь охотника", IconWeb("MarechausseeHunter", ArtifactSlotKeys.Flower)),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot(ArtifactSlotKeys.Plume, "Увертюра шедевра", IconWeb("MarechausseeHunter", ArtifactSlotKeys.Plume)),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot(ArtifactSlotKeys.Sands, "Мгновение правосудия", IconWeb("MarechausseeHunter", ArtifactSlotKeys.Sands)),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot(ArtifactSlotKeys.Goblet, "Забытый сосуд", IconWeb("MarechausseeHunter", ArtifactSlotKeys.Goblet)),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot(ArtifactSlotKeys.Circlet, "Лик старого солдата", IconWeb("MarechausseeHunter", ArtifactSlotKeys.Circlet)),
    },
  ),
  [ArtifactSetKeys.NighttimeWhispersInTheEchoingWoods]: new _ArtifactSet(
    ArtifactSetKeys.NighttimeWhispersInTheEchoingWoods,
    "Ночной шёпот в Лесу откликающегося эха",
    [4, 5],
    dungeonByKey("WaterfallWen"),
    {
      2: "Увеличивает силу атаки на 18%.",
      4: "После использования элементального навыка бонус Гео урона на 10 сек. увеличивается на 20%. Если персонаж находится под защитой щита, созданного реакцией Кристалл, этот эффект увеличивается на 150%. Через 1 сек. после потери щита это дополнительное увеличение исчезает.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot(ArtifactSlotKeys.Flower, "Бескорыстный цветок", IconWeb("NighttimeWhispersInTheEchoingWoods", ArtifactSlotKeys.Flower)),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot(ArtifactSlotKeys.Plume, "Искреннее перо", IconWeb("NighttimeWhispersInTheEchoingWoods", ArtifactSlotKeys.Plume)),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot(ArtifactSlotKeys.Sands, "Верные песочные часы", IconWeb("NighttimeWhispersInTheEchoingWoods", ArtifactSlotKeys.Sands)),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot(ArtifactSlotKeys.Goblet, "Великодушная чернильница", IconWeb("NighttimeWhispersInTheEchoingWoods", ArtifactSlotKeys.Goblet)),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot(ArtifactSlotKeys.Circlet, "Милостивая шляпка", IconWeb("NighttimeWhispersInTheEchoingWoods", ArtifactSlotKeys.Circlet)),
    },
  ),
  [ArtifactSetKeys.NoblesseOblige]: new _ArtifactSet(
    "NoblesseOblige",
    "Церемония древней знати",
    [4, 5],
    [ArtifactSetSource.Dungeon(DungeonKeys.ClearPoolAndMountainCavern), ArtifactSetSource.Alchemy],
    {
      2: "Увеличивает урон взрыва стихии на 20%.",
      4: "Активация взрыва стихии увеличивает силу атаки всех членов отряда на 20% в течение 12 сек. Эффект не складывается.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot(ArtifactSlotKeys.Flower, "Королевский цветок", IconWeb("NoblesseOblige", ArtifactSlotKeys.Flower)),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot(ArtifactSlotKeys.Plume, "Королевское перо", IconWeb("NoblesseOblige", ArtifactSlotKeys.Plume)),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot(ArtifactSlotKeys.Sands, "Королевские карманные часы", IconWeb("NoblesseOblige", ArtifactSlotKeys.Sands)),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot(ArtifactSlotKeys.Goblet, "Королевская серебряная фляжка", IconWeb("NoblesseOblige", ArtifactSlotKeys.Goblet)),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot(ArtifactSlotKeys.Circlet, "Королевская маска", IconWeb("NoblesseOblige", ArtifactSlotKeys.Circlet)),
    },
  ),
  [ArtifactSetKeys.NymphsDream]: new _ArtifactSet(
    ArtifactSetKeys.NymphsDream,
    "Сон нимфы",
    [4, 5],
    [dungeonByKey("MoltenIronFortress"), ArtifactSetSource.Alchemy],
    {
      2: "Даёт 15% бонус Гидро урона.",
      4: "Попадания обычной атакой, заряженной атакой, атакой в падении, элементальным навыком и взрывом стихий по противнику на 8 сек. создаёт 1 уровень Отражения нимфы. Когда действуют 1/2/3 и более уровня Отражения нимфы, сила атаки повышается на 7%/16%/25%, а бонус Гидро урона на 4%/9%/15%. Уровни Отражения нимфы, созданные обычными атаками, заряженными атаками, атаками в падении, элементальными навыками и взрывами стихий, существуют независимо друг от друга.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot(ArtifactSlotKeys.Flower, "Цветок странствий", IconWeb("NymphsDream", ArtifactSlotKeys.Flower)),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot(ArtifactSlotKeys.Plume, "Перо злого мага", IconWeb("NymphsDream", ArtifactSlotKeys.Plume)),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot(ArtifactSlotKeys.Sands, "Постоянство нимфы", IconWeb("NymphsDream", ArtifactSlotKeys.Sands)),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot(ArtifactSlotKeys.Goblet, "Чаепитие героев", IconWeb("NymphsDream", ArtifactSlotKeys.Goblet)),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot(ArtifactSlotKeys.Circlet, "Монокль свирепого дракона", IconWeb("NymphsDream", ArtifactSlotKeys.Circlet)),
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
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot(ArtifactSlotKeys.Flower, "Ожидания инородцев", `${ArtifactSetKeys.ObsidianCodex}/reckoning_of_the_xenogenic-256x256.png`),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot(ArtifactSlotKeys.Plume, "Корень костного мозга души", `${ArtifactSetKeys.ObsidianCodex}/root_of_the_spirit_marrow-256x256.png`),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot(ArtifactSlotKeys.Sands, "Мифы владений ночи", `${ArtifactSetKeys.ObsidianCodex}/myths_of_the_night_realm-256x256.png`),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot(ArtifactSlotKeys.Goblet, "Банкет перед состязанием", `${ArtifactSetKeys.ObsidianCodex}/pre_banquet_of_the_contenders-256x256.png`),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot(ArtifactSlotKeys.Circlet, "Корона святых", `${ArtifactSetKeys.ObsidianCodex}/crown_of_the_saints-256x256.png`),
    },
  ).setCharacterRecommendations([{ key: CharacterKeys.Varesa, notes: "" }]),
  [ArtifactSetKeys.OceanHuedClam]: new _ArtifactSet(
    ArtifactSetKeys.OceanHuedClam,
    "Моллюск морских красок",
    [4, 5],
    [dungeonByKey("SlumberingCourt"), ArtifactSetSource.Alchemy],
    {
      2: "Повышает бонус лечения на 15%.",
      4: "Экипированный этим набором артефактов персонаж при лечении соратников создаёт на 3 сек. Пузырь морских красок. Пузырь регистрирует восстановленное при лечении HP (в том числе избыточное, когда лечение превышает максимум здоровья). После окончания действия Пузырь взрывается и наносит окружающим врагам урон в размере 90% учтённого объёма лечения (урон рассчитывается так же, как для эффектов Заряжен и Сверхпроводник, но на него не действуют бонусы мастерства стихий, уровня и реакций). Пузырь морских красок можно создавать не чаще чем раз в 3,5 сек. Пузырь может записать до 30 000 восстановленного HP, в том числе HP избыточного лечения. Для отряда не может существовать больше одного Пузыря морских красок одновременно. Этот эффект действует, даже если персонаж, экипированный набором артефактов, не находится на поле боя.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot(ArtifactSlotKeys.Flower, "Цветок морских красок", IconWeb("OceanHuedClam", ArtifactSlotKeys.Flower)),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot(ArtifactSlotKeys.Plume, "Перо глубинного дворца", IconWeb("OceanHuedClam", ArtifactSlotKeys.Plume)),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot(ArtifactSlotKeys.Sands, "Раковина разлуки", IconWeb("OceanHuedClam", ArtifactSlotKeys.Sands)),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot(ArtifactSlotKeys.Goblet, "Жемчужная клетка", IconWeb("OceanHuedClam", ArtifactSlotKeys.Goblet)),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot(ArtifactSlotKeys.Circlet, "Корона Ватацуми", IconWeb("OceanHuedClam", ArtifactSlotKeys.Circlet)),
    },
  ),
  [ArtifactSetKeys.PaleFlame]: new _ArtifactSet(
    ArtifactSetKeys.PaleFlame,
    "Бледный огонь",
    [4, 5],
    [dungeonByKey("RidgeWatch"), ArtifactSetSource.Alchemy],
    {
      2: "Увеличивает физ. урон на 25%.",
      4: "Когда элементальный навык попадает по врагам, атака увеличивается на 9% в течение 7 сек. Эффект может складываться до 2 раз и возникнуть не чаще 1 раза за 0,3 сек. На 2 уровне складывания эффект набора из 2 вещей увеличивается на 100%.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot(ArtifactSlotKeys.Flower, "Незапятнанный цветок", IconWeb("PaleFlame", ArtifactSlotKeys.Flower)),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot(ArtifactSlotKeys.Plume, "Перо мудрого лекаря", IconWeb("PaleFlame", ArtifactSlotKeys.Plume)),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot(ArtifactSlotKeys.Sands, "Замершее мгновение", IconWeb("PaleFlame", ArtifactSlotKeys.Sands)),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot(ArtifactSlotKeys.Goblet, "Превосходящая чаша", IconWeb("PaleFlame", ArtifactSlotKeys.Goblet)),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot(ArtifactSlotKeys.Circlet, "Смеющаяся маска", IconWeb("PaleFlame", ArtifactSlotKeys.Circlet)),
    },
  ),
  [ArtifactSetKeys.RetracingBolide]: new _ArtifactSet(
    ArtifactSetKeys.RetracingBolide,
    "Встречная комета",
    [4, 5],
    [ArtifactSetSource.Dungeon(DungeonKeys.DomainOfGuyun), ArtifactSetSource.Alchemy],
    {
      2: "Увеличивает прочность щита на 35%.",
      4: "Под защитой щита увеличивает урон обычной и заряженной атаки на 40%.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot(ArtifactSlotKeys.Flower, "Цветок равноденствия", IconWeb("RetracingBolide", ArtifactSlotKeys.Flower)),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot(ArtifactSlotKeys.Plume, "Конец равноденствия", IconWeb("RetracingBolide", ArtifactSlotKeys.Plume)),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot(ArtifactSlotKeys.Sands, "Час равноденствия", IconWeb("RetracingBolide", ArtifactSlotKeys.Sands)),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot(ArtifactSlotKeys.Goblet, "Шар равноденствия", IconWeb("RetracingBolide", ArtifactSlotKeys.Goblet)),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot(ArtifactSlotKeys.Circlet, "Маска равноденствия", IconWeb("RetracingBolide", ArtifactSlotKeys.Circlet)),
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
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot(ArtifactSlotKeys.Flower, "Талисман укротителя зверей", `${ArtifactSetKeys.ScrollOfTheHeroOfCinderCity}/beast_tamers_talisman-256x256.png`),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot(ArtifactSlotKeys.Plume, "Маячок горного патрульного", `${ArtifactSetKeys.ScrollOfTheHeroOfCinderCity}/mountain_rangers_marker-256x256.png`),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot(ArtifactSlotKeys.Sands, "Золотые часы мистика", `${ArtifactSetKeys.ScrollOfTheHeroOfCinderCity}/mystics_gold_dial-256x256.png`),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot(ArtifactSlotKeys.Goblet, "Кубок бродячего исследователя", `${ArtifactSetKeys.ScrollOfTheHeroOfCinderCity}/wandering_scholars_claw_cup-256x256.png`),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot(ArtifactSlotKeys.Circlet, "Перьевая маска воина-демона", `${ArtifactSetKeys.ScrollOfTheHeroOfCinderCity}/demon_warriors_feather_mask-256x256.png`),
    },
  ).setCharacterRecommendations([
    { key: CharacterKeys.Chevreuse, notes: "" },
    { key: CharacterKeys.Iansan, notes: "" },
    { key: CharacterKeys.Xilonen, notes: "" },
  ]),
  [ArtifactSetKeys.ShimenawasReminiscence]: new _ArtifactSet(
    ArtifactSetKeys.ShimenawasReminiscence,
    "Воспоминания Симэнавы",
    [4, 5],
    [dungeonByKey("MomijiDyedCourt"), ArtifactSetSource.Alchemy],
    {
      2: "Увеличивает силу атаки на 18%.",
      4: "При использовании элементального навыка, если у персонажа 15 или более единиц энергии, он теряет 15 единиц энергии, а урон обычной атаки, заряженной атаки и атаки в падении увеличивается на 50% в течение 10 сек. Эффект нельзя активировать повторно в течение этого времени.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot(ArtifactSlotKeys.Flower, "Опутывающий цветок", IconWeb("ShimenawasReminiscence", ArtifactSlotKeys.Flower)),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot(ArtifactSlotKeys.Plume, "Стрела воспоминаний", IconWeb("ShimenawasReminiscence", ArtifactSlotKeys.Plume)),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot(ArtifactSlotKeys.Sands, "Мгновение росы", IconWeb("ShimenawasReminiscence", ArtifactSlotKeys.Sands)),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot(ArtifactSlotKeys.Goblet, "Полное надежд сердце", IconWeb("ShimenawasReminiscence", ArtifactSlotKeys.Goblet)),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot(ArtifactSlotKeys.Circlet, "Непостоянный лик", IconWeb("ShimenawasReminiscence", ArtifactSlotKeys.Circlet)),
    },
  ),
  [ArtifactSetKeys.SongOfDaysPast]: new _ArtifactSet(
    ArtifactSetKeys.SongOfDaysPast,
    "Песнь былых времён",
    [4, 5],
    dungeonByKey("WaterfallWen"),
    {
      2: "Повышает бонус лечения на 15%.",
      4: "Экипированный персонаж при лечении членов отряда на 6 сек. создаёт эффект Стремления, который регистрирует осуществлённое лечение (в том числе избыточное). С завершением длительности Стремление превращается в Волны былых времён: при попадании обычной атаки, заряженной атаки, атаки в падении, элементального навыка или взрыва стихии вашего активного персонажа по противнику наносимый урон увеличивается на 8% от общего количества лечения, зарегистрированного Стремлением. После 5 активаций или через 10 сек. эффект Волн былых времён исчезает. Однократный эффект Стремления регистрирует до 15 000 ед. HP. Одновременно может существовать только одно Стремление, но оно регистрирует лечение, предоставляемое несколькими экипированными персонажами сразу. Этот эффект активируется, даже если экипированный персонаж не на поле боя.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot(ArtifactSlotKeys.Flower, "Забытая клятва былых времён", IconWeb("SongOfDaysPast", ArtifactSlotKeys.Flower)),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot(ArtifactSlotKeys.Plume, "Воспоминания о былых временах", IconWeb("SongOfDaysPast", ArtifactSlotKeys.Plume)),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot(ArtifactSlotKeys.Sands, "Отзвуки былых времён", IconWeb("SongOfDaysPast", ArtifactSlotKeys.Sands)),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot(ArtifactSlotKeys.Goblet, "Обещанный сон былых времён", IconWeb("SongOfDaysPast", ArtifactSlotKeys.Goblet)),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot(ArtifactSlotKeys.Circlet, "Поэзия былых времён", IconWeb("SongOfDaysPast", ArtifactSlotKeys.Circlet)),
    },
  ),
  [ArtifactSetKeys.TenacityOfTheMillelith]: new _ArtifactSet(
    ArtifactSetKeys.TenacityOfTheMillelith,
    "Стойкость Миллелита",
    [4, 5],
    [dungeonByKey("RidgeWatch"), ArtifactSetSource.Alchemy],
    {
      2: "Увеличивает НР на 20%",
      4: "Когда элементальный навык попадает по врагам, атака всех находящихся поблизости персонажей в отряде, увеличивается на 20%, а прочность их щита увеличивается на 30%. Эффект длится 3 сек. и может возникнуть 1 раз в 0,5 сек. Этот эффект может быть активирован, даже если персонаж, экипированный этим набором артефактов, не находится на поле боя.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot(ArtifactSlotKeys.Flower, "Цветок почестей", IconWeb("TenacityOfTheMillelith", ArtifactSlotKeys.Flower)),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot(ArtifactSlotKeys.Plume, "Боевое перо командира", IconWeb("TenacityOfTheMillelith", ArtifactSlotKeys.Plume)),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot(ArtifactSlotKeys.Sands, "Золотые часы", IconWeb("TenacityOfTheMillelith", ArtifactSlotKeys.Sands)),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot(ArtifactSlotKeys.Goblet, "Золотой кубок клятвы", IconWeb("TenacityOfTheMillelith", ArtifactSlotKeys.Goblet)),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot(ArtifactSlotKeys.Circlet, "Древний шлем генерала", IconWeb("TenacityOfTheMillelith", ArtifactSlotKeys.Circlet)),
    },
  ),
  [ArtifactSetKeys.ThunderingFury]: new _ArtifactSet(
    "ThunderingFury",
    "Громогласный рёв ярости",
    [4, 5],
    [dungeonByKey("MidsummerCourtyard"), ArtifactSetSource.Alchemy],
    {
      2: "Увеличивает бонус Электро урона на 15%.",
      4: "Увеличивает урон реакций Перегрузка, Заряжен, Сверхпроводник и Вегетация на 40%. Урон от реакции Обострение увеличивается на 20%. При активации этих реакций, а также реакции Стимуляция, время отката элементального навыка уменьшается на 1 сек. Эффект может возникнуть не чаще 1 раза в 0,8 сек.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot(ArtifactSlotKeys.Flower, "Милосердие Громовой птицы", IconWeb("ThunderingFury", ArtifactSlotKeys.Flower)),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot(ArtifactSlotKeys.Plume, "Переживший катастрофу", IconWeb("ThunderingFury", ArtifactSlotKeys.Plume)),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot(ArtifactSlotKeys.Sands, "Песочные часы грома", IconWeb("ThunderingFury", ArtifactSlotKeys.Sands)),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot(ArtifactSlotKeys.Goblet, "Предвестник бури", IconWeb("ThunderingFury", ArtifactSlotKeys.Goblet)),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot(ArtifactSlotKeys.Circlet, "Корона призывателя грома", IconWeb("ThunderingFury", ArtifactSlotKeys.Circlet)),
    },
  ),
  [ArtifactSetKeys.Thundersoother]: new _ArtifactSet(
    ArtifactSetKeys.Thundersoother,
    "Усмиряющий гром",
    [4, 5],
    [dungeonByKey("MidsummerCourtyard"), ArtifactSetSource.Alchemy],
    {
      2: "Повышает Электро сопротивление на +40%.",
      4: "Увеличивает урон против врагов, находящихся под действием Электро, на 35%.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot(ArtifactSlotKeys.Flower, "Сердце усмиряющего гром", IconWeb("Thundersoother", ArtifactSlotKeys.Flower)),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot(ArtifactSlotKeys.Plume, "Перо усмиряющего гром", IconWeb("Thundersoother", ArtifactSlotKeys.Plume)),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot(ArtifactSlotKeys.Sands, "Время усмиряющего гром", IconWeb("Thundersoother", ArtifactSlotKeys.Sands)),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot(ArtifactSlotKeys.Goblet, "Бокал усмиряющего гром", IconWeb("Thundersoother", ArtifactSlotKeys.Goblet)),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot(ArtifactSlotKeys.Circlet, "Корона усмиряющего гром", IconWeb("Thundersoother", ArtifactSlotKeys.Circlet)),
    },
  ),
  [ArtifactSetKeys.VermillionHereafter]: new _ArtifactSet(
    ArtifactSetKeys.VermillionHereafter,
    "Киноварное загробье",
    [4, 5],
    [dungeonByKey("TheLostValley"), ArtifactSetSource.Alchemy],
    {
      2: "Увеличивает силу атаки на 18%.",
      4: "После активации взрыва стихии на 16 сек. создаёт Скрытое сияние, которое повышает силу атаки на 8%. Сила атаки персонажа увеличивается ещё на 10%, когда он теряет HP. Этот эффект может возникнуть максимум 4 раза и не чаще, чем раз в 0,8 сек. Скрытое сияние исчезает, когда персонаж покидает поле боя. При повторной активации взрыва стихии существующее Скрытое сияние снимается.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot(ArtifactSlotKeys.Flower, "Цветение жизни", IconWeb("VermillionHereafter", ArtifactSlotKeys.Flower)),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot(ArtifactSlotKeys.Plume, "Перо скрытого сияния", IconWeb("VermillionHereafter", ArtifactSlotKeys.Plume)),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot(ArtifactSlotKeys.Sands, "Солнечная реликвия", IconWeb("VermillionHereafter", ArtifactSlotKeys.Sands)),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot(ArtifactSlotKeys.Goblet, "Мгновение договора", IconWeb("VermillionHereafter", ArtifactSlotKeys.Goblet)),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot(ArtifactSlotKeys.Circlet, "Громогласный облик", IconWeb("VermillionHereafter", ArtifactSlotKeys.Circlet)),
    },
  ),
  [ArtifactSetKeys.ViridescentVenerer]: new _ArtifactSet(
    "ViridescentVenerer",
    "Изумрудная тень",
    [4, 5],
    [dungeonByKey("ValleyOfRemembrance"), ArtifactSetSource.Alchemy],
    {
      2: "Увеличивает бонус Анемо урона на 15%.",
      4: "Увеличивает урон Рассеивания на 60%. При взаимодействии Рассеивания с другим элементом, также понижает сопротивление противника к соответствующему элементу на 40% в течение 10 сек.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot(ArtifactSlotKeys.Flower, "Воспоминания об изумрудных лугах", IconWeb("ViridescentVenerer", ArtifactSlotKeys.Flower)),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot(ArtifactSlotKeys.Plume, "Оперение стрелы изумрудного охотника", IconWeb("ViridescentVenerer", ArtifactSlotKeys.Plume)),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot(ArtifactSlotKeys.Sands, "Решимость изумрудного охотника", IconWeb("ViridescentVenerer", ArtifactSlotKeys.Sands)),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot(ArtifactSlotKeys.Goblet, "Сосуд изумрудного охотника", IconWeb("ViridescentVenerer", ArtifactSlotKeys.Goblet)),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot(ArtifactSlotKeys.Circlet, "Венок изумрудного охотника", IconWeb("ViridescentVenerer", ArtifactSlotKeys.Circlet)),
    },
  ),
  [ArtifactSetKeys.VourukashasGlow]: new _ArtifactSet(
    ArtifactSetKeys.VourukashasGlow,
    "Сияние Вурукаши",
    [4, 5],
    [dungeonByKey("MoltenIronFortress"), ArtifactSetSource.Alchemy],
    {
      2: "Увеличивает HP на 20%.",
      4: "Увеличивает урон элементального навыка и взрыва стихии на 10%. Если экипированный персонаж получает урон, этот эффект повышения урона увеличивается на 80% на 5 сек. Эффект может складываться до 5 раз. Отсчёт времени каждого уровня происходит отдельно. Эти эффекты активируются, даже если экипированный персонаж не на поле боя.",
    },
    {
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot(ArtifactSlotKeys.Flower, "Тычинка истока Хварны", IconWeb("VourukashasGlow", ArtifactSlotKeys.Flower)),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot(ArtifactSlotKeys.Plume, "Самоцветное перо", IconWeb("VourukashasGlow", ArtifactSlotKeys.Plume)),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot(ArtifactSlotKeys.Sands, "Древнее увядание", IconWeb("VourukashasGlow", ArtifactSlotKeys.Sands)),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot(ArtifactSlotKeys.Goblet, "Пир необузданного веселья", IconWeb("VourukashasGlow", ArtifactSlotKeys.Goblet)),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot(ArtifactSlotKeys.Circlet, "Сердце светозарности Хварны", IconWeb("VourukashasGlow", ArtifactSlotKeys.Circlet)),
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
      [ArtifactSlotKeys.Flower]: new _ArtifactSetSlot(ArtifactSlotKeys.Flower, "Рассвет ансамбля", IconWeb("WanderersTroupe", ArtifactSlotKeys.Flower)),
      [ArtifactSlotKeys.Plume]: new _ArtifactSetSlot(ArtifactSlotKeys.Plume, "Оперение стрелы барда", IconWeb("WanderersTroupe", ArtifactSlotKeys.Plume)),
      [ArtifactSlotKeys.Sands]: new _ArtifactSetSlot(ArtifactSlotKeys.Sands, "Окончание концерта", IconWeb("WanderersTroupe", ArtifactSlotKeys.Sands)),
      [ArtifactSlotKeys.Goblet]: new _ArtifactSetSlot(ArtifactSlotKeys.Goblet, "Фляжка странника", IconWeb("WanderersTroupe", ArtifactSlotKeys.Goblet)),
      [ArtifactSlotKeys.Circlet]: new _ArtifactSetSlot(ArtifactSlotKeys.Circlet, "Цилиндр дирижёра", IconWeb("WanderersTroupe", ArtifactSlotKeys.Circlet)),
    },
  ),
} as Record<ArtifactSet["key"], ArtifactSet>;
