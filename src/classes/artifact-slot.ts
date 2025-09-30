import type { ArtifactSlot as Type } from "@/types/artifact-slot";
import { publicImageSrc } from "@/lib/utils";

export class ArtifactSlot implements Type {
  readonly id: Type["id"];
  readonly name: Type["name"];
  readonly sort_by: Type["sort_by"];
  readonly img_src: Type["img_src"];

  static PATH = "artifact-slots";

  constructor(id: Type["id"], name: Type["name"], sortBy: Type["sort_by"]) {
    this.id = id;
    this.name = name;
    this.sort_by = sortBy;
    this.img_src = publicImageSrc(`${ArtifactSlot.PATH}/${id}.webp`);
  }
}
