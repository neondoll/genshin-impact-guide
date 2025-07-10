import { ArtifactPieceUidEnum } from "./enums/artifact-piece";
import { ArtifactSetUidEnum } from "./enums/artifact-set";
import { CharacterUidEnum } from "./enums/character";
import { publicImageSrc } from "@/lib/utils";
import type { ArtifactSet, ArtifactSetUid } from "./types/artifact-set";

const imageSrc: typeof publicImageSrc = src => publicImageSrc(`artifact-sets/${src}`);

export default {
  [ArtifactSetUidEnum.BlizzardStrayer]: {
    uid: ArtifactSetUidEnum.BlizzardStrayer,
    name: "Заблудший в метели",
    qualities: [4, 5],
    where_to_find: ["Подземелье «Пик Виндагнира»", "Мистическое подношение (Алхимия)"],
    item_bonuses: {
      2: "Увеличивает бонус Крио урона на 15%.",
      4: "Атаки по противникам с эффектом Крио увеличивают шанс крит. попадания на 20%. Если противник имеет статус Заморозка, то дополнительно увеличивает шанс крит. попадания на 20%.",
    },
    [ArtifactPieceUidEnum.FlowerOfLife]: {
      name: "Занесённая снегом память",
      image_src: imageSrc(`${ArtifactSetUidEnum.BlizzardStrayer}/snowswept_memory-256x256.png`),
    },
    [ArtifactPieceUidEnum.PlumeOfDeath]: {
      name: "Решимость крушителя льда",
      image_src: imageSrc(`${ArtifactSetUidEnum.BlizzardStrayer}/icebreakers_resolve-256x256.png`),
    },
    [ArtifactPieceUidEnum.SandsOfEon]: {
      name: "Гибель замёрзшей родины",
      image_src: imageSrc(`${ArtifactSetUidEnum.BlizzardStrayer}/frozen_homelands_demise-256x256.png`),
    },
    [ArtifactPieceUidEnum.GobletOfEonothem]: {
      name: "Морозная гордость",
      image_src: imageSrc(`${ArtifactSetUidEnum.BlizzardStrayer}/frost_weaved_dignity-256x256.png`),
    },
    [ArtifactPieceUidEnum.CircletOfLogos]: {
      name: "Эхо осколков инея",
      image_src: imageSrc(`${ArtifactSetUidEnum.BlizzardStrayer}/broken_rimes_echo-256x256.png`),
    },
    character_recommendations: [{ uid: CharacterUidEnum.Escoffier, notes: "" }],
  },
  [ArtifactSetUidEnum.EmblemOfSeveredFate]: {
    uid: ArtifactSetUidEnum.EmblemOfSeveredFate,
    name: "Эмблема рассечённой судьбы",
    qualities: [4, 5],
    where_to_find: ["Подземелье «Кленовый зал»", "Мистическое подношение (Алхимия)"],
    item_bonuses: {
      2: "Увеличивает скорость восстановления энергии на 20%.",
      4: "Увеличивает урон взрыва стихий на величину, равную 25% от значения восстановления энергии. Эффект можно увеличить максимум до 75%.",
    },
    [ArtifactPieceUidEnum.FlowerOfLife]: {
      name: "Великолепная цуба",
      image_src: imageSrc(`${ArtifactSetUidEnum.EmblemOfSeveredFate}/magnificent_tsuba-256x256.png`),
    },
    [ArtifactPieceUidEnum.PlumeOfDeath]: {
      name: "Обрезанное перо",
      image_src: imageSrc(`${ArtifactSetUidEnum.EmblemOfSeveredFate}/sundered_feather-256x256.png`),
    },
    [ArtifactPieceUidEnum.SandsOfEon]: {
      name: "Клетка грозовых облаков",
      image_src: imageSrc(`${ArtifactSetUidEnum.EmblemOfSeveredFate}/storm_cage-256x256.png`),
    },
    [ArtifactPieceUidEnum.GobletOfEonothem]: {
      name: "Алый сосуд",
      image_src: imageSrc(`${ArtifactSetUidEnum.EmblemOfSeveredFate}/scarlet_vessel-256x256.png`),
    },
    [ArtifactPieceUidEnum.CircletOfLogos]: {
      name: "Украшенный кабуто",
      image_src: imageSrc(`${ArtifactSetUidEnum.EmblemOfSeveredFate}/ornate_kabuto-256x256.png`),
    },
    character_recommendations: [
      { uid: CharacterUidEnum.Chevreuse, notes: "" },
      { uid: CharacterUidEnum.Xiangling, notes: "" },
      { uid: CharacterUidEnum.Xingqiu, notes: "" },
    ],
  },
  [ArtifactSetUidEnum.FinaleOfTheDeepGalleries]: {
    uid: ArtifactSetUidEnum.FinaleOfTheDeepGalleries,
    name: "Финал галерей глубин",
    qualities: [4, 5],
    where_to_find: "Подземелье «Заброшенный причал»",
    item_bonuses: {
      2: "Даёт 15% бонус Крио урона.",
      4: "Когда энергия экипированного персонажа равна 0, урон обычной атаки и взрыва стихии повышается на 60%. После того как экипированный персонаж наносит урон обычной атакой, данный эффект на 6 сек. перестаёт применяться для взрыва стихии. После того как экипированный персонаж наносит урон взрывом стихии, данный эффект на 6 сек. перестаёт применяться для обычной атаки. Этот эффект может возникнуть, даже если экипированный персонаж вне поля боя.",
    },
    [ArtifactPieceUidEnum.FlowerOfLife]: {
      name: "Отголоски песни галерей глубин",
      image_src: imageSrc(`${ArtifactSetUidEnum.FinaleOfTheDeepGalleries}/deep_gallerys_echoing_song-256x256.png`),
    },
    [ArtifactPieceUidEnum.PlumeOfDeath]: {
      name: "Дальние странствия галерей глубин",
      image_src: imageSrc(`${ArtifactSetUidEnum.FinaleOfTheDeepGalleries}/deep_gallerys_distant_pact-256x256.png`),
    },
    [ArtifactPieceUidEnum.SandsOfEon]: {
      name: "Часы забвения галерей глубин",
      image_src: imageSrc(`${ArtifactSetUidEnum.FinaleOfTheDeepGalleries}/deep_gallerys_moment_of_oblivion-256x256.png`),
    },
    [ArtifactPieceUidEnum.GobletOfEonothem]: {
      name: "Ниспосланный пир галерей глубин",
      image_src: imageSrc(`${ArtifactSetUidEnum.FinaleOfTheDeepGalleries}/deep_gallerys_bestowed_banquet-256x256.png`),
    },
    [ArtifactPieceUidEnum.CircletOfLogos]: {
      name: "Утраченная корона галерей глубин",
      image_src: imageSrc(`${ArtifactSetUidEnum.FinaleOfTheDeepGalleries}/deep_gallerys_lost_crown-256x256.png`),
    },
    character_recommendations: [{ uid: CharacterUidEnum.Skirk, notes: "" }],
  },
  [ArtifactSetUidEnum.FlowerOfParadiseLost]: {
    uid: ArtifactSetUidEnum.FlowerOfParadiseLost,
    name: "Цветок потерянного рая",
    qualities: [4, 5],
    where_to_find: ["Подземелье «Город золота». Благословение: Цитадель в пустыне.", "Мистическое подношение (Алхимия)"],
    item_bonuses: {
      2: "Увеличивает мастерство стихий на 80 ед.",
      4: "Увеличивает урон реакций Бутонизация, Вегетация и Цветение экипированного этим набором персонажа на 40%. Кроме того, активация реакций Бутонизация, Вегетация и Цветение экипированным этим набором персонажем усилит этот эффект на 25%. Каждое суммирование длится 10 сек. Эффект складывается до 4 раз, может возникнуть раз в 1 сек. и активируется, даже если экипированный этим набором персонаж не активен.",
    },
    [ArtifactPieceUidEnum.FlowerOfLife]: {
      name: "Великолепие Ай-Ханум",
      image_src: imageSrc(`${ArtifactSetUidEnum.FlowerOfParadiseLost}/ay_khanoums_myriad-256x256.png`),
    },
    [ArtifactPieceUidEnum.PlumeOfDeath]: {
      name: "Угасающий пир",
      image_src: imageSrc(`${ArtifactSetUidEnum.FlowerOfParadiseLost}/wilting_feast-256x256.png`),
    },
    [ArtifactPieceUidEnum.SandsOfEon]: {
      name: "Застывшее мгновение",
      image_src: imageSrc(`${ArtifactSetUidEnum.FlowerOfParadiseLost}/a_moment_congealed-256x256.png`),
    },
    [ArtifactPieceUidEnum.GobletOfEonothem]: {
      name: "Магический сосуд хранителя тайн",
      image_src: imageSrc(`${ArtifactSetUidEnum.FlowerOfParadiseLost}/secret_keepers_magic_bottle-256x256.png`),
    },
    [ArtifactPieceUidEnum.CircletOfLogos]: {
      name: "Аметистовый венец",
      image_src: imageSrc(`${ArtifactSetUidEnum.FlowerOfParadiseLost}/amethyst_crown-256x256.png`),
    },
    character_recommendations: [{ uid: CharacterUidEnum.KukiShinobu, notes: "" }],
  },
  [ArtifactSetUidEnum.FragmentOfHarmonicWhimsy]: {
    uid: ArtifactSetUidEnum.FragmentOfHarmonicWhimsy,
    name: "Фрагмент гармонической фантазии",
    qualities: [4, 5],
    where_to_find: "Подземелье «Обветшалый театр»",
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
    where_to_find: ["Подземелье «Шпиль одинокого просветления». Благословение: Семь чувств.", "Мистическое подношение (Алхимия)"],
    item_bonuses: {
      2: "Увеличивает мастерство стихий на 80 ед.",
      4: "На 8 сек. после вызова элементальной реакции согласно элементам других персонажей в отряде экипированный этими артефактами персонаж получает следующие усиления: сила атаки повышается на 14% за каждого персонажа с таким же элементом, как и у экипированного персонажа; мастерство стихий повышается на 50 ед. за каждого персонажа с иным элементом. Каждое из этих усилений при подсчёте включает до 3 персонажей. Эффект может возникнуть один раз в 8 сек. Срабатывает, даже если экипированный этими артефактами персонаж не на поле боя.",
    },
    [ArtifactPieceUidEnum.FlowerOfLife]: {
      name: "Сон железного цветка",
      image_src: imageSrc(`${ArtifactSetUidEnum.GildedDreams}/dreaming_steelbloom-256x256.png`),
    },
    [ArtifactPieceUidEnum.PlumeOfDeath]: {
      name: "Перо суждения",
      image_src: imageSrc(`${ArtifactSetUidEnum.GildedDreams}/feather_of_judgment-256x256.png`),
    },
    [ArtifactPieceUidEnum.SandsOfEon]: {
      name: "Золотые годы",
      image_src: imageSrc(`${ArtifactSetUidEnum.GildedDreams}/the_sunken_years-256x256.png`),
    },
    [ArtifactPieceUidEnum.GobletOfEonothem]: {
      name: "Последний медовый пир",
      image_src: imageSrc(`${ArtifactSetUidEnum.GildedDreams}/honeyed_final_feast-256x256.png`),
    },
    [ArtifactPieceUidEnum.CircletOfLogos]: {
      name: "Тень Короля песков",
      image_src: imageSrc(`${ArtifactSetUidEnum.GildedDreams}/shadow_of_the_sand_king-256x256.png`),
    },
    character_recommendations: [{ uid: CharacterUidEnum.KukiShinobu, notes: "" }],
  },
  [ArtifactSetUidEnum.GladiatorsFinale]: {
    uid: ArtifactSetUidEnum.GladiatorsFinale,
    name: "Конец гладиатора",
    qualities: [4, 5],
    where_to_find: ["Награды с босса в мире за 40 первородной смолы", "Награды за выполнение заданий во вкладке Опыта (главы 8 и 9)", "Подземелья наказания (еженедельные боссы)", "Мистическое подношение (Алхимия)"],
    item_bonuses: {
      2: "Увеличивает силу атаки на 18%.",
      4: "Увеличивает урон обычной атаки на 35%, если персонаж использует одноручное, двуручное или древковое оружие.",
    },
    [ArtifactPieceUidEnum.FlowerOfLife]: {
      name: "Ностальгия гладиатора",
      image_src: imageSrc(`${ArtifactSetUidEnum.GladiatorsFinale}/gladiators_nostalgia-256x256.png`),
    },
    [ArtifactPieceUidEnum.PlumeOfDeath]: {
      name: "Судьба гладиатора",
      image_src: imageSrc(`${ArtifactSetUidEnum.GladiatorsFinale}/gladiators_destiny-256x256.png`),
    },
    [ArtifactPieceUidEnum.SandsOfEon]: {
      name: "Стремление гладиатора",
      image_src: imageSrc(`${ArtifactSetUidEnum.GladiatorsFinale}/gladiators_longing-256x256.png`),
    },
    [ArtifactPieceUidEnum.GobletOfEonothem]: {
      name: "Пьянство гладиатора",
      image_src: imageSrc(`${ArtifactSetUidEnum.GladiatorsFinale}/gladiators_intoxication-256x256.png`),
    },
    [ArtifactPieceUidEnum.CircletOfLogos]: {
      name: "Триумф гладиатора",
      image_src: imageSrc(`${ArtifactSetUidEnum.GladiatorsFinale}/gladiators_triumphus-256x256.png`),
    },
    character_recommendations: [{ uid: CharacterUidEnum.Arlecchino, notes: "" }],
  },
  [ArtifactSetUidEnum.GoldenTroupe]: {
    uid: ArtifactSetUidEnum.GoldenTroupe,
    name: "Золотая труппа",
    qualities: [4, 5],
    where_to_find: ["Подземелье «Конец греха»", "Мистическое подношение (Алхимия)"],
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
  [ArtifactSetUidEnum.LongNightsOath]: {
    uid: ArtifactSetUidEnum.LongNightsOath,
    name: "Клятва долгой ночи",
    qualities: [4, 5],
    where_to_find: "Подземелье «Заброшенный причал»",
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
    where_to_find: ["Подземелье «Долина воспоминаний». Благословение: Танец стали II+", "Мистическое подношение (Алхимия)"],
    item_bonuses: {
      2: "Увеличивает эффективность лечения на 15%.",
      4: "Увеличивает получаемое лечение всех членов отряда на 20% в течение 10 сек. после использования элементального навыка или взрыва стихии.",
    },
    [ArtifactPieceUidEnum.FlowerOfLife]: {
      name: "Далёкая душа юной девы",
      image_src: imageSrc(`${ArtifactSetUidEnum.MaidenBeloved}/maidens_distant_love-256x256.png`),
    },
    [ArtifactPieceUidEnum.PlumeOfDeath]: {
      name: "Тоска юной девы",
      image_src: imageSrc(`${ArtifactSetUidEnum.MaidenBeloved}/maidens_heart_stricken_infatuation-256x256.png`),
    },
    [ArtifactPieceUidEnum.SandsOfEon]: {
      name: "Уходящая молодость юной девы",
      image_src: imageSrc(`${ArtifactSetUidEnum.MaidenBeloved}/maidens_passing_youth-256x256.png`),
    },
    [ArtifactPieceUidEnum.GobletOfEonothem]: {
      name: "Досуг юной девы",
      image_src: imageSrc(`${ArtifactSetUidEnum.MaidenBeloved}/maidens_fleeting_leisure-256x256.png`),
    },
    [ArtifactPieceUidEnum.CircletOfLogos]: {
      name: "Увядающая красота юной девы",
      image_src: imageSrc(`${ArtifactSetUidEnum.MaidenBeloved}/maidens_fading_beauty-256x256.png`),
    },
  },
  [ArtifactSetUidEnum.MarechausseeHunter]: {
    uid: ArtifactSetUidEnum.MarechausseeHunter,
    name: "Охотник Сумеречного двора",
    qualities: [4, 5],
    where_to_find: ["Подземелье «Конец греха»", "Мистическое подношение (Алхимия)"],
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
    where_to_find: ["Подземелье «Чистая вода и горная пещера». Благословение: Каменная темница", "Мистическое подношение (Алхимия)"],
    item_bonuses: {
      2: "Увеличивает урон взрыва стихии на 20%.",
      4: "Активация взрыва стихии увеличивает силу атаки всех членов отряда на 20% в течение 12 сек. Эффект не складывается.",
    },
    [ArtifactPieceUidEnum.FlowerOfLife]: {
      name: "Королевский цветок",
      image_src: imageSrc(`${ArtifactSetUidEnum.NoblesseOblige}/royal_flora-256x256.png`),
    },
    [ArtifactPieceUidEnum.PlumeOfDeath]: {
      name: "Королевское перо",
      image_src: imageSrc(`${ArtifactSetUidEnum.NoblesseOblige}/royal_plume-256x256.png`),
    },
    [ArtifactPieceUidEnum.SandsOfEon]: {
      name: "Королевские карманные часы",
      image_src: imageSrc(`${ArtifactSetUidEnum.NoblesseOblige}/royal_pocket_watch-256x256.png`),
    },
    [ArtifactPieceUidEnum.GobletOfEonothem]: {
      name: "Королевская серебряная фляжка",
      image_src: imageSrc(`${ArtifactSetUidEnum.NoblesseOblige}/royal_silver_urn-256x256.png`),
    },
    [ArtifactPieceUidEnum.CircletOfLogos]: {
      name: "Королевская маска",
      image_src: imageSrc(`${ArtifactSetUidEnum.NoblesseOblige}/royal_masque-256x256.png`),
    },
    character_recommendations: [
      { uid: CharacterUidEnum.Bennett, notes: "" },
      { uid: CharacterUidEnum.Chevreuse, notes: "" },
    ],
  },
  [ArtifactSetUidEnum.ObsidianCodex]: {
    uid: ArtifactSetUidEnum.ObsidianCodex,
    name: "Обсидиановый фолиант",
    qualities: [4, 5],
    where_to_find: "Подземелье «Святилище мириад духов»",
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
  [ArtifactSetUidEnum.ScrollOfTheHeroOfCinderCity]: {
    uid: ArtifactSetUidEnum.ScrollOfTheHeroOfCinderCity,
    name: "Свиток героя сожжённого города",
    qualities: [4, 5],
    where_to_find: "Подземелье «Святилище мириадов духов»",
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
  [ArtifactSetUidEnum.SongOfDaysPast]: {
    uid: ArtifactSetUidEnum.SongOfDaysPast,
    name: "Песнь былых времён",
    qualities: [4, 5],
    where_to_find: "Подземелье «Город гроз»",
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
    where_to_find: ["Подземелье «Горный дозор». Благословение: Неподвижный", "Мистическое подношение (Алхимия)"],
    item_bonuses: {
      2: "Увеличивает НР на 20%",
      4: "Когда элементальный навык попадает по врагам, атака всех находящихся поблизости персонажей в отряде, увеличивается на 20%, а прочность их щита увеличивается на 30%. Эффект длится 3 сек. и может возникнуть 1 раз в 0,5 сек. Этот эффект может быть активирован, даже если персонаж, экипированный этим набором артефактов, не находится на поле боя.",
    },
    [ArtifactPieceUidEnum.FlowerOfLife]: {
      name: "Цветок почестей",
      image_src: imageSrc(`${ArtifactSetUidEnum.TenacityOfTheMillelith}/flower_of_accolades-256x256.png`),
    },
    [ArtifactPieceUidEnum.PlumeOfDeath]: {
      name: "Боевое перо командира",
      image_src: imageSrc(`${ArtifactSetUidEnum.TenacityOfTheMillelith}/ceremonial_war_plume-256x256.png`),
    },
    [ArtifactPieceUidEnum.SandsOfEon]: {
      name: "Золотые часы",
      image_src: imageSrc(`${ArtifactSetUidEnum.TenacityOfTheMillelith}/orichalceous_time_dial-256x256.png`),
    },
    [ArtifactPieceUidEnum.GobletOfEonothem]: {
      name: "Золотой кубок клятвы",
      image_src: imageSrc(`${ArtifactSetUidEnum.TenacityOfTheMillelith}/nobles_pledging_vessel-256x256x.png`),
    },
    [ArtifactPieceUidEnum.CircletOfLogos]: {
      name: "Древний шлем генерала",
      image_src: imageSrc(`${ArtifactSetUidEnum.TenacityOfTheMillelith}/generals_ancient_helm-256x256.png`),
    },
    character_recommendations: [{ uid: CharacterUidEnum.Layla, notes: "" }],
  },
} as Record<ArtifactSetUid, ArtifactSet>;
