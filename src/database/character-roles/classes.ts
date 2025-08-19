import type { ICharacterRole } from "./types";
import { CharacterRoleKeys } from "./enums";
import { publicImageSrc } from "@/lib/utils";

export class CCharacterRole implements ICharacterRole {
  readonly key: ICharacterRole["key"];
  readonly name: ICharacterRole["name"];
  readonly description: ICharacterRole["description"];
  readonly icon_src: ICharacterRole["icon_src"];

  static PATH = "character-roles";

  constructor(
    key: keyof typeof CharacterRoleKeys,
    name: ICharacterRole["name"],
    description: ICharacterRole["description"],
  ) {
    this.key = CharacterRoleKeys[key];
    this.name = name;
    this.description = description;
    this.icon_src = publicImageSrc(`${CCharacterRole.PATH}/${this.key}-64x64.png`);
  }
}
