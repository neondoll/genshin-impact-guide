import type { QualityUid } from "@/database/types/quality";

export function backgroundClassByQuality(...qualities: QualityUid[]) {
  const quality = Math.max(...qualities);

  // quality === 1 -> "bg-[linear-gradient(180deg,#6a6d74,#868586)]"
  // quality === 2 -> "bg-[linear-gradient(180deg,#4b6c67,#519072)]"
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
    case 2:
      return "bg-linear-to-b from-[#4b6c67] to-[#519072]";
    case 1:
      return "bg-linear-to-b from-[#6a6d74] to-[#868586]";
    default:
      return undefined;
  }
}
