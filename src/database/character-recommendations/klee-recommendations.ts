import { CharacterKeys } from "../enums/character";
import { TalentKeys } from "../enums/talent";
import { WeaponKeys } from "../enums/weapon";
import type { CharacterRecommendations } from "../types/character-recommendations";

export default {
  character_key: CharacterKeys.Klee,
  first_constellation_or_signature_weapon: "С1",
  talent_leveling: [
    { key: TalentKeys.NormalAttack, priority: "В первую очередь\n(10)" },
    { key: TalentKeys.ElementalSkill, priority: "По необходимости\n(10)" },
    { key: TalentKeys.ElementalBurst, priority: "Во вторую очередь\n(10)" },
  ],
  video_sources: [
    {
      title: "Miron MinMax: С1 или Сигна? Что Лучше и Насколько? | Про Всех 5★ Персонажей",
      youtube_url: "https://youtu.be/NfgsESKwsdk",
    },
    { title: "Miron MinMax: Лучшее Оружие для Каждого Персонажа", youtube_url: "https://youtu.be/cjatyGw0EO0" },
    {
      title: "Miron MinMax: ВСЁ про ВСЕ таланты ft.@AnimeCool_Genshin",
      vk_url: "https://vkvideo.ru/video-227044935_456239080",
    },
  ],
  weapons: [
    { key: WeaponKeys.LostPrayerToTheSacredWinds, refinement: 1, is_better: true },
    { key: WeaponKeys.ThrillingTalesOfDragonSlayers, refinement: 5, is_better: true },
    { key: WeaponKeys.TheWidsith, refinement: 5 },
  ],
} as CharacterRecommendations;
