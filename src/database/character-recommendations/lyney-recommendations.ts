import { CharacterUidEnum } from "../enums/character";
import { TalentUidEnum } from "../enums/talent";
import { WeaponUidEnum } from "../enums/weapon";
import type { CharacterRecommendations } from "../types/character-recommendations";

export default {
  character_uid: CharacterUidEnum.Lyney,
  talent_leveling: [
    { uid: TalentUidEnum.NormalAttack, priority: "В первую очередь\n(10)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "Во вторую очередь\n(10)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "По необходимости\n(10)" },
  ],
  video_sources: [
    { title: "Miron MinMax: Лучшее Оружие для Каждого Персонажа", youtube_url: "https://youtu.be/cjatyGw0EO0" },
    {
      title: "Miron MinMax: ВСЁ про ВСЕ таланты ft.@AnimeCool_Genshin",
      vk_url: "https://vkvideo.ru/video-227044935_456239080",
    },
  ],
  weapons: [{ uid: WeaponUidEnum.TheFirstGreatMagic, refinement: 1, is_better: true }],
} as CharacterRecommendations;
