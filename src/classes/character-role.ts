import type { CharacterRole as Type } from "@/types/character-role";
import { publicImageSrc } from "@/lib/utils";

export class CharacterRole implements Type {
  readonly id: Type["id"];
  readonly name: Type["name"];
  readonly description: Type["description"];
  readonly sortOrder: Type["sortOrder"];
  readonly imageSrc: Type["imageSrc"];

  static PATH = "character-roles";

  constructor(id: Type["id"], name: Type["name"], description: Type["description"], sortOrder: Type["sortOrder"]) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.sortOrder = sortOrder;
    this.imageSrc = publicImageSrc(`${CharacterRole.PATH}/${id}.webp`);
  }

  static init(params: ConstructorParameters<typeof CharacterRole>) {
    return new CharacterRole(...params);
  }
}
