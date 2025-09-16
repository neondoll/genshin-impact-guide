import type { WeaponTypeId } from "@/features/weapon-types/types";
import { Badge } from "@/components/ui/badge";
import { selectWeaponTypeById } from "@/features/weapon-types/selectors";

export default function WeaponTypeBadge({ weaponTypeId }: { weaponTypeId: WeaponTypeId }) {
  const weaponType = selectWeaponTypeById(weaponTypeId);

  return (
    <Badge variant="secondary">
      <img alt={weaponTypeId} className="shrink-0 size-5" src={weaponType.icon_src} />
      <span children={weaponType.abbr} />
    </Badge>
  );
}
