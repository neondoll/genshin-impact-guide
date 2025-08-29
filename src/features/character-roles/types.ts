import { CharacterRoleIds } from "./enums";

export interface CharacterRole {
  id: CharacterRoleId;
  name: string;
  description: string;
  icon_src: string;
  sort_by: number;
}

export type CharacterRoleId = typeof CharacterRoleIds[keyof typeof CharacterRoleIds];
