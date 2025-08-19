import type { IElement } from "./types";
import { CElement } from "./classes";
import { ElementKeys } from "./enums";

export default {
  [ElementKeys["🌪️"]]: new CElement("🌪️", "Анемо", "Mondstadt", ["⚡️", "💧", "🔥", "❄️"]),
  [ElementKeys["❄️"]]: new CElement("❄️", "Крио", "Snezhnaya", ["🌪️", "🏔️", "⚡️", "💧", "🔥"]),
  [ElementKeys["🌿"]]: new CElement("🌿", "Дендро", "Sumeru", ["⚡️", "💧", "🔥"]),
  [ElementKeys["⚡️"]]: new CElement("⚡️", "Электро", "Inazuma", ["🌪️", "🏔️", "🌿", "💧", "🔥", "❄️"]),
  [ElementKeys["🏔️"]]: new CElement("🏔️", "Гео", "Liyue", ["⚡️", "💧", "🔥", "❄️"]),
  [ElementKeys["💧"]]: new CElement("💧", "Гидро", "Fontaine", ["🌪️", "🏔️", "⚡️", "🌿", "🔥", "❄️"]),
  [ElementKeys["🔥"]]: new CElement("🔥", "Пиро", "Natlan", ["🌪️", "🏔️", "⚡️", "🌿", "💧", "❄️"]),
} as Record<IElement["key"], IElement>;
