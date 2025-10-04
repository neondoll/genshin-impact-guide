import { VideoSourceIds } from "./video-source";
import videoSources from "@/data/video-sources";

export const ArtifactSetRecommendationsVideoSources = {
  /* Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin */
  AllAboutAll: videoSources[VideoSourceIds.AllAboutAllArtifacts],
} as const;
