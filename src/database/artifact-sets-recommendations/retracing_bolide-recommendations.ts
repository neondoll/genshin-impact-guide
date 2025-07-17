import { ArtifactSetUidEnum } from "../enums/artifact-set";
import { CharacterUidEnum } from "../enums/character";
import type { ArtifactSetRecommendations } from "../types/artifact-set-recommendations";

export default {
  artifact_set_uid: ArtifactSetUidEnum.RetracingBolide,
  characters: [
    { uid: CharacterUidEnum.Ganyu, is_better: true },
    { uid: CharacterUidEnum.HuTao, is_better: true },
    { uid: CharacterUidEnum.Noelle },
    { uid: CharacterUidEnum.Wanderer, is_better: true },
    { uid: CharacterUidEnum.Yoimiya, is_better: true },
  ],
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
