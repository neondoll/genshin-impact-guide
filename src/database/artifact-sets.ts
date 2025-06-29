import { ArtifactSetUidEnum } from "./enums/artifact-sets";
import { ArtifactTypeUidEnum } from "./enums/artifact-types";
import { publicImageSrc } from "@/lib/utils";
import type { ArtifactSets } from "./types/artifact-sets";

const imageSrc: typeof publicImageSrc = src => publicImageSrc(`artifact-sets/${src}`);

export const artifactSets = {
  [ArtifactSetUidEnum.GoldenTroupe]: {
    name: "Золотая труппа",
    qualities: [4, 5],
    [ArtifactTypeUidEnum.FlowerOfLife]: {
      name: "Вариация золотой песни",
      image_src: imageSrc(`${ArtifactSetUidEnum.GoldenTroupe}/golden_songs_variation-256x256.png`),
    },
    [ArtifactTypeUidEnum.PlumeOfDeath]: {
      name: "Перо золотой птицы",
      image_src: imageSrc(`${ArtifactSetUidEnum.GoldenTroupe}/golden_birds_shedding-256x256.png`),
    },
    [ArtifactTypeUidEnum.SandsOfEon]: {
      name: "Предзнаменование золотой эпохи",
      image_src: imageSrc(`${ArtifactSetUidEnum.GoldenTroupe}/golden_eras_prelude-256x256.png`),
    },
    [ArtifactTypeUidEnum.GobletOfEonothem]: {
      name: "Суета золотой ночи",
      image_src: imageSrc(`${ArtifactSetUidEnum.GoldenTroupe}/golden_nights_bustle-256x256.png`),
    },
    [ArtifactTypeUidEnum.CircletOfLogos]: {
      name: "Награда Золотой труппы",
      image_src: imageSrc(`${ArtifactSetUidEnum.GoldenTroupe}/golden_troupes_reward-256x256.png`),
    },
  },
  [ArtifactSetUidEnum.LongNightsOath]: {
    name: "Клятва долгой ночи",
    qualities: [4, 5],
    [ArtifactTypeUidEnum.FlowerOfLife]: {
      name: "Клятва светоносца",
      image_src: imageSrc(`${ArtifactSetUidEnum.LongNightsOath}/lightkeepers_pledge-256x256.png`),
    },
    [ArtifactTypeUidEnum.PlumeOfDeath]: {
      name: "Соловьиное перо",
      image_src: imageSrc(`${ArtifactSetUidEnum.LongNightsOath}/nightingales_tail_feather-256x256.png`),
    },
    [ArtifactTypeUidEnum.SandsOfEon]: {
      name: "Скорбный колокольчик бессмертного",
      image_src: imageSrc(`${ArtifactSetUidEnum.LongNightsOath}/undying_ones_mourning_bell-256x256.png`),
    },
    [ArtifactTypeUidEnum.GobletOfEonothem]: {
      name: "Умолкнувший рог",
      image_src: imageSrc(`${ArtifactSetUidEnum.LongNightsOath}/a_horn_unwinded-256x256.png`),
    },
    [ArtifactTypeUidEnum.CircletOfLogos]: {
      name: "Окрашенный шлем",
      image_src: imageSrc(`${ArtifactSetUidEnum.LongNightsOath}/dyed_tassel-256x256.png`),
    },
  },
  [ArtifactSetUidEnum.GladiatorsFinale]: {
    name: "Конец гладиатора",
    qualities: [4, 5],
    [ArtifactTypeUidEnum.FlowerOfLife]: {
      name: "Ностальгия гладиатора",
      image_src: imageSrc(`${ArtifactSetUidEnum.GladiatorsFinale}/gladiators_nostalgia-256x256.png`),
    },
    [ArtifactTypeUidEnum.PlumeOfDeath]: {
      name: "Судьба гладиатора",
      image_src: imageSrc(`${ArtifactSetUidEnum.GladiatorsFinale}/gladiators_destiny-256x256.png`),
    },
    [ArtifactTypeUidEnum.SandsOfEon]: {
      name: "Стремление гладиатора",
      image_src: imageSrc(`${ArtifactSetUidEnum.GladiatorsFinale}/gladiators_longing-256x256.png`),
    },
    [ArtifactTypeUidEnum.GobletOfEonothem]: {
      name: "Пьянство гладиатора",
      image_src: imageSrc(`${ArtifactSetUidEnum.GladiatorsFinale}/gladiators_intoxication-256x256.png`),
    },
    [ArtifactTypeUidEnum.CircletOfLogos]: {
      name: "Триумф гладиатора",
      image_src: imageSrc(`${ArtifactSetUidEnum.GladiatorsFinale}/gladiators_triumphus-256x256.png`),
    },
  },
  [ArtifactSetUidEnum.ObsidianCodex]: {
    name: "Обсидиановый фолиант",
    qualities: [4, 5],
    [ArtifactTypeUidEnum.FlowerOfLife]: {
      name: "Ожидания инородцев",
      image_src: imageSrc(`${ArtifactSetUidEnum.ObsidianCodex}/reckoning_of_the_xenogenic-256x256.png`),
    },
    [ArtifactTypeUidEnum.PlumeOfDeath]: {
      name: "Корень костного мозга души",
      image_src: imageSrc(`${ArtifactSetUidEnum.ObsidianCodex}/root_of_the_spirit_marrow-256x256.png`),
    },
    [ArtifactTypeUidEnum.SandsOfEon]: {
      name: "Мифы владений ночи",
      image_src: imageSrc(`${ArtifactSetUidEnum.ObsidianCodex}/myths_of_the_night_realm-256x256.png`),
    },
    [ArtifactTypeUidEnum.GobletOfEonothem]: {
      name: "Банкет перед состязанием",
      image_src: imageSrc(`${ArtifactSetUidEnum.ObsidianCodex}/pre_banquet_of_the_contenders-256x256.png`),
    },
    [ArtifactTypeUidEnum.CircletOfLogos]: {
      name: "Корона святых",
      image_src: imageSrc(`${ArtifactSetUidEnum.ObsidianCodex}/crown_of_the_saints-256x256.png`),
    },
  },
  [ArtifactSetUidEnum.MarechausseeHunter]: {
    name: "Охотник Сумеречного двора",
    qualities: [4, 5],
    [ArtifactTypeUidEnum.FlowerOfLife]: {
      name: "Брошь охотника",
      image_src: imageSrc(`${ArtifactSetUidEnum.MarechausseeHunter}/hunters_brooch-256x256.png`),
    },
    [ArtifactTypeUidEnum.PlumeOfDeath]: {
      name: "Увертюра шедевра",
      image_src: imageSrc(`${ArtifactSetUidEnum.MarechausseeHunter}/masterpieces_overture-256x256.png`),
    },
    [ArtifactTypeUidEnum.SandsOfEon]: {
      name: "Мгновение правосудия",
      image_src: imageSrc(`${ArtifactSetUidEnum.MarechausseeHunter}/moment_of_judgment-256x256.png`),
    },
    [ArtifactTypeUidEnum.GobletOfEonothem]: {
      name: "Забытый сосуд",
      image_src: imageSrc(`${ArtifactSetUidEnum.MarechausseeHunter}/forgotten_vessel-256x256.png`),
    },
    [ArtifactTypeUidEnum.CircletOfLogos]: {
      name: "Лик старого солдата",
      image_src: imageSrc(`${ArtifactSetUidEnum.MarechausseeHunter}/veterans_visage-256x256.png`),
    },
  },
  [ArtifactSetUidEnum.GildedDreams]: {
    name: "Позолоченные сны",
    qualities: [4, 5],
    [ArtifactTypeUidEnum.FlowerOfLife]: {
      name: "Сон железного цветка",
      image_src: imageSrc(`${ArtifactSetUidEnum.GildedDreams}/dreaming_steelbloom-256x256.png`),
    },
    [ArtifactTypeUidEnum.PlumeOfDeath]: {
      name: "Перо суждения",
      image_src: imageSrc(`${ArtifactSetUidEnum.GildedDreams}/feather_of_judgment-256x256.png`),
    },
    [ArtifactTypeUidEnum.SandsOfEon]: {
      name: "Золотые годы",
      image_src: imageSrc(`${ArtifactSetUidEnum.GildedDreams}/the_sunken_years-256x256.png`),
    },
    [ArtifactTypeUidEnum.GobletOfEonothem]: {
      name: "Последний медовый пир",
      image_src: imageSrc(`${ArtifactSetUidEnum.GildedDreams}/honeyed_final_feast-256x256.png`),
    },
    [ArtifactTypeUidEnum.CircletOfLogos]: {
      name: "Тень Короля песков",
      image_src: imageSrc(`${ArtifactSetUidEnum.GildedDreams}/shadow_of_the_sand_king-256x256.png`),
    },
  },
  [ArtifactSetUidEnum.ScrollOfTheHeroOfCinderCity]: {
    name: "Свиток героя сожжённого города",
    qualities: [4, 5],
    [ArtifactTypeUidEnum.FlowerOfLife]: {
      name: "Талисман укротителя зверей",
      image_src: imageSrc(`${ArtifactSetUidEnum.ScrollOfTheHeroOfCinderCity}/beast_tamers_talisman-256x256.png`),
    },
    [ArtifactTypeUidEnum.PlumeOfDeath]: {
      name: "Маячок горного патрульного",
      image_src: imageSrc(`${ArtifactSetUidEnum.ScrollOfTheHeroOfCinderCity}/mountain_rangers_marker-256x256.png`),
    },
    [ArtifactTypeUidEnum.SandsOfEon]: {
      name: "Золотые часы мистика",
      image_src: imageSrc(`${ArtifactSetUidEnum.ScrollOfTheHeroOfCinderCity}/mystics_gold_dial-256x256.png`),
    },
    [ArtifactTypeUidEnum.GobletOfEonothem]: {
      name: "Кубок бродячего исследователя",
      image_src: imageSrc(`${ArtifactSetUidEnum.ScrollOfTheHeroOfCinderCity}/wandering_scholars_claw_cup-256x256.png`),
    },
    [ArtifactTypeUidEnum.CircletOfLogos]: {
      name: "Перьевая маска воина-демона",
      image_src: imageSrc(`${ArtifactSetUidEnum.ScrollOfTheHeroOfCinderCity}/demon_warriors_feather_mask-256x256.png`),
    },
  },
  [ArtifactSetUidEnum.TenacityOfTheMillelith]: {
    name: "Стойкость Миллелита",
    qualities: [4, 5],
    [ArtifactTypeUidEnum.FlowerOfLife]: {
      name: "Цветок почестей",
      image_src: imageSrc(`${ArtifactSetUidEnum.TenacityOfTheMillelith}/flower_of_accolades-256x256.png`),
    },
    [ArtifactTypeUidEnum.PlumeOfDeath]: {
      name: "Боевое перо командира",
      image_src: imageSrc(`${ArtifactSetUidEnum.TenacityOfTheMillelith}/ceremonial_war_plume-256x256.png`),
    },
    [ArtifactTypeUidEnum.SandsOfEon]: {
      name: "Золотые часы",
      image_src: imageSrc(`${ArtifactSetUidEnum.TenacityOfTheMillelith}/orichalceous_time_dial-256x256.png`),
    },
    [ArtifactTypeUidEnum.GobletOfEonothem]: {
      name: "Золотой кубок клятвы",
      image_src: imageSrc(`${ArtifactSetUidEnum.TenacityOfTheMillelith}/nobles_pledging_vessel-256x256x.png`),
    },
    [ArtifactTypeUidEnum.CircletOfLogos]: {
      name: "Древний шлем генерала",
      image_src: imageSrc(`${ArtifactSetUidEnum.TenacityOfTheMillelith}/generals_ancient_helm-256x256.png`),
    },
  },
  [ArtifactSetUidEnum.FinaleOfTheDeepGalleries]: {
    name: "Финал галерей глубин",
    qualities: [4, 5],
    [ArtifactTypeUidEnum.FlowerOfLife]: {
      name: "Отголоски песни галерей глубин",
      image_src: imageSrc(`${ArtifactSetUidEnum.FinaleOfTheDeepGalleries}/deep_gallerys_echoing_song-256x256.png`),
    },
    [ArtifactTypeUidEnum.PlumeOfDeath]: {
      name: "Дальние странствия галерей глубин",
      image_src: imageSrc(`${ArtifactSetUidEnum.FinaleOfTheDeepGalleries}/deep_gallerys_distant_pact-256x256.png`),
    },
    [ArtifactTypeUidEnum.SandsOfEon]: {
      name: "Часы забвения галерей глубин",
      image_src: imageSrc(`${ArtifactSetUidEnum.FinaleOfTheDeepGalleries}/deep_gallerys_moment_of_oblivion-256x256.png`),
    },
    [ArtifactTypeUidEnum.GobletOfEonothem]: {
      name: "Ниспосланный пир галерей глубин",
      image_src: imageSrc(`${ArtifactSetUidEnum.FinaleOfTheDeepGalleries}/deep_gallerys_bestowed_banquet-256x256.png`),
    },
    [ArtifactTypeUidEnum.CircletOfLogos]: {
      name: "Утраченная корона галерей глубин",
      image_src: imageSrc(`${ArtifactSetUidEnum.FinaleOfTheDeepGalleries}/deep_gallerys_lost_crown-256x256.png`),
    },
  },
  [ArtifactSetUidEnum.FragmentOfHarmonicWhimsy]: {
    name: "Фрагмент гармонической фантазии",
    qualities: [4, 5],
    [ArtifactTypeUidEnum.FlowerOfLife]: {
      name: "Увертюра стройной симфонии",
      image_src: imageSrc(`${ArtifactSetUidEnum.FragmentOfHarmonicWhimsy}/harmonious_symphony_prelude-256x256.png`),
    },
    [ArtifactTypeUidEnum.PlumeOfDeath]: {
      name: "Ночные раздумья древнего моря",
      image_src: imageSrc(`${ArtifactSetUidEnum.FragmentOfHarmonicWhimsy}/ancient_seas_nocturnal_musing-256x256.png`),
    },
    [ArtifactTypeUidEnum.SandsOfEon]: {
      name: "Скерцо поворотов судьбы",
      image_src: imageSrc(`${ArtifactSetUidEnum.FragmentOfHarmonicWhimsy}/the_grand_jape_of_the_turning_of_fate-256x256.png`),
    },
    [ArtifactTypeUidEnum.GobletOfEonothem]: {
      name: "Неистовая рапсодия ихора",
      image_src: imageSrc(`${ArtifactSetUidEnum.FragmentOfHarmonicWhimsy}/ichor_shower_rhapsody-256x256.png`),
    },
    [ArtifactTypeUidEnum.CircletOfLogos]: {
      name: "Вальс увядших фантазий",
      image_src: imageSrc(`${ArtifactSetUidEnum.FragmentOfHarmonicWhimsy}/whimsical_dance_of_the_withered-256x256.png`),
    },
  },
  [ArtifactSetUidEnum.FlowerOfParadiseLost]: {
    name: "Цветок потерянного рая",
    qualities: [4, 5],
    [ArtifactTypeUidEnum.FlowerOfLife]: {
      name: "Великолепие Ай-Ханум",
      image_src: imageSrc(`${ArtifactSetUidEnum.FlowerOfParadiseLost}/ay_khanoums_myriad-256x256.png`),
    },
    [ArtifactTypeUidEnum.PlumeOfDeath]: {
      name: "Угасающий пир",
      image_src: imageSrc(`${ArtifactSetUidEnum.FlowerOfParadiseLost}/wilting_feast-256x256.png`),
    },
    [ArtifactTypeUidEnum.SandsOfEon]: {
      name: "Застывшее мгновение",
      image_src: imageSrc(`${ArtifactSetUidEnum.FlowerOfParadiseLost}/a_moment_congealed-256x256.png`),
    },
    [ArtifactTypeUidEnum.GobletOfEonothem]: {
      name: "Магический сосуд хранителя тайн",
      image_src: imageSrc(`${ArtifactSetUidEnum.FlowerOfParadiseLost}/secret_keepers_magic_bottle-256x256.png`),
    },
    [ArtifactTypeUidEnum.CircletOfLogos]: {
      name: "Аметистовый венец",
      image_src: imageSrc(`${ArtifactSetUidEnum.FlowerOfParadiseLost}/amethyst_crown-256x256.png`),
    },
  },
  [ArtifactSetUidEnum.NoblesseOblige]: {
    name: "Церемония древней знати",
    qualities: [4, 5],
    [ArtifactTypeUidEnum.FlowerOfLife]: {
      name: "Королевский цветок",
      image_src: imageSrc(`${ArtifactSetUidEnum.NoblesseOblige}/royal_flora-256x256.png`),
    },
    [ArtifactTypeUidEnum.PlumeOfDeath]: {
      name: "Королевское перо",
      image_src: imageSrc(`${ArtifactSetUidEnum.NoblesseOblige}/royal_plume-256x256.png`),
    },
    [ArtifactTypeUidEnum.SandsOfEon]: {
      name: "Королевские карманные часы",
      image_src: imageSrc(`${ArtifactSetUidEnum.NoblesseOblige}/royal_pocket_watch-256x256.png`),
    },
    [ArtifactTypeUidEnum.GobletOfEonothem]: {
      name: "Королевская серебряная фляжка",
      image_src: imageSrc(`${ArtifactSetUidEnum.NoblesseOblige}/royal_silver_urn-256x256.png`),
    },
    [ArtifactTypeUidEnum.CircletOfLogos]: {
      name: "Королевская маска",
      image_src: imageSrc(`${ArtifactSetUidEnum.NoblesseOblige}/royal_masque-256x256.png`),
    },
  },
  [ArtifactSetUidEnum.EmblemOfSeveredFate]: {
    name: "Эмблема рассечённой судьбы",
    qualities: [4, 5],
    [ArtifactTypeUidEnum.FlowerOfLife]: {
      name: "Великолепная цуба",
      image_src: imageSrc(`${ArtifactSetUidEnum.EmblemOfSeveredFate}/magnificent_tsuba-256x256.png`),
    },
    [ArtifactTypeUidEnum.PlumeOfDeath]: {
      name: "Обрезанное перо",
      image_src: imageSrc(`${ArtifactSetUidEnum.EmblemOfSeveredFate}/sundered_feather-256x256.png`),
    },
    [ArtifactTypeUidEnum.SandsOfEon]: {
      name: "Клетка грозовых облаков",
      image_src: imageSrc(`${ArtifactSetUidEnum.EmblemOfSeveredFate}/storm_cage-256x256.png`),
    },
    [ArtifactTypeUidEnum.GobletOfEonothem]: {
      name: "Алый сосуд",
      image_src: imageSrc(`${ArtifactSetUidEnum.EmblemOfSeveredFate}/scarlet_vessel-256x256.png`),
    },
    [ArtifactTypeUidEnum.CircletOfLogos]: {
      name: "Украшенный кабуто",
      image_src: imageSrc(`${ArtifactSetUidEnum.EmblemOfSeveredFate}/ornate_kabuto-256x256.png`),
    },
  },
} as ArtifactSets;
