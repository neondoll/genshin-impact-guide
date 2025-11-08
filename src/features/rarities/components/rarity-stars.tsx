import { cn } from "@/lib/utils";

import type { Rarity } from "../types";
import { useRarity } from "../hooks";

const sizeClasses = { sm: "size-3", md: "size-3.5", lg: "size-4" };

interface RarityStarsProps {
  className?: string;
  rarity: Rarity;
  starClassName?: string;
  size?: keyof typeof sizeClasses;
}

export function RarityStars({ className, rarity, starClassName, size = "md" }: RarityStarsProps) {
  const isValid = useRarity(rarity);

  if (!isValid) {
    return null;
  }

  return (
    <div className={cn("flex gap-x-1", className)}>
      {Array.from({ length: rarity }, (_, i) => (
        <div className={cn("shrink-0 text-yellow-400", sizeClasses[size], starClassName)} key={i}>⭐</div>
      ))}
    </div>
  );
}

// Альтернативная версия с изображениями (если нужно)
interface RarityStarsImgProps extends RarityStarsProps {
  starSrc?: string;
}

export function RarityStarsImg({
  className,
  rarity,
  starClassName,
  starSrc = "/images/levelStar.png",
  size = "md",
}: RarityStarsImgProps) {
  const isValid = useRarity(rarity);

  if (!isValid) {
    return null;
  }

  return (
    <div className={cn("flex gap-x-1", className)}>
      {Array.from({ length: rarity }, (_, i) => (
        <img alt="star" className={cn("shrink-0", sizeClasses[size], starClassName)} key={i} src={starSrc} />
      ))}
    </div>
  );
}
