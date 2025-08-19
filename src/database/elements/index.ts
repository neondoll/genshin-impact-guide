import type { TElementKey } from "./types";

export async function getElement(key: TElementKey) {
  return (await import("./data")).default[key];
}

export async function getElements() {
  return Object.values((await import("./data")).default);
}
