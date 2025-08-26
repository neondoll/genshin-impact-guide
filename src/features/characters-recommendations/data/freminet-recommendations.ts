import type { CharacterRecommendations } from "@/features/characters-recommendations/types";
import { CharacterIds } from "../../characters/enums";
import { TalentKeys } from "@/database/talents/enums";
import { WeaponKeys } from "@/database/weapons/enums";

export default {
  character_key: CharacterIds.Freminet,
  talent_leveling: [
    { key: TalentKeys.NormalAttack, priority: "Во вторую очередь\n(8)" },
    { key: TalentKeys.ElementalSkill, priority: "В первую очередь\n(8)" },
    { key: TalentKeys.ElementalBurst, priority: "По необходимости\n(8)" },
  ],
  video_sources: [
    { title: "Miron MinMax: Лучшее Оружие для Каждого Персонажа", youtube_url: "https://youtu.be/cjatyGw0EO0" },
    {
      title: "Miron MinMax: ВСЁ про ВСЕ таланты ft.@AnimeCool_Genshin",
      vk_url: "https://vkvideo.ru/video-227044935_456239080",
    },
  ],
  weapons: [{ key: WeaponKeys.SongOfBrokenPines, refinement: 1, is_better: true }],
} as CharacterRecommendations;
