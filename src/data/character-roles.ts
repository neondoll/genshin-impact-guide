import type { CharacterRole as Type } from "@/types/character-role";
import { CharacterRole as Class } from "@/classes/character-role";
import { CHARACTER_ROLES } from "@/constants/character-roles";

export default {
  [CHARACTER_ROLES.DPS]: Class.init([
    CHARACTER_ROLES.DPS,
    "Урон",
    "Такие персонажи обладают выдающейся способностью <span class='text-primary'>наносить урон</span> противнику за "
    + "определённый отрезок времени. Рекомендуется предоставлять им достаточное время в бою.",
    3,
  ]),
  [CHARACTER_ROLES.OFF_FIELD]: Class.init([
    CHARACTER_ROLES.OFF_FIELD,
    "Вне поля",
    "Такие персонажи оказывают значительную поддержку <span class='text-primary'>вне поля</span> боя. Правильно "
    + "распределяйте время между ними и персонажами на поле, чтобы более эффективно проходить представления.",
    2,
  ]),
  [CHARACTER_ROLES.ON_FIELD]: Class.init([
    CHARACTER_ROLES.ON_FIELD,
    "На поле",
    "Разумно распределяйте время, чтобы такие персонажи могли <span class='text-primary'>сражаться на поле боя</span> "
    + "как можно больше, тем самым в полной мере используя их сильные стороны.",
    1,
  ]),
  [CHARACTER_ROLES.SUPPORT]: Class.init([
    CHARACTER_ROLES.SUPPORT,
    "Поддержка",
    "Это персонажи с сильными <span class='text-primary'>способностями поддержки</span>, которые позволяют другим "
    + "персонажам сражаться эффективнее. Добавляйте их в свои отряды, чтобы проходить сложные испытания.",
    4,
  ]),
  [CHARACTER_ROLES.SURVIVABILITY]: Class.init([
    CHARACTER_ROLES.SURVIVABILITY,
    "Выживание",
    "Если вы столкнулись с сильными или многочисленными противниками, такие персонажи более эффективно "
    + "<span class='text-primary'>справятся с их натиском</span> и позволят найти возможность переломить ход битвы.",
    5,
  ]),
} as Record<Type["id"], Type>;
