import type { CharacterRole as Type } from "@/types/character-role";
import { publicImageSrc } from "@/lib/utils";

export class CharacterRole implements Type {
  readonly id: Type["id"];
  readonly name: Type["name"];
  readonly description: Type["description"];
  readonly sort_by: Type["sort_by"];
  readonly img_src: Type["img_src"];

  static PATH = "character-roles";

  constructor(id: Type["id"], name: Type["name"], description: Type["description"], sortBy: Type["sort_by"]) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.sort_by = sortBy;
    this.img_src = publicImageSrc(`${CharacterRole.PATH}/${id}.webp`);
  }

  static init(params: ConstructorParameters<typeof CharacterRole>) {
    return new CharacterRole(...params);
  }
}
