import type { ICharacter } from "./types";
import { publicImageSrc } from "@/lib/utils";

const Arkhe = {
  "🟡": "Пневма",
  "🟣": "Усия",
  "🟣🟡": ["Усия", "Пневма"],
} as Record<string, NonNullable<ICharacter["arkhe"]>>;

export class CCharacter implements ICharacter {
  readonly key: ICharacter["key"];
  readonly name: ICharacter["name"];
  readonly rarity: ICharacter["rarity"];
  readonly weapon_type_key: ICharacter["weapon_type_key"];
  readonly element_key: ICharacter["element_key"];
  private _arkhe: ICharacter["arkhe"];
  readonly role_keys: ICharacter["role_keys"];
  readonly image_src: ICharacter["image_src"];
  private _signature_weapon_key: ICharacter["signature_weapon_key"];

  static PATH = "characters";

  constructor(
    key: ICharacter["key"],
    name: ICharacter["name"],
    rarity: ICharacter["rarity"],
    weaponTypeKey: ICharacter["weapon_type_key"],
    elementKey: ICharacter["element_key"],
    roleKeys: ICharacter["role_keys"],
    imageName: string,
  ) {
    this.key = key;
    this.name = name;
    this.rarity = rarity;
    this.weapon_type_key = weaponTypeKey;
    this.element_key = elementKey;
    this.role_keys = roleKeys;
    this.image_src = publicImageSrc(`${CCharacter.PATH}/${imageName}`);
  }

  get arkhe() {
    return this._arkhe;
  }

  get signature_weapon_key() {
    return this._signature_weapon_key;
  }

  setArkhe(val: keyof typeof Arkhe) {
    this._arkhe = Arkhe[val];

    return this;
  }

  setSignatureWeaponKey(val: NonNullable<ICharacter["signature_weapon_key"]>) {
    this._signature_weapon_key = val;

    return this;
  }

  static init(params: ConstructorParameters<typeof CCharacter>) {
    return new CCharacter(...params);
  }
}
