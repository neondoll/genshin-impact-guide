import type { IArtifactSlot } from "./types";
import { ArtifactSlotKeys } from "./enums";
import { publicImageSrc } from "@/lib/utils";

export class CArtifactSlot implements IArtifactSlot {
  readonly key: IArtifactSlot["key"];
  readonly name: IArtifactSlot["name"];
  readonly image_src: IArtifactSlot["image_src"];
  readonly sort_by: IArtifactSlot["sort_by"];

  static PATH = "artifact-slots";

  constructor(
    key: keyof typeof ArtifactSlotKeys,
    name: IArtifactSlot["name"],
    sortBy: IArtifactSlot["sort_by"],
  ) {
    this.key = ArtifactSlotKeys[key];
    this.name = name;
    this.image_src = publicImageSrc(`${CArtifactSlot.PATH}/${this.key}-64x64.png`);
    this.sort_by = sortBy;
  }

  static init(params: ConstructorParameters<typeof CArtifactSlot>) {
    return new CArtifactSlot(...params);
  }
}
