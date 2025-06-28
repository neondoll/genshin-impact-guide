import { publicImageSrc } from "@/lib/utils.ts";

export type QualityUid = 1 | 2 | 3 | 4 | 5;

export function qualityImageSrc(qualityUid: QualityUid) {
  return publicImageSrc(`qualities/icon_${qualityUid}_stars.png`);
}
