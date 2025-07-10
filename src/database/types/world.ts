import { WorldUidEnum } from "../enums/world";

export type World = { name: string };
export type WorldUid = typeof WorldUidEnum[keyof typeof WorldUidEnum];
