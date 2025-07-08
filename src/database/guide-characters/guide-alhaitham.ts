import { CharacterUidEnum } from "../enums/characters";
import { TalentUidEnum } from "../enums/talents";
import type { CharacterRecommendation } from "../types/character-recommendations";

export default {
  character_uid: CharacterUidEnum.Alhaitham,
  talent_leveling_recommendations: [
    { uid: TalentUidEnum.NormalAttack, priority: "Можно прокачать\n(6)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "Главный приоритет\n(10)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "Золотая середина\n(8)" },
  ],
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ таланты ft.@AnimeCool_Genshin",
      vk_url: "https://vkvideo.ru/video-227044935_456239080",
    },
  ],
} as CharacterRecommendation;
