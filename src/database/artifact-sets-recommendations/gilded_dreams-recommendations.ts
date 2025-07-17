import { ArtifactSetUidEnum } from "../enums/artifact-set";
import { CharacterUidEnum } from "../enums/character";
import type { ArtifactSetRecommendations } from "../types/artifact-set-recommendations";

export default {
  artifact_set_uid: ArtifactSetUidEnum.GildedDreams,
  characters: [
    { uid: CharacterUidEnum.Alhaitham, is_better: true },
    { uid: CharacterUidEnum.Cyno, is_better: true },
    { uid: CharacterUidEnum.Keqing },
    { uid: CharacterUidEnum.KukiShinobu },
    { uid: CharacterUidEnum.Nahida, is_better: true },
    { uid: CharacterUidEnum.RaidenShogun },
    { uid: CharacterUidEnum.Tighnari, is_better: true },
    { uid: CharacterUidEnum.YaeMiko, is_better: true },
  ],
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
