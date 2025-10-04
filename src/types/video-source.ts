import { VideoSourceIds } from "@/enums/video-source";

export interface VideoSource {
  id: VideoSourceId;
  title: string;
  date: Date;
  vk_url?: string;
  youtube_url?: string;
}

export type VideoSourceId = typeof VideoSourceIds[keyof typeof VideoSourceIds];
