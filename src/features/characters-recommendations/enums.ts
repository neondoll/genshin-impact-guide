import { VideoSourceClass } from "../video-sources/classes";

export const CharacterRecommendationsVideoSources = {
  /* Miron MinMax: ВСЁ про ВСЕ таланты ft.@AnimeCool_Genshin */
  AllAboutAllTalents: new VideoSourceClass("Miron MinMax: ВСЁ про ВСЕ таланты ft.@AnimeCool_Genshin").setVkUrl("https://vkvideo.ru/video-227044935_456239080"),
  /* Miron MinMax: Лучшее Оружие для Каждого Персонажа */
  BestWeaponsForEveryCharacter: new VideoSourceClass("Miron MinMax: Лучшее Оружие для Каждого Персонажа").setYoutubeUrl("https://youtu.be/cjatyGw0EO0"),
  /* Miron MinMax: С1 или Сигна? Что Лучше и Насколько? | Про Всех 5★ Персонажей */
  FirstConstellationOrSignatureWeapon: new VideoSourceClass("Miron MinMax: С1 или Сигна? Что Лучше и Насколько? | Про Всех 5★ Персонажей").setVkUrl("https://vkvideo.ru/video-227044935_456239189").setYoutubeUrl("https://youtu.be/NfgsESKwsdk"),
} as const;
