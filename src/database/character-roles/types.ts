import { CharacterRoleKeys } from "./enums";

export interface ICharacterRole {
  key: TCharacterRoleKey;
  name: string;
  description: string;
  icon_src: string;
}

export type TCharacterRoleKey = typeof CharacterRoleKeys[keyof typeof CharacterRoleKeys];
