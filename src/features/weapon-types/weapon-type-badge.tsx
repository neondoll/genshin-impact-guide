import type { WeaponType } from "./types";

export default function WeaponTypeBadge({ item }: { item: WeaponType }) {
  return (
    <div className="flex gap-1 items-center">
      <img alt={item.id} className="shrink-0 size-5" src={item.icon_src} />
      <span children={item.abbr} />
    </div>
  );
}
