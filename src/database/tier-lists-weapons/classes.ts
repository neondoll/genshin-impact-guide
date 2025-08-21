import type { ITierListWeapons, ITierListWeaponsListItem } from "./types";

export class CTierListWeapons implements ITierListWeapons {
  readonly key: ITierListWeapons["key"];
  readonly list: ITierListWeapons["list"];
  readonly video_source: ITierListWeapons["video_source"];

  constructor(
    key: ITierListWeapons["key"],
    list: ITierListWeapons["list"],
    video_source: ITierListWeapons["video_source"],
  ) {
    this.key = key;
    this.list = list;
    this.video_source = video_source;
  }

  static init(params: ConstructorParameters<typeof CTierListWeapons>) {
    return new CTierListWeapons(...params);
  }
}

export class CTierListWeaponsListItem implements ITierListWeaponsListItem {
  readonly tier: ITierListWeaponsListItem["tier"];
  readonly description: ITierListWeaponsListItem["description"];
  readonly weapon_keys: ITierListWeaponsListItem["weapon_keys"];

  constructor(
    tier: ITierListWeaponsListItem["tier"],
    description: ITierListWeaponsListItem["description"],
    weaponKeys: ITierListWeaponsListItem["weapon_keys"],
  ) {
    this.tier = tier;
    this.description = description;
    this.weapon_keys = weaponKeys;
  }

  static init(params: ConstructorParameters<typeof CTierListWeaponsListItem>) {
    return new CTierListWeaponsListItem(...params);
  }
}
