import { CharacterRoleKeys } from "./enums";

export interface ICharacterRole {
  key: TCharacterRoleKey;
  name: string;
  description: string;
  icon_src: string;
  sort_by: number;
}

export type TCharacterRoleKey = typeof CharacterRoleKeys[keyof typeof CharacterRoleKeys];
