import { VideoSourceIds } from "./video-source";
import videoSources from "@/data/video-sources";

export const CharacterRecommendationsVideoSources = {
  /* Miron MinMax: ВСЁ про ВСЕ таланты ft.@AnimeCool_Genshin */
  AllAboutAllTalents: videoSources[VideoSourceIds.AllAboutAllTalents],
  /* Miron MinMax: Лучшее Оружие для Каждого Персонажа */
  BestWeaponsForEveryCharacter: videoSources[VideoSourceIds.BestWeaponsForEveryCharacter],
  /* Miron MinMax: С1 или Сигна? Что Лучше и Насколько? | Про Всех 5★ Персонажей */
  FirstConstellationOrSignatureWeapon: videoSources[VideoSourceIds.FirstConstellationOrSignatureWeapon],
} as const;
