import type { CharacterRoleUidEnum } from "../enums/character-roles";

type CharacterRole = { name: string; description: string; icon_src: string };

export type CharacterRoles = Record<CharacterRoleUid, CharacterRole>;
export type CharacterRoleUid = typeof CharacterRoleUidEnum[keyof typeof CharacterRoleUidEnum];
