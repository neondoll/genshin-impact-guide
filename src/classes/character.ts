import type { Character as Type } from "@/types/character";

export class Character implements Type {
  readonly id: Type["id"];
  readonly image_src: Type["image_src"];
  readonly title: Type["title"];
  readonly rarity: Type["rarity"];
  readonly weapon_type_id: Type["weapon_type_id"];
  readonly element_id: Type["element_id"];
  protected _name: Type["name"];
  protected _arkhe: Type["arkhe"];
  readonly role_ids: Type["role_ids"];
  protected _signature_weapon_id: Type["signature_weapon_id"];

  static PATH = "characters";

  constructor(
    id: Type["id"],
    title: Type["title"],
    rarity: Type["rarity"],
    weaponTypeId: Type["weapon_type_id"],
    elementId: Type["element_id"],
    roleIds: Type["role_ids"],
    imageSrc: Type["image_src"],
  ) {
    this.id = id;
    this.title = title;
    this.rarity = rarity;
    this.weapon_type_id = weaponTypeId;
    this.element_id = elementId;
    this._name = title;
    this.role_ids = roleIds;
    this.image_src = imageSrc;
  }

  get arkhe() {
    return this._arkhe;
  }

  get name() {
    return this._name;
  }

  get signature_weapon_id() {
    return this._signature_weapon_id;
  }

  setArkhe(val: keyof typeof CharacterArkhe) {
    this._arkhe = CharacterArkhe[val];

    return this;
  }

  setName(val: NonNullable<Type["name"]>) {
    this._name = val;

    return this;
  }

  setSignatureWeaponId(val: NonNullable<Type["signature_weapon_id"]>) {
    this._signature_weapon_id = val;

    return this;
  }

  static init(params: ConstructorParameters<typeof Character>) {
    return new Character(...params);
  }
}

export const CharacterArkhe = {
  "🟡": "Пневма",
  "🟣": "Усия",
  "🟣🟡": ["Усия", "Пневма"],
} as Record<string, NonNullable<Type["arkhe"]>>;
