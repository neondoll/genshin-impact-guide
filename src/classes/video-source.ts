import type { VideoSource as Type } from "@/types/video-source";

export class VideoSource implements Type {
  readonly id: Type["id"];
  readonly title: Type["title"];
  readonly date: Type["date"];
  private _vk_url: Type["vk_url"];
  private _youtube_url: Type["youtube_url"];

  constructor(id: Type["id"], title: Type["title"], date: Type["date"]) {
    this.id = id;
    this.title = title;
    this.date = date;
  }

  get vk_url() {
    return this._vk_url;
  }

  get youtube_url() {
    return this._youtube_url;
  }

  setVkUrl(url: NonNullable<Type["vk_url"]>) {
    this._vk_url = url;

    return this;
  }

  setYoutubeUrl(url: NonNullable<Type["youtube_url"]>) {
    this._youtube_url = url;

    return this;
  }

  static init(params: ConstructorParameters<typeof VideoSource>) {
    return new VideoSource(...params);
  }
}
