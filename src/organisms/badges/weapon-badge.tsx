import type { Weapon } from "@/features/weapons/types";
import AbstractBadge from "./abstract-badge";
import Paths from "@/constants/paths";

export default function WeaponBadge({ weaponId, weaponImgSrc, weaponRarity, weaponTitle }: {
  weaponId: Weapon["id"];
  weaponImgSrc: Weapon["image_src"];
  weaponRarity?: Weapon["rarity"];
  weaponTitle: Weapon["title"];
}) {
  return (
    <AbstractBadge
      imgAlt={weaponId}
      imgSrc={weaponImgSrc}
      linkTo={Paths.Weapon.to(weaponId)}
      rarity={weaponRarity}
      title={weaponTitle}
    />
  );
}
