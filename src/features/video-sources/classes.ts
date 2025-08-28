import type { VideoSource } from "./types";

export class VideoSourceClass implements VideoSource {
  readonly title: VideoSource["title"];
  private _vk_url: VideoSource["vk_url"];
  private _youtube_url: VideoSource["youtube_url"];

  constructor(title: VideoSource["title"]) {
    this.title = title;
  }

  get vk_url() {
    return this._vk_url;
  }

  get youtube_url() {
    return this._youtube_url;
  }

  setVkUrl(url: NonNullable<VideoSource["vk_url"]>) {
    this._vk_url = url;

    return this;
  }

  setYoutubeUrl(url: NonNullable<VideoSource["youtube_url"]>) {
    this._youtube_url = url;

    return this;
  }
}
