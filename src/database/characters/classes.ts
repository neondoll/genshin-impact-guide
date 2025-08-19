import type { ICharacter, TCharacterArkhe } from "./types";
import type { ICharacterRole } from "../character-roles/types";
import { CharacterKeys } from "./enums";
import { CharacterRoleKeys } from "../character-roles/enums";
import { ElementKeys } from "../enums/element";
import { getCharacterRecommendations, getElement, getWeaponType } from "..";
import { getCharacterRole } from "../character-roles";
import { publicImageSrc } from "@/lib/utils";
import { WeaponKeys } from "../enums/weapon";
import { WeaponTypeKeys } from "../enums/weapon-type";

const Arkhe = {
  "🟡": "Пневма",
  "🟣": "Усия",
  "🟣🟡": ["Усия", "Пневма"],
} as Record<string, TCharacterArkhe | TCharacterArkhe[]>;
const RoleKeys = {
  "👤👥🗡️🤝": ["👤", "👥", "🗡️", "🤝"],
  "👤🗡️": ["👤", "🗡️"],
  "👤🗡️🤝": ["👤", "🗡️", "🤝"],
  "👤🗡️🛡️": ["👤", "🗡️", "🛡️"],
  "👥🗡️": ["👥", "🗡️"],
  "👥🗡️🤝": ["👥", "🗡️", "🤝"],
  "👥🗡️🤝🛡️": ["👥", "🗡️", "🤝", "🛡️"],
  "👥🗡️🛡️": ["👥", "🗡️", "🛡️"],
  "👥🤝": ["👥", "🤝"],
  "👥🤝🛡️": ["👥", "🤝", "🛡️"],
  "👥🛡️": ["👥", "🛡️"],
} as const;

export class CCharacter implements ICharacter {
  readonly key: ICharacter["key"];
  readonly name: ICharacter["name"];
  readonly rarity: ICharacter["rarity"];
  readonly weapon_type_key: ICharacter["weapon_type_key"];
  readonly element_key: ICharacter["element_key"];
  private _arkhe: ICharacter["arkhe"];
  private _role_keys: ICharacter["role_keys"];
  readonly image_src: ICharacter["image_src"];
  private _signature_weapon_key: ICharacter["signature_weapon_key"];

  static PATH = "characters";

  constructor(
    key: keyof typeof CharacterKeys,
    name: ICharacter["name"],
    rarity: ICharacter["rarity"],
    weaponTypeKey: keyof typeof WeaponTypeKeys,
    elementKey: keyof typeof ElementKeys,
    imageName: string,
  ) {
    this.key = CharacterKeys[key];
    this.name = name;
    this.rarity = rarity;
    this.weapon_type_key = WeaponTypeKeys[weaponTypeKey];
    this.element_key = ElementKeys[elementKey];
    this.image_src = publicImageSrc(`${CCharacter.PATH}/${imageName}`);
  }

  get arkhe() {
    return this._arkhe;
  }

  get role_keys() {
    return this._role_keys;
  }

  get signature_weapon_key() {
    return this._signature_weapon_key;
  }

  getElement() {
    return getElement(this.element_key);
  }

  getRecommendations() {
    return getCharacterRecommendations(this.key);
  }

  async getRoles() {
    if (this._role_keys) {
      const roles: ICharacterRole[] = [];

      for (const key of this._role_keys) {
        roles.push(await getCharacterRole(key));
      }

      return roles;
    }

    return undefined;
  }

  getWeaponType() {
    return getWeaponType(this.weapon_type_key);
  }

  setArkhe(val: keyof typeof Arkhe) {
    this._arkhe = Arkhe[val];

    return this;
  }

  setRoleKeys(val: keyof typeof RoleKeys) {
    this._role_keys = RoleKeys[val].map(roleKey => CharacterRoleKeys[roleKey]);

    return this;
  }

  setSignatureWeaponKey(val: keyof typeof WeaponKeys) {
    this._signature_weapon_key = WeaponKeys[val];

    return this;
  }
}
