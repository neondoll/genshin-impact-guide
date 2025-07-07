import { CharacterUidEnum } from "../enums/characters";
import { TalentUidEnum } from "../enums/talents";
import type { GuideCharacter } from "../types/guide-characters";

export default {
  character_uid: CharacterUidEnum.Candace,
  talent_leveling_recommendations: [
    { uid: TalentUidEnum.NormalAttack, priority: "Не качаем\n(1)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "Не качаем\n(1)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "Не качаем\n(1)" },
  ],
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ таланты ft.@AnimeCool_Genshin",
      vk_url: "https://vkvideo.ru/video-227044935_456239080",
    },
  ],
} as GuideCharacter;
