import type { ArtifactSlot as Type } from "@/types/artifact";
import { publicImageSrc } from "@/lib/utils";

export class ArtifactSlot implements Type {
  readonly id: Type["id"];
  readonly name: Type["name"];
  readonly sortOrder: Type["sortOrder"];
  readonly imageSrc: Type["imageSrc"];

  static PATH = "artifact-slots";

  constructor(id: Type["id"], name: Type["name"], sortOrder: Type["sortOrder"]) {
    this.id = id;
    this.name = name;
    this.sortOrder = sortOrder;
    this.imageSrc = publicImageSrc(`${ArtifactSlot.PATH}/${id}.webp`);
  }
}
