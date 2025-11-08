export const CHARACTER_ROLES = {
  DPS: "dps",
  OFF_FIELD: "off_field",
  ON_FIELD: "on_field",
  SUPPORT: "support",
  SURVIVABILITY: "survivability",
} as const;

export type CharacterRole = typeof CHARACTER_ROLES[keyof typeof CHARACTER_ROLES];

export const CHARACTER_ROLE_LABELS: Record<CharacterRole, string> = {
  [CHARACTER_ROLES.DPS]: "Урон",
  [CHARACTER_ROLES.OFF_FIELD]: "Вне поля",
  [CHARACTER_ROLES.ON_FIELD]: "На поле",
  [CHARACTER_ROLES.SUPPORT]: "Поддержка",
  [CHARACTER_ROLES.SURVIVABILITY]: "Выживание",
} as const;

export const CHARACTER_ROLE_DESCRIPTIONS: Record<CharacterRole, string> = {
  [CHARACTER_ROLES.DPS]: "Основной источник урона",
  [CHARACTER_ROLES.OFF_FIELD]: "Наносит урон или применяет эффекты вне активного поля боя",
  [CHARACTER_ROLES.ON_FIELD]: "Активно действует на поле боя",
  [CHARACTER_ROLES.SUPPORT]: "Усиливает союзников или ослабляет врагов",
  [CHARACTER_ROLES.SURVIVABILITY]: "Обеспечивает выживаемость команды",
} as const;

export const CHARACTER_ROLE_ICONS: Record<CharacterRole, string> = {
  [CHARACTER_ROLES.DPS]: "⚔️",
  [CHARACTER_ROLES.OFF_FIELD]: "🎯",
  [CHARACTER_ROLES.ON_FIELD]: "⚡",
  [CHARACTER_ROLES.SUPPORT]: "🛡️",
  [CHARACTER_ROLES.SURVIVABILITY]: "❤️",
} as const;

// Группировка ролей
export const COMBAT_ROLES = [
  CHARACTER_ROLES.DPS,
  CHARACTER_ROLES.ON_FIELD,
  CHARACTER_ROLES.OFF_FIELD,
] as const;

export const UTILITY_ROLES = [
  CHARACTER_ROLES.SUPPORT,
  CHARACTER_ROLES.SURVIVABILITY,
] as const;

// Валидация
export const isValidCharacterRole = (role: string): role is CharacterRole => {
  return Object.values(CHARACTER_ROLES).includes(role as CharacterRole);
};

export const getCharacterRoleLabel = (role: CharacterRole): string => {
  return CHARACTER_ROLE_LABELS[role];
};
