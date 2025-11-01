import { type CharacterRoleIds } from "@/enums/character-role";

export interface CharacterRole {
  id: CharacterRoleId;
  name: string;
  description: string;
  sort_by: number;
  img_src: string;
}

export type CharacterRoleId = typeof CharacterRoleIds[keyof typeof CharacterRoleIds];
