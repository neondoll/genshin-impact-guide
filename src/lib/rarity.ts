import type { Rarity } from "@/types/rarity";

export function backgroundClassByRarity(...rarities: Rarity[]) {
  const rarity = Math.max(...rarities);

  // rarity === 1 -> "bg-[linear-gradient(180deg,#6a6d74,#868586)]"
  // rarity === 2 -> "bg-[linear-gradient(180deg,#4b6c67,#519072)]"
  // rarity === 3 -> "bg-[linear-gradient(180deg,#567496,#5392b8)]"
  // rarity === 4 -> "bg-[linear-gradient(180deg,#5e5789,#9c75b7)]"
  // rarity === 5 -> "bg-[linear-gradient(180deg,#945c2c,#b27330)]"

  switch (rarity) {
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
