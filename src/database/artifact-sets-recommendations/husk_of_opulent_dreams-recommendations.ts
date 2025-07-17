import { ArtifactSetUidEnum } from "../enums/artifact-set";
import { CharacterUidEnum } from "../enums/character";
import type { ArtifactSetRecommendations } from "../types/artifact-set-recommendations";

export default {
  artifact_set_uid: ArtifactSetUidEnum.HuskOfOpulentDreams,
  characters: [
    { uid: CharacterUidEnum.Albedo },
    { uid: CharacterUidEnum.AratakiItto, is_better: true },
    { uid: CharacterUidEnum.Noelle, is_better: true },
    { uid: CharacterUidEnum.YunJin },
  ],
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
