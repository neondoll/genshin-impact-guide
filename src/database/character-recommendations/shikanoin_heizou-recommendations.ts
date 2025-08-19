import { CharacterKeys } from "../characters/enums";
import { TalentKeys } from "../enums/talent";
import { WeaponKeys } from "../enums/weapon";
import type { CharacterRecommendations } from "../types/character-recommendations";

export default {
  character_key: CharacterKeys.ShikanoinHeizou,
  talent_leveling: [
    { key: TalentKeys.NormalAttack, priority: "По необходимости\n(6)" },
    { key: TalentKeys.ElementalSkill, priority: "В первую очередь\n(8)" },
    { key: TalentKeys.ElementalBurst, priority: "Во вторую очередь\n(8)" },
  ],
  video_sources: [
    { title: "Miron MinMax: Лучшее Оружие для Каждого Персонажа", youtube_url: "https://youtu.be/cjatyGw0EO0" },
    {
      title: "Miron MinMax: ВСЁ про ВСЕ таланты ft.@AnimeCool_Genshin",
      vk_url: "https://vkvideo.ru/video-227044935_456239080",
    },
  ],
  weapons: [
    { key: WeaponKeys.ThrillingTalesOfDragonSlayers, refinement: 5, is_better: true },
    { key: WeaponKeys.HakushinRing, refinement: 5, is_better: true },
    { key: WeaponKeys.FavoniusCodex, refinement: 5, is_better: true },
    { key: WeaponKeys.PrototypeAmber, refinement: 5, is_better: true },
  ],
} as CharacterRecommendations;
