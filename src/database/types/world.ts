import { WorldKeys } from "../enums/world";

export type World = { name: string };
export type WorldKey = typeof WorldKeys[keyof typeof WorldKeys];
