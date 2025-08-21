import type { IVideoSource } from "./types";

export class CVideoSource implements IVideoSource {
  private _vk_url: IVideoSource["vk_url"];
  private _youtube_url: IVideoSource["youtube_url"];
  readonly title: IVideoSource["title"];

  constructor(title: IVideoSource["title"]) {
    this.title = title;
  }

  get vk_url() {
    return this._vk_url;
  }

  get youtube_url() {
    return this._youtube_url;
  }

  setVkUrl(url: NonNullable<IVideoSource["vk_url"]>) {
    this._vk_url = url;

    return this;
  }

  setYoutubeUrl(url: NonNullable<IVideoSource["youtube_url"]>) {
    this._youtube_url = url;

    return this;
  }
}
