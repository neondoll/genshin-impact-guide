import type { ICharacterRole } from "./types";
import { publicImageSrc } from "@/lib/utils";

export class CCharacterRole implements ICharacterRole {
  readonly key: ICharacterRole["key"];
  readonly name: ICharacterRole["name"];
  readonly description: ICharacterRole["description"];
  readonly icon_src: ICharacterRole["icon_src"];
  readonly sort_by: ICharacterRole["sort_by"];

  static PATH = "character-roles";

  constructor(
    key: ICharacterRole["key"],
    name: ICharacterRole["name"],
    description: ICharacterRole["description"],
    sortBy: ICharacterRole["sort_by"],
  ) {
    this.key = key;
    this.name = name;
    this.description = description;
    this.icon_src = publicImageSrc(`${CCharacterRole.PATH}/${key}-64x64.png`);
    this.sort_by = sortBy;
  }

  static init(params: ConstructorParameters<typeof CCharacterRole>) {
    return new CCharacterRole(...params);
  }
}
