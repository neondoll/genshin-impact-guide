import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function publicImageSrc(src: string) {
  console.log("publicImageSrc", src);

  return `/genshin-impact-guide/images/${src}`;
}
