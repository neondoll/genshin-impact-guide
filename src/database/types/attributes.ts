import type { AttributeUidEnum } from "../enums/attributes";

type Attribute = { name: string; abbreviation: string };

export type Attributes = Record<AttributeUid, Attribute>;
export type AttributeUid = typeof AttributeUidEnum[keyof typeof AttributeUidEnum];
