import { publicImageSrc } from "@/lib/utils";

type CharacterRole = { name: string; description: string; icon_src: string };
type CharacterRoles = Record<CharacterRoleUid, CharacterRole>;

export type CharacterRoleUid = typeof CharacterRoleUidEnum[keyof typeof CharacterRoleUidEnum];

export const CharacterRoleUidEnum = {
  /* ДПС       */ DPS: "dps",
  /* Вне поля  */ OffField: "off_field",
  /* На поле   */ OnField: "on_field",
  /* Поддержка */ Support: "support",
  /* Живучесть */ Survivability: "survivability",
} as const;

const imageSrc: typeof publicImageSrc = src => publicImageSrc(`character-roles/${src}`);

const characterRoles = {
  [CharacterRoleUidEnum.OnField]: {
    name: "На поле",
    description: "Рекомендуется выделить этим персонажам как можно больше времени для сражений на поле боя, чтобы в полной мере использовать их сильные стороны.",
    icon_src: imageSrc("on_field-64x64.png"),
  },
  [CharacterRoleUidEnum.OffField]: {
    name: "Вне поля",
    description: "Эти персонажи могут оказать существенную помощь вне поля. Распределяйте свое время между ними и персонажами, работающими на поле, чтобы лучше справляться с поставленными задачами.",
    icon_src: imageSrc("off_field-64x64.png"),
  },
  [CharacterRoleUidEnum.DPS]: {
    name: "ДПС",
    description: "Этот тип персонажа наносит заметно больший урон противникам в течение любого заданного периода времени. Рекомендуется уделять им достаточно времени в бою.",
    icon_src: imageSrc("dps-64x64.png"),
  },
  [CharacterRoleUidEnum.Support]: {
    name: "Поддержка",
    description: "Эти персонажи обладают замечательными возможностями поддержки, что позволяет другим персонажам сражаться более эффективно. Распределите их по своим командам, чтобы они решали более сложные задачи.",
    icon_src: imageSrc("support-64x64.png"),
  },
  [CharacterRoleUidEnum.Survivability]: {
    name: "Живучесть",
    description: "Когда вы сталкиваетесь с более сильными или многочисленными противниками, эти персонажи более эффективно справляются с входящими атаками, в то время как вы находите способ переломить ситуацию.",
    icon_src: imageSrc("survivability-64x64.png"),
  },
} as CharacterRoles;

export function getCharacterRole(uid: CharacterRoleUid) {
  return characterRoles[uid];
}

export function getCharacterRoles() {
  return characterRoles;
}
