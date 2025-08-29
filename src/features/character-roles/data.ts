import type { CharacterRole } from "./types";
import { CharacterRoleIds } from "./enums";
import { publicImageSrc } from "@/lib/utils";

export class CharacterRoleClass implements CharacterRole {
  readonly id: CharacterRole["id"];
  readonly name: CharacterRole["name"];
  readonly description: CharacterRole["description"];
  readonly icon_src: CharacterRole["icon_src"];
  readonly sort_by: CharacterRole["sort_by"];

  static PATH = "character-roles";

  constructor(
    id: CharacterRole["id"],
    name: CharacterRole["name"],
    description: CharacterRole["description"],
    sortBy: CharacterRole["sort_by"],
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.icon_src = publicImageSrc(`${CharacterRoleClass.PATH}/${id}-64x64.png`);
    this.sort_by = sortBy;
  }

  static init(params: ConstructorParameters<typeof CharacterRoleClass>) {
    return new CharacterRoleClass(...params);
  }
}

export default {
  [CharacterRoleIds.Dps]: CharacterRoleClass.init([
    CharacterRoleIds.Dps,
    "Урон",
    "Такие персонажи обладают выдающейся способностью <span class='text-orange-500'>наносить урон</span> противнику за определённый отрезок времени. Рекомендуется предоставлять им достаточное время в бою.",
    3,
  ]),
  [CharacterRoleIds.OffField]: CharacterRoleClass.init([
    CharacterRoleIds.OffField,
    "Вне поля",
    "Такие персонажи оказывают значительную поддержку <span class='text-orange-500'>вне поля</span> боя. Правильно распределяйте время между ними и персонажами на поле, чтобы более эффективно проходить представления.",
    2,
  ]),
  [CharacterRoleIds.OnField]: CharacterRoleClass.init([
    CharacterRoleIds.OnField,
    "На поле",
    "Разумно распределяйте время, чтобы такие персонажи могли <span class='text-orange-500'>сражаться на поле боя</span> как можно больше, тем самым в полной мере используя их сильные стороны.",
    1,
  ]),
  [CharacterRoleIds.Support]: CharacterRoleClass.init([
    CharacterRoleIds.Support,
    "Поддержка",
    "Это персонажи с сильными <span class='text-orange-500'>способностями поддержки</span>, которые позволяют другим персонажам сражаться эффективнее. Добавляйте их в свои отряды, чтобы проходить сложные испытания.",
    4,
  ]),
  [CharacterRoleIds.Survivability]: CharacterRoleClass.init([
    CharacterRoleIds.Survivability,
    "Выживание",
    "Если вы столкнулись с сильными или многочисленными противниками, такие персонажи более эффективно <span class='text-orange-500'>справятся с их натиском</span> и позволят найти возможность переломить ход битвы.",
    5,
  ]),
} as Record<CharacterRole["id"], CharacterRole>;
