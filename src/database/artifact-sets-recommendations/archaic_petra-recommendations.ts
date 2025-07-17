import { ArtifactSetUidEnum } from "../enums/artifact-set";
import { CharacterUidEnum } from "../enums/character";
import type { ArtifactSetRecommendations } from "../types/artifact-set-recommendations";

export default {
  artifact_set_uid: ArtifactSetUidEnum.ArchaicPetra,
  characters: [
    { uid: CharacterUidEnum.Albedo },
    { uid: CharacterUidEnum.Ningguang, is_better: true },
    { uid: CharacterUidEnum.Noelle, is_better: true },
    { uid: CharacterUidEnum.YunJin },
    { uid: CharacterUidEnum.Zhongli, is_better: true },
  ],
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
