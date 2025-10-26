import type { ElementalReaction as Type } from "@/types/elemental-reaction";
import { publicImageSrc } from "@/lib/utils.ts";

export class ElementalReaction implements Type {
  readonly id: Type["id"];
  readonly name: Type["name"];
  readonly first_element_id: Type["first_element_id"];
  readonly second_element_id: Type["second_element_id"];
  readonly image_src: Type["image_src"];

  static PATH = "elemental-reactions";

  constructor(
    id: Type["id"],
    name: Type["name"],
    firstElementId: Type["first_element_id"],
    secondElementId: Type["second_element_id"],
    hasImage: boolean = false,
  ) {
    this.id = id;
    this.name = name;
    this.first_element_id = firstElementId;
    this.second_element_id = secondElementId;
    this.image_src = hasImage ? publicImageSrc(`${ElementalReaction.PATH}/${id}.webp`) : undefined;
  }

  static init(params: ConstructorParameters<typeof ElementalReaction>) {
    return new ElementalReaction(...params);
  }
}
