import type { ComponentProps } from "react";
import { Link } from "react-router-dom";

import type { Rarity } from "@/features/rarities/types";
import { backgroundClassByRarity } from "@/lib/rarity";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type ImgProps = ComponentProps<"img">;

export default function AbstractBadge({ imgAlt, imgSrc, linkTo, rarities, title }: {
  imgAlt: ImgProps["alt"];
  imgSrc: ImgProps["src"];
  linkTo: ComponentProps<typeof Link>["to"];
  rarities?: Rarity[];
  title: string;
}) {
  return (
    <Badge asChild className="flex-col p-0 w-16.5" variant="secondary">
      <Link to={linkTo}>
        <span className="relative shrink-0 size-16">
          <img
            alt={imgAlt}
            className={cn(
              "size-full rounded-md rounded-br-2xl rounded-bl-none",
              rarities ? backgroundClassByRarity(...rarities) : "bg-linear-to-b from-[#323947] to-[#4a5366]",
            )}
            src={imgSrc}
          />
        </span>
        <span children={title} className="p-0.5 w-full text-center truncate" />
      </Link>
    </Badge>
  );
}
