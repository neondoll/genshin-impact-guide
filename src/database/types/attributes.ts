import type { AttributeUidEnum } from "../enums/attributes";

type Attribute = { uid?: AttributeUid; name: string; abbreviation: string; icon_src?: string };

export type Attributes = Record<AttributeUid, Attribute>;
export type AttributeUid = typeof AttributeUidEnum[keyof typeof AttributeUidEnum];
