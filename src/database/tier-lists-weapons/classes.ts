import type { ITierListWeapons, ITierListWeaponsListItem } from "./types";
import { WeaponKeys } from "../weapons/enums";

export class CTierListWeapons implements ITierListWeapons {
  readonly list: ITierListWeapons["list"];
  readonly video_source: ITierListWeapons["video_source"];

  constructor(list: ITierListWeapons["list"], video_source: ITierListWeapons["video_source"]) {
    this.list = list;
    this.video_source = video_source;
  }
}

export class CTierListWeaponsListItem implements ITierListWeaponsListItem {
  readonly tier: ITierListWeaponsListItem["tier"];
  readonly description: ITierListWeaponsListItem["description"];
  readonly weapon_keys: ITierListWeaponsListItem["weapon_keys"];

  constructor(
    tier: ITierListWeaponsListItem["tier"],
    description: ITierListWeaponsListItem["description"],
    weaponKeys: (keyof typeof WeaponKeys)[],
  ) {
    this.tier = tier;
    this.description = description;
    this.weapon_keys = weaponKeys.map(weaponKey => WeaponKeys[weaponKey]);
  }
}
