import type { VideoSource as Type } from "@/types/video-source";
import { VideoSource as Class } from "@/classes/video-source";
import { VideoSourceIds } from "@/enums/video-source";

export default {
  [VideoSourceIds.AllAboutAllArtifacts]: Class.init([
    VideoSourceIds.AllAboutAllArtifacts,
    "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
    new Date(),
  ]).setYoutubeUrl("https://youtu.be/kCu0ux0hUCg"),
  [VideoSourceIds.AllAboutAllTalents]: Class.init([
    VideoSourceIds.AllAboutAllTalents,
    "Miron MinMax: ВСЁ про ВСЕ таланты ft.@AnimeCool_Genshin",
    new Date(),
  ]).setVkUrl("https://vkvideo.ru/video-227044935_456239080"),
  [VideoSourceIds.AnalysisOfAllCraftedWeapons]: Class.init([
    VideoSourceIds.AnalysisOfAllCraftedWeapons,
    "Анимекул: Анализ ВСЕГО Крафтового Оружия | Тир-лист полезности [Genshin Impact]",
    new Date(),
  ]).setYoutubeUrl("https://youtu.be/CU-BxsNF-qw"),
  [VideoSourceIds.BestWeaponsForEveryCharacter]: Class.init([
    VideoSourceIds.BestWeaponsForEveryCharacter,
    "Miron MinMax: Лучшее Оружие для Каждого Персонажа",
    new Date(),
  ]).setYoutubeUrl("https://youtu.be/cjatyGw0EO0"),
  [VideoSourceIds.FirstConstellationOrSignatureWeapon]: Class.init([
    VideoSourceIds.FirstConstellationOrSignatureWeapon,
    "Miron MinMax: С1 или Сигна? Что Лучше и Насколько? | Про Всех 5★ Персонажей",
    new Date(),
  ]).setVkUrl("https://vkvideo.ru/video-227044935_456239189").setYoutubeUrl("https://youtu.be/NfgsESKwsdk"),
  [VideoSourceIds.GuideToChaska]: Class.init([
    VideoSourceIds.GuideToChaska,
    "Miron MinMax: Подробный и Актуальный | Гайд на Часку в 5.8",
    new Date("2025-08-22"),
  ]).setVkUrl("https://vkvideo.ru/video-227044935_456239250").setYoutubeUrl("https://youtu.be/OmSwenN-e8s"),
  [VideoSourceIds.GuideToCitlali]: Class.init([
    VideoSourceIds.GuideToCitlali,
    "Miron MinMax: Подробный и Актуальный | Гайд на Ситлали в 5.8",
    new Date("2025-08-03"),
  ]).setVkUrl("https://vkvideo.ru/video-227044935_456239245").setYoutubeUrl("https://youtu.be/GzR7Yx8UDSM?si=vX0FObdIigNnTZkg"),
  [VideoSourceIds.GuideToLauma]: Class.init([
    VideoSourceIds.GuideToLauma,
    "Miron MinMax: Паверкрип Нахиды? Гайд на Лауму в 6.0",
    new Date("2025-09-10"),
  ]).setVkUrl("https://vkvideo.ru/video-227044935_456239254").setYoutubeUrl("https://youtu.be/BMpFDebyZck"),
  [VideoSourceIds.GuideToMualani]: Class.init([
    VideoSourceIds.GuideToMualani,
    "Miron MinMax: Подробный и Актуальный | Гайд на Муалани в 5.8",
    new Date("2025-08-18"),
  ]).setVkUrl("https://vkvideo.ru/video-227044935_456239248").setYoutubeUrl("https://youtu.be/xEglYZO38Rs"),
  [VideoSourceIds.TheBestAndWorstBows]: Class.init([
    VideoSourceIds.TheBestAndWorstBows,
    "Miron MinMax: Лучшие и Худшие Луки | Тир-лист (2025)",
    new Date(),
  ]).setVkUrl("https://vkvideo.ru/video-227044935_456239218"),
  [VideoSourceIds.TheBestAndWorstCatalysts]: Class.init([
    VideoSourceIds.TheBestAndWorstCatalysts,
    "Miron MinMax: Лучшие и Худшие Катализаторы | Тир-лист | 2025",
    new Date(),
  ]).setVkUrl("https://vkvideo.ru/video-227044935_456239231"),
  [VideoSourceIds.TheBestAndWorstClaymores]: Class.init([
    VideoSourceIds.TheBestAndWorstClaymores,
    "Miron MinMax: Лучшие и Худшие Двуручные Мечи | Тир-лист (2025)",
    new Date(),
  ]).setVkUrl("https://vkvideo.ru/video-227044935_456239205"),
  [VideoSourceIds.TheBestAndWorstPolearms]: Class.init([
    VideoSourceIds.TheBestAndWorstPolearms,
    "Miron MinMax: Лучшие и Худшие Копья | Тирлист Древкового Оружия | 2025",
    new Date(),
  ]).setVkUrl("https://vkvideo.ru/video-227044935_456239209"),
  [VideoSourceIds.TheBestAndWorstSwords]: Class.init([
    VideoSourceIds.TheBestAndWorstSwords,
    "Miron MinMax: Лучшие и Худшие Одноручные Мечи | Тир-лист (2025)",
    new Date(),
  ]).setVkUrl("https://vkvideo.ru/video-227044935_456239200"),
} as Record<Type["id"], Type>;
