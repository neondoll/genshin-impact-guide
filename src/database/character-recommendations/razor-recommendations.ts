import { CharacterUidEnum } from "../enums/character.ts";
import { TalentUidEnum } from "../enums/talent.ts";
import type { CharacterRecommendations } from "../types/character-recommendations";

export default {
  character_uid: CharacterUidEnum.Razor,
  talent_leveling: [
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
} as CharacterRecommendations;
