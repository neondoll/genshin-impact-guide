import { CharacterUidEnum } from "../enums/characters";
import { TalentUidEnum } from "../enums/talents";
import type { GuideCharacter } from "../types/guide-characters";

export default {
  character_uid: CharacterUidEnum.Sucrose,
  talent_leveling_recommendations: [
    { uid: TalentUidEnum.NormalAttack, priority: "Не качаем\n(1)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "Можно прокачать\n(6)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "Можно прокачать\n(6)" },
  ],
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ таланты ft.@AnimeCool_Genshin",
      vk_url: "https://vkvideo.ru/video-227044935_456239080",
    },
  ],
} as GuideCharacter;
