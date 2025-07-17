import { ArtifactSetUidEnum } from "../enums/artifact-set";
import { CharacterUidEnum } from "../enums/character";
import type { ArtifactSetRecommendations } from "../types/artifact-set-recommendations";

export default {
  artifact_set_uid: ArtifactSetUidEnum.EchoesOfAnOffering,
  characters: [{ uid: CharacterUidEnum.KamisatoAyato, is_better: true }, { uid: CharacterUidEnum.Yoimiya }],
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
