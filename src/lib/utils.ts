import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function publicImageSrc(src: string) {
  return publicSrc(`images/${src}`);
}

export function publicSrc(src: string) {
  return `/genshin-impact-guide/${src}`;
}
