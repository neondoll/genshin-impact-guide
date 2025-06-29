import type { WorldUidEnum } from "../enums/worlds";

type World = { name: string };

export type Worlds = Record<WorldUid, World>;
export type WorldUid = typeof WorldUidEnum[keyof typeof WorldUidEnum];
