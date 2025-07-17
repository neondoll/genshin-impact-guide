import type { QualityUid } from "@/database/types/quality";

export function backgroundClassByQuality(...qualities: QualityUid[]) {
  const quality = Math.max(...qualities);

  // quality === 3 -> "bg-[linear-gradient(180deg,#567496,#5392b8)]"
  // quality === 4 -> "bg-[linear-gradient(180deg,#5e5789,#9c75b7)]"
  // quality === 5 -> "bg-[linear-gradient(180deg,#945c2c,#b27330)]"

  return quality === 5
    ? "bg-[linear-gradient(180deg,#945c2c,#b27330)]"
    : (quality === 4
        ? "bg-[linear-gradient(180deg,#5e5789,#9c75b7)]"
        : (quality === 3
            ? "bg-[linear-gradient(180deg,#567496,#5392b8)]"
            : undefined));
}
