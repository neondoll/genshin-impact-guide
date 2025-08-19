import type { ICharacterRole } from "./types";
import { CCharacterRole } from "./classes";
import { CharacterRoleKeys } from "./enums";

export default {
  [CharacterRoleKeys["👤"]]: new CCharacterRole("👤", "На поле", "Разумно распределяйте время, чтобы такие персонажи могли <span class='text-orange-500'>сражаться на поле боя</span> как можно больше, тем самым в полной мере используя их сильные стороны."),
  [CharacterRoleKeys["👥"]]: new CCharacterRole("👥", "Вне поля", "Такие персонажи оказывают значительную поддержку <span class='text-orange-500'>вне поля</span> боя. Правильно распределяйте время между ними и персонажами на поле, чтобы более эффективно проходить представления."),
  [CharacterRoleKeys["🗡️"]]: new CCharacterRole("🗡️", "Урон", "Такие персонажи обладают выдающейся способностью <span class='text-orange-500'>наносить урон</span> противнику за определённый отрезок времени. Рекомендуется предоставлять им достаточное время в бою."),
  [CharacterRoleKeys["🤝"]]: new CCharacterRole("🤝", "Поддержка", "Это персонажи с сильными <span class='text-orange-500'>способностями поддержки</span>, которые позволяют другим персонажам сражаться эффективнее. Добавляйте их в свои отряды, чтобы проходить сложные испытания."),
  [CharacterRoleKeys["🛡️"]]: new CCharacterRole("🛡️", "Выживание", "Если вы столкнулись с сильными или многочисленными противниками, такие персонажи более эффективно <span class='text-orange-500'>справятся с их натиском</span> и позволят найти возможность переломить ход битвы."),
} as Record<ICharacterRole["key"], ICharacterRole>;
