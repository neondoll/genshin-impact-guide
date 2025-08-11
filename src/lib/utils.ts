import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function numberFormatPercent(value: number | bigint, minimumFractionDigits?: number) {
  return new Intl.NumberFormat(undefined, { style: "percent", minimumFractionDigits }).format(value);
}

export function publicImageSrc(src: string) {
  return publicSrc(`images/${src}`);
}

export function publicSrc(src: string) {
  return `/genshin-impact-gkeye/${src}`;
}
