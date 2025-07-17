import { ArtifactSetUidEnum } from "../enums/artifact-set";
import { CharacterUidEnum } from "../enums/character";
import type { ArtifactSetRecommendations } from "../types/artifact-set-recommendations";

export default {
  artifact_set_uid: ArtifactSetUidEnum.OceanHuedClam,
  characters: [
    { uid: CharacterUidEnum.Baizhu },
    { uid: CharacterUidEnum.Barbara, is_better: true },
    { uid: CharacterUidEnum.Jean },
    { uid: CharacterUidEnum.SangonomiyaKokomi, is_better: true },
  ],
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
