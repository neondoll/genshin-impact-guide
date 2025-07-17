import { ArtifactSetUidEnum } from "../enums/artifact-set";
import { CharacterUidEnum } from "../enums/character";
import type { ArtifactSetRecommendations } from "../types/artifact-set-recommendations";

export default {
  artifact_set_uid: ArtifactSetUidEnum.WanderersTroupe,
  characters: [
    { uid: CharacterUidEnum.Amber },
    { uid: CharacterUidEnum.Ganyu, is_better: true },
    { uid: CharacterUidEnum.Klee, is_better: true },
    { uid: CharacterUidEnum.Tighnari, is_better: true },
    { uid: CharacterUidEnum.Yanfei, is_better: true },
  ],
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
