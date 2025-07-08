import { CharacterUidEnum } from "../enums/characters";
import { TalentUidEnum } from "../enums/talents";
import type { CharacterRecommendation } from "../types/character-recommendations";

export default {
  character_uid: CharacterUidEnum.Tartaglia,
  talent_leveling: [
    { uid: TalentUidEnum.NormalAttack, priority: "Не качаем\n(1)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "Главный приоритет\n(10)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "Главный приоритет\n(10)" },
  ],
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ таланты ft.@AnimeCool_Genshin",
      vk_url: "https://vkvideo.ru/video-227044935_456239080",
    },
  ],
} as CharacterRecommendation;
