import { ArtifactSetUidEnum } from "../enums/artifact-set";
import { CharacterUidEnum } from "../enums/character";
import type { ArtifactSetRecommendations } from "../types/artifact-set-recommendations";

export default {
  artifact_set_uid: ArtifactSetUidEnum.ThunderingFury,
  characters: [
    { uid: CharacterUidEnum.Cyno, is_better: true },
    { uid: CharacterUidEnum.Fischl },
    { uid: CharacterUidEnum.Keqing, is_better: true },
    { uid: CharacterUidEnum.YaeMiko },
  ],
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
