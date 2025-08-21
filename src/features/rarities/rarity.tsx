import type { ComponentProps } from "react";

import type { TRarity } from "@/database/rarities/types";
import { cn, publicImageSrc } from "@/lib/utils";

export default function Rarity({ className, length }: {
  className?: ComponentProps<"div">["className"];
  length: TRarity;
}) {
  return (
    <div className={cn("flex gap-x-1", className)}>
      {Array.from({ length }, (_, i) => i).map(index => (
        <img alt="star" className="shrink-0 size-3.5" key={index + 1} src={publicImageSrc("star-icon-28x28.png")} />
      ))}
    </div>
  );
}
