import { CharacterRoleUidEnum } from "./enums/character-roles";
import { publicImageSrc } from "@/lib/utils";
import type { CharacterRoles } from "./types/character-roles";

const imageSrc: typeof publicImageSrc = src => publicImageSrc(`character-roles/${src}`);

export const characterRoles = {
  [CharacterRoleUidEnum.OnField]: {
    name: "На поле",
    description: "Разумно распределяйте время, чтобы такие персонажи могли <u>сражаться на поле боя</u> как можно больше, тем самым в полной мере используя их сильные стороны.",
    icon_src: imageSrc("on_field-64x64.png"),
  },
  [CharacterRoleUidEnum.OffField]: {
    name: "Вне поля",
    description: "Такие персонажи оказывают значительную поддержку <u>вне поля</u> боя. Правильно распределяйте время между ними и персонажами на поле, чтобы более эффективно проходить представления.",
    icon_src: imageSrc("off_field-64x64.png"),
  },
  [CharacterRoleUidEnum.DPS]: {
    name: "Урон",
    description: "Такие персонажи обладают выдающейся способностью <u>наносить урон</u> противнику за определённый отрезок времени. Рекомендуется предоставлять им достаточное время в бою.",
    icon_src: imageSrc("dps-64x64.png"),
  },
  [CharacterRoleUidEnum.Support]: {
    name: "Поддержка",
    description: "Это персонажи с сильными <u>способностями поддержки</u>, которые позволяют другим персонажам сражаться эффективнее. Добавляйте их в свои отряды, чтобы проходить сложные испытания.",
    icon_src: imageSrc("support-64x64.png"),
  },
  [CharacterRoleUidEnum.Survivability]: {
    name: "Выживание",
    description: "Если вы столкнулись с сильными или многочисленными противниками, такие персонажи более эффективно <u>справятся с их натиском</u> и позволят найти возможность переломить ход битвы.",
    icon_src: imageSrc("survivability-64x64.png"),
  },
} as CharacterRoles;
