import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Базовые утилиты
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

// Форматирование чисел
export function formatPercent(value: number, options: Intl.NumberFormatOptions & { locale?: string } = {}): string {
  const { locale = "ru-RU", ...formatOptions } = options;

  return new Intl.NumberFormat(locale, {
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
    style: "percent",
    ...formatOptions,
  }).format(value);
}

export function formatNumber(value: number, options: Intl.NumberFormatOptions & { locale?: string } = {}): string {
  const { locale = "ru-RU", ...formatOptions } = options;

  return new Intl.NumberFormat(locale, {
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
    ...formatOptions,
  }).format(value);
}

// Работа с путями
export function publicImageSrc(src: string): string {
  return publicSrc(`images/${src}`);
}

export function publicSrc(path: string): string {
  const normalizedPath = path.replace(/^\//, ""); // Убираем ведущий слеш

  return `/genshin-impact-guide/${normalizedPath}`;
}

// Валидация и guards
export function isDefined<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}

export function isEmpty(value: string | any[] | null | undefined): boolean {
  if (!isDefined(value)) return true;

  return value.length === 0;
}

// Утилиты для работы с объектами
export function safeParseInt(value: string, fallback = 0): number {
  const parsed = parseInt(value, 10);

  return isNaN(parsed) ? fallback : parsed;
}

export function safeParseFloat(value: string, fallback = 0): number {
  const parsed = parseFloat(value);

  return isNaN(parsed) ? fallback : parsed;
}
