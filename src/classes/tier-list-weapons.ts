import type { TierListWeapons as Type, TierListWeaponsListItem as TypeListItem } from "@/types/tier-list-weapons";

export class TierListWeapons implements Type {
  readonly title: Type["title"];
  readonly list: Type["list"];
  readonly video_source: Type["video_source"];

  constructor(title: Type["title"], list: Type["list"], video_source: Type["video_source"]) {
    this.title = title;
    this.list = list;
    this.video_source = video_source;
  }

  static init(params: ConstructorParameters<typeof TierListWeapons>) {
    return new TierListWeapons(...params);
  }
}

export class TierListWeaponsListItem implements TypeListItem {
  readonly tier: TypeListItem["tier"];
  readonly description: TypeListItem["description"];
  readonly weapon_ids: TypeListItem["weapon_ids"];

  constructor(
    tier: TypeListItem["tier"],
    description: TypeListItem["description"],
    weaponIds: TypeListItem["weapon_ids"],
  ) {
    this.tier = tier;
    this.description = description;
    this.weapon_ids = weaponIds;
  }

  static init(params: ConstructorParameters<typeof TierListWeaponsListItem>) {
    return new TierListWeaponsListItem(...params);
  }
}
