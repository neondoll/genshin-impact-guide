import type { CharacterRecommendations } from "@/features/characters-recommendations/types";
import { CharacterIds } from "../../characters/enums";
import { TalentKeys } from "@/database/talents/enums";
import { WeaponKeys } from "@/database/weapons/enums";

export default {
  character_key: CharacterIds.KamisatoAyaka,
  first_constellation_or_signature_weapon: "Сигна",
  talent_leveling: [
    { key: TalentKeys.NormalAttack, priority: "Во вторую очередь\n(10)" },
    { key: TalentKeys.ElementalSkill, priority: "По необходимости\n(8)" },
    { key: TalentKeys.ElementalBurst, priority: "В первую очередь\n(10)" },
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
    { key: WeaponKeys.MistsplitterReforged, refinement: 1, is_better: true },
    { key: WeaponKeys.FinaleOfTheDeep, refinement: 5 },
    { key: WeaponKeys.AmenomaKageuchi, refinement: 5 },
  ],
} as CharacterRecommendations;
