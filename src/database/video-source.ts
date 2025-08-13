import type { VideoSource } from "./types/video-source";

export class _VideoSource implements VideoSource {
  private _vk_url: VideoSource["vk_url"];
  private _youtube_url: VideoSource["youtube_url"];
  readonly title: VideoSource["title"];

  constructor(title: VideoSource["title"]) {
    this.title = title;
  }

  get vk_url() {
    return this._vk_url;
  }

  get youtube_url() {
    return this._youtube_url;
  }

  setVkUrl(url: VideoSource["vk_url"]) {
    this._vk_url = url;

    return this;
  }

  setYoutubeUrl(url: VideoSource["youtube_url"]) {
    this._youtube_url = url;

    return this;
  }
}
