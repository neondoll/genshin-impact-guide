import type { IWeapon } from "./types";
import { publicImageSrc } from "@/lib/utils";

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
    key: IWeapon["key"],
    name: IWeapon["name"],
    rarity: IWeapon["rarity"],
    source: IWeapon["source"],
    typeKey: IWeapon["type_key"],
    baseAtk: IWeapon["base_atk"],
    secondaryStatsKey: IWeapon["secondary_stats"]["key"],
    secondaryStats: Omit<IWeapon["secondary_stats"], "key">,
    imageName: string,
  ) {
    this.key = key;
    this.name = name;
    this.rarity = rarity;
    this.source = source;
    this.type_key = typeKey;
    this.base_atk = baseAtk;
    this.secondary_stats = { key: secondaryStatsKey, ...secondaryStats };
    this.image_src = publicImageSrc(`${CWeapon.PATH}/${imageName}`);
  }

  static init(params: ConstructorParameters<typeof CWeapon>) {
    return new CWeapon(...params);
  }
}
