// Импортируйте только используемые иконки для Genshin Impact
export {
  ChevronDown, Heart, Home, Menu, Search, Settings, Shield, Star, Sword, X, User, Zap,
  // Добавьте иконки которые реально используете
} from "lucide-react";

// Ленивая загрузка для редких иконок
export const lazyIcons = {
  Skull: () => import("lucide-react").then((mod) => mod.Skull),
  Gem: () => import("lucide-react").then((mod) => mod.Gem),
  Flame: () => import("lucide-react").then((mod) => mod.Flame),
  Snowflake: () => import("lucide-react").then((mod) => mod.Snowflake),
  Droplets: () => import("lucide-react").then((mod) => mod.Droplets),
  Mountain: () => import("lucide-react").then((mod) => mod.Mountain),
  // Добавьте другие иконки по необходимости
} as const;

export type LazyIconName = keyof typeof lazyIcons;
