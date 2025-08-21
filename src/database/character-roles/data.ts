import type { ICharacterRole } from "./types";
import { CCharacterRole } from "./classes";
import { CharacterRoleKeys } from "./enums";

export default {
  [CharacterRoleKeys.Dps]: CCharacterRole.init([
    CharacterRoleKeys.Dps,
    "Урон",
    "Такие персонажи обладают выдающейся способностью <span class='text-orange-500'>наносить урон</span> противнику за определённый отрезок времени. Рекомендуется предоставлять им достаточное время в бою.",
    3,
  ]),
  [CharacterRoleKeys.OffField]: CCharacterRole.init([
    CharacterRoleKeys.OffField,
    "Вне поля",
    "Такие персонажи оказывают значительную поддержку <span class='text-orange-500'>вне поля</span> боя. Правильно распределяйте время между ними и персонажами на поле, чтобы более эффективно проходить представления.",
    2,
  ]),
  [CharacterRoleKeys.OnField]: CCharacterRole.init([
    CharacterRoleKeys.OnField,
    "На поле",
    "Разумно распределяйте время, чтобы такие персонажи могли <span class='text-orange-500'>сражаться на поле боя</span> как можно больше, тем самым в полной мере используя их сильные стороны.",
    1,
  ]),
  [CharacterRoleKeys.Support]: CCharacterRole.init([
    CharacterRoleKeys.Support,
    "Поддержка",
    "Это персонажи с сильными <span class='text-orange-500'>способностями поддержки</span>, которые позволяют другим персонажам сражаться эффективнее. Добавляйте их в свои отряды, чтобы проходить сложные испытания.",
    4,
  ]),
  [CharacterRoleKeys.Survivability]: CCharacterRole.init([
    CharacterRoleKeys.Survivability,
    "Выживание",
    "Если вы столкнулись с сильными или многочисленными противниками, такие персонажи более эффективно <span class='text-orange-500'>справятся с их натиском</span> и позволят найти возможность переломить ход битвы.",
    5,
  ]),
} as Record<ICharacterRole["key"], ICharacterRole>;
