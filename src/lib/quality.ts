import type { QualityUid } from "@/database/types/quality";

export function backgroundClassByQuality(...qualities: QualityUid[]) {
  const quality = Math.max(...qualities);

  // quality === 3 -> "bg-[linear-gradient(180deg,#567496,#5392b8)]"
  // quality === 4 -> "bg-[linear-gradient(180deg,#5e5789,#9c75b7)]"
  // quality === 5 -> "bg-[linear-gradient(180deg,#945c2c,#b27330)]"

  switch (quality) {
    case 5:
      return "bg-linear-to-b from-[#945c2c] to-[#b27330]";
    case 4:
      return "bg-linear-to-b from-[#5e5789] to-[#9c75b7]";
    case 3:
      return "bg-linear-to-b from-[#567496] to-[#5392b8]";
    default:
      return undefined;
  }
}
