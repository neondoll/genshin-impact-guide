import type { IWeapon } from "./types";
import { publicImageSrc } from "@/lib/utils";
import { StatKeys } from "../stats/enums";
import { WeaponKeys } from "./enums";
import { WeaponTypeKeys } from "../weapon-types/enums";

export class CWeapon implements IWeapon {
  readonly key: IWeapon["key"];
  readonly name: IWeapon["name"];
  readonly rarity: IWeapon["rarity"];
  readonly source: IWeapon["source"];
  readonly type_key: IWeapon["type_key"];
  readonly base_atk: IWeapon["base_atk"];
  readonly secondary_stats: IWeapon["secondary_stats"];
  readonly image_src: IWeapon["image_src"];

  static PATH = "weapons";

  constructor(
    key: keyof typeof WeaponKeys,
    name: IWeapon["name"],
    rarity: IWeapon["rarity"],
    source: IWeapon["source"],
    typeKey: keyof typeof WeaponTypeKeys,
    baseAtk: IWeapon["base_atk"],
    secondaryStatsKey: keyof typeof StatKeys,
    secondaryStats: Omit<IWeapon["secondary_stats"], "key">,
    imageName: string,
  ) {
    this.key = WeaponKeys[key];
    this.name = name;
    this.rarity = rarity;
    this.source = source;
    this.type_key = WeaponTypeKeys[typeKey];
    this.base_atk = baseAtk;
    this.secondary_stats = { key: StatKeys[secondaryStatsKey], ...secondaryStats };
    this.image_src = publicImageSrc(`${CWeapon.PATH}/${imageName}`);
  }
}
