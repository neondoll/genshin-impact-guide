import { CharacterRoleUidEnum } from "../enums/character-role";

export type CharacterRole = { name: string; description: string; icon_src: string };
export type CharacterRoleUid = typeof CharacterRoleUidEnum[keyof typeof CharacterRoleUidEnum];
