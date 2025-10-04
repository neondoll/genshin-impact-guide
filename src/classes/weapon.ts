import type { Weapon as Type } from "@/types/weapon";
import { publicImageSrc } from "@/lib/utils";

export class Weapon implements Type {
  readonly id: Type["id"];
  readonly image_src: Type["image_src"];
  readonly title: Type["title"];
  readonly rarity: Type["rarity"];
  readonly source: Type["source"];
  readonly type_id: Type["type_id"];
  readonly base_atk: Type["base_atk"];
  readonly secondary_stats_id: Type["secondary_stats_id"];
  readonly secondary_stats: Type["secondary_stats"];

  static PATH = "weapons";

  constructor(
    id: Type["id"],
    title: Type["title"],
    rarity: Type["rarity"],
    source: Type["source"],
    typeId: Type["type_id"],
    baseAtk: Type["base_atk"],
    secondaryStatsId: Type["secondary_stats_id"],
    secondaryStats: Type["secondary_stats"],
  ) {
    this.id = id;
    this.image_src = publicImageSrc(`${Weapon.PATH}/${id}.webp`);
    this.title = title;
    this.rarity = rarity;
    this.source = source;
    this.type_id = typeId;
    this.base_atk = baseAtk;
    this.secondary_stats_id = secondaryStatsId;
    this.secondary_stats = secondaryStats;
  }

  static init(params: ConstructorParameters<typeof Weapon>) {
    return new Weapon(...params);
  }
}
