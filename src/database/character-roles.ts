import { CharacterRoleKeys } from "./enums/character-role";
import { publicImageSrc } from "@/lib/utils";
import type { CharacterRole } from "./types/character-role";

class _CharacterRole implements CharacterRole {
  readonly key: CharacterRole["key"];
  readonly name: CharacterRole["name"];
  readonly description: CharacterRole["description"];
  readonly icon_src: CharacterRole["icon_src"];

  static PATH = "character-roles";

  constructor(
    key: keyof typeof CharacterRoleKeys,
    name: CharacterRole["name"],
    description: CharacterRole["description"],
  ) {
    this.key = CharacterRoleKeys[key];
    this.name = name;
    this.description = description;
    this.icon_src = publicImageSrc(`${_CharacterRole.PATH}/${this.key}-64x64.png`);
  }
}

export default {
  [CharacterRoleKeys["👤"]]: new _CharacterRole("👤", "На поле", "Разумно распределяйте время, чтобы такие персонажи могли <span class='text-orange-500'>сражаться на поле боя</span> как можно больше, тем самым в полной мере используя их сильные стороны."),
  [CharacterRoleKeys["👥"]]: new _CharacterRole("👥", "Вне поля", "Такие персонажи оказывают значительную поддержку <span class='text-orange-500'>вне поля</span> боя. Правильно распределяйте время между ними и персонажами на поле, чтобы более эффективно проходить представления."),
  [CharacterRoleKeys["🗡️"]]: new _CharacterRole("🗡️", "Урон", "Такие персонажи обладают выдающейся способностью <span class='text-orange-500'>наносить урон</span> противнику за определённый отрезок времени. Рекомендуется предоставлять им достаточное время в бою."),
  [CharacterRoleKeys["🤝"]]: new _CharacterRole("🤝", "Поддержка", "Это персонажи с сильными <span class='text-orange-500'>способностями поддержки</span>, которые позволяют другим персонажам сражаться эффективнее. Добавляйте их в свои отряды, чтобы проходить сложные испытания."),
  [CharacterRoleKeys["🛡️"]]: new _CharacterRole("🛡️", "Выживание", "Если вы столкнулись с сильными или многочисленными противниками, такие персонажи более эффективно <span class='text-orange-500'>справятся с их натиском</span> и позволят найти возможность переломить ход битвы."),
} as Record<CharacterRole["key"], CharacterRole>;
