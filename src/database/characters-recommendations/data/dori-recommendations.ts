import type { ICharacterRecommendations } from "../types";
import { CharacterKeys } from "../../characters/enums";
import { TalentKeys } from "../../talents/enums";
import { WeaponKeys } from "../../weapons/enums";

export default {
  character_key: CharacterKeys.Dori,
  talent_leveling: [
    { key: TalentKeys.NormalAttack, priority: "По необходимости\n(8)" },
    { key: TalentKeys.ElementalSkill, priority: "Во вторую очередь\n(6)" },
    { key: TalentKeys.ElementalBurst, priority: "В первую очередь\n(8)" },
  ],
  video_sources: [
    { title: "Miron MinMax: Лучшее Оружие для Каждого Персонажа", youtube_url: "https://youtu.be/cjatyGw0EO0" },
    {
      title: "Miron MinMax: ВСЁ про ВСЕ таланты ft.@AnimeCool_Genshin",
      vk_url: "https://vkvideo.ru/video-227044935_456239080",
    },
  ],
  weapons: [{ key: WeaponKeys.FavoniusGreatsword, refinement: 5, is_better: true }],
} as ICharacterRecommendations;
