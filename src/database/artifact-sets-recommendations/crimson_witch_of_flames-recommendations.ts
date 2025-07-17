import { ArtifactSetUidEnum } from "../enums/artifact-set";
import { CharacterUidEnum } from "../enums/character";
import type { ArtifactSetRecommendations } from "../types/artifact-set-recommendations";

export default {
  artifact_set_uid: ArtifactSetUidEnum.CrimsonWitchOfFlames,
  characters: [
    { uid: CharacterUidEnum.Diluc, is_better: true },
    { uid: CharacterUidEnum.HuTao, is_better: true },
    { uid: CharacterUidEnum.Klee, is_better: true },
    { uid: CharacterUidEnum.Yanfei },
    { uid: CharacterUidEnum.Yoimiya },
  ],
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
