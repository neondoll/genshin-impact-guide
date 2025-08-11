import { CharacterRoleKeys } from "../enums/character-role";

export type CharacterRole = { key: CharacterRoleKey; name: string; description: string; icon_src: string };
export type CharacterRoleKey = typeof CharacterRoleKeys[keyof typeof CharacterRoleKeys];
