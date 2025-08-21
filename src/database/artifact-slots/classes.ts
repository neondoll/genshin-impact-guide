import type { IArtifactSlot } from "./types";
import { publicImageSrc } from "@/lib/utils";

export class CArtifactSlot implements IArtifactSlot {
  readonly key: IArtifactSlot["key"];
  readonly name: IArtifactSlot["name"];
  readonly image_src: IArtifactSlot["image_src"];
  readonly sort_by: IArtifactSlot["sort_by"];

  static PATH = "artifact-slots";

  constructor(
    key: IArtifactSlot["key"],
    name: IArtifactSlot["name"],
    sortBy: IArtifactSlot["sort_by"],
  ) {
    this.key = key;
    this.name = name;
    this.image_src = publicImageSrc(`${CArtifactSlot.PATH}/${key}-64x64.png`);
    this.sort_by = sortBy;
  }

  static init(params: ConstructorParameters<typeof CArtifactSlot>) {
    return new CArtifactSlot(...params);
  }
}
