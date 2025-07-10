import { CharacterUidEnum } from "../enums/character.ts";
import { TalentUidEnum } from "../enums/talent.ts";
import type { CharacterRecommendations } from "../types/character-recommendations";

export default {
  character_uid: CharacterUidEnum.Ganyu,
  talent_leveling: {
    Мелт: [
      { uid: TalentUidEnum.NormalAttack, priority: "В первую очередь\n(10)" },
      { uid: TalentUidEnum.ElementalSkill, priority: "Во вторую очередь\n(8)" },
      { uid: TalentUidEnum.ElementalBurst, priority: "Не качаем\n(1)" },
    ],
    Фриз: [
      { uid: TalentUidEnum.NormalAttack, priority: "В первую очередь\n(10)" },
      { uid: TalentUidEnum.ElementalSkill, priority: "Во вторую очередь\n(8)" },
      { uid: TalentUidEnum.ElementalBurst, priority: "По необходимости\n(6)" },
    ],
    Саппорт: [
      { uid: TalentUidEnum.NormalAttack, priority: "Не качаем\n(1)" },
      { uid: TalentUidEnum.ElementalSkill, priority: "Во вторую очередь\n(6)" },
      { uid: TalentUidEnum.ElementalBurst, priority: "В первую очередь\n(8)" },
    ],
  },
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ таланты ft.@AnimeCool_Genshin",
      vk_url: "https://vkvideo.ru/video-227044935_456239080",
    },
  ],
} as CharacterRecommendations;
