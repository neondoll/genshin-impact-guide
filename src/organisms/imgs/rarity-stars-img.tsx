import type { ComponentProps } from "react";

import type { Rarity } from "@/features/rarities/types";
import { cn, publicImageSrc } from "@/lib/utils";

interface RarityStarsImgProps {
  className?: ComponentProps<"div">["className"];
  rarity: Rarity;
}

export default function RarityStarsImg({ className, rarity }: RarityStarsImgProps) {
  return (
    <div className={cn("flex gap-x-1", className)}>
      {Array.from({ length: rarity }, (_, i) => i).map(index => (
        <img alt="star" className="shrink-0 size-3.5" key={index + 1} src={publicImageSrc("levelStar.png")} />
      ))}
    </div>
  );
}
