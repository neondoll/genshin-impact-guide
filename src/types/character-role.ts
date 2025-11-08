import type { CHARACTER_ROLES } from "@/constants/character-roles";

export type CharacterRoleId = typeof CHARACTER_ROLES[keyof typeof CHARACTER_ROLES];

export interface CharacterRole {
  id: CharacterRoleId;
  name: string;
  description: string;
  sortOrder: number; // camelCase вместо snake_case
  imageSrc: string; // camelCase вместо snake_case
}

// Вспомогательные типы
export interface CharacterRoleWithIcon extends CharacterRole {
  icon: string;
}

export type CharacterRoleMap = Record<CharacterRoleId, CharacterRole>;
