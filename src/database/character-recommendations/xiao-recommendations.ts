import { CharacterUidEnum } from "../enums/character.ts";
import { TalentUidEnum } from "../enums/talent.ts";
import type { CharacterRecommendations } from "../types/character-recommendations";

export default {
  character_uid: CharacterUidEnum.Xiao,
  talent_leveling: [
    { uid: TalentUidEnum.NormalAttack, priority: "Во вторую очередь\n(10)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "По необходимости\n(8)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "В первую очередь\n(10)" },
  ],
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ таланты ft.@AnimeCool_Genshin",
      vk_url: "https://vkvideo.ru/video-227044935_456239080",
    },
  ],
} as CharacterRecommendations;
